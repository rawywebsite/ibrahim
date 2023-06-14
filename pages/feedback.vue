<template>
    <div>
        <GlobalArHeader />
        <header>
        <div dir="rtl" id="header-sticky" class="header-top__area header__mob-space black-bg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="header-top__logo">
                            <NuxtLink to="/"><img alt="صورة لوجو موقع اصغر موديل في مصر مع عنبة" loading="lazy" src="/assets/img/logo/logo.png"/></NuxtLink>
                        </div>
                    </div>
                    <div class="col-xl-8 d-none d-xl-block">
                        <div class="header__menu">
                            <nav id="mobile-menu">
                                <ul>
                                    <li><NuxtLink to="/about">معلومات</NuxtLink></li>
                                    <li><NuxtLink to="/ibrahim-with-stars">أبراهيم والمشاهير</NuxtLink></li>
                                    <li><NuxtLink to="/gallery">صور الموضة</NuxtLink></li>
                                    <li><NuxtLink to="/feedback">أراء العملاء</NuxtLink></li>
                                    <li><NuxtLink to="/blog">المدونة</NuxtLink></li>
                                    <li class="text-center"><NuxtLink to="/en/feedback">English</NuxtLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="header-top__right-side d-flex align-items-center justify-content-end">
                            <button class="it-menu-bar bar d-xl-none"><i class="far fa-stream"></i></button>
                            <a target="_blank" href="https://wa.me/+201148774722" class="main-btn d-none d-xl-block d-sm-none">تواصل معي</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        <div class="banner__area p-relative z-index-3 banner__space blue-bg pb-130 pt-60">
            <div class="banner__text">
            <h2 class="banner__big-text">فاشون</h2>
            </div>
            <div class="container">
            <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="banner__section text-center">
            <h4 class="banner-section-title"><span>.</span>اراء </h4>
            </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="banner__main-img text-center">
                <nuxt-img alt="صورة ابراهيم جمال بانر لصفحة اراء العملاء في موقع اصغر موديل في مصر" loading="lazy" fit="cover" provider="cloudinary" src="/ib_feedback.png"/>
            </div>
            </div>
            </div>
            </div>
            </div>
  
              
            <div class="testimonial__area gray-bg pt-155">
            <div class="container">
                <div dir="rtl" class="row align-items-center">
                    <div class="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div class="testimonial__main-img text-center">
                            <div class="testimonial__shape">
                                <nuxt-img alt="صورة دائرة في موقع اصغر موديل في مصر" loading="lazy" fit="cover" provider="cloudinary" src="/testi-shape_k1nkex.webp"/>
                            </div>
                            <nuxt-img alt="صورة اصغر موديل في مصر مع السيجارة" loading="lazy" fit="cover" provider="cloudinary" src="/ibgamal.webp"/>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div class="testimonial__wrapper-box p-relative">
                            <div class="testimonial__content-bg">
                                <div class="swiper-container testimonial__slider-active">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="testimonial__content-box">
                                                <div class="row justify-content-center align-items-center">
                                                    <div dir="rtl" class="col-lg-8">
                                                        <div class="testimonial__icon">
                                                            <span>
                                                                <svg id="it-1" xmlns="http://www.w3.org/2000/svg"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="32"
                                                                    height="24" viewbox="0 0 32 24">
                                                                    <g id="reviews">
                                                                        <g id="text_and_quotes-1" data-name="text and quotes">
                                                                            <image id="straight-quotes" width="32" height="24"
                                                                                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAfUlEQVRIiWP8LBf3n4E0wEhANUnmMZFoOdXBqANGHTDqgFEHjDqAVAfMoLL9M0hxAMjyLGpaDjKPWAfALCe15sRrHs/Dhf+JcQDNLAdxCDmAppYTcgDNLcfnALpYjssBdLMcmwPwKqa25egOoLvlyA4YEMthDhgwyxkYGBgALzFEqrPkeQsAAAAASUVORK5CYII=" />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="testimonial__text">
                                                            <h5 class="mb-3">أصغر مودل في مصر ثقة في الله نجاح</h5>
                                                            <a target="_blank" class="main-btn" href="https://www.instagram.com/p/CnfDTPmK6Lj/"><span>شوف الفديو</span></a>
                                                            <h4 class="testimonial__title-sm">- عنبة -</h4>
                                                            <span>مغني وممثل</span>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <nuxt-img alt="اصغر موديل في مصر مع عنبة" loading="lazy" fit="cover" provider="cloudinary" src="/star1.webp"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="testimonial__content-box">
                                                <div class="row justify-content-center align-items-center">
                                                    <div dir="rtl" class="col-lg-8">
                                                        <div class="testimonial__icon">
                                                            <span>
                                                                <svg id="it-1" xmlns="http://www.w3.org/2000/svg"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="32"
                                                                    height="24" viewbox="0 0 32 24">
                                                                    <g id="reviews">
                                                                        <g id="text_and_quotes-1" data-name="text and quotes">
                                                                            <image id="straight-quotes" width="32" height="24"
                                                                                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAfUlEQVRIiWP8LBf3n4E0wEhANUnmMZFoOdXBqANGHTDqgFEHjDqAVAfMoLL9M0hxAMjyLGpaDjKPWAfALCe15sRrHs/Dhf+JcQDNLAdxCDmAppYTcgDNLcfnALpYjssBdLMcmwPwKqa25egOoLvlyA4YEMthDhgwyxkYGBgALzFEqrPkeQsAAAAASUVORK5CYII=" />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="testimonial__text">
                                                            <h5 class="mb-3">أبراهيم أخويا وحبيبي أحلي مودل في مصر وأصغر مودل في مصر خلي بالك أصغر دي متقللش بالعكس دا راجل محترم جدا ربنا يكرمو أن شاء الله النجاح الدائم ليه </h5>
                                                            <a target="_blank" class="main-btn" href="https://www.instagram.com/p/Cl_8DvHAUmM/"><span>شوف الفديو</span></a>
                                                            <h4 class="testimonial__title-sm">- عمر عمروسي -</h4>
                                                            <span>ممثل</span>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <nuxt-img alt="اصغر موديل في مصر مع عمري عمروسي" loading="lazy" fit="cover" provider="cloudinary" src="/star4.webp"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-slider-dots"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <GlobalArFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'Home Page App',
    meta: [
        { name: 'description', content: 'My amazing site.' },
        { name: 'robots', content: 'noindex, follow' },
    ],
    link: [
            { rel: 'stylesheet', href: '/assets/css/style.css' },
        ],
    script: [
              { src: '/assets/js/jquery.js', body: true },
              { src: '/assets/js/wow.js', body: true },
              { src: '/assets/js/meanmenu.js', body: true },
              { src: '/assets/js/main.js', body: true },
            ],
  })  
  </script>