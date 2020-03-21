<template>
  <user-list/>
</template>

<script>
  import userList  from '../../components/User/userList'
  const root = {root: true}

  export default {
    components: {userList},
    fetch ({store}) {
        store.dispatch('users/load', {}, root)
    }
  }
</script>
