<!--eslint-disable-->
<template>
        <profile-report-form title="New Report"/>
</template>

<script>
  import ProfileReportForm from '../../components/Subscription/SubscriptionForm'
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
