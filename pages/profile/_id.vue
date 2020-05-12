<!--eslint-disable-->
<template>
    <ProfileForm/>
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import ProfileForm from '../../components/Profile/ProfileForm'
  export default {
    components: {
      ProfileForm
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
