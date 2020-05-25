<!--eslint-disable-->
<template>
    <div class="grid-container ma-0 pa-0">

        <v-toolbar dense class="elevation-0 mb-0 pl-2" card style="border: 1px solid #e3e3e3 !important;">
            <slot name="header-left">
                <v-toolbar-title class="body-1">
                    {{ $vuetify.t(title) }}
                </v-toolbar-title>
            </slot>

            <v-spacer/>
            <slot name="header-right"></slot>
        </v-toolbar>


        <slot name="container-top"></slot>

        <slot name="body-top"></slot>
        <slot name="body-center"></slot>
        <slot name="body-bottom"></slot>

        <div style="position: relative; margin-top:12px">
            <slot name="fab"></slot>
        </div>

    </div>

</template>

<script>
    export default {
        components: {},
        props: {
            title: {default: 'title', type: String}
        }
    }
</script>
