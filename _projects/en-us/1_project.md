---
page_id: project_1
layout: page
title: Sports
description: A rolling stone gathers no moss.
img: assets/img/sport1.png
importance: 1
category: fun
related_publications: false
---
---
<br><br><br>



<!-- Include Swiper's CSS -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">

<div class="swiper-container" style="width: 100%; max-width: 900px; margin: 0 auto; position: relative;">
    <!-- 左箭头 -->
    <div class="swiper-button-prev" style="position: absolute; top: 50%; transform: translateY(-50%); left: 0; z-index: 10;"></div>

    <div class="swiper-wrapper" style="display: flex; align-items: center;">
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport1.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 300px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Cycling</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport2.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Basketball</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport3.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Work out</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport4.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">My first Road bike!</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport5.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Squat - Leg day!</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport6.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Riding 100km!!!</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport7.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Bro Basketball at Xiamen University</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport8.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Badminton</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport10.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Shoot!</figcaption>
            </figure>
        </div>
        <div class="swiper-slide" style="text-align: center; padding: 0 10px;">
            <figure>
                {% include figure.liquid loading="eager" path="assets/img/sport11.png" title="example image" class="img-fluid rounded z-depth-1" style="max-width: 500px; width: 100%; height: auto; margin: 0 auto;" %}
                <figcaption style="text-align: center; margin-top: 10px;">Viktor Axelsen Jersey Set</figcaption>
            </figure>
        </div>
    </div>

    <!-- 右箭头 -->
    <div class="swiper-button-next" style="position: absolute; top: 50%; transform: translateY(-50%); right: 0; z-index: 10;"></div>

    <!-- 分页 -->
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
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport1.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Cycling</figcaption>
        </figure>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport2.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Basketball</figcaption>
        </figure>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport3.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Work out</figcaption>
        </figure>
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport4.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">My first Road bike!</figcaption>
        </figure>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport5.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Squat - Leg day!</figcaption>
        </figure>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport6.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Riding 100km!!!</figcaption>
        </figure>
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport7.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Bro Basketball at Xiamen University</figcaption>
        </figure>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport8.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Badminton</figcaption>
        </figure>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <figure>
            {% include figure.liquid loading="eager" path="assets/img/sport10.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Shoot!</figcaption>
        </figure>
    </div>
</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        <figure>
            {% include figure.liquid path="assets/img/sport11.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Viktor Axelsen Jersey Set</figcaption>
        </figure>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <figure>
            {% include figure.liquid path="assets/img/sport9_34.png" title="example image" class="img-fluid rounded z-depth-1" %}
            <figcaption style="text-align: center;">Skiing</figcaption>
        </figure>
    </div>
</div>



