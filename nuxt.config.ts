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
          title: 'My App',
          meta: [
            { name: 'description', content: 'My amazing site.' }
          ],
        }
      }
})
