<!--eslint-disable-->
<template>
    <subscription-form title="New Report" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import subscriptionForm from '../../components/Subscription/SubscriptionForm'
  import guid from 'uuid/v1'
  export default {
    components: {
        subscriptionForm
    },
    fetch({store}) {
        store.commit('reports/setRecord',{portout_flag:'N', guid: guid()},{root: true})
        store.commit('reports/setAddMode',null,{root: true})
    }
  }
</script>
