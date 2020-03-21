<!--eslint-disable-->
<template>
    <user-form title="Edit User" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import userForm from "../../components/User/UserForm"
  export default {
    components: {
        userForm
    },
    async fetch({store, params}) {
      store.commit('users/setRecord',{},{root: true})
      store.commit('users/setEditMode',null,{root: true})
      await store.dispatch('users/load', {id: params.id}, {root: true})
    }
  }
</script>
