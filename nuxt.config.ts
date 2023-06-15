// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/assets/img/favicon.ico' },
            { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/img/favicon.ico' },
            { rel: 'apple-touch-icon', href: '/assets/img/logo/logo.png' },
            { rel: 'apple-touch-icon-precomposed', href: '/assets/img/logo/logo.png' },
            { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/assets/css/animate.css' },
            { rel: 'stylesheet', href: '/assets/css/custom-animation.css' },
            { rel: 'stylesheet', href: '/assets/css/flaticon.css' },
            { rel: 'stylesheet', href: '/assets/css/meanmenu.css' },
            { rel: 'stylesheet', href: '/assets/css/font-awesome-pro.css' },
            { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' },
            { rel: 'stylesheet', href: '/assets/css/spacing.css' },
            { rel: 'stylesheet', href: '/assets/css/style.css' },
        ],
        meta: [
          { name: 'theme-color', content: '#EBEBF9' },
          { name: 'secound-theme-color', content: '#2E2AEB' },
          { name: 'HandheldFriendly', content: 'True' },
          { name: 'MobileOptimized', content: '320' },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
          { name: 'robots', content: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
          { name: 'robots', content: 'index, follow' },
          { name: 'og:type', content: 'website' },
          { name: 'og:image', content: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1686569747/logo_kawrjy.png' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@اصفر_موديل_في_مصر' },
          { name: 'twitter:creator', content: '@اصفر_موديل_في_مصر' },
          { name: 'twitter:title', content: '@اصفر_موديل_في_مصر' },
          { name: 'twitter:image:src', content: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1686569747/logo_kawrjy.png' },
          { name: 'note', content: 'ابراهيم افضل موديل ازياء في مصر' },
          { name: 'distribution', content: 'global' },
          { name: 'classification', content: 'index, follow' },
          { name: 'author', content: 'ابراهيم جمال' },
          { name: 'owner', content: 'https://ibmodel.lineitsolutions.com' },
          { name: 'copyright', content: 'https://lineitsolutions.com' },
          { name: 'web_author', content: 'Ahmed Waled' },
          { name: 'MSSmartTagsPreventParsing', content: 'true' },
          { name: 'operator', content: 'ابراهيم' },
          { name: 'contactOrganization', content: 'https://ibmodel.lineitsolutions.com' },
          { name: 'contactStreetAddress1', content: 'المرج' },
          { name: 'contactStreetAddress2', content: 'عباس العقاد' },
          { name: 'contactCity', content: 'cairo' },
          { name: 'contactCountry', content: 'Egypt' },
          { name: 'contactPhoneNumber', content: '+201148774722' },
          { name: 'contactNetworkAddress', content: 'https://ibmodel.lineitsolutions.com' },
          { name: 'msapplication-starturl', content: 'https://ibmodel.lineitsolutions.com' },
          { name: 'msapplication-tooltip', content: 'موقع ابراهيم اصغر موديل في مصر' },
          { name: 'DC.Creator', content: 'Developed By Ahmed Waled' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        script: [
          // { src: '/assets/js/yt.js', body: true },
        ],
        
        },
      },
      
      modules: [
        '@nuxt/image',
      ],
      image: {
        provider: 'cloudinary',
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1686783493',
        },
      },
      extends: [
        'nuxt-seo-kit'
      ],
      runtimeConfig: {
        public: {
          siteName: 'ابراهيم جمال : افضل موديل ازياء في مصر',
          language: 'en-US'
        }
      }
})