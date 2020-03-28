<!--eslint-disable-->
<template>

    <FormPanel v-bind="$attrs" class="ma-0 pa-0">
        <div slot="header-right" >
            <v-btn class="elevation-0" color="info"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div><div slot="header-left">
            <span>{{$vuetify.t('Report Form')}}</span>
        </div>
        <v-form ref="form" lazy-validation >
            <div>
                <v-layout v-if="true">
                    <v-flex xs12 sm6 md6 d-flex>
                        <v-select
                                        :label="$vuetify.t('HTTP USER AGENT')"
                                        color="null"
                                        v-model="$record.submission_HTTP_USER_AGENT" />
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                dark
                                type="number"
                                :label="$vuetify.t('Submission IP')"
                                v-model="$record.submission_ip"
                                readonly
                                color="null"

                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout v-if="true">
                    <v-flex xs12 sm6 md6 d-flex>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('Name')"
                                color="null"
                                v-model="$record.name" />
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                dark
                                type="number"
                                :label="$vuetify.t('surname')"
                                v-model="$record.surname"
                                disabled
                                color="null"

                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                <v-flex xs12 sm6 md6>
                    <v-text-field   dense
                                    :label="$vuetify.t('Submission Brand')"
                                    color="null"
                                    hide-details
                                    v-model="$record.submission_brand" />
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                dark
                                :label="$vuetify.t('Submission Title')"
                                v-model="$record.submission_title"
                                color="null"

                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12 sm6 md6>
                        <v-text-field   dense
                                        :label="$vuetify.t('Submission Url')"
                                        color="null"
                                        hide-details
                                        v-model="$record.submission_url" />
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-select
                                :label="$vuetify.t('Submission Status')"
                                v-model="$record.submission_status"
                                disabled
                                color="null"

                        ></v-select>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex xs4 sm4>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('Country')"
                                v-model="$record.submission_country"
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm4>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('City')"
                                v-model="$record.submission_city"
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm4>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('Region')"
                                v-model="$record.submission_region"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                type="number"
                                :label="$vuetify.t('ZIPCODE')"
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
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('Location Latitude')"
                                v-model="$record.submission_geo_location_latitude"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                :label="$vuetify.t('Location Longitude')"
                                v-model="$record.submission_geo_location_longitude"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>

                <v-flex xs2 sm2 md2>
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
                        v-model="$record.pictures"></vue-upload-multiple-image></v-flex>
                    <v-flex xs10 sm10 md10><v-textarea  box color="null" label="Description" v-model="$record.submission_description"></v-textarea></v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12 sm6>
                    <VueCtkDateTimePicker dark v-model="$record.submission_date" height="100px" :label="$vuetify.t('Submission Date')"/>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <VueCtkDateTimePicker dark v-model="$record.submission_status_change_datetime" height="100px" :label="$vuetify.t('Submission Status Change')"/>
                    </v-flex>
                </v-layout>
            </div>

            <v-layout row wrap>
                <v-flex xs2 offset-xs5>
                    <v-btn  style="width:100%"  color="primary"  @click="onAdd">
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
    export default {
        components: {
            FormPanel, GridButton,VueUploadMultipleImage,VueCtkDateTimePicker,CookieConsent
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
    #my-strictly-unique-vue-upload-multiple-image {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: black;
        margin-top: 60px;
    }

</style>
