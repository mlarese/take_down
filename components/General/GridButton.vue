<!--eslint-disable-->
<template>

  <v-btn :disabled="disabled" flat  class="elevation-0 my-0 mr-1 mx-0"  fab dark small @click="$emit('click')">
    <v-icon small :color="color" style="font-size: 18px !important;">{{ icon }}</v-icon>
  </v-btn>
</template>
<script>
  export default {
    props: {
      disabled: {default: false, type:Boolean},
      dark: {default: false, type:Boolean},
      color: {default: 'teal', type:String},
      icon: {default: 'note', type:String}
    }
  }
</script>
