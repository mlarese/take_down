<template>
  <report-list/>
</template>

<script>
  import reportList  from '../../components/Report/reportList'
  const root = {root: true}

  export default {
    components: {reportList},
    fetch ({store}) {
        store.dispatch('reports/load', {}, root)
    }
  }
</script>

<style>

</style>
