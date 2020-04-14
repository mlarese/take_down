<!--eslint-disable-->
<template>
    <v-btn small :color="color" fab class="elevation-0">
        <v-icon>add</v-icon>
    </v-btn>
</template>
<script>
  export default {
    props: {
      color: {default: 'green darken-2', type: String},
      title: {default: '', type: String}
    }
  }
</script>
