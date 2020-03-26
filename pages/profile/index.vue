<template>
  <div>
    <template>
      <ProfileForm/>
    </template>
  </div>
</template>

<script>
    import ProfileForm from "../../components/Profile/ProfileForm"
    const root = {root: true}

    export default {
        name: "Profile",
        components: {ProfileForm},
        fetch ({store}) {
            store.dispatch('profiles/load', {}, root)
        }
    }
</script>

<style scoped>

</style>
