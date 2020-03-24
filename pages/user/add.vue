<!--eslint-disable-->
<template>
    <user-form />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import userForm from '../../components/User/UserForm'
  import guid from 'uuid/v1'
  export default {
    components: {
        userForm
    },
    fetch({store}) {
        store.commit('users/setRecord',{portout_flag:'N', guid: guid()},{root: true})
        store.commit('users/setAddMode',null,{root: true})
    }
  }
</script>
