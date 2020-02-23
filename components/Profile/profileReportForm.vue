<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <div slot="header-right">
            <v-btn  color="info"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div><div slot="header-left">
            <span>Report form</span>
        </div>
        <v-form ref="form" lazy-validation>
            <v-layout row wrap>
                <v-flex xs12 sm6 md6>
                <v-autocomplete
                        color="green"
                        label="Brand Select"
                ></v-autocomplete>
                </v-flex>
                <v-flex xs12 sm6 md6><v-text-field label="Link Web" hide-details color="green" v-model="brand_name" type="text" /></v-flex>
                <v-flex xs12 sm6 md6> <v-text-field label="Title of Report" color="green" hide-details v-model="report_title" type="text" /></v-flex>
                <v-flex xs12 sm6 md6><v-text-field label="IP Address" color="green" hide-details type="number" /></v-flex>
                <v-flex xs12 sm12 md12><v-textarea auto-grow box color="green" label="Bio"></v-textarea></v-flex>
                <v-flex xs12 sm12 md12><vue-upload-multiple-image
                        @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        @edit-image="editImage"
                        @data-change="dataChange"
                        :data-images="images"
                        dragText="Drag File"
                        browseText="Browse Text"
                        label="images"
                        primaryText="Image Insert"
                        popupText="This is image is been uploaded from your pc"
                        maxImage="4"
                        markIsPrimaryText="select image"
                ></vue-upload-multiple-image></v-flex>
                <v-flex xs12 sm6 md6><v-autocomplete color="green" label="User Agent"></v-autocomplete></v-flex>

            </v-layout>

            <v-layout row wrap>
                <v-flex xs2 offset-xs5>
                    <v-btn  style="width:100%"  color="primary"  @click="save">
                        {{$vuetify.t('Save') }}
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-form>
    </FormPanel>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import FormPanel from '../General/FormPanel'
    import GridButton from '../General/GridButton'
    import FileUpload from 'vue-upload-component'
    import VueUploadMultipleImage from 'vue-upload-multiple-image'
    export default {
        components: {
            FormPanel, GridButton,FileUpload,VueUploadMultipleImage
        },
        data() {
            return {
                images: []
            }
        },
        computed: {
            ...mapState('profileReports', ['$record']),
            //isValid () {
            //  if(!this.$record.brand_name) return false
            //  if(!this.$record.sms_mt_text_message) return false
            //  if(!this.$record.conversion_grace_period) return false
            //  return true
            // }
        },
        methods: {
            onAdd() {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('profileReports', ['add', 'save'])
        }
    }
</script>

<style scoped>

</style>
