<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" title="Profile" >

        <div slot="header-right" >
            <v-btn  flat small fab class="elevation-0"  @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div>

        <v-form ref="form" class="" lazy-validation>
            <v-layout rows wrap>
                <v-flex xs12 sm5>
                    <v-text-field
                            hide-details

                            dark
                            :label="$vuetify.t('Name')"
                            v-model="$record.name"

                            color="null"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm4>
                    <v-text-field

                            hide-details
                            :label="$vuetify.t('Surname')"
                            v-model="$record.surname"

                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm3 class="pt-3">
                    <v-switch
                            style="position: relative; top:-4px"
                            height="33"
                            color="green"
                            hide-details
                            v-model="$record.is_user_enabled"
                            :label="$vuetify.t('Enabled')"
                    ></v-switch>
                </v-flex>
            </v-layout>

            <v-layout rows wrap>
                <v-flex xs12 sm6>
                    <v-select
                            hide-details
                            :="!isAdmin"
                            :items="roles"
                            item-value="value"
                            item-text="text"
                            :label="$vuetify.t('Role')"
                            v-model="$record.role"
                            color="null"
                    ></v-select>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field

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

                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            label="Phone Number"
                            v-model="$record.cell_phone"
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
                    <v-autocomplete
                            hide-details
                            dense
                            :items="countries"
                            item-value="name"
                            item-text="name"
                            :label="$vuetify.t('Country')"
                            v-model="$record.country"
                            :color="null"
                    ></v-autocomplete>
                </v-flex>

                <v-flex xs12 sm3>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('City')"
                            v-model="$record.city"
                            color="null"
                            readonly
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm2>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('Region')"
                            v-model="$record.region"
                            color="null"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm3>
                    <v-text-field
                            hide-details
                            type="number"
                            :label="$vuetify.t('Zip/Code')"
                            v-model="$record.zipcode"
                            color="null"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout rows wrap>
                <v-flex xs12 >
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
                            v-model="created_at"
                            readonly
                            color="null"

                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details

                            :label="$vuetify.t('Submission IP')"
                            v-model="$record.subscription_ip"
                            color="null"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout rows wrap>
                <v-flex xs12   >
                    <v-text-field
                            dark
                            hide-details
                            :label="$vuetify.t('HTTP User Agent')"
                            v-model="$record.HTTP_USER_AGENT"
                            readonly
                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm3 style=" " v-if="false">
                    <v-switch

                            color="green"
                            hide-details
                            v-model="$record.email_verified"
                            :label="$vuetify.t('Email Verified')"
                    ></v-switch>
                </v-flex>


            </v-layout>

            <v-layout rows wrap>
                <v-flex xs12 sm3>
                    <v-text-field
                            hide-details
                            type="number"
                            :label="$vuetify.t('Submissions')"
                            v-model="$record.number_of_submissions"

                            color="null"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm3>
                    <v-text-field
                            hide-details
                            type="number"
                            :label="$vuetify.t('Accepted')"
                            v-model="$record.number_of_submissions_accepted"

                            color="null"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm3>
                    <v-text-field
                            hide-details
                            :label="$vuetify.t('Rejected')"
                            v-model="$record.number_of_submissions_rejected"

                            color="null"
                            type="number"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm3   >
                    <v-text-field
                            hide-details
                            readonly
                            :label="$vuetify.t('Password Resetted')"
                            v-model="last_datetime_pwd_resetted"
                            color="null"
                    ></v-text-field>

                </v-flex>
            </v-layout>

            <v-layout row wrap class="mt-2">
                <v-flex
                        xs12
                        sm12
                        align-center
                        justify-center
                        layout
                        text-xs-center
                >
                    <v-btn  flat color="green darken-2" class="elevation-0"  @click="onSave">
                        {{$vuetify.t('Save') }}
                    </v-btn>
                </v-flex>
            </v-layout>

        </v-form>
    </FormPanel>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import FormPanel from '../General/FormPanel'
    import {formatDate} from '../../assets/helpers'
    export default {
        name: "ProfileForm",
        components: {FormPanel},
        data () {
            return {

                country: null

            }
        },
        computed: {
            ...mapState('users', ['$record','countries']),
            ...mapState('users', ['roles']),
            ...mapGetters('app', ['isAdmin']),
            last_datetime_pwd_resetted () {
              return this.formatDate(this.$record.last_datetime_pwd_resetted)
            },
            created_at () {
                return this.formatDate(this.$record.created_at)
            }
        },
        methods: {
            formatDate,
            onSave () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('users', ['add', 'save','insert','deletes']),

        }

    }
</script>

<style scoped>
    .v-input--selection-controls {
        margin-top: 10px;
        padding-top: 4px;
    }
</style>
