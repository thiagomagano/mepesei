// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Me Pesei",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  devtools: { enabled: false },
  css: [
    "primevue/resources/themes/lara-light-teal/theme.css",
    "@/assets/main.css",
    "primeicons/primeicons.css",
  ],
  modules: ["nuxt-primevue"],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ["InputText", "Button"],
    },
  },
});
