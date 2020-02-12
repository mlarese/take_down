<template>
  <Userlist/>
</template>

<script>
  import userlist  from '../../components/User/userlist'
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
