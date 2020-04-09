<!--eslint-disable-->
<template>
    <profile-form-form />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import ProfileForm from '../../components/Profile/ProfileForm'
  import guid from 'uuid/v1'
  export default {
    components: {
        ProfileForm
    },
    fetch({store}) {
        store.commit('profiles/setRecord',{portout_flag:'N', guid: guid()},{root: true})
        store.commit('profiles/setAddMode',null,{root: true})
    }
  }
</script>
