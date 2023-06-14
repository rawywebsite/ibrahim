<template>
    <div>
      <GlobalEnHeader />
      <header>
        <div id="header-sticky" class="header-top__area header__mob-space black-bg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="header-top__logo">
                            <NuxtLink to="/en"><img alt="Logo Image ibrahim website the younger model in Egypt" loading="lazy" src="/assets/img/logo/logo.png"/></NuxtLink>
                        </div>
                    </div>
                    <div class="col-xl-8 d-none d-xl-block">
                        <div class="header__menu">
                            <nav id="mobile-menu">
                                <ul>
                                  <li><NuxtLink to="/en/about">About</NuxtLink></li>
                                    <li><NuxtLink to="/en/ibrahim-with-stars">Ibrahim & Stars</NuxtLink></li>
                                    <li><NuxtLink to="/en/gallery">Fashion</NuxtLink></li>
                                    <li><NuxtLink to="/en/feedback">Feedback</NuxtLink></li>
                                    <li><NuxtLink to="/en/blog">Blog</NuxtLink></li>
                                    <li class="text-center"><NuxtLink to="/blog">عربي</NuxtLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="header-top__right-side d-flex align-items-center justify-content-end">
                            <button class="it-menu-bar bar d-xl-none"><i class="far fa-stream"></i></button>
                            <a target="_blank" href="https://wa.me/+201148774722" class="main-btn d-none d-xl-block d-sm-none">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
      <GlobalEnFooter />
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
            { rel: 'stylesheet', href: '/assets/css/en.css' },
        ],
    script: [
              { src: '/assets/js/jquery.js', body: true },
              { src: '/assets/js/wow.js', body: true },
              { src: '/assets/js/meanmenu.js', body: true },
              { src: '/assets/js/main.js', body: true },
            ],
  })  
  </script>