// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { 
    enabled: true
  },
  nitro: {
    awsAmplify: {
      // ...
    }
  },
  runtimeConfig: {
    // Private keys are only available server-side
    apiSecret: '123',
     // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
      //apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt Sandbox',
      meta: [
        { name: 'description', content: 'Bruno R. Alves Nuxt sandbox project'}
      ]
    }
  }
})
