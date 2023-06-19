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
    titleTemplate: 'Ibrahim Gamal the Younger Model in egypt | Blog ',
    meta: [
            { name: 'description', content: 'Ibrahim Gamal: The Younger Model in Egypt articles - The Best Fashion Designer and Suit Model in Egypt with stars' },
            { name: 'keywords', content: 'The younger model in Egypt articles, Ibrahim Gamal, the best fashion designer in Egypt, Ibrahim Model Egypt, Ibrahim Model, fashion design, fashion, best suit model model' },
            { name: 'apple-mobile-web-app-title', content: 'Ibrahim best fashion model in Egypt articles' },
            { name: 'application-name', content: 'Ibrahim best fashion model in Egypt articles' },
            { name: 'og:site_name', content: 'Ibrahim best fashion model in Egypt articles' },
            { name: 'og:title', content: 'Ibrahim best fashion model in Egypt articles' },
            { name: 'og:description', content: 'Ibrahimbest fashion model in Egypt' },
            { name: 'twitter:description', content: 'Ibrahim best fashion model in Egypt articles' },
            { name: 'og:url', content: 'https://ibrahim.elias-designer.com/en/blog' },
            { name: 'subject', content: 'Ibrahim best fashion model in Egypt articles' },
            { name: 'identifier-URL', content: 'https://ibrahim.elias-designer.com/en/blog' },
            { name: 'linkage', content: 'https://ibrahim.elias-designer.com/en/blog' },
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
