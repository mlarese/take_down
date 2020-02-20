<!--eslint-disable-->
<template>
    <v-container fluid>
        <v-card class="elevation-0 pa-3"  style="border:1px solid #dddddd">
            <!--<v-toolbar class="elevation-0">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title class="display-5" style="font-size:32px !important;">{{ $vuetify.t('My Profile') }}</v-toolbar-title>
                <v-btn color="primary"
                        dark
                        small
                        absolute
                        bottom
                        right
                        fab><v-icon>add</v-icon>
                </v-btn>
            </v-toolbar>-->
            <v-toolbar dense class="elevation-0 pl-0 mb-3"  color="white" style="font-size:36px !important;border-bottom: 1px solid #dddddd !important">
                <span name="header-left">
                    <v-toolbar-title class="display-5" style="font-size:32px !important;">{{ $vuetify.t('My Profile') }}</v-toolbar-title>
                </span>

                <v-spacer/>
            </v-toolbar>

            <br>
            <v-flex xs12 sm12 align-center justify-center layout text-xs-center>
                <v-avatar
                        :size="120"
                        color="grey lighten-4">
                    <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                </v-avatar>
            </v-flex>
            <v-flex xs12 sm12 align-center justify-center text-xs-center><span class="title">{{ item.name}} {{ item.surname}}</span>
            </v-flex>
            <v-flex
                    xs12
                    sm12
                    align-center
                    justify-center
                    layout
                    text-xs-center
            ><span>{{item.email}}</span>
            </v-flex>
            <br>
            <v-form>
                <v-container fluid>
                    <v-layout row wrap>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Name')"
                                    v-model="item.name"
                                    readonly
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Surname')"
                                    v-model="item.surname"
                                    readonly

                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-select
                                    :disabled="!isAdmin"
                                    :label="$vuetify.t('Role')"
                                    v-model="item.role"
                                    :items="['Agent', 'Importer', 'Exporter','Shop','Distributor','Customer']"
                            ></v-select>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Company')"
                                    v-model="item.company"
                                    readonly
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Company VAT number')"
                                    v-model="item.company_vat_number"
                                    readonly
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-autocomplete
                                    :label="$vuetify.t('Country')"
                                    v-model="item.country"
                                    readonly
                            ></v-autocomplete>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Address')"
                                    v-model="item.address"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('City')"
                                    v-model="item.city"
                                    readonly
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Zip Code')"
                                    v-model="item.zip_code"
                                    readonly
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('CAP')"
                                    v-model="item.cap"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Phone Number')"
                                    v-model="item.phone_number"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    type="email"
                                    :label="$vuetify.t('Email')"
                                    v-model="item.email"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Web')"
                                    v-model="item.web"
                            ></v-text-field>
                        </v-flex>

                    </v-layout>
                    <v-spacer/>
                    <v-divider class="mt-5"></v-divider>
                    <v-card-actions>
                        <v-btn color="error" @click="deletes(item)">Delete Profile</v-btn>
                        <v-spacer></v-spacer>

                        <v-btn color="success"  @click="insert(item)">Save Details</v-btn>
                    </v-card-actions>

                </v-container>
            </v-form>
        </v-card>

    </v-container>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        name: "Profile",
        props: {
            item: {type: Object, default: () => {}}
        },
        data () {
            return {}
        },
        computed: {
            ...mapState('profiles', ['$record, record, saves, save']),
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
