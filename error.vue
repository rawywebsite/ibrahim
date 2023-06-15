<script setup lang="ts">

const errors = useError()
useHead({
  title: 'Error',
  meta: [
      { name: 'description', content: 'My amazing site.' },
      { name: 'robots', content: 'noindex, follow' },
  ],
  script: [
            { src: '/assets/js/jquery.js', body: true },
            { src: '/assets/js/wow.js', body: true },
            { src: '/assets/js/main.js', body: true },
          ],
})
</script>


<template>
  <div>
        <div class="banner__area p-relative z-index-3 banner__space blue-bg pb-130 pt-60">
            <div class="banner__text">
            <h2 class="banner__big-text">Error ايرور</h2>
            </div>
            <div class="container">
            <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="banner__section text-center">
            <h2 class="text-danger"><span>.</span>  404 </h2>
            <h2><span>.</span>الصفحة غير موجودة | Page Not Found</h2>
            <NuxtLink class="main-btn" to="/"><span>Home | الرئيسية</span></NuxtLink>
            </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="banner__main-img text-center">
              <nuxt-img alt="صورة error في موقع اصغر موديل في مصر" loading="lazy" fit="cover" provider="cloudinary" src="/ib_error.webp"/>
            </div>
            </div>
            </div>
            </div>
            </div>
  </div>
</template>