<!--eslint-disable-->
<template>
    <submission-form title="New Report" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import SubmissionForm from '../../components/Submission/SubmissionForm'
  import guid from 'uuid/v1'
  export default {
    components: {
        SubmissionForm
    },
    fetch({store}) {
        store.commit('reports/setRecord',{portout_flag:'N', guid: guid()},{root: true})
        store.commit('reports/setAddMode',null,{root: true})
    }
  }
</script>
