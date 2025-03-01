// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt']
})