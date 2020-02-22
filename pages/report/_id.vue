<!--eslint-disable-->
<template>
    <report-form title="Edit Report" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import reportForm from '../../components/Profile/profileReportForm'
  export default {
    components: {
        reportForm
    },
    async fetch({store, params}) {
      store.commit('reports/setRecord',{},{root: true})
      store.commit('reports/setEditMode',null,{root: true})
      await store.dispatch('reports/load', {id: params.id}, {root: true})
    }
  }
</script>
