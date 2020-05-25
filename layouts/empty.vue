<!--eslint-disable-->
<template>
  <v-app >
    <notifications position="top right" style="margin-top:50px"/>
    <v-content >
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <AppFooter/>
  </v-app>
</template>

<script>
  import AppFooter from "./AppFooter";
  import {mapState} from 'vuex'
  export default {
    components: {AppFooter},
    computed: {
      ...mapState('app', ['title']),
      ...mapState('api', ['notification'])
    },
    watch: {
      'notification.id' (val) {
        this.$notify(this.notification)
      }
    }
  }
</script>

<style>
  .back-city{

    background-position: center bottom;
    background-repeat: no-repeat;


  }
</style>
