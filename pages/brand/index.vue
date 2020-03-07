<template>
  <brand-list/>
</template>

<script>
  import BrandList  from '../../components/Brand/BrandList'
  const root = {root: true}

  export default {
    components: {BrandList},
    fetch ({store}) {
        store.dispatch('brands/load', {}, root)
    }
  }
</script>

<style>

</style>
