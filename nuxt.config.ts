// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },
  css: [
    '@/public/css/main.css',
  ],

})
