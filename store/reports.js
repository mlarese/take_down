import _cloneDeep from 'lodash/cloneDeep'
import _keyBy from 'lodash/keyBy'

import Vue from 'vue'
import addDays from 'date-fns/addDays'
import format from 'date-fns/format'

let today = new Date()
let fmtToday = format(today, 'yyyy-MM-dd')

export const reportStates = [
    {icon: 'mdi-new-box',cur: 'Inserito', text: 'Inserted', value: 0},
    {icon: 'mdi-close-circle',cur: 'Annullato', text: 'Canceled', value: 1},
    {icon: 'mdi-transfer-right',cur: 'Trasmesso', text: 'Sent', value: 2},
    {icon: 'mdi-calendar-remove',cur: 'Scaduto', text: 'Expired', value: 3},
    {icon: 'mdi-thumb-up',cur: 'Accettato', text: 'Accepted', value: 4},
    {icon: 'mdi-cancel',cur: 'Non accettato', text: 'Rejected', value: 5},
    {icon: 'mdi-timer-sand',cur: 'In lavorazione', text: 'Waiting', value: 6},
    {icon: 'mdi-checkbox-marked-circle',cur: 'Risolto', text: 'Resolved', value: 7}
]


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
    update ({dispatch, commit, state}, {data, id}) {
        const url = `/api/customer/submissionrecord/${id}`
        return dispatch('api/put', {url, data}, root)
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
            return dispatch('api/get', {url: `/api/customer/submissions`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            const url = `/api/customer/submissions/${id}`
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
        const url = `/api/reports/${id}`
        return dispatch('api/delete', {url}, root)
            .then(res => dispatch('load', {}))
    }
}

export const getters = {
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add',
    reportStatesByKey: state => _keyBy(state.reportStates, 'cur')
}

