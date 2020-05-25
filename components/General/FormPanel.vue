<!--eslint-disable-->
<template>
    <div class=" grid-list-xl">
        <v-toolbar dense class="elevation-4 mb-0 "   style="border-bottom: 1px solid #dddddd !important;">

            <slot name="header-left">

                    <v-toolbar-title class="body-1 " style="width:100%;text-align: left;">

                        <v-btn v-if="false"small class="ml-4" flat fab @click="$router.push(-1)" >
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                        <div class="pl-3">{{ $vuetify.t(title) }}</div>
                    </v-toolbar-title>
            </slot>

            <v-spacer/>
            <slot name="header-right"></slot>
        </v-toolbar>

        <v-card slot="container-top" class="elevation-2 pa-1" _style="border:0px solid;background-color: #212121 ;border-bottom:0 !important">
            <v-container class="pt-1" fluid grid-list-md>
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
