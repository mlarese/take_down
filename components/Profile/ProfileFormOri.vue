<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" title="Profile" >
        <v-tabs
                disabled
                centered
        >

            <v-tab>
                <v-icon>message</v-icon>
                <span v-model="$record.number_of_submissions"> {{ $vuetify.t('Submission' ) }}:</span>

            </v-tab>
            <v-tab>
                <v-icon>check_circle_outline</v-icon>
                <span v-model="$record.number_of_submissions_accepted"> {{ $vuetify.t('Accepted' ) }}:</span>
            </v-tab>


            <v-tab>
                <v-icon>not_interested</v-icon>
                <span v-model="$record.number_of_submissions_rejected"> {{ $vuetify.t('Rejected' ) }}: </span>
            </v-tab>
        </v-tabs>
        <v-form ref="form" class="" lazy-validation>
                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                hide-details
                                :maxlength="50"

                                :label="$vuetify.t('Name')"
                                v-model="$record.name"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-text-field
                                :maxlength="50"
                                hide-details
                                :label="$vuetify.t('Surname')"
                                v-model="$record.surname"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout rows wrap>
                <v-flex xs12 sm6>
                    <v-select
                            hide-details
                            :items="rolesList"
                            item-value="value"
                            item-text="text"
                            :label="$vuetify.t('Role')+'*'"
                            v-model="$record.role"
                            color="null"
                    ></v-select>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            :maxlength="200"
                            hide-details
                            type="email"
                            :label="$vuetify.t('Email')"
                            v-model="$record.email"
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                <v-flex xs12 sm6>
                    <v-text-field
                            :maxlength="254"
                            hide-details
                            :label="$vuetify.t('Web')"
                            v-model="$record.web"
                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            :maxlength="50"
                            :label="$vuetify.t('Phone Number')"
                            v-model="$record.cell_phone"
                            mask="phone"
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            :maxlength="250"
                            :label="$vuetify.t('Company')"
                            v-model="$record.working_at_company"
                            color="null"
                            readonly
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            :maxlength="15"
                            hide-details
                            :label="$vuetify.t('Company VAT')"
                            v-model="$record.working_at_company_VAT"
                            readonly
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                <v-flex xs12 sm4>
                    <v-select
                            hide-details
                            dense
                            item-value="code"
                            item-text="name"
                            :items="countries"
                            :label="$vuetify.t('Country')"
                            color="null"
                            v-model="$record.country" />
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                            hide-details
                            :maxlength="100"
                            :label="$vuetify.t('City')"
                            v-model="$record.city"
                            color="null"
                            readonly
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                            hide-details
                            :maxlength="100"
                            :label="$vuetify.t('Region')"
                            v-model="$record.region"
                            color="null"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout rows wrap>
                    <v-flex xs12 sm3>
                        <v-text-field
                                hide-details
                                :maxlength="100"
                                :label="$vuetify.t('Zip/Code')"
                                v-model="$record.zipcode"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm9>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Address')"
                                v-model="$record.address"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                <!--<v-layout rows wrap>
                    <v-flex xs12 sm3>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Submissions')"
                                v-model="$record.number_of_submissions"
                                disabled
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Accepted')"
                                v-model="$record.number_of_submissions_accepted"
                                disabled
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Rejected')"
                                v-model="$record.number_of_submissions_rejected"
                                disabled
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                    <v-divider class="mt-2 mb-1"></v-divider> -->
                    <v-card-actions>
                        <v-btn medium flat color="red darken-3" class="elevation-0" @click="onDelete">Delete Profile</v-btn>
                        <v-spacer></v-spacer>

                        <v-btn medium :disabled="!dirty" flat color="green darken-2" class="elevation-0" @click="onSave">Save Profile</v-btn>
                    </v-card-actions>

            </v-form>
        </FormPanel>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    import FormPanel from '../General/FormPanel'
    export default {
        components: {FormPanel},
        data () {
            return {
                country: null,
                dirty: false
            }
        },
        computed: {
            ...mapState('profiles', ['$record', 'record']),
            ...mapState('users', ['countries', 'roles', 'usersRoles']),
            ...mapGetters('app', ['isAdmin']),
            rolesList () {
              if(this.$record.role === 0) return this.roles
              else return this.usersRoles
            }

        },
        watch: {
            '$record': {
              handler (value, oldValue) {
                if(oldValue.id) {
                  this.dirty = true
                }
              },
              deep: true
            }
        },
        methods: {
            onDelete () {
              if(!confirm('Are you sure you want to delete your account?')) return
              this.deletes(this.$record.id)
                .then(() => this.$auth.logout())
            },
            onSave () {
                const oldEmail = this.record.email
                const curEmail = this.$record.email

                this.save()
                  .then(() => this.$router.push('/home'))
                  .then(() => {
                    let doLogout = (oldEmail !== curEmail)
                    if(doLogout) {
                      alert( 'Please confirm yourself by clicking on verify user button sent to you on your email')

                      this.verifyEmail(curEmail)
                        .then(() => this.$auth.logout())

                    } else {
                      this.$notify({
                        type: 'success',
                        text: 'Profile updated'
                      })
                    }
                  })

            },
            ...mapActions('profiles', ['add', 'save','insert','deletes','verifyEmail']),

        }

    }
</script>

<style scoped>
    .v-input--selection-controls {
        margin-top: 10px;
        padding-top: 4px;
    }
</style>
