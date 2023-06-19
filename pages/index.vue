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
                                    <li><NuxtLink to="/gallery">معرض الصور</NuxtLink></li>
                                    <li><NuxtLink to="/feedback">أراء العملاء</NuxtLink></li>
                                    <li><NuxtLink to="/blog">المدونة</NuxtLink></li>
                                    <li class="text-center"><NuxtLink to="/en">English</NuxtLink></li>
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
            <div dir="rtl" class="hero__area blue-bg pt-60 p-relative fix">
            <div class="hero__shape-1 d-none d-lg-block">
                <nuxt-img alt="صورة شئ في موقع اصغر موديل في مصر" loading="lazy" fit="cover" provider="cloudinary" src="/hero-shape-4_dazqyy.webp"/>
            </div>
            <div class="hero__shape-2 d-none d-sm-block">
                <nuxt-img alt="صورة شئ في موقع اصغر موديل في مصر" loading="lazy" fit="cover" provider="cloudinary" src="/project-shape-3_ao0mqw.webp"/>
            </div>
            <div class="hero__shape-3 d-none d-lg-block">
                <nuxt-img alt="صورة شئ في موقع اصغر موديل في مصر" loading="lazy" fit="cover" provider="cloudinary" src="/hero-shape-5.1_fwdgtd.webp"/>
            </div>
            <div class="hero__gray-bg d-none d-lg-block"></div>
            <div class="circle-animation banner d-none d-lg-block">
                <span class="it-circle-1"></span>
                <span class="it-circle-2"></span>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-7 col-md-8">
                        <div class="hero__left-side z-index-3">
                            <div class="hero__setion-title pb-15">
                                <h4 class="section-subtitle wow fadeInRight">اهلا بكم في موقعي</h4>
                                <h2 class="hero-title wow fadeInRight" ><div class="rbt-new-badge rbt-new-badge-one">
                                    أصغر موديل 
                                    في مصر <nuxt-img alt="صورة مصر في موقع اصغر موديل في مصر" loading="lazy" fit="cover" provider="cloudinary" src="/71984_ctokka.webp"/>
                                </div></h2>
                            </div>
                            <div class="hero__left-text mt-3 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                <p>صديق للموضة 🕴🔥 , عارض أزياء <i class="fal fa-user-tie"></i></p>
                            </div>
                            
                            <div class="hero__left-button wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".6s">
                                <NuxtLink class="main-btn" to="/about"><span>اعرف عني اكتر</span></NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5 col-md-4">
                        <div class="hero__right-side text-center text-lg-start p-relative">
                            <div class="hero__right-img z-index-3">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع جائزة" loading="lazy" fit="cover" provider="cloudinary" src="/main.webp"/>
                                <div class="hero__social-box d-none d-xl-block">
                                    <div class="hero__social">
                                        <a target="_blank" href="https://www.facebook.com/mx.mx.1088"><i class="fab fa-facebook-f"></i></a>
                                        <a target="_blank" href="https://www.instagram.com/ibrahimgamaal__/"><i class="fab fa-instagram"></i></a>
                                        <a target="_blank" href="https://www.tiktok.com/@ibrahimgamaal/"><i class="fab fa-tiktok"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
        <div class="images__area grey-bg fix p-relative pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="service__section text-center">
                            <h4 class="section-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">إبراهيم والمشاهير</h4>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع عنبة" loading="lazy" fit="cover" provider="cloudinary" src="/star1.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع محمد عز" loading="lazy" fit="cover" provider="cloudinary" src="/star2.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع توهامي" loading="lazy" fit="cover" provider="cloudinary" src="/star3.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay="1s">
                        <div class="service__item text-center">
                            <div class="service__item-link">
                                <NuxtLink to="/ibrahim-with-stars">جميع صور أبراهيم مع المشاهير<i class="far fa-long-arrow-right"></i></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="ibrahim_line">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="service__section text-center">
                            <h4 class="section-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">أبراهيم والموضة</h4>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر فاشون 1" loading="lazy" fit="cover" provider="cloudinary" src="/1_jgupkv.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر فاشون 2" loading="lazy" fit="cover" provider="cloudinary" src="/2_zrtf98.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر فاشون 3" loading="lazy" fit="cover" provider="cloudinary" src="/3_gplrsj.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay="1s">
                        <div class="service__item text-center">
                            <div class="service__item-link">
                                <NuxtLink to="/gallery">جميع صور أبراهيم والموضة<i class="far fa-long-arrow-right"></i></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="images__area grey-bg fix p-relative pt-100">
                <div class="container">
                    <div dir="rtl" class="row align-items-center">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                            <div class="bg_ready"></div>
                    </div>
                        <div class="col-xl-6 col-lg-6 order-0 order-lg-1">
                            <div class="project__item">
                                <div class="project__text">
                                    <h4 class="section-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                        مستعد لعرض أزيائك ؟</h4>
                                    <h5 style="line-height: 3rem; color: var(--line-common-black);" class="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">إذا كنت صاحب بيزنس أو براند ملابس وتحتاج صور بروفيشنال مع مودل  <br> تقدر تتواصل معي شخصيا رقمي : 01148774722 </h5>
                                </div>
                                <div class="project__button wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                    <a class="main-btn" target="_blank" href="https://wa.me/+201148774722"><span>تواصل معي الأن</span></a>
                                </div>
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
        title: 'الصفحة الرئيسية',
        meta: [
            { name: 'description', content: 'ابراهيم جمال : اصغر موديل في مصر - أفضل مصمم أزياء و فاشون ديزاينر و عارض أزياء في مصر ' },
            { name: 'keywords', content: 'اصغر موديل في مصر, ابراهيم جمال, افضل فاشون ديزاينر في مصر, ابراهيم موديل مصر, ابراهيم موديل, تصميم ازياء, فاشون, موضة' },
            { name: 'apple-mobile-web-app-title', content:'ابراهيم افضل موديل ازياء في مصر | الرئيسية' },
            { name: 'application-name', content:'ابراهيم افضل موديل ازياء في مصر | الرئيسية' },
            { name: 'og:site_name', content:'ابراهيم افضل موديل ازياء في مصر | الرئيسية' },
            { name: 'og:title', content:'ابراهيم افضل موديل ازياء في مصر | الرئيسية' },
            { name: 'og:description', content:'ابراهيم افضل موديل ازياء في مصر | الرئيسية' },
            { name: 'twitter:description', content: 'ابراهيم افضل موديل ازياء في مصر' },
            { name: 'og:url', content: 'https://ibrahim.elias-designer.com' },
            { name: 'subject', content: 'الصفحة الرئيسية لأصغر موديل في مصر' },
            { name: 'identifier-URL', content: 'https://ibrahim.elias-designer.com' },
            { name: 'linkage', content: 'https://ibrahim.elias-designer.com' },
        ],
        script: [
            { src: '/assets/js/jquery.js', body: true },
            { src: '/assets/js/wow.js', body: true },
            { src: '/assets/js/meanmenu.js', body: true },
            { src: '/assets/js/main.js', body: true },
          ],
})  
  </script>
