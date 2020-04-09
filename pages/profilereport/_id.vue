<!--eslint-disable-->
<template>
    <profile-submission-form title="Edit Report" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import ProfileSubmissionForm from '../../components/Profile/ProfileSubmissionForm'
  export default {
    components: {
        ProfileSubmissionForm
    },
    async fetch({store, params}) {
      store.commit('profileReports/setRecord',{},{root: true})
      store.commit('profileReports/setEditMode',null,{root: true})
      await store.dispatch('profileReports/load', {id: params.id}, {root: true})
    }
  }
</script>
