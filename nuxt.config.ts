// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    firebase: {
      nodeVersion: "18",
      gen: 2,
      httpsOptions: {
        region: 'europe-west1',
        maxInstances: 3,
      },
    },
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
  ],
  plugins: [
    '~/plugins/appToast/index.client.ts',
    '~/plugins/appModal/index.client.ts'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  googleFonts: {
    preload: true,
    display: 'swap',
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
})
