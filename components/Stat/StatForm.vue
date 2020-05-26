<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" title="Stats" >
        <v-form ref="form" class="" lazy-validation>
                <v-layout rows wrap>
                    <v-flex   xs6   >
                        <v-text-field
                                prepend-icon="report"
                                hide-details
                                :label="$vuetify.t('Reported Abuses')"
                                v-model="$record.number_of_submissions"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex   xs6>
                        <v-text-field
                                :prepend-icon="reportStates[0].icon"
                                hide-details
                                :label="$vuetify.t('New Abuses')"
                                v-model="subNew"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex   xs6>
                        <v-text-field
                                :prepend-icon="reportStates[1].icon"
                                hide-details
                                :label="$vuetify.t('Cancelled Abuses')"
                                v-model="subCanc"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex   xs6>
                        <v-text-field
                                :prepend-icon="reportStates[2].icon"
                                hide-details
                                :label="$vuetify.t('Sent Abuses')"
                                v-model="subSent"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex   xs6>
                        <v-text-field
                                :prepend-icon="reportStates[3].icon"
                                hide-details
                                :label="$vuetify.t('Expired Abuses')"
                                v-model="subExpired"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex   xs6>
                        <v-text-field
                                :prepend-icon="reportStates[4].icon"
                                hide-details
                                :label="$vuetify.t('Accepted Abuses')"
                                v-model="subAccepted"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex   xs6>
                        <v-text-field
                                :prepend-icon="reportStates[5].icon"
                                hide-details
                                :label="$vuetify.t('Rejected Abuses')"
                                v-model="subRejected"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex   xs6>
                        <v-text-field
                                :prepend-icon="reportStates[6].icon"
                                hide-details
                                :label="$vuetify.t('Waiting Abuses')"
                                v-model="subWaiting"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex   xs6>
                        <v-text-field
                                :prepend-icon="reportStates[7].icon"
                                hide-details
                                :label="$vuetify.t('Resolved Abuses')"
                                v-model="subResolved"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                    <v-divider class="mt-3 mb-3"></v-divider>

            </v-form>
        </FormPanel>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import FormPanel from '../General/FormPanel'
    export default {
        components: {FormPanel},
        data () {
            return {
                country: null,
                dirty: false
            }
        },
        computed: {
            ...mapState('profiles', ['$record', 'record']),
            ...mapState('users', ['countries', 'roles', 'usersRoles', 'stats']),
            ...mapState('reports', ['reportStates']),
            subNew () {return this.stateCount(0)},
            subCanc () {return this.stateCount(1)},
            subSent () {return this.stateCount(2)},
            subExpired () {return this.stateCount(3)},
            subAccepted () {return this.stateCount(4)},
            subRejected () {return this.stateCount(5)},
            subWaiting () {return this.stateCount(6)},
            subResolved () {return this.stateCount(7)},
            rolesList () {
              if(this.$record.role === 0) return this.roles
              else return this.usersRoles
            }

        },
        methods: {
            ...mapActions('profiles', ['add', 'save','insert','deletes','verifyEmail']),
            stateDesc (idx) {return this.reportStates[idx] || 0  },
            stateCount (idx) {
              if (this.stats[idx]) return this.stats[idx].status_count
              else return 0
            }
        }

    }
</script>

<style scoped>
    .v-input--selection-controls {
        margin-top: 10px;
        padding-top: 4px;
    }
</style>
