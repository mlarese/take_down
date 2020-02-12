<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <userform/>
        </v-card>
    </v-flex>
</template>

<script>
    import reportform from './reportform'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            reportform
        },
        computed: {
            ...mapState('reports', ['$record', 'record'])
        },
        methods: {
            ...mapActions('reports', ['save'])
        }
    }
</script>

<style>

</style>
