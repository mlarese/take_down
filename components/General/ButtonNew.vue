<!--eslint-disable-->
<template>
    <v-btn
           :color="color"
           medium
           absolute
           top
           dark
           right
           fab class="elevation-2">
        <v-icon style="size: 40px">add</v-icon>
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
