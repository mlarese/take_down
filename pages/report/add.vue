<!--eslint-disable-->
<template>
    <report-form title="New Report" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import reportForm from '../../components/Report/ReportForm'
  import guid from 'uuid/v1'
  export default {
    components: {
        reportForm
    },
    fetch({store}) {
        store.commit('reports/setRecord',{portout_flag:'N', guid: guid()},{root: true})
        store.commit('reports/setAddMode',null,{root: true})
    }
  }
</script>
