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
export const state = () => {
    return {
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
        const url = `/brands/${id}`
        return dispatch('api/put', {url, data}, root)
            .then(() => {
                commit('setAddMode')
            })
    },
    insert ({dispatch, commit}, {data}) {
        const url = `/brands`
        return dispatch('api/post', {url, data}, root)
    },
    search ({dispatch, commit, state}) {
        let data = state.filter
        commit('setList', [])
        return dispatch('api/post', {url: `/api/brands`, data}, root)
            .then(res => {
                commit('setList', res.data)
                commit('setPagination')
                commit('setSearchActive', true)
                return res
            })
    },
    delete ({dispatch, commit, state}, id) {
        const url = `/api/brands/${id}`
        return dispatch('api/delete', {url}, root)
            .then(res => dispatch('load', {}))
    },
    save ({dispatch, commit, state, getters}) {
        let data = state.$record

        if (getters.isAddMode) {
            return dispatch('api/post', {url: `/api/brands`, data}, root)
                .then(r => {
                    commit('addRecord', data)
                    commit('set$Record', {})
                    return r
                })
        } else {
            let id = data.lp_id
            return dispatch('api/put', {url: `/api/brands/${id}`, data}, root)
                .then(r => {
                    commit('addRecord', data)
                    commit('set$Record', {})
                    return r
                })



        }
    },
    add ({dispatch, commit}, {data}) {
        const url = `/brands`
        return dispatch('api/post', {url, data}, root)
    },
    edit({commit}, item) {
        commit('set$Record', item)
        commit('setAddMode', {item, active:false})


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
            return dispatch('api/get', {url: `/api/brands`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            const url = `/api/brands/${id}`
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

