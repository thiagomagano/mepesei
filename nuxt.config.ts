// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Me Pesei",
    },
  },
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/lara-dark-teal/theme.css",
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
