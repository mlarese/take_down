<template>
  <report-list/>
</template>

<script>
  import reportList  from '../../components/Subscription/SubscriptionList'
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
