<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" >
        <div slot="header-right" >
            <v-btn   flat small color="blue-grey darken-3" class="elevation-0"  @click="$router.go(-1)" >
                {{$vuetify.t('Back')}}
            </v-btn>
        </div>
        <div slot="header-left">
        <span>{{$vuetify.t('Brand Form')}}</span>
    </div>
        <v-form ref="form" lazy-validation>
            <v-layout  >

                <v-flex xs12 sm12 md12>
                    <v-text-field dense  hide-details :label="$vuetify.t('Brand Name')"
                                    v-model="$record.brand_name" />
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs2 offset-xs5>
                    <v-btn  style="width:100%"  color="primary"  @click="onAdd" :disabled="!isValid">
                        {{$vuetify.t('Save') }}
                    </v-btn>
                </v-flex>
            </v-layout>
            <file-upload/>
        </v-form>

    </FormPanel>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import FormPanel from '../General/FormPanel'
    import GridButton from '../General/GridButton'
    import FileUpload from 'vue-upload-component'


    export default {
        components: {
            FormPanel, GridButton,FileUpload,
        },
        data() {
            return {
                images: [],
                date: null
            }
        },
        computed: {
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapState('brands', ['$record']),
            isValid () {
                if(!this.$record.brand_name) return false
                //  if(!this.$record.conversion_grace_period) return false
                return true
            }
        },
        methods: {
            onAdd() {
                this.save()
                    .then(r => this.$router.go(-1))
            },
            ...mapActions('brands', [ 'save'])
        }
    }
</script>

<style scoped>

</style>
