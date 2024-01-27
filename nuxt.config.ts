// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scrollbars.css'],
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
        themes: {
          light: {},
          dark: {
            colors: {
              primary: "#8b34fa",
              surface: "#121212",
              background: "#000000",
            }
          }
        }
      },
    }
  }
})
