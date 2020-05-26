<!--eslint-disable-->
<template>
    <v-btn
           :color="color"
           medium
           dark
            class="elevation-0">
        <v-icon style="size: 40px">add</v-icon>
        Add abuse
    </v-btn>
</template>
<script>
  export default {
    props: {
      color: {default: 'green', type: String},
      title: {default: '', type: String}
    }
  }
</script>
