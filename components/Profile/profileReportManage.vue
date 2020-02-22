<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <campaign-forms/>
        </v-card>
    </v-flex>
</template>

<script>
    import profileReportForm from './profileReportForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            profileReportForm
        },
        computed: {
            ...mapState('profileReports', ['$record', 'record'])
        },
        methods: {
            ...mapActions('profileReports', ['save'])
        }
    }
</script>

<style>

</style>
