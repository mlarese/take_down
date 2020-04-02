<!--eslint-disable-->
<template>
    <v-btn small :color="color" class="elevation-0">
        {{$vuetify.t(title)}}
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
