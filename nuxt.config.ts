// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  gtm: {
    id: 'GTM-M2W4CHJF'
  }
})
