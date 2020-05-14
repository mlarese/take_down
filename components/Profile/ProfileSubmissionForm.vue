<!--eslint-disable-->
<template>

    <FormPanel v-bind="$attrs" class="ma-0 pa-0" title="Submission">

        <div slot="header-right" >
            <v-btn   flat small color="blue-grey darken-3" class="elevation-0"  @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div>
        <v-form ref="form" class="mt-2" v-model="isFormValid">


                <v-layout rows wrap>
                    <v-flex xs12 sm6 md6>

                        <v-text-field
                                :rules="[rules.required]"
                                class="left-float"
                                style="width:90%"
                                hide-details
                                :maxlength="255"
                                :label="$vuetify.t('Brand')+'*'"
                                v-model="$record.submission_brand"
                                color="null"
                        ></v-text-field>

                        <v-autocomplete

                                class="only-menu left-float"
                                hide-details
                                dense

                                flat
                                :items="brandsList"

                                color="null"
                                v-model="$record.submission_brand" />
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-text-field
                                :maxlength="1024"
                                :rules="[rules.required]"
                                hide-details
                                :label="$vuetify.t('Title')+'*'"
                                v-model="$record.submission_title"
                                color="null"

                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12 >
                        <v-textarea
                                :rules="[rules.required]"
                                hide-details
                                color="null"
                                label="Description*"
                                v-model="$record.submission_description"/>
                    </v-flex>

                </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 >
                        <v-text-field
                                :maxlength="1024"
                                :rules="[rules.required, rules.url]"
                                dense
                                :label="$vuetify.t('Url')+'*'"
                                color="null"
                                hide-details
                                v-model="$record.submission_url" />
                    </v-flex>

                </v-layout>

                    <v-layout rows wrap class="mt-2 text-xs-center" >

                        <v-flex xs12 class="text-xs-center">
                            <vue-upload-multiple-image
                                @before-remove="beforeRemove"
                                @upload-success="uploadImageSuccess"
                                @edit-image="editImage"
                                dragText="Drag File"
                                browseText="Browse Files"
                                label="images"
                                primaryText="Image Insert"
                                popupText="This is image is been uploaded"
                                :maxImage="4"
                                markIsPrimaryText="Select image"
                                v-model="$record.pictures"/>
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
                    <v-switch
                            style="position: relative; top:-11px"
                            height="33"
                            color="green"
                            hide-details
                            v-model="$record.send_coordinates"
                            :label="$vuetify.t('Send Geolocation')"
                    ></v-switch>
                    
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!canRegister" color="green darken-2" flat class="elevation-0"  @click="onAdd">
                        {{$vuetify.t('Save') }}
                    </v-btn>
                </v-flex>
            </v-layout>
            <v-layout>

                <v-flex xs6 class="vue-recaptcha text-xs-center">
                    <div class="vue-recaptcha text-xs-center">
                        <VueRecaptcha  @verify="onActvated" language="en" :loadRecaptchaScript="true" theme="dark" sitekey="6LcLBvMUAAAAAPFVSfnKjo-XLGu7m4en0-SGe_k3" />
                    </div>
                </v-flex>
            </v-layout>


        </v-form>

    </FormPanel>

</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    import suid from 'short-uuid'
    import FormPanel from '../General/FormPanel'
    import GridButton from '../General/GridButton'
    import CookieConsent from '../General/CookieConsent'
    import VueUploadMultipleImage from '../General/UploadMultipleImage'
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
    import ButtonNew from '../General/ButtonNew'
    import VueRecaptcha from 'vue-recaptcha';

    const decimalTranslator = suid("0123456789")



    export default {
        components: {
          VueRecaptcha,
          FormPanel,
          GridButton,
          VueUploadMultipleImage,
          VueCtkDateTimePicker,
          CookieConsent,
          ButtonNew
        },
        data() {
            return {
              rules: {
                url: value => {
                  const pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/
                  return pattern.test(value) || 'Invalid e-mail.'
                },
                required: value => !!value || 'Required.',
                min: v => (v && v.length >= 8) || 'Min 8 characters'
              },
              isFormValid: false,
              isFormVerified: false,
              images: []
            }
        },
        computed: {
            ...mapState('profileReports', ['$record']),
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapGetters('app', ['isAdmin']),
          canRegister () {
            if (!this.isFormVerified) return false
            if (!this.isFormValid)  return false
            return true
          }
        },
        methods: {
          onActvated() {
            this.isFormVerified = true
          },
          editImage(formData, index, fileList) {
            this.images = fileList
          },
          uploadImageSuccess(formData, index, fileList) {
            this.images = fileList
          },
          beforeRemove (index, done, fileList) {
            let r = confirm("remove image")
            if (r == true) {
              done()
              this.images = fileList
            }
          },
          onAdd () {
                this.insert(this.images)
                    .then(r => this.$router.go(-1))
          },
          ...mapActions('profileReports', ['insert', 'save', 'reportList', 'uploadImage'])
        },

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
