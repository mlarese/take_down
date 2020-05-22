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
    fetch({store, $auth, redirect}) {
        if(!$auth.user.is_user_enabled) {
          redirect('/home')
          return
        }
        store.commit('profileReports/setRecord',{send_coordinates: true},{root: true})
        store.commit('profileReports/setAddMode',null,{root: true})
    }
  }
</script>
