<!--eslint-disable-->
<template>
    <v-flex container pa-0>
        <v-card>
            <user-form/>
        </v-card>
    </v-flex>
</template>

<script>
    import userForm from './userForm'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            userForm
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
