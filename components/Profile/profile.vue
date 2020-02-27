<!--eslint-disable-->
<template>
    <v-container fluid>

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
                                    color="green"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Surname')"
                                    v-model="item.surname"
                                    readonly
                                    color="green"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-select
                                    :disabled="!isAdmin"
                                    :label="$vuetify.t('Role')"
                                    v-model="item.role"
                                    :items="['Agent', 'Importer', 'Exporter','Shop','Distributor','Customer']"
                                    color="green"
                            ></v-select>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Company')"
                                    v-model="item.company"
                                    readonly
                                    color="green"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Company VAT number')"
                                    v-model="item.company_vat_number"
                                    readonly
                                    color="green"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-autocomplete
                                    :label="$vuetify.t('Country')"
                                    v-model="item.country"
                                    readonly
                                    color="green"
                            ></v-autocomplete>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Address')"
                                    v-model="item.address"
                                    color="green"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('City')"
                                    v-model="item.city"
                                    readonly
                                    color="green"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Zip Code')"
                                    v-model="item.zip_code"
                                    readonly
                                    color="green"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('CAP')"
                                    v-model="item.cap"
                                    color="green"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Phone Number')"
                                    v-model="item.phone_number"
                                    color="green"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field
                                    type="email"
                                    :label="$vuetify.t('Email')"
                                    v-model="item.email"
                                    color="green"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-text-field
                                    :label="$vuetify.t('Web')"
                                    v-model="item.web"
                                    color="green"
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
