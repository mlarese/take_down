import _cloneDeep from 'lodash/cloneDeep'
import _keyBy from 'lodash/keyBy'
import {reportStates} from './reports'
import Vue from 'vue'
import addDays from 'date-fns/addDays'
import format from 'date-fns/format'

let today = new Date()
let fmtToday = format(today, 'yyyy-MM-dd')

let currentPosition = {
  coords: {
    latitude: 0,
    longitude:0
  }
}

function getPosition(position) {
  currentPosition = position
  return currentPosition
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition);
}


export const state = () => {
  return {
    list: [],
    recordList: [],
    record: {},
    $record: {},
    addRecord: {},
    resetItem: {},
    ui: {filter: null},
    mode: 'list',
    searchActive: false,
    reportStates,
    filter: {}
  }
}

const root = {root: true}

export const mutations = {
  setSearchActive (state, payload) { state.searchActive = payload },
  setRecordList (state, payload) { state.recordList = payload },
  setList (state, payload) {
    state.list = payload
  },
  setRecord (state, payload) {
    state.record = _cloneDeep(payload)
    state.$record = _cloneDeep(payload)
    state.loaded = true
  },
  set$Record (state, payload) {
    state.$record = _cloneDeep(payload)
    state.loaded = true
  },
  updateItemList (state,  {data, index}) {
    Vue.set(state.list, index, data)
  },
  addRecord (state,  p ) {
    state.list.push(p)
  },
  reset$Record (state) {
    state.$record = {}
  },
  setMode (state, payload) { state.mode = payload },
  setForm (state, payload) { state.form = payload },
  setEditMode (state) { state.mode = 'edit' },
  setAddMode (state) { state.mode = 'add' },
  resetFilter (state) {
    state.filter = {}
  }

}
export const actions = {
  loadLinksFromExcel ({dispatch, commit, state}) {

  },
  relaunchScreenshots ({dispatch, commit, state}) {

  },
  doScreenShot ({dispatch, commit, state}, id) {

  },
  downloadAllScreenshots ({dispatch, commit, state}) {

  },
  uploadImage ({dispatch, commit, state}, {picture, id}) {
    const data = new FormData();
    data.append('picture', picture)
    data.append('submission_id', id)
    data.append('nonce','nncupldfrmdt')

    const url = `/customer/pictures`
    return dispatch('api/postmp', {url, data}, root)
  },
  update ({dispatch, commit, state}, {data, id}) {
    const url = `/customer/submissionrecord/${id}`
    return dispatch('api/put', {url, data}, root)
  },
  insert ({dispatch, commit, state}, images) {
    let data = state.$record
    if(data.send_coordinates) {
      data.submission_geo_location_longitude = currentPosition.coords.longitude + ''
      data.submission_geo_location_latitude = currentPosition.coords.latitude + ''
    } else {
      data.submission_geo_location_longitude = "0"
      data.submission_geo_location_latitude = "0"
    }

    if(data.submission_url === '') {
      delete data.submission_url
    }

    const url = `/customer/submissions`
    return dispatch('api/post', {url, data}, root)
      .then(res => {
        const all = []
        let id = res.data.output.id
        for(let i = 0; i < images.length; i++) {
          let picture = images[i].file
          all.push (dispatch('uploadImage', {picture, id}))
        }

        return Promise.all(all)
      })
      .then(() => commit('set$Record', {}))
  },
  save ({dispatch, commit, state, getters}) {
    let data = state.$record

    let id = data.id
    return dispatch('update', {data, id})
      .then(r => {
        commit('set$Record', {})
        return r
      })


  },
  resetSearch ({dispatch, commit, state}) {
    commit('setSearchActive', false)
    commit('resetFilter')
    commit('setList', [])
  },
  load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
    if (!force && state.list.length > 0) {
      return
    }
    if (id === null) {
      return dispatch('api/get', {url: `/customer/submissions`, options, debug: false}, root)
        .then(res => {
          commit('setList', res.data)
          return res
        })
    } else {
      const url = `/customer/submissions/${id}`
      return dispatch('api/get', {url, options}, root)
        .then(res => {
          let data = res.data
          if(data.length > 0) data = data[0]
          else data = {}
          commit('setRecord', data)
          return res
        })
    }
  },
  delete ({dispatch, commit, state}, id) {
    const url = `/customer/submissions/cancel/${id}`
    return dispatch('api/delete', {url}, root)
      .then(res => dispatch('load', {}))
  }
}

export const getters = {
  isEditMode: state => state.mode === 'edit',
  isAddMode: state => state.mode === 'add',
  reportStatesByKey: state => _keyBy(state.reportStates, 'cur')
}

