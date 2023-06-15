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
                                    <li class="text-center"><NuxtLink to="/en/ibrahim-with-stars">English</NuxtLink></li>
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
            <h4 class="banner-section-title"><span>.</span> مشاهير </h4>
            </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="banner__main-img text-center">
                <nuxt-img alt="صورة ابراهيم جمال بانر لصفحة موديل مصر مع المشاهير في موقع اصغر موديل في مصر" loading="lazy" fit="cover" provider="cloudinary" src="/ib_stars.png"/>
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
                            <h4 class="section-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">أبراهيم والمشاهير</h4>
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
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع عمروسي" loading="lazy" fit="cover" provider="cloudinary" src="/star4.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع مصطفي منصور" loading="lazy" fit="cover" provider="cloudinary" src="/star5.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع امح" loading="lazy" fit="cover" provider="cloudinary" src="/star6.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع كريم سرور" loading="lazy" fit="cover" provider="cloudinary" src="/star7.webp"/>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="service__item text-center">
                                <nuxt-img alt="صورة اصغر موديل في مصر مع محمد رضوان" loading="lazy" fit="cover" provider="cloudinary" src="/star8.webp"/>
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
        <GlobalArFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'ابراهيم مع المشاهير',
    meta: [
            { name: 'description', content: 'ابراهيم جمال : اصغر موديل في مصر والمشاهير - أفضل مصمم أزياء و فاشون ديزاينر و عارض أزياء وصوره مع المشاهير ' },
            { name: 'keywords', content: 'اصغر موديل في مصر, ابراهيم جمال, افضل فاشون ديزاينر في مصر, ابراهيم موديل مصر والمشاهير, ابراهيم موديل, تصميم ازياء, فاشون, موضة' },
            { name: 'apple-mobile-web-app-title', content:'ابراهيم افضل موديل ازياء في مصر | والمشاهير' },
            { name: 'application-name', content:'ابراهيم افضل موديل ازياء في مصر | والمشاهير' },
            { name: 'og:site_name', content:'ابراهيم افضل موديل ازياء في مصر | والمشاهير' },
            { name: 'og:title', content:'ابراهيم افضل موديل ازياء في مصر | والمشاهير' },
            { name: 'og:description', content:'ابراهيم افضل موديل ازياء في مصر | والمشاهير' },
            { name: 'twitter:description', content: 'ابراهيم افضل موديل ازياء في مصر' },
            { name: 'og:url', content: 'https://ibmodel.lineitsolutions.com/ibrahim-with-stars' },
            { name: 'subject', content: 'ابرهيم أصغر موديل في مصر والمشاهير' },
            { name: 'identifier-URL', content: 'https://ibmodel.lineitsolutions.com/ibrahim-with-stars' },
            { name: 'linkage', content: 'https://ibmodel.lineitsolutions.com/ibrahim-with-stars' },
        ],
    script: [
              { src: '/assets/js/jquery.js', body: true },
              { src: '/assets/js/wow.js', body: true },
              { src: '/assets/js/meanmenu.js', body: true },
              { src: '/assets/js/main.js', body: true },
            ],
  })  
  </script>