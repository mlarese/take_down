<!--eslint-disable-->
<template>
    <v-btn color="info" class="elevation-0">
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
