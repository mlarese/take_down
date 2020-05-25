<template>
  <div>
    <template>
      <ProfileFormOri/>
    </template>
  </div>
</template>

<script>
    import ProfileFormOri from "../../components/Stat/ProfileFormOri"
    const root = {root: true}

    export default {
        name: "Profile",
        components: {ProfileFormOri},
        fetch ({store}) {
          const id = store.$auth.user.id
          store.dispatch('profiles/load', {id}, root)
        }
    }
</script>

<style scoped>

</style>
