<template>
  <div>
    <template>
      <StatForm/>
    </template>
  </div>
</template>

<script>
    import StatForm from "../../components/Stat/StatForm"
    const root = {root: true}

    export default {
        name: "Profile",
        components: {StatForm},
        fetch ({store}) {
          const id = store.$auth.user.id
          store.dispatch('profiles/load', {id}, root)
          store.dispatch('users/stats', {}, root)
        }
    }
</script>

<style scoped>

</style>
