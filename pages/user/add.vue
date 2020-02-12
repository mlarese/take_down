<!--eslint-disable-->
<template>
    <userform title="New User" />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import userform from '../../components/User/userform'
  import guid from 'uuid/v1'
  export default {
    components: {
        userform
    },
    fetch({store}) {
        store.commit('users/setRecord',{portout_flag:'N', guid: guid()},{root: true})
        store.commit('users/setAddMode',null,{root: true})
    }
  }
</script>
