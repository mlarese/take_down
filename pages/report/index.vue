<template>
  <submission-list/>
</template>

<script>
  import SubmissionList  from '../../components/Submission/SubmissionList'
  const root = {root: true}

  export default {
    components: {SubmissionList},
    fetch ({store}) {
        store.dispatch('reports/load', {}, root)
    }
  }
</script>

<style>

</style>
