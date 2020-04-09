<!--eslint-disable-->
<template>

    <FormPanel v-bind="$attrs" class="ma-0 pa-0" title="Subscription">

        <div slot="header-right" >
            <v-btn   flat small color="blue-grey darken-3" class="elevation-0"  @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div>
        <v-form ref="form" class="mt-2" lazy-validation>
                <v-layout rows wrap  v-if="isAdmin">
                    <v-flex xs12 sm6 md6 d-flex>
                        <v-text-field
                                hide-details
                                disabled
                                :label="$vuetify.t('Name')"
                                color="null"
                                v-model="$record.name" />
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                hide-details
                                type="number"
                                :label="$vuetify.t('Surname')"
                                v-model="$record.surname"
                                disabled
                                color="null"

                        ></v-text-field>
                    </v-flex>
                </v-layout>
            <v-layout rows wrap  v-if="isAdmin">
                <v-flex xs12 sm4>
                    <v-text-field

                            disabled
                            hide-details
                            :label="$vuetify.t('Country')"
                            v-model="$record.submission_country"
                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                            disabled
                            hide-details
                            :label="$vuetify.t('City')"
                            v-model="$record.submission_city"
                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                            disabled
                            hide-details
                            :label="$vuetify.t('Region')"
                            v-model="$record.submission_region"
                            color="null"
                    ></v-text-field>
                </v-flex>
            </v-layout>
                <v-layout rows wrap>
                <v-flex xs12 sm6 md6>
                    <v-select
                        hide-details
                        dense
                        :items="brandsList"
                        item-value="id"
                        item-text="brand_name"
                        :label="$vuetify.t('Brand')"
                        color="null"
                        v-model="$record.submission_brand" />
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Title')"
                                v-model="$record.submission_title"
                                color="null"

                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 sm6 md6>
                        <v-text-field   dense
                                        :label="$vuetify.t('Url')"
                                        color="null"
                                        hide-details
                                        v-model="$record.submission_url" />
                    </v-flex>

                    <v-flex xs12 sm6 class="custom-select">
                        <v-select
                                :label="$vuetify.t('Status')"
                                v-model="$record.submission_status"
                                disabled
                                color="null"
                                hide-details
                        ></v-select>
                    </v-flex>
                </v-layout>


                <v-layout rows wrap  v-if="isAdmin">
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                type="number"
                                hide-details
                                :label="$vuetify.t('Zip/Code')"
                                v-model="$record.submission_zipcode"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('Address')"
                                v-model="$record.submission_address"
                                color="null"
                                hide-details
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('Location Latitude')"
                                v-model="$record.submission_geo_location_latitude"
                                readonly
                                color="null"
                                hide-details
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('Location Longitude')"
                                v-model="$record.submission_geo_location_longitude"
                                readonly
                                color="null"
                                hide-details
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            <v-layout rows wrap>
                <v-flex xs12 sm6 md6 d-flex>
                    <v-text-field
                            hide-details
                            disabled
                            :label="$vuetify.t('HTTP User Agent')"
                            color="null"
                            v-model="$record.submission_HTTP_USER_AGENT" />
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            type="number"
                            :label="$vuetify.t('IP')"
                            v-model="$record.submission_ip"
                            disabled
                            color="null"

                    ></v-text-field>
                </v-flex>
            </v-layout>

                    <v-layout rows wrap class="mt-2 text-xs-center" style="justify-content: center">
                    <v-flex xs12 sm12 class="text-xs-center">
                        <vue-upload-multiple-image
                            :data-images="images"
                            dark
                            dragText="Drag File"
                            browseText="Browse Text"
                            label="images"
                            primaryText="Image Insert"
                            popupText="This is image is been uploaded from your pc"
                            :maxImage="4"
                            markIsPrimaryText="select image"
                            v-model="$record.pictures"/>
                    </v-flex>
                    <v-flex xs12 sm12 >
                        <v-textarea
                                hide-details
                                color="null"
                                label="Description"
                                v-model="$record.submission_description"/>
                        </v-flex>
                    </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                hide-details
                                :label="$vuetify.t('Submission Date')"
                                color="null"
                                v-model="$record.submission_date" />
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                hide-details
                                :label="$vuetify.t('Submission Status')"
                                color="null"
                                v-model="$record.submission_status_change_datetime" />
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
                    <v-btn  color="green darken-2" class="elevation-0"  @click="onAdd">
                        {{$vuetify.t('Save') }}
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-form>

    </FormPanel>

</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    import FormPanel from '../General/FormPanel'
    import GridButton from '../General/GridButton'
    import CookieConsent from '../General/CookieConsent'
    import VueUploadMultipleImage from 'vue-upload-multiple-image'
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
    import ButtonNew from '../General/ButtonNew'
    export default {
        components: {
            FormPanel, GridButton,VueUploadMultipleImage,VueCtkDateTimePicker,CookieConsent,ButtonNew
        },
        data() {
            return {
                images: []
            }
        },
        computed: {
            ...mapState('profileReports', ['$record']),
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapGetters('app', ['isAdmin'])
            },
        methods: {
            onAdd() {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('profileReports', ['add', 'save','profilereportlist'])
        }
    }
</script>

<style scoped>
    .field-input[data-v-74507c40] {
        cursor: pointer;
        background-color: #fff;
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
        position: relative;
        width: 100%;
        height: 42px;
        min-height: 42px;
        padding-left: 12px;
        padding-right: 44px;
        font-weight: 400;
        -webkit-appearance: none;
        outline: none;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        font-size: 14px;
        z-index: 0;
    }
    .mp {
        margin-top: 10px;
        padding-top: 4px;
    }
    .custom-select {
        position: relative;
        width: 100%;
        text-align: left;
        outline: none;
        height: 47px;
        line-height: 47px;
    }

</style>
