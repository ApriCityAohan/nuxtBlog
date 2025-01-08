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
      meta: [
        { name: "author", content: "AoHan" },
        { name: "application-name", content: "AoHan Blog" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "revisit-after", content: "7 days" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { charset: "UTF-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        {
          name: "description",
          content:
            "在我的技术博客中，通过HTML、CSS、JavaScript、Vue.js、React.js等文章探索前端开发，涵盖HTML5、CSS3、Node.js、TypeScript、Webpack、Git，并分享生活笔记。",
        },
        {
          name: "keywords",
          content:
            "前端, 技术分享, HTML, CSS, JavaScript, JS, HTML5, CSS3, Node.js, Vue.js, React.js, TypeScript, Webpack, Git, 技术博客, 生活, 技术笔记",
        },
      ],
      noscript: [{ innerHTML: "This website requires JavaScript." }],
      bodyAttrs: {
        class: "font-sans",
      },
    },
  },
  css: ["@/assets/styles/markdown.scss", "@/assets/styles/global.css"],
  colorMode: {
    storage: "localStorage",
  },
});
