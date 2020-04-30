<!--eslint-disable-->
<template>

  <v-btn :disabled="disabled" :dark="dark" flat :color="color" class="elevation-1 my-0 mr-1 mx-0"  fab dark small dark @click="$emit('click')">
    <v-icon small style="font-size: 18px !important;">{{ icon }}</v-icon>
  </v-btn>
</template>
<script>
  export default {
    props: {
      disabled: {default: false, type:Boolean},
      dark: {default: true, type:Boolean},
      color: {default: 'teal', type:String},
      icon: {default: 'note', type:String}
    }
  }
</script>
