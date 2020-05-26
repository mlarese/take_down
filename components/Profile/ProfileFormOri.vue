<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" title="Profile" >
        <div v-if="!user.is_user_enabled" class="title red--text text-xs-center my-2" ><b>User suspended</b></div>
        <v-form ref="form"  v-model="isFormValid">
                <v-layout rows wrap>
                    <v-flex xs12 sm6>
                        <v-text-field
                                hide-details
                                :maxlength="50"
                                readonly
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
                            :rules="[rules.required]"
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
                            :rules="[rules.required, rules.email]"
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
                            :rules="[rules.url]"
                            :label="$vuetify.t('Web')"
                            v-model="$record.web"
                            color="null"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                    <v-text-field
                            hide-details
                            :maxlength="50"
                            :rules="[rules.required]"
                            :label="$vuetify.t('Phone Number')"
                            v-model="$record.cell_phone"

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
                            :rules="[rules.required]"
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
                            :rules="[rules.required]"
                            hide-details
                            :maxlength="100"
                            :label="$vuetify.t('City')"
                            v-model="$record.city"
                            color="null"

                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                            :rules="[rules.required]"
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
                                :rules="[rules.required]"
                                hide-details
                                :maxlength="100"
                                :label="$vuetify.t('Zip/Code')"
                                v-model="$record.zipcode"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm9>
                        <v-text-field
                                :rules="[rules.required]"
                                hide-details
                                :label="$vuetify.t('Address')"
                                v-model="$record.address"
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                    <v-divider class="mt-4 mb-1"></v-divider>
                    <v-card-actions>
                        <v-btn medium flat color="red darken-3" class="elevation-0" @click="onDelete">Delete Profile</v-btn>
                        <v-spacer></v-spacer>

                        <v-btn medium :disabled="!canSave" flat color="green darken-2" class="elevation-0" @click="onSave">Save Profile</v-btn>
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
              rules: {
                required: value => !!value || 'Required.',
                url: value => {
                  if(!value) return true
                  const pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/
                  return pattern.test(value) || 'Invalid url.'
                },
                min: v => (v && v.length >= 8) || 'Min 8 characters',
                email: value => {
                  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  return pattern.test(value) || 'Invalid e-mail.'
                }
              },
              isFormValid: true,
              country: null,
              dirty: false
            }
        },
        computed: {
            ...mapState('profiles', ['$record', 'record']),
            ...mapState('users', ['countries', 'roles', 'usersRoles']),
            ...mapState('auth', {'user': 'user'}),
            ...mapGetters('app', ['isAdmin']),
            canSave () {
              if(!this.isFormValid) return false
              if(!this.dirty) return false

              return true
            },
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
