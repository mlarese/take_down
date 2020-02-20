<template>
  <profilereport-list/>
</template>

<script>
  import profilereportList  from '../../components/Profile/profilereportlist'
  const root = {root: true}

  export default {
    components: {profilereportList},
    fetch ({store}) {
        store.dispatch('profileReports/load', {}, root)
    }
  }
</script>

<style>

</style>
