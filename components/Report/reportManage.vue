<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <report-form/>
        </v-card>
    </v-flex>
</template>

<script>
    import reportForm from './reportForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            reportForm
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
