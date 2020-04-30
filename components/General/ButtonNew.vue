<!--eslint-disable-->
<template>
    <v-btn
           :color="color"
           dark
           small
           absolute
           top
           right
           fab class="elevation-2">
        <v-icon>add</v-icon>
    </v-btn>
</template>
<script>
  export default {
    props: {
      color: {default: 'pink', type: String},
      title: {default: '', type: String}
    }
  }
</script>
