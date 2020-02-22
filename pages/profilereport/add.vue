<!--eslint-disable-->
<template>
    <profile-report-form title="New Report" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import profileReportForm from '../../components/Profile/profileReportForm'
  import guid from 'uuid/v1'
  export default {
    components: {
        profileReportForm
    },
    fetch({store}) {
        store.commit('profileReports/setRecord',{portout_flag:'N', guid: guid()},{root: true})
        store.commit('profileReports/setAddMode',null,{root: true})
    }
  }
</script>
