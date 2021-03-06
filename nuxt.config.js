const pkg = require('./package')
require('dotenv').config()

let routerBase = '/'
if (process.env.NODE_ENV === 'production') {
  // routerBase = '/site/' spostato in root
}

module.exports = {
  mode: 'spa',
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  router: {
    mode: 'hash',
    base: routerBase,
    middleware: ['acl', 'auth']
  },
  auth: {
    redirect: {
      logout: '/login',
      callback: '/callback'
    },
    resetOnError: true,
    strategies: {
      prod: {
        _scheme: 'local',
        endpoints: {
          login: { baseURL: 'https://api.takedownwebsite.com', url: '/customer/login', method: 'post', propertyName: 'token' },
          logout: {baseURL: 'https://api.takedownwebsite.com', url: '/customer/logout', method: 'post' },
          user: {baseURL: 'https://api.takedownwebsite.com', url: '/customer/user', method: 'get', propertyName: 'user' }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      },
      dev: {
        _scheme: 'local',
        endpoints: {
          login: { baseURL: 'https://api.takedownwebsite.com', url: '/customer/login', method: 'post', propertyName: 'token' },
          logout: {baseURL: 'http:/api./takedownwebsite.com', url: '/customer/logout', method: 'post' },
          user: {baseURL: 'https://api.takedownwebsite.com', url: '/customer/user', method: 'get', propertyName: 'user' }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      },
      local: {
        endpoints: {
          login: { baseURL: 'http://localhost', url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: {baseURL: 'http://localhost', url: '/api/auth/logout', method: 'post' },
          user: {baseURL: 'http://localhost', url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Take Down',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      // { src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit', async: true, defer: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
      // { rel: 'stylesheet', href: 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/auth.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'portal-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  buildModules: [
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
