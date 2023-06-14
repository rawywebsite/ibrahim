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
                                    <li class="text-center"><NuxtLink to="/en/model-masr-with-3nba">English</NuxtLink></li>
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
               <!-- blog-area-start -->
         <div class="blog-details__area gray-bg pt-120 pb-120">
            <div class="container">
               <div class="row">
                  <div dir="rtl" class="col-lg-12 text-black">
                     <div class="blog-details__wrapper">
                        <div class="blog-details__img pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <nuxt-img alt="اصغر موديل في مصر مع عنبة" loading="lazy" fit="cover" provider="cloudinary" src="/1_xtj0mt.webp"/>
                        </div>
                        <div class="blog-details__category pb-35 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <span><i class="fal fa-clock"></i> يناير 2023</span>
                        </div>
                        <div class="blog-details__text pb-40">
                           <p class="pb-20 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">قابل اصغر موديل في مصر عنبة في محل الياس كان يصمم له بدلته وقال له انه يتمني له التوفيق</p>
                        </div>
                        <div class="blog-details__client-review mb-40 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <blockquote>
                              <div class="blog-details__icon">
                                 <span><i class="fal fa-quote-right"></i></span>
                              </div>
                              <div class="blog-details__client-content">
                                 <p>أصغر مودل في مصر ثقة في الله نجاح
</p>
                                 <span>عنبة</span>
                              </div>
                           </blockquote>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
  
          <div class="images__area grey-bg fix p-relative">
              <div class="container">
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