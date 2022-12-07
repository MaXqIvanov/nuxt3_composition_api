// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
    build: {
      transpile: ["vuetify"],
    },
    modules: [
      '@pinia/nuxt',
      'nuxt-icon',
    ],
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Pizza Mafia project on Nuxt3 and Nest.js',
          meta: [
            { name: 'description', content: 'This is test site for preview' }
          ],
        }
      },
})
