<!--eslint-disable-->
<template>
    <div class=" grid-list-xl">
        <v-toolbar dense class="elevation-4 mb-0 pl-4"   style="border-bottom: 2px solid #dddddd !important">

            <slot name="header-left">
                <v-toolbar-title class="display-5">
                    {{ $vuetify.t(title) }}
                </v-toolbar-title>
            </slot>

            <v-spacer/>
            <slot name="header-right"></slot>
        </v-toolbar>

        <v-card slot="container-top" class="elevation-0 pa-1" style="border:0px solid;background-color: #212121 ;border-bottom:0 !important">
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
