<!--eslint-disable-->
<template>
  <v-app id="inspire" class="grey lighten-2">
    <notifications position="top right" style="margin-top:50px"/>
    <v-content class="back-city">
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
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
    background-image:  url(https://www.griffeshield.com/wp-content/uploads/2019/04/banner-v2.jpg) !important;
    background-color: rgb(0,0,0,0.9) ;
    background-position: center bottom;
    background-repeat: no-repeat;


  }
</style>
