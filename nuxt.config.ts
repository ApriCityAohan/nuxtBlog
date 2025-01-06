// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  app: {
    head: {
      noscript: [{ innerHTML: "This website requires JavaScript." }],
      bodyAttrs: {
        class: "font-sans",
      },
    },
  },
  css: [
    "@/assets/styles/markdown.scss",
    "@/assets/styles/global.css",
    "pattern.css/dist/pattern.min.css",
  ],
  colorMode: {
    storage: "localStorage",
  },
});
