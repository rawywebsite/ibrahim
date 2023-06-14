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
                                    <li class="text-center"><NuxtLink to="/en/blog">English</NuxtLink></li>
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