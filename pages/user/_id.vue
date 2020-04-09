<!--eslint-disable-->
<template>
    <profile-form/>
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import ProfileForm from "../../components/Profile/ProfileForm"
  export default {
    components: {
        ProfileForm
    },
    async fetch({store, params}) {
      store.commit('profiles/setRecord',{},{root: true})
      store.commit('profiles/setEditMode',null,{root: true})
      await store.dispatch('profiles/load', {id: params.id}, {root: true})
    }
  }
</script>
