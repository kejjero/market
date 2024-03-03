// @ts-ignore
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '@/app/styles/app.scss',
    '@/app/styles/variables.scss',
  ],
})
