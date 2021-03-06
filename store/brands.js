import _cloneDeep from 'lodash/cloneDeep'
import Vue from 'vue'
import _sortedUniq from 'lodash/tail'
import _tail from 'lodash/sortedUniq'
import _union from 'lodash/union'
import csvparser from 'papaparse'

const newFilter = {}
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
        filter: newFilter
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
        state.filter = newFilter
    }

}
export const actions = {
    load ({dispatch, commit, state}) {
        const d = new Date();
        const n = d.getTime();
        const {origin, pathname} = window.location
        return dispatch('api/get', {url: `${origin}${pathname}resources/brands.csv?${n}`}, root)
            .then(res => {
              const jsondt = csvparser.parse(res.data, {header: false})

              commit('setList', _union(...jsondt.data))
              return res

            })

    }
}

export const getters = {
    brandsList: state => _tail(state.list).sort(),
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add'
}

