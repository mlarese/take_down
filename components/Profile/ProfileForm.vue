<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" title="Profile" >
            <v-form ref="form" class="" lazy-validation>
                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                hide-details
                                disabled
                                dark
                                :label="$vuetify.t('Name')"
                                v-model="$record.name"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                hide-details
                                :label="$vuetify.t('Surname')"
                                v-model="$record.surname"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout rows wrap>
                <v-flex xs12 sm6>
                    <v-text-field
                            disabled
                            hide-details
                            :disabled="!isAdmin"
                            :label="$vuetify.t('Role')"
                            v-model="$record.role"
                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            disabled
                            hide-details
                            type="email"
                            :label="$vuetify.t('Email')"
                            v-model="$record.email"
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('Web')"
                            v-model="$record.web"
                            readonly
                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('Phone Number')"
                            v-model="$record.cell_phone"
                            readonly
                            mask="phone"
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('Company')"
                            v-model="$record.working_at_company"
                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('Company VAT')"
                            v-model="$record.working_at_company_VAT"
                            readonly
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                <v-flex xs12 sm4>
                    <v-select
                            hide-details
                            dense
                            :item-value="code"
                            :item-text="name"
                            :items="countries"
                            :label="$vuetify.t('Country')"
                            color="null"
                            v-model="country" />
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('City')"
                            v-model="$record.city"
                            color="null"
                            readonly
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('Region')"
                            v-model="$record.region"
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                hide-details
                                type="number"
                                :label="$vuetify.t('Zip/Code')"
                                v-model="$record.zipcode"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('Address')"
                            v-model="$record.address"
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Subscription Date')"
                                v-model="$record.subscription_datetime"
                                readonly
                                color="null"

                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                hide-details
                                disabled
                                :label="$vuetify.t('Subscription IP')"
                                v-model="$record.subscription_ip"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 sm6 v-if="isAdmin">
                        <v-text-field
                                dark
                                hide-details
                                :label="$vuetify.t('HTTP User Agent')"
                                v-model="$record.HTTP_USER_AGENT"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm3 style=" ">
                        <v-switch

                                color="green"
                                hide-details
                                v-model="$record.email_verified"
                                :label="$vuetify.t('Email Verified')"
                        ></v-switch>
                    </v-flex>

                    <v-flex xs12 sm3>
                        <v-switch
                                color="green"
                                hide-details
                                v-model="$record.is_user_enabled"
                                :label="$vuetify.t('User Enabled')"
                        ></v-switch>
                    </v-flex>

                </v-layout>

                <v-layout rows wrap>
                    <v-flex xs12 sm3>
                        <v-text-field
                                hide-details
                                type="number"
                                :label="$vuetify.t('Number of Submissions')"
                                v-model="$record.number_of_submissions"
                                disabled
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3>
                        <v-text-field
                                hide-details
                                type="number"
                                :label="$vuetify.t('Number of Submissions Accepted')"
                                v-model="$record.number_of_submissions_accepted"
                                disabled
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Subscription Date')"
                                v-model="$record.number_of_submissions_rejected"
                                disabled
                                color="null"
                                type="number"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3 v-if="isAdmin">
                        <v-text-field
                                hide-details
                                disabled
                                :label="$vuetify.t('Password Resetted')"
                                v-model="$record.last_datetime_pwd_resetted"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                    <v-divider class="mt-2 mb-1"></v-divider>
                    <v-card-actions>
                        <v-btn medium color="red darken-3" class="elevation-0" @click="deletes">Delete Profile</v-btn>
                        <v-spacer></v-spacer>

                        <v-btn medium color="green darken-2" class="elevation-0" @click="save">Save Profile</v-btn>
                    </v-card-actions>

            </v-form>
        </FormPanel>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import FormPanel from '../General/FormPanel'
    export default {
        name: "ProfileForm",
        components: {FormPanel},
        data () {
            return {
                country: null
            }
        },
        computed: {
            ...mapState('profiles', ['$record','countries']),
            ...mapGetters('app', ['isAdmin'])

        },
        methods: {
            onAdd () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('profiles', ['add', 'save','insert','deletes']),

        }

    }
</script>

<style scoped>
    .v-input--selection-controls {
        margin-top: 10px;
        padding-top: 4px;
    }
</style>
