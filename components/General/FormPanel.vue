<!--eslint-disable-->
<template>
    <v-container fluid class="ma-0 pa-0">
        <v-toolbar dense class="elevation-0 pl-0 mb-0"  color="info" style="font-size:30px !important; ">
            <slot name="header-left" >
                <v-toolbar-title style="font-size:30px !important;">
                    {{ $vuetify.t(title) }}
                </v-toolbar-title>
            </slot>

            <v-spacer/>
            <slot name="header-right"></slot>
        </v-toolbar>

        <v-card slot="container-top" class="elevation-0 pa-1" style="border:1px solid ;border-bottom:0 !important">
            <v-container fluid grid-list-md>
            <slot>

            </slot>
            </v-container>
        </v-card>
    </v-container>
</template>
<script>
  export default {
    name: 'FormPanel',
    props: {
      title: {type: String, default: ''}
    }
  }
</script>
