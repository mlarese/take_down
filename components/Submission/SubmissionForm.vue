<!--eslint-disable-->
<template>

    <FormPanel v-bind="$attrs" class="ma-0 pa-0" title="Submission">

        <div slot="header-right" >
            <v-btn  flat small fab class="elevation-0"  @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div>
        <v-form ref="form" class="mt-2" lazy-validation>
                <v-layout rows wrap  >
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
                                :label="$vuetify.t('Surname')"
                                v-model="$record.surname"
                                disabled
                                color="null"

                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 sm6 md6>
                        <v-text-field
                                class="left-float"
                                style="width:90%"
                                hide-details
                                :label="$vuetify.t('Brand')"
                                v-model="$record.submission_brand"
                                color="null"
                        ></v-text-field>
                        <v-autocomplete
                            :maxlength="255"
                            class="only-menu left-float"
                            hide-details
                            dense
                            flat
                            :items="brandsList"
                            color="null"
                            v-model="$record.submission_brand" />
                    </v-flex>

                    <v-flex xs12 sm12>
                        <v-text-field
                                hide-details
                                :maxlength="1024"
                                :label="$vuetify.t('Title')"
                                v-model="$record.submission_title"
                                color="null"
                        ></v-text-field>
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
                    <v-flex xs12 sm6 md6>
                        <v-text-field
                                :maxlength="1024"
                                dense
                                :label="$vuetify.t('Url')"
                                color="null"
                                hide-details
                                v-model="$record.submission_url" />
                    </v-flex>
                    <v-flex xs12 sm6 >
                        <v-select
                                :label="$vuetify.t('Status')"
                                v-model="$record.submission_status"
                                :items="reportStates"

                                disabled
                                color="null"
                                hide-details
                        ></v-select>
                    </v-flex>
                </v-layout>

                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                :maxlength="100"
                                :label="$vuetify.t('Location Latitude')"
                                v-model="$record.submission_geo_location_latitude"
                                type="number"
                                color="null"
                                hide-details
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                :maxlength="100"
                                :label="$vuetify.t('Location Longitude')"
                                v-model="$record.submission_geo_location_longitude"
                                type="number"
                                color="null"
                                hide-details
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            <v-layout rows wrap>
                <v-flex xs12 sm6 md6 d-flex>
                    <v-text-field
                            :maxlength="1024"
                            hide-details
                            disabled
                            :label="$vuetify.t('HTTP User Agent')"
                            color="null"
                            v-model="$record.submission_HTTP_USER_AGENT" />
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            :maxlength="15"
                            hide-details
                            :label="$vuetify.t('IP')"
                            v-model="$record.submission_ip"
                            disabled
                            color="null"

                    ></v-text-field>
                </v-flex>
            </v-layout>


                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                hide-details
                                :label="$vuetify.t('Submission Date')"
                                color="null"
                                v-model="updated_at" />
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-text-field
                                disabled
                                hide-details
                                :label="$vuetify.t('Status change date')"
                                color="null"
                                v-model="submission_status_change_datetime" />
                    </v-flex>
                </v-layout>



            <v-layout rows wrap class="mt-2 text-xs-center" style="justify-content: center">
                <v-flex xs12 sm12 class="text-xs-center">


                    <Images :images="images"/>

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
    import {mapState, mapActions, mapGetters} from 'vuex'
    import FormPanel from '../General/FormPanel'
    import GridButton from '../General/GridButton'
    import Images from '../General/Images'
    import CookieConsent from '../General/CookieConsent'
    import VueUploadMultipleImage from 'vue-upload-multiple-image'
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
    import ButtonNew from '../General/ButtonNew'
    import {formatDate} from '../../assets/helpers'
    import {reportStates} from '../../store/reports'
    import _map from 'lodash/map'

    export default {
        components: {
          FormPanel, GridButton,VueUploadMultipleImage,
          VueCtkDateTimePicker,CookieConsent,ButtonNew,
          Images
        },
        computed: {
          updated_at () {
            return formatDate(this.$record.updated_at)
          },
          submission_status_change_datetime () {
            return formatDate(this.$record.submission_status_change_datetime)
          },
          ...mapState('reports', ['$record', 'reportStates']),
          ...mapState('brands', {'brandsList': 'list'}),
          ...mapGetters('app', ['isAdmin']),
          images () {
            if(this.$record && this.$record.pictures) return _map(this.$record.pictures, 'picture_url')
            else return []
          }
        },
        methods: {
            async onSave () {
              await this.$auth.fetchUser().catch(() => {})
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('reports', ['add', 'save','reportList'])
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
