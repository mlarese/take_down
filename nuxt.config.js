const pkg = require('./package')

let routerBase = '/'
if (process.env.NODE_ENV === 'production') {
  routerBase = '/app/'
}

module.exports = {
  mode: 'spa',
  router: {
    // mode: 'hash',
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
          login: { baseURL: '/', url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: {baseURL: '/', url: '/api/auth/logout', method: 'post' },
          user: {baseURL: '/', url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      },
      dev: {
        _scheme: 'local',
        endpoints: {
          login: { baseURL: 'http://api.test.eu.ngrok.io/api', url: '/customer/login', method: 'post', propertyName: 'token' },
          logout: {baseURL: 'http://api.test.eu.ngrok.io/api', url: '/customer/logout', method: 'post' },
          user: {baseURL: 'http://api.test.eu.ngrok.io/api', url: '/customer/user', method: 'get', propertyName: 'user' }
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
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
    '@nuxtjs/axios',
    '@nuxtjs/auth'
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
