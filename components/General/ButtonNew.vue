<!--eslint-disable-->
<template>
    <v-btn small color="blue-grey darken-3" class="elevation-0">
        <v-icon small>add</v-icon>
        {{$vuetify.t(title)}}
    </v-btn>
</template>
<script>
  export default {
    name: 'ButtonNew',
    props: {
      title: {default: '', type: String}
    }
  }
</script>
