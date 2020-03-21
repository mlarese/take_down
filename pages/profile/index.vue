<template>
  <div>
    <template>
      <ProfileForm
        v-for="(profiles, index) in list"
        :item="profiles"
        :index="index"
        :key="index"/>
    </template>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ProfileForm from "../../components/Profile/ProfileForm"

    export default {
        name: "Index",
        components: {ProfileForm},
        computed: {
            ...mapState('profiles', ['list']),

        },

        fetch({store}) {
            console.log('fetch')

            store.dispatch('profiles/load',{}, {root: true})
        }
    }
</script>

<style scoped>

</style>
