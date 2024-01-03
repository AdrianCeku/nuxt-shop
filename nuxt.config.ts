// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Brand Store 😱🔥',
      meta: [
        {name: 'description', content: 'The best store in the world!'},
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
      ]
    }
  }
})