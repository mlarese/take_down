<!--eslint-disable-->
<template>
    <v-layout align-center justify-center class="signup">

                        <v-card-text>
                            <div class="deepshadow display-1 mb-1 mt-3 text-xs-center">Take Down Website</div>
                            <div class="body-1 mt-0 text-xs-center font-weight-bold">Register</div>
                            <div class="caption mb-0 mt-0 text-xs-center">
                                We collect your data only to validate abuse reports. <br>
                                We could share your data only with brand owners.<br>
                                We will never send your data to other subjects.
                            </div>

                            <div style="height:330px;overflow-y: auto">
                                <v-form method="post" action="#" v-model="isFormValid" class="pb-5">

                                    <v-text-field  hide-details   :maxlength="50"   v-model="record.name" :rules="[rules.required]" label="Name*" required></v-text-field>
                                    <v-text-field hide-details    :maxlength="50"  v-model="record.surname" :rules="[rules.required]" label="Surname*" required></v-text-field>
                                    <v-text-field hide-details  :maxlength="12"  type="password"   v-model="record.password" :rules="[rules.required, rules.min]" label="Password* (min 8 characters)" password required></v-text-field>
                                    <v-text-field hide-details  :maxlength="200"   v-model="record.email" :rules="[rules.email, rules.required]" label="Email" required></v-text-field>

                                    <v-autocomplete :items="usersRoles" hide-details v-model="record.role" :rules="[rules.required]" label="Role*" counter="25" required></v-autocomplete>
                                    <v-text-field hide-details   v-model="record.working_at_company" :rules="[rules.required]" label="Company*" required></v-text-field>
                                    <v-text-field hide-details :maxlength="15"   v-model="record.working_at_company_VAT"  label="Company VAT"></v-text-field>
                                    <v-autocomplete hide-details :items="countries" label="Country*" v-model="record.country" :rules="[rules.required]"  required item-value="code" item-text="name" ></v-autocomplete>
                                    <v-text-field hide-details  :maxlength="50"   v-model="record.address" :rules="[rules.required]"  label="Address*"></v-text-field>
                                    <v-text-field hide-details :maxlength="100"   v-model="record.city" :rules="[rules.required]"  label="City*"></v-text-field>
                                    <v-text-field hide-details :maxlength="50"  v-model="record.region" :rules="[rules.required]"  label="Region*"></v-text-field>
                                    <v-text-field hide-details :maxlength="10"   v-model="record.zipcode" :rules="[rules.required]"  label="Postal Code*"></v-text-field>
                                    <v-text-field hide-details :maxlength="50"   v-model="record.cell_phone" :rules="[rules.required]" label="Phone Number*" required></v-text-field>

                                    <v-text-field hide-details   v-model="record.web" :rules="[rules.url]"  label="Web"></v-text-field>

                                    <br>
                                    <div class="vue-recaptcha">
                                     <VueRecaptcha  @verify="onActvated" language="en" :loadRecaptchaScript="true" _theme="dark" sitekey="6LcLBvMUAAAAAPFVSfnKjo-XLGu7m4en0-SGe_k3" />
                                    </div>
                                    <br>
                                </v-form>
                            </div>

                            <portal to="signup-bottom-bar">
                                <v-card>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn flat @click="onRegister" class="elevation-0" :disabled="!canRegister" small color="green darken-2" >Sign Up</v-btn>

                                    </v-card-actions>
                                </v-card>
                            </portal>

                        </v-card-text>

    </v-layout>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex'
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: 'SignUp',
        components: {VueRecaptcha},
        data() {
            return {
                isFormValid: true,
                isFormVerified: false,
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
                }
            }
        },

        computed: {
            ...mapState('users', ['usersRoles', 'record', 'ui']),
            ...mapState('users', ['countries']),
            canRegister () {

                if (!this.isFormVerified) return false

                if (!this.record.name) return false
                if (!this.record.surname) return false
                if (!this.record.password) return false
                if (!this.record.role) return false
                if (!this.record.working_at_company) return false

                if (!this.record.country) return false
                if (!this.record.address) return false
                if (!this.record.city) return false
                if (!this.record.region) return false

                if (!this.record.zipcode) return false
                if (!this.record.cell_phone) return false
                if (!this.record.email)  return false
                if (!this.isFormValid)  return false
                return true
            }
        },
        watch: {
          'ui.activeLoginTab' () {

        }
      },
      methods: {
            ...mapActions('app', ['register']),
            ...mapMutations('users', ['setRecord']),
            ...mapMutations('app', ['setActiveLoginTab']),
            onActvated () {
              this.isFormVerified = true
            },
            onRegister () {
              this.record['g-recaptcha-response']='1111'
              return this.register(this.record)
                .then(res => {
                  const {success, message} = res.data
                  if(success) {
                    this.setRecord({})
                    this.setActiveLoginTab(0)
                    this.$notify({
                      type: 'success',
                      text: message
                    })
                  } else {
                    this.$notify({
                      type: 'error',
                      text: message
                    })
                  }
                })
                .catch(e => {
                  alert('')
                })
            },
        }
    }
</script>

<style lang="scss">
    .theme--light.v-sheet {
        background-color: rgba(255,255,255,0.6);
    }
    .login {
        input{
            border-radius: 0px;
        }
        .icon {
            align-items: center;
            display: inline-flex;
            font-size: 20px !important;
            vertical-align: bottom;
        }

        .input-group--text-field input {
            height: 40px !important ;
        }
    }
</style>
