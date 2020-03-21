<!--eslint-disable-->
<template>
    <div>
        <profile-report-form title="New Report"/>
    </div>

</template>

<script>
  import ProfileReportForm from '../../components/Profile/ProfileReportForm'
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
