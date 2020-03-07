<!--eslint-disable-->
<template>
    <brand-form title="Edit Brands" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import BrandForm from '../../components/Brand/BrandForm'
  export default {
    components: {
        BrandForm
    },
    async fetch({store, params}) {
      store.commit('brands/setRecord',{},{root: true})
      store.commit('brands/setEditMode',null,{root: true})
      await store.dispatch('brands/load', {id: params.id}, {root: true})
    }
  }
</script>
