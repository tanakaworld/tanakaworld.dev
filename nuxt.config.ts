import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'

export default {
  mode: 'spa',
  head: {
    title: 'tanakaworld.dev',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'tanakaworld.dev is a new project of tanaka.world'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'tanakaworld,SoftwareEngineer,tanaka.world,tanalaworld.dev,art,pixelart'
      },
      { hid: 'og:title', property: 'og:title', content: 'tanakaworld.dev' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://tanakaworld.dev' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tanalaworld.dev/img/og.png'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'tanakaworld.dev'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'tanakaworld.dev is a new project of tanaka.world'
      }
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
