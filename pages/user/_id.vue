<!--eslint-disable-->
<template>
    <user-form/>
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import UserForm from "../../components/User/UserForm"
  export default {
    components: {
        UserForm
    },
    async fetch({store, params, $auth}) {
      store.commit('users/setRecord',{},{root: true})
      store.commit('users/setEditMode',null,{root: true})
      await store.dispatch('users/load', {id: params.id}, {root: true})
       .catch(e => {
          alert('Your session is expired')
          $auth.logout()
        })
    }
  }
</script>
