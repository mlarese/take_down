<!--eslint-disable-->
<template>
  <v-app  id="inspire" class="transparent">
    <notifications position="top left" style="margin-top:50px"/>
    <v-content class="back-city">
      <v-container fluid fill-height class="transparent">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    head () {
      return {
        title: 'Take Down',
      }
    },
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
    background-image: url(//gtg.ai//img/sfondo.jpg) !important;
    background-position: center;
  }
</style>
