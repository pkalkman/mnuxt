// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  devServer: {
    port: 3080,
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/mdc'],
  runtimeConfig: {
    openaiApiKey: '',
  },
  mdc: {
    highlight: {
      theme: 'material-theme-palenight',
      langs: ['html', 'markdown', 'vue', 'javascript', 'typescript', 'css', 'scss', 'json', 'bash'],
    },
  },
});
