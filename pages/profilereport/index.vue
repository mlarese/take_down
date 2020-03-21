<template>
  <profile-report-list/>
</template>

<script>
  import ProfileReportList  from '../../components/Profile/ProfileReportList'
  const root = {root: true}

  export default {
    components: {ProfileReportList},
    fetch ({store}) {
        store.dispatch('profileReports/load', {}, root)
    }
  }
</script>

<style>

</style>
