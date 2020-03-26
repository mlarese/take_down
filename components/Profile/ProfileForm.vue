<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <!--<div slot="header-right">
            <v-btn class="elevation-0" color="info"   @click="editView" >
                {{$vuetify.t('Edit Profile')}}
            </v-btn>
        </div>-->
        <div slot="header-left">
        <span>{{$vuetify.t('Profile Form')}}</span>
         </div>
            <v-flex xs12 sm12 align-center justify-center text-xs-center>
                <span class="title">
                {{ $record.name}} {{ $record.surname}}
                </span>
            </v-flex>
            <v-flex
                    xs12
                    sm12
                    align-center
                    justify-center
                    layout
                    text-xs-center
            ><span>{{$record.email}}</span>
            </v-flex>
            <br>
            <v-form ref="form" lazy-validation>
                    <div>
                        <v-layout>
                            <v-flex xs12 sm6>
                                <v-text-field
                                        dark
                                        :label="$vuetify.t('Subscription Date')"
                                        v-model="$record.subscription_datetime"
                                        readonly
                                        color="null"

                                ></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm6>
                                <v-text-field
                                        :label="$vuetify.t('Subscription IP')"
                                        v-model="$record.subscription_ip"
                                        readonly
                                        color="null"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs12 sm6>
                                <v-text-field
                                        dark
                                        :label="$vuetify.t('HTTP USER AGENT')"
                                        v-model="$record.HTTP_USER_AGENT"
                                        readonly
                                        color="null"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs3 sm3 style="border: 0px">
                                <v-switch

                                        color="green"
                                        v-model="$record.email_verified"
                                        :label="$vuetify.t('Email Verified')"
                                ></v-switch>
                            </v-flex>
                            <v-flex xs3 sm3>
                                <v-switch
                                        color="green"
                                        v-model="$record.is_user_enabled"
                                        :label="$vuetify.t('User Enabled')"
                                ></v-switch>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex xs4 sm4>
                                <v-text-field
                                        dark
                                        type="number"
                                        :label="$vuetify.t('Number of Submissions')"
                                        v-model="$record.number_of_submissions"
                                        disabled
                                        color="null"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs4 sm4>
                                <v-text-field
                                        dark
                                        type="number"
                                        :label="$vuetify.t('Number of Submissions Accepted')"
                                        v-model="$record.number_of_submissions_accepted"
                                        disabled
                                        color="null"
                                ></v-text-field>
                            </v-flex>

                            <v-flex xs4 sm4>
                                <v-text-field
                                        dark
                                        :label="$vuetify.t('Subscription Date')"
                                        v-model="$record.number_of_submissions_rejected"
                                        disabled
                                        color="null"
                                        type="number"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    dark
                                    :label="$vuetify.t('Name')"
                                    v-model="$record.name"
                                    readonly
                                    color="null"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Surname')"
                                    v-model="$record.surname"
                                    readonly
                                    color="null"
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout>
                        <v-flex xs12 sm6>
                            <v-select
                                    :disabled="!isAdmin"
                                    :label="$vuetify.t('Role')"
                                    v-model="$record.role"
                                    :items="['Agent', 'Importer', 'Exporter','Shop','Distributor','Customer']"
                                    color="null"
                            ></v-select>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    type="email"
                                    :label="$vuetify.t('Email')"
                                    v-model="$record.email"
                                    color="null"
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Web')"
                                    v-model="$record.web"
                                    readonly
                                    color="null"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Phone Number')"
                                    v-model="$record.cell_phone"
                                    readonly
                                    mask="phone"
                                    color="null"
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Company')"
                                    v-model="$record.working_at_company"
                                    color="null"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Company VAT')"
                                    v-model="$record.working_at_company_VAT"
                                    readonly
                                    color="null"
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout>
                        <v-flex xs4 sm4>
                            <v-text-field
                                    :label="$vuetify.t('Country')"
                                    v-model="$record.country"
                                    readonly
                                    color="null"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs4 sm4>
                            <v-text-field
                                    :label="$vuetify.t('City')"
                                    v-model="$record.city"
                                    color="null"
                                    readonly
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs4 sm4>
                            <v-text-field
                                    :label="$vuetify.t('Region')"
                                    v-model="$record.region"
                                    color="null"
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    type="number"
                                    :label="$vuetify.t('ZIPCODE')"
                                    v-model="$record.zipcode"
                                    color="null"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('address')"
                                    v-model="$record.address"
                                    color="null"
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Lat Date Pwd Resetted')"
                                    v-model="$record.last_datetime_pwd_resetted"
                                    color="null"
                            ></v-text-field>
                        </v-flex>
                        </v-layout>

                    <v-spacer/>
                    <v-divider class="mt-5"></v-divider>
                    <v-card-actions>
                        <v-btn color="error" @click="deletes">Delete Profile</v-btn>
                        <v-spacer></v-spacer>

                        <v-btn color="success"  @click="save">Save Details</v-btn>
                    </v-card-actions>
                    </div>
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
            return {}
        },
        computed: {
            ...mapState('profiles', ['$record']),
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

</style>
