<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <div slot="header-right">
            <v-btn outline color="indigo"   @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div>
        <v-form ref="form" lazy-validation>
            <v-layout row wrap>
                <v-autocomplete
                        color="deep-purple"
                        label="Brand Select"
                ></v-autocomplete>
                <v-text-field label="Link Web" hide-details v-model="brand_name" type="text" />
                <v-text-field label="Title of Report" hide-details v-model="report_title" type="text" />
                <v-textarea
                        v-model="bio"
                        auto-grow
                        box
                        color="deep-purple"
                        label="Bio"
                        rows="1"
                ></v-textarea>
                <v-file-input show-size counter multiple label="File input"></v-file-input>
                <v-text-field label="IP Address" hide-details type="number" />
                <v-autocomplete
                        color="deep-purple"
                        label="User Agent"
                ></v-autocomplete>

            </v-layout>

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
    import {mapState, mapActions} from 'vuex'
    import FormPanel from '../General/FormPanel'
    import GridButton from '../General/GridButton'

    export default {
        components: {
            FormPanel, GridButton
        },
        data () {
            return {}
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
            onAdd () {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('profileReports', ['add', 'save']),

        }
    }
</script>

<style scoped>

</style>
