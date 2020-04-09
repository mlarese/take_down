<template>
  <profile-submission-list/>
</template>

<script>
  import ProfileSubmissionList  from '../../components/Profile/ProfileSubmissionList'
  const root = {root: true}

  export default {
    components: {ProfileSubmissionList},
    fetch ({store}) {
        store.dispatch('profileReports/load', {}, root)
    }
  }
</script>

<style>

</style>
