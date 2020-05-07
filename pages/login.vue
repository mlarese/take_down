<template>
  <login />
</template>
<script>
  import Login from '../components/Login/Login'
  import _delay from 'lodash/delay'

  export default {
    components: {Login},
    data () {
      return {
        visible: true
      }
    },
    layout: 'empty'
  }
</script>
