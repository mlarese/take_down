<!--eslint-disable-->
<template>
    <v-layout align-center justify-center class="login ">
        <ResetPassword
                :show="showReset"
                @on-cancel="showReset=false"
                @reset-password="onResetPassword"
        />

        <v-flex xs12 sm8 md4>

            <v-card class="elevation-20 grad" style="border-radius: 8px 8px 0 0;" ref="loginBox">
                <v-tabs v-model="ui.activeLoginTab" color="grey lighten-2" slider-color="grey" style="height: 500px;">

                    <v-tab style="width: 100%" class="subheading">Login</v-tab>
                    <v-tab components="SignUp" style="width: 100%">Register</v-tab>

                    <v-tab-item>

                        <div class="deepshadow display-1 mb-1 mt-4 text-xs-center">Take Down Website</div>
                        <div class="body-1 mb-2 mt-0 text-xs-center">Member Login!</div>


                        <v-card-text>
                            <v-form method="post" action="#" @submit="login" novalidate="true">
                                <v-text-field hide-details v-model="username" label="Login" type="text" /><br>
                                <v-text-field hide-details @keyup.enter="login" v-model="password" label="Password" id="password" type="password" />
                            </v-form>
                        </v-card-text>

                        <portal to="login-bottom-bar">
                            <v-card  style="width:100%">
                                <v-card-actions class="">

                                    <v-btn v-if="true" @click="showReset=true" small flat>Password reset</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn flat :loading="loading" :disabled="!canLogin" color="info" @click="login" @keyup.enter="login" small>
                                        Login
                                        <v-icon right>input</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </portal>

                    </v-tab-item>

                    <v-tab-item>
                        <sign-up/>
                    </v-tab-item>
                </v-tabs>
                <v-footer>
                    <portal-target style="width: 100%" v-if="ui.activeLoginTab==0" name="login-bottom-bar"></portal-target>
                    <portal-target style="width: 100%" v-if="ui.activeLoginTab==1" name="signup-bottom-bar"></portal-target>
                </v-footer>
            </v-card>
        </v-flex>

    </v-layout>

</template>
<script>
  import Vue from 'vue'
  import ResetPassword from '../../components/General/ResetPassword'
  import {mapState, mapActions, mapMutations} from 'vuex'
  import {notifyError} from '../../storeimp/api/actions'
  import {getSchema} from '../../assets/helpers'
  import SignUp from '../General/SignUp'
  import countries from '../../storeimp/fixtures/country.json'

  export default {
    layout: 'empty',
    auth: 'guest',
    components: {ResetPassword, SignUp},
    data () {
          return {
              componentHeight: 200,
              error: null,
              username: '',
              password: '',
              showReset: false,
              loading: false,
              dialog: false
          }
    },
    computed: {
      ...mapState('app', ['title', 'ui']),
      ...mapState('api', ['isAjax']),
      canLogin () {
        if (!this.username) {
          return false
        }
        if (!this.password) {
          return false
        }
        return true
      },
    },
    mounted() {
      this.matchHeight()
    },
    methods: {
      ...mapActions('app', ['passwordReset']),
      ...mapMutations('users', ['setRecord']),
      matchHeight() {
        var heightString = this.$refs.loginBox.clientHeight + 'px'
        Vue.set(this, 'componentHeight', heightString)
      },
      onResetPassword (user) {
        this.showReset = false
        return this.passwordReset(user)
          .then(r => {
            this.$notify({
              type: 'success',
              text: 'Password resetted'
            })
          })
      },
      async login () {
        if (!this.canLogin) {
          return
        }
        this.error = null
        let schema = getSchema()
        this.loading = true

        return this.$auth
          .loginWith(schema, {
            data: {
              email: this.username,
              password: this.password
            }
          })
          .then((res) => {
            this.loading = false
            this.setRecord({})
            //this.$auth.setUser(user)
          })
          .catch(e => {
            console.log('login error')
            this.loading = false
            this.error = e + ''
            this.$store.commit('api/notification', notifyError(e, this.$t), {root: true})
          })
      }
    }
  }
</script>
<style lang="scss">
    .theme--light.v-sheet {
        background-color: rgba(250,250,250,1);
    }

    .v-footer .theme--light.v-sheet {
        background-color: #e1e1e1;
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
