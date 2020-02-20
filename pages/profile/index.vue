<template>
  <div>
    <profile
      v-for="(profiles, index) in list"
      :item="profiles"
      :index="index"
      :key="index"/>
  </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import profile from "../../components/Profile/profile"
    const root = {root: true}

    export default {
        name: "Index",
        components: {profile},
        computed: {
            ...mapState('profiles', ['list']),

        },

        fetch({store}) {
            console.log('fetchs')

            store.dispatch('profiles/load',{}, {root: true})
        }
    }
</script>

<style scoped>

</style>
