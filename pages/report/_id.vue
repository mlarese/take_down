<!--eslint-disable-->
<template>
    <subscription-form title="Edit Subscription" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import subscriptionForm from '../../components/Subscription/SubscriptionForm'
  export default {
    components: {
        subscriptionForm
    },
    async fetch({store, params}) {
      store.commit('reports/setRecord',{},{root: true})
      store.commit('reports/setEditMode',null,{root: true})
      await store.dispatch('reports/load', {id: params.id}, {root: true})
    }
  }
</script>
