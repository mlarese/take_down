import _has from 'lodash/has'

export const state = () => ({

  locale: 'en',
  screenshot: {
    fullpage: 0,
    offset: 1200,
    length: 768,
    time: 40
  }
})

export const mutations = {
  setFullpage (state, payload) {state.fullpage = payload},
  setOffset (state, payload) {state.offset = payload},
  setLength (state, payload) {state.length = payload},
  setLocale (state, payload) {state.locale = payload}
}

export const actions = {
}

export const getters = {
}
