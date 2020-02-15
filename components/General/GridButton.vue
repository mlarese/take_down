<!--eslint-disable-->
<template>

  <v-btn :disabled="disabled" :dark="dark"  :color="color"  small  fab dark small class="elevation-0" @click="$emit('click')">
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
