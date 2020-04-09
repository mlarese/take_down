<!--eslint-disable-->
<template>
    <submission-form title="Edit Subscription" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import SubmissionForm from '../../components/Submission/SubmissionForm'
  export default {
    components: {
        SubmissionForm
    },
    async fetch({store, params}) {
      store.commit('reports/setRecord',{},{root: true})
      store.commit('reports/setEditMode',null,{root: true})
      await store.dispatch('reports/load', {id: params.id}, {root: true})
    }
  }
</script>
