<template>
    <v-layout align-center justify-center class="login">

        <v-flex xs12 sm8 md4>

            <v-toolbar dense color="blue" dark >
                <v-toolbar-title class="subheading">
                    {{$t('Password reset')}}
                </v-toolbar-title>
            </v-toolbar>

            <v-card class="pa-3">
                <data-one-icon style="width: 230px; text-align: center; margin:auto; padding-top:5px;"  />

                <v-layout row wrap class="pa-0 ma-0">
                    <v-flex xs12  class="text-xs-center">
                        {{$t('User')}}: {{user}}
                    </v-flex>

                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-form v-model="formValid">
                            <v-flex>
                                <v-text-field :label="$t('New password')" box v-model="password" required :rules="rules.password" type="password"/>
                            </v-flex>

                            <v-flex>
                                <v-text-field :label="$t('Repeat password')" box v-model="repeatPassword" required :rules="rules.password" type="password"/>
                            </v-flex>
                        </v-form>


                    </v-flex>
                </v-layout>

                <v-card-actions>
                    <a v-show="false"></a>

                    <v-spacer></v-spacer>
                    <v-btn class="elevation-1"  @click.native="onCancel">{{$t('Cancel')}}</v-btn>
                    <v-btn class="elevation-1" :disabled="!canChange" @click.native="onChangePassword">
                        <span class="ml-2">{{$t('Change password')}}</span>
                    </v-btn>
                </v-card-actions>

            </v-card>

        </v-flex>
    </v-layout>

</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'PasswordReset',
    methods: {
      ...mapActions('users', ['resetPassword']),
      onChangePassword () {
        this.resetPassword({
          user: this.user,
          _k: this._k,
          password: this.password,
          repeatPassword: this.repeatPassword
        })
          .then(() => {
            alert(this.$t('Password Changed'))
            this.$router.replace('/login')
          })
      },
      onCancel () {
        this.$router.replace('/login')
      }
    },
    watch: {
      show () {
        this.repeatPassword = ''
        this.password = ''
      }
    },
    computed: {
      canChange () {
        return this.formValid && this.passwordMatch
      },
      passwordMatch () {
        return this.password === this.repeatPassword
      }
    },
    created () {
      let {user, _k} = this.$router.currentRoute.query
      this.user = user
      this._k = _k
    },
    data () {
      return {
        rules: {
          password: [
            v => !!v || this.$t('required'),
            v => (v.length >= 8) || this.$t('At least 8 characters')
          ]
        },
        user: null,
        _k: null,
        formValid: true,
        password: '',
        repeatPassword: ''
      }
    },
    props: {
      show: {default: false}
    }
  }
</script>

