<template>
    <div>
          <div class="banner__area p-relative z-index-3 banner__space blue-bg pb-130 pt-60">
              <div class="banner__text">
              <h2 class="banner__big-text">فاشون</h2>
              </div>
              <div class="banner__shape-1">
              <img src="/assets/img/banner/hero-light-1.png" alt="">
              </div>
              <div class="banner__shape-2">
              <img src="/assets/img/banner/hero-light-2.png" alt="">
              </div>
              <div class="banner__shape-3">
              <img src="/assets/img/banner/shape-1.png" alt="">
              </div>
              <div class="banner__shape-4">
              <img src="/assets/img/banner/Spiral.png" alt="">
              </div>
              <div class="container">
              <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="banner__section text-center">
              <h4 class="banner-section-title"><span>.</span>معلومات </h4>
              </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="banner__main-img text-center">
              <img src="/assets/img/about.png" alt="">
              </div>
              </div>
              </div>
              </div>
              </div>
  
          <div class="blog__area grey-bg pt-100 pb-60">
              <div class="container">
                  <div class="row">
                      <div class="col-xl-12 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                          <div class="blog__title text-center pb-15">
                              <h4 class="section-title">Check Latest Blog</h4>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-xl-6 col-lg-6 col-md-6 mb-50 wow tpfadeUp" data-wow-duration=".9s"
                          data-wow-delay=".5s">
                          <div class="blog__item">
                              <div class="blog__item-img fix">
                                  <a href="blog.html"><img src="/assets/img/blog/blog-1.png" alt=""></a>
                              </div>
                              <div class="blog__item-content">
                                  <div class="blog__category pb-35 d-flex justify-content-between">
                                      <h4 class="blog__meta">DEVELOPMENT</h4>
                                      <h4 class="blog__date">FEB 3, 2023</h4>
                                  </div>
                                  <div class="blog__content">
                                      <h4 class="blog__title-sm"><a href="blog.html">OVERRIDE THE DIGITAL DIVIDE WITH
                                              ADD<br>
                                              RELATIONSHIP BUILD</a></h4>
                                      <p>Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot
                                          squiffy loo, blimey</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 mb-50 wow tpfadeUp" data-wow-duration=".9s"
                          data-wow-delay=".7s">
                          <div class="blog__item">
                              <div class="blog__item-img fix">
                                  <a href="blog.html"><img src="/assets/img/blog/blog-2.png" alt=""></a>
                              </div>
                              <div class="blog__item-content">
                                  <div class="blog__category pb-35 d-flex justify-content-between">
                                      <h4 class="blog__meta">DESIGENER</h4>
                                      <h4 class="blog__date">FEB 3, 2023</h4>
                                  </div>
                                  <div class="blog__content">
                                      <h4 class="blog__title-sm"><a href="blog.html">There are many variations of passages
                                              of <br>
                                              Lorem Ipsum available</a></h4>
                                      <p>Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot
                                          squiffy loo, blimey</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'Home Page App',
    meta: [
        { name: 'description', content: 'My amazing site.' },
        { name: 'robots', content: 'noindex, follow' },
    ],
    script: [
    { hid: 'instagram', type: 'text/javascript', src: '//www.instagram.com/embed.js', async: true, defer: true },
              { src: '/assets/js/jquery.js', body: true },
              { src: '/assets/js/wow.js', body: true },
              { src: '/assets/js/meanmenu.js', body: true },
              { src: '/assets/js/main.js', body: true },
            ],
  })  
  </script>