// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          link: [
            { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/img/favicon.png' },
            { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/assets/css/animate.css' },
            { rel: 'stylesheet', href: '/assets/css/custom-animation.css' },
            { rel: 'stylesheet', href: '/assets/css/nice-select.css' },
            { rel: 'stylesheet', href: '/assets/css/flaticon.css' },
            { rel: 'stylesheet', href: '/assets/css/meanmenu.css' },
            { rel: 'stylesheet', href: '/assets/css/font-awesome-pro.css' },
            { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' },
            { rel: 'stylesheet', href: '/assets/css/spacing.css' },
            { rel: 'stylesheet', href: '/assets/css/style.css' },
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
          baseURL: 'https://res.cloudinary.com/dzxbbqq4l/image/upload/v1686515220',
        }
      },
      router: {

      }
})