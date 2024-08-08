---
page_id: project_3
layout: page
title: Photography
description: Photography is the story I fail to put into words.
img: assets/img/photo1.png
importance: 1
category: fun
related_publications: false
---
---
<br><br><br>

<!-- Include Swiper's CSS -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

<div class="swiper-container" style="width: 100%; max-width: 900px; margin: 0 auto; position: relative;">
    <!-- Left Arrow -->
    <div class="swiper-button-prev" style="position: absolute; top: 50%; transform: translateY(-50%); left: 0; z-index: 10;"></div>

    <div class="swiper-wrapper" style="display: flex; align-items: center;">
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo1.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 300px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo2.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo3.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo4.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo5.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo6.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo7.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo8.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo9.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            {% include figure.liquid loading="eager" path="assets/img/photo10.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
        </div>
        <!-- Repeat slides as needed -->
        
    </div>

    <!-- Right Arrow -->
    <div class="swiper-button-next" style="position: absolute; top: 50%; transform: translateY(-50%); right: 0; z-index: 10;"></div>

    <!-- Pagination -->
    <div class="swiper-pagination" style="position: relative; margin-top: 10px;"></div>
</div>

<!-- Include Swiper's JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<script>
var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,                 // Show 3 slides at once
    centeredSlides: true,             // Center the active slide
    spaceBetween: 30,                 // Increased space between slides to accommodate zoom
    autoplay: {
        delay: 2000,                  // Autoplay delay
        disableOnInteraction: false,  // Keep autoplay active after user interaction
    },
    speed: 600,                       // Slow down the transition speed for smoother effect
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true,        // Zoom the clicked slide
    on: {
        slideChangeTransitionEnd: function () {
            // Reset all slides
            swiper.slides.forEach(slide => {
                slide.style.zIndex = '1';
                slide.querySelector('img').style.transform = 'scale(1)';
            });
            // Zoom the active slide
            const activeSlide = swiper.slides[swiper.activeIndex];
            activeSlide.style.zIndex = '2';
            activeSlide.querySelector('img').style.transform = 'scale(2)';
        }
    }
});
</script>
<br><br><br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo6.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo7.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo8.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/photo9.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>



