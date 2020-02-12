<template>
  <reportlist/>
</template>

<script>
  import reportlist  from '../../components/Report/reportlist'
  const root = {root: true}

  export default {
    components: {reportlist},
    fetch ({store}) {
        store.dispatch('reports/load', {}, root)
    }
  }
</script>

<style>

</style>
