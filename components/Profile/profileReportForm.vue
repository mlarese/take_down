<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <div slot="header-right">
            <v-btn class="elevation-1" color="info"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div><div slot="header-left">
            <span>{{$vuetify.t('Report Form')}}</span>
        </div>
        <v-form ref="form" lazy-validation>
            <v-layout row wrap>
                <v-flex xs12 sm6 md6>
                    <v-autocomplete dense  hide-details :label="$vuetify.t('Brand Name')"
                                    color="green"
                                    :items="brandsList"
                                    item-text="brand_name"
                                    item-value="id"
                                    clearable
                                    v-model="$record.brand_name" />
                </v-flex>
                <v-flex xs12 sm6 md6><v-text-field label="Link Web" hide-details color="green" v-model="$record.web" type="text" /></v-flex>
                <v-flex xs12 sm6 md6> <v-text-field label="Title of Report" color="green" hide-details v-model="$record.title" type="text" /></v-flex>
                <v-flex xs12 sm6 md6><v-text-field label="IP Address" color="green" hide-details type="number" v-model="$record.ip_address"/></v-flex>
                <v-flex xs12 sm12 md12><v-textarea auto-grow box color="green" label="Bio" v-model="$record.description"></v-textarea></v-flex>
                <v-flex xs12 sm12 md12><vue-upload-multiple-image
                        :data-images="images"
                        dragText="Drag File"
                        browseText="Browse Text"
                        label="images"
                        primaryText="Image Insert"
                        popupText="This is image is been uploaded from your pc"
                        :maxImage="4"
                        markIsPrimaryText="select image"
                        v-model="$record.report_picture"
                ></vue-upload-multiple-image></v-flex>
                <v-flex xs12 sm6 md6><v-autocomplete color="green" label="User Agent" :item="profilereportlist" v-model="$record.user_agent"></v-autocomplete></v-flex>
                <v-flex xs12 sm6 md6>
                <VueCtkDateTimePicker   v-model="$record.date" height="500px" />
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs2 offset-xs5>
                    <v-btn  style="width:100%"  color="primary"  @click="onAdd" :disabled="!isValid">
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
    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
    export default {
        components: {
            FormPanel, GridButton,FileUpload,VueUploadMultipleImage,VueCtkDateTimePicker
        },
        data() {
            return {
                images: [],
                date: null
            }
        },
        computed: {
            ...mapState('profileReports', ['$record']),
            isValid () {
              if(!this.$record.ip_address) return false
            //  if(!this.$record.conversion_grace_period) return false
              return true
            }
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

</style>
