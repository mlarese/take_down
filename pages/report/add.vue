<!--eslint-disable-->
<template>
    <reportform title="New Report" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import reportform from '../../components/Report/reportform'
  import guid from 'uuid/v1'
  export default {
    components: {
        reportform
    },
    fetch({store}) {
        store.commit('reports/setRecord',{portout_flag:'N', guid: guid()},{root: true})
        store.commit('reports/setAddMode',null,{root: true})
    }
  }
</script>
