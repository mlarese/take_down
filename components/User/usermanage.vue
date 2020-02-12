<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <userform/>
        </v-card>
    </v-flex>
</template>

<script>
    import userform from './userform'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            userform
        },
        computed: {
            ...mapState('users', ['$record', 'record'])
        },
        methods: {
            ...mapActions('users', ['save'])
        }
    }
</script>

<style>

</style>
