(function () {
  "use strict";

  const navigationSelector = "a[href]";
  const navigationInProgress = "site-navigation-in-progress";

  function isNavigableLink(link, event) {
    if (!link || event.defaultPrevented || event.button !== 0) return false;
    if (link.classList.contains("language-link")) return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    if (link.target && link.target !== "_self") return false;
    if (link.hasAttribute("download")) return false;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    if (url.pathname === window.location.pathname && url.search === window.location.search) return false;
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    if (/\.(pdf|zip|png|jpe?g|gif|svg|mp4|webm|ico)$/i.test(url.pathname)) return false;

    return true;
  }

  function updatePageState(nextDocument, url) {
    document.title = nextDocument.title;

    const nextPageClasses = Array.from(nextDocument.body.classList).filter((name) => name.startsWith("page-"));
    Array.from(document.body.classList)
      .filter((name) => name.startsWith("page-"))
      .forEach((name) => document.body.classList.remove(name));
    nextPageClasses.forEach((name) => document.body.classList.add(name));

    document.querySelectorAll("#navbar .nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll("#navbar a[href]").forEach((link) => {
      const linkUrl = new URL(link.href, window.location.href);
      if (linkUrl.pathname === url.pathname) {
        link.closest(".nav-item")?.classList.add("active");
      }
    });
  }

  function runPageScripts(main) {
    main.querySelectorAll("script:not([src]):not([type='module'])").forEach((script) => {
      const executable = document.createElement("script");
      executable.textContent = script.textContent;
      document.body.appendChild(executable);
      executable.remove();
    });
  }

  async function loadPage(url, pushHistory) {
    const currentShell = document.querySelector(".profile-page-shell");
    if (!currentShell) return false;

    document.documentElement.classList.add(navigationInProgress);

    try {
      const response = await fetch(url.href, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });
      if (!response.ok) throw new Error(`Navigation failed: ${response.status}`);

      const html = await response.text();
      const nextDocument = new DOMParser().parseFromString(html, "text/html");
      const nextShell = nextDocument.querySelector(".profile-page-shell");
      const nextMain = nextShell?.querySelector(":scope > .profile-page-main");
      const currentMain = currentShell.querySelector(":scope > .profile-page-main");
      const nextNavbar = nextDocument.querySelector("#navbar");
      const currentNavbar = document.querySelector("#navbar");

      // Pages without the shared shell use the normal browser navigation.
      if (!nextMain || !currentMain) return false;

      currentMain.replaceWith(nextMain);
      if (nextNavbar && currentNavbar) currentNavbar.replaceWith(nextNavbar);
      runPageScripts(nextMain);
      updatePageState(nextDocument, url);
      if (pushHistory) window.history.pushState({}, "", url.href);
      window.scrollTo(0, 0);

      document.dispatchEvent(new CustomEvent("site:navigation", { detail: { document: nextDocument, url } }));

      const searchInput = document.getElementById("bibsearch");
      if (searchInput) {
        import("/assets/js/bibsearch.js")
          .then(({ initBibSearch }) => initBibSearch())
          .catch(() => {});
      }
      return true;
    } catch (error) {
      console.warn("Local navigation failed; using normal navigation.", error);
      return false;
    } finally {
      document.documentElement.classList.remove(navigationInProgress);
    }
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest(navigationSelector);
    if (!isNavigableLink(link, event)) return;

    const url = new URL(link.href, window.location.href);
    event.preventDefault();
    loadPage(url, true).then((handled) => {
      if (!handled) window.location.href = url.href;
    });
  });

  window.addEventListener("popstate", function () {
    loadPage(new URL(window.location.href), false).then((handled) => {
      if (!handled) window.location.reload();
    });
  });
})();
