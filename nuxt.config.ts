// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  alias: {
    "@": "/",
    "assets": "/<rootDir>/assets",
    "public": "/<rootDir>/public",
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
