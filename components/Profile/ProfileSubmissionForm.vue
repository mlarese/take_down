<!--eslint-disable-->
<template>

    <FormPanel v-bind="$attrs" class="ma-0 pa-0" title="Submission">

        <div slot="header-right" >
            <v-btn   flat small color="blue-grey darken-3" class="elevation-0"  @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div>
        <v-form ref="form" class="mt-3" v-model="isFormValid">
            <div class="caption text-xs-justify mb-0 pb-0">
                Please only report abuse related to brands or products. Please do not report abuse regarding other matters such as bullism, terrorism, pornography,fake news.
                You can report internet abuse or offline abuse. You will receive feedback about your abuse reports.
                You can report abuse regarding an internet page, or just describe the abuse by words in case of offline matters. You can enrich your abuse report with images, if needed.
            </div>

                <v-layout rows wrap>
                    <v-flex xs12 sm6 md6>

                        <v-combobox
                                :label="$vuetify.t('Brand')+'*'"
                                :rules="[rules.required]"
                                :class="{'with-menu': withMenu}"
                                hide-details
                                dense
                                :filter="brandFilter"
                                flat
                                :items="brandsList"

                                :menu-props="brandMnuProps"
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
                  <v-flex v-if="isOnline" xs9 >
                    <v-text-field
                      :maxlength="1024"
                      :rules="[rules.url]"
                      dense
                      :label="$vuetify.t('Url')+'*'"
                      color="null"
                      hide-details
                      v-model="$record.submission_url" />
                  </v-flex>
                  <v-flex xs3>
                    <v-switch
                      style="position:relative; top:2px"
                      height="34"
                      color="green"
                      hide-details
                      v-model="isOnline"
                      :label="$vuetify.t('Online')"
                    ></v-switch>
                  </v-flex>


                </v-layout>

                    <v-layout rows wrap class="mt-3 text-xs-center" >

                        <v-flex xs12 class="text-xs-center">
                            <vue-upload-multiple-image
                                ref="imageUploader"
                                @before-remove="beforeRemove"
                                @upload-success="uploadImageSuccess"
                                @edit-image="editImage"
                                dragText="Drag File"
                                browseText="Browse Files"
                                label="images"
                                dropText="Drop file"
                                primaryText="Image Insert"
                                popupText="Image"
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
            <v-layout style="margin:auto;width:304px;">

                        <VueRecaptcha  @verify="onActvated" language="en" :loadRecaptchaScript="true" _theme="dark" sitekey="6LcLBvMUAAAAAPFVSfnKjo-XLGu7m4en0-SGe_k3" />

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
                  if(!value && !this.isOnline) return true
                  let pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/
                  pattern = /^(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/
                  pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
                  pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi

                  return pattern.test(value) || 'Invalid url.'
                },
                required: value => !!value || 'Required.',
                min: v => (v && v.length >= 8) || 'Min 8 characters'
              },
              isOnline: true,
              isSaving: false,
              isFormValid: false,
              isFormVerified: false,
              mnuBrandMaxHeight: 0,
              images: []
            }
        },
        computed: {
            ...mapState('profileReports', ['$record']),
            ...mapGetters('brands', ['brandsList']),
            ...mapGetters('app', ['isAdmin']),
            brandMnuProps () {
              return {
                auto: false,
                openOnClick: false,
                maxWidth: this.mnuBrandMaxHeight > 0?'auto':0,
                maxHeight:this.mnuBrandMaxHeight
              }
            },
            withMenu (){
                return true
            },
            canRegister () {
                if (this.isSaving) return false
                if (!this.isFormVerified) return false
                if (!this.isFormValid)  return false
                return true
            },
            uploader () {
              return this.$refs['imageUploader']
            }
        },
        watch: {
          isOnline () {
            if(!this.online) {
              this.$record.submission_url = ''
            }
          }
        },
        methods: {
          brandFilter (item, queryText, itemText) {
            this.mnuBrandMaxHeight = 0
            if(queryText.length < 5) return false
            this.mnuBrandMaxHeight = 40
            return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
            return false
          },
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
            // let r = confirm("remove image")
            let r = true
            if (r == true) {
              done()
              this.images = fileList
            }
          },
          async onAdd () {
            await this.$auth.fetchUser().catch(() => {})
            this.isSaving = true
            this.insert(this.images)
                    .then(r => this.isSaving = false)
                    .catch(e => this.isSaving = false)
                    .then(r => this.$router.go(-1))
          },
          ...mapActions('profileReports', ['insert', 'save', 'reportList', 'uploadImage'])
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
