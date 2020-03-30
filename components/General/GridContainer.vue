<!--eslint-disable-->
<template>
    <div class="grid-container ma-0">

        <v-toolbar dense class="elevation-0  mb-0 pl-4"   style="border-bottom: 1px solid #dddddd !important">
            <slot name="header-left">
                <v-toolbar-title class="display-5">
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
