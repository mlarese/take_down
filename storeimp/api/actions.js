import axios from 'axios'
import {mockApp, baseURL} from './api-properties'
import Vue from 'vue'
import {getSchema} from "../../assets/helpers"
import _isObject from 'lodash/isObject'
import _isString from 'lodash/isString'

if (mockApp) require('./mocks')

const scheme = getSchema()
const getToken = () => Vue.localStorage.get(`auth._token.${scheme}`)

export const notifyError = (err, translate = null) => {
    console.log('----------',err.response)
    let text = 'Error'
    let title = 'Error'
    let type = 'error'

    if (err.response.data && _isObject(err.response.data)) {
        text = ''
        for(let k in err.response.data) {
            if(_isString(err.response.data[k]))
            text+= err.response.data[k] + '<br>'
        }
    } else if (err.response.statusText) {
        text = err.response.statusText
    } else if (err.message) {
        text = err.message
    }

    if (translate) {
        title = translate(title)
        text = '<b>' + translate(text) + '</b>'
    }
    return {title, text, type}
}

export const notifySuccess = ({title, text}) => ({title, text, type: 'success'})

const instance = axios.create({
    baseURL,
    timeout: 90000,
    headers: {'Content-Type': 'application/json'},
    withCredentials: false
})

export const actions = {
    init ({commit}) {
        commit('error')
        commit('hasError')
    },
    get ({commit, getters, rootGetters}, {url, options = {}, debug = false}) {
        commit('isAjax', true)
        commit('error')
        commit('hasError')

        if (!options.headers)  options.headers = {}
        options.headers.Authorization = getToken()
        options.headers.nonce = 'mstrnncstrrndm'

        // console.log(baseURL + url, options)

        return instance.get(url, options)
            .then(res => {
                commit('isAjax')
                return res
            })
            .catch(err => {
                console.dir(err)

                commit('isAjax')
                commit('error', err)
                commit('hasError', true)
                commit('notification', notifyError(err))
                return Promise.reject(err)
            })
    },
    postmp ({commit, getters, rootGetters}, {url, data = {}, options = {}}) {
        commit('isAjax', true)
        commit('error')
        commit('hasError')

        if (!options.headers)  options.headers = {}
        options.headers.Authorization = getToken()
        options.headers.nonce = 'mstrnncstrrndm'
        options.headers['Content-Type'] = 'multipart/form-data'
        options.headers['X-Requested-With'] = 'multipart/form-data'

        return instance.post(url, data, options)
          .then(res => {
            commit('isAjax')
            return res
          })
          .catch(err => {
            console.log(err)
            commit('isAjax')
            commit('error', err)
            commit('hasError', true)
            commit('notification', notifyError(err))
            return Promise.reject(err)
          })
    },
    post ({commit, getters, rootGetters}, {url, data = {}, options = {}}) {
        commit('isAjax', true)
        commit('error')
        commit('hasError')

        if (!options.headers)  options.headers = {}
        options.headers.Authorization = getToken()
        options.headers.nonce = 'mstrnncstrrndm'
        return instance.post(url, data, options)
            .then(res => {
                commit('isAjax')
                return res
            })
            .catch(err => {
                console.log(err)
                commit('isAjax')
                commit('error', err)
                commit('hasError', true)
                commit('notification', notifyError(err))
                return Promise.reject(err)
            })
    },
    put ({commit, getters, rootGetters}, {url, data, options = {}}) {
        commit('isAjax', true)
        commit('error')
        commit('hasError')

        if (!options.headers)  options.headers = {}
        options.headers.Authorization = getToken()
        options.headers.nonce = 'mstrnncstrrndm'
        return instance.put(url, data, options)
            .then(res => {
                commit('isAjax')
                return res
            })
            .catch(err => {
                console.log(err)
                commit('isAjax')
                commit('error', err)
                commit('hasError', true)
                commit('notification', notifyError(err))
                return Promise.reject(err)
            })
    },
    delete ({commit, getters, rootGetters}, {url, options = {}}) {
        commit('isAjax', true)
        commit('error')
        commit('hasError')
        if (!options.headers)  options.headers = {}
        options.headers.Authorization = getToken()
        options.headers.nonce = 'mstrnncstrrndm'
        return instance.delete(url, options)
            .then(res => {
                commit('isAjax')
                return res
            })
            .catch(err => {
                console.log(err)
                commit('isAjax')
                commit('error', err)
                commit('hasError', true)
                commit('notification', notifyError(err))
                return Promise.reject(err)
            })
    }
}
