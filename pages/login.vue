<template>
  <login v-if="visible"/>
</template>
<script>
  import Login from '../components/Login/Login'
  //import Login from '../components/Login'
  import _delay from 'lodash/delay'

  export default {
    components: {Login},
    data () {
      return {
        visible: false
      }
    },
    layout: 'empty',
    mounted () {
      if (this.$route.path === '/login') {
        _delay(() => { this.visible = true }, 300)
      }
    }
  }
</script>
