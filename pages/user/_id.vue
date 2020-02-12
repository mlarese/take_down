<!--eslint-disable-->
<template>
    <userform title="Edit User" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import userform from "../../components/User/userform"
  export default {
    components: {
        userform
    },
    async fetch({store, params}) {
      store.commit('users/setRecord',{},{root: true})
      store.commit('users/setEditMode',null,{root: true})
      await store.dispatch('users/load', {id: params.id}, {root: true})
    }
  }
</script>
