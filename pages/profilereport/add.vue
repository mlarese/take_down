<!--eslint-disable-->
<template>
        <profile-report-form title="New Report"/>
</template>

<script>
  import ProfileReportForm from '../../components/Report/ReportForm'
  export default {
    components: {
        ProfileReportForm
    },
    fetch({store}) {
        store.commit('profileReports/setRecord',{},{root: true})
        store.commit('profileReports/setAddMode',null,{root: true})
    }
  }
</script>
