<template>
  <Userlist/>
</template>

<script>
  import userlist  from '../../components/User/userList'
  const root = {root: true}

  export default {
    components: {userlist},
    fetch ({store}) {
        store.dispatch('users/load', {}, root)
    }
  }
</script>

<style>

</style>
