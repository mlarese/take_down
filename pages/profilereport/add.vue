<!--eslint-disable-->
<template>
        <profile-submission-form title="New Report"/>
</template>

<script>
  import ProfileSubmissionForm from '../../components/Profile/ProfileSubmissionForm'
  export default {
    components: {
        ProfileSubmissionForm
    },
    fetch({store}) {
        store.commit('profileReports/setRecord',{},{root: true})
        store.commit('profileReports/setAddMode',null,{root: true})
    }
  }
</script>
