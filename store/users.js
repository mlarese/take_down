import _cloneDeep from 'lodash/cloneDeep'
import _keyBy from 'lodash/keyBy'

import Vue from 'vue'
import addDays from 'date-fns/addDays'
import format from 'date-fns/format'

let today = new Date()
let fmtToday = format(today, 'yyyy-MM-dd')

const newFilter = () => ({
    creation_datetime: [fmtToday, fmtToday],
    start_datetime: [fmtToday, fmtToday],
    cb_age_range: [1,2,3,4,5,6]
})

export const roles = [
  {value: 0, text: 'Admin'},
  {value: 1, text: 'Shop'},
  {value: 2, text: 'Agent'},
  {value: 3, text: 'Distributor'},
  {value: 4, text: 'Importer'},
  {value: 5, text: 'End customer'},
  {value: 6, text: 'Stockista'},
  {value: 7, text: 'Branch'}
]

export const usersRoles = [
  roles[1],
  roles[2],
  roles[3],
  roles[4],
  roles[5],
  roles[6],
  roles[7]
]

export const state = () => {
    return {
        roles,
        usersRoles,
        list: [],
        recordList: [],
        record: {},
        $record: {},
        addRecord: {},
        resetItem: {},
        mode: 'list',
        searchActive: false,
        filter: newFilter()
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
        state.filter = newFilter()
    }

}
export const actions = {
    update ({dispatch, commit, state}, {data, id}) {
        const url = `/users/${id}`
        return dispatch('api/put', {url, data}, root)
            .then(() => {
                commit('setAddMode')
            })
    },
    insert ({dispatch, commit}, {data}) {
        const url = `/users`
        return dispatch('api/post', {url, data}, root)
    },
    save ({dispatch, commit, state, getters}) {
        let data = state.$record

        if (getters.isAddMode) {
            return dispatch('api/post', {url: `/api/users`, data}, root)
                .then(r => {
                    commit('addRecord', data)
                    commit('set$Record', {})
                    return r
                })
        } else {
            let id = data.code
            return dispatch('update', {data, id})
                .then(r => {
                    commit('addRecord', data)
                    commit('set$Record', {})
                    return r
                })



        }
    },
    delete ({dispatch, commit, state}, id) {
        const url = `/api/users/${id}`
        return dispatch('api/delete', {url}, root)
            .then(res => dispatch('load', {}))
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
            return dispatch('api/get', {url: `/api/users`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            const url = `/api/users/${id}`
            return dispatch('api/get', {url, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    }
}

export const getters = {
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add'
}

