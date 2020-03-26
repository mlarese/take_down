<!--eslint-disable-->
<template>
    <div class="grid-container ma-0">
        <v-toolbar dense class="elevation-0 mb-0"   style="font-size:30px !important;border-bottom: 1px solid #dddddd !important">
            <slot name="header-left">
                <v-toolbar-title class="display-5 " style="font-size:32px !important;">{{ $vuetify.t(title) }}</v-toolbar-title>
            </slot>

            <v-spacer/>
            <slot name="header-right"></slot>
        </v-toolbar>

        <v-card slot="container-top" class="elevation-0 pa-1" style="border:0px solid;background-color: black ;border-bottom:0 !important">
            <v-container fluid grid-list-md>
            <slot>

            </slot>
            </v-container>
        </v-card>
    </div>
</template>
<script>
  export default {
    name: 'FormPanel',
    props: {
      title: {type: String, default: ''}
    }
  }
</script>
