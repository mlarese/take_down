<!--eslint-disable-->
<template>
    <Reportform title="Edit Report" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import reportform from '../../components/Report/reportform'
  export default {
    components: {
        reportform
    },
    async fetch({store, params}) {
      store.commit('reports/setRecord',{},{root: true})
      store.commit('reports/setEditMode',null,{root: true})
      await store.dispatch('reports/load', {id: params.id}, {root: true})
    }
  }
</script>
