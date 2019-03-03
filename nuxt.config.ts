import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'

export default {
  mode: 'spa',
  head: {
    title: 'tanakaworld.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'No Pixel No Life' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['ress/dist/ress.min.css', '~/assets/styles/global.css'],
  plugins: [],
  modules: [],
  build: {
    extend(config: Configuration, ctx: Context) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module!.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
