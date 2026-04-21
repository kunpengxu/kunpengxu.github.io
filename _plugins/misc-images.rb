# frozen_string_literal: true

module Jekyll
  class MiscImagesGenerator < Generator
    safe true
    priority :low

    IMAGE_EXTS = %w[.png .jpg .jpeg .gif .webp].freeze

    def generate(site)
      source = site.source
      categories = %w[sports photography food]
      widths = Array(site.config.dig("imagemagick", "widths")).map(&:to_i)

      data = {}
      categories.each do |category|
        dir = File.join(source, "assets", "img", "misc", category)
        data[category] = scan_category(dir, widths).map do |entry|
          {
            "path" => "/assets/img/misc/#{category}/#{entry[:filename]}",
            "caption" => entry[:caption],
            "basename" => entry[:basename],
          }
        end
      end

      site.data["misc_images"] ||= {}
      site.data["misc_images"].merge!(data)
    end

    private

    def scan_category(dir, widths)
      return [] unless Dir.exist?(dir)

      files = Dir.children(dir).select do |name|
        IMAGE_EXTS.include?(File.extname(name).downcase)
      end

      # Group by logical key:
      # - originals: "Badminton.png" => key "Badminton"
      # - derivatives: "Badminton-480.webp" => key "Badminton"
      grouped = Hash.new { |hash, key| hash[key] = [] }
      files.each do |name|
        basename = File.basename(name, File.extname(name))
        key = logical_key(basename, widths)
        grouped[key] << name
      end

      picked = grouped.map do |key, group|
        chosen = pick_best(group, widths)
        {
          filename: chosen,
          basename: key,
          caption: prettify_caption(key),
        }
      end

      picked.sort_by { |e| e[:caption].downcase }
    end

    def logical_key(basename, widths)
      # If basename ends with "-<width>" and width is one of imagemagick widths, strip it.
      if (m = basename.match(/^(.*)-(\d+)$/))
        width = m[2].to_i
        return m[1] if widths.include?(width)
      end
      basename
    end

    def pick_best(group, widths)
      # Prefer non-derivative originals.
      originals = group.reject { |n| derivative?(n, widths) }
      return originals.sort.first unless originals.empty?

      # Otherwise choose the largest derivative available (prefer configured widths).
      derivatives = group.select { |n| derivative?(n, widths) }
      return group.sort.first if derivatives.empty?

      best = derivatives.max_by do |name|
        m = File.basename(name, File.extname(name)).match(/-(\d+)$/)
        m ? m[1].to_i : 0
      end
      best
    end

    def derivative?(filename, widths)
      return false unless File.extname(filename).downcase == ".webp"

      base = File.basename(filename, ".webp")
      m = base.match(/-(\d+)$/)
      return false unless m

      widths.include?(m[1].to_i)
    end

    def prettify_caption(key)
      key.tr("_-", " ").gsub(/\s+/, " ").strip
    end
  end
end
