<!--eslint-disable-->
<template>
    <v-dialog v-model="show" max-width="300" persistent>
        <v-toolbar dense dark v-if="false" >
            <v-toolbar-title class="subheading pl-3">
                Password reset
            </v-toolbar-title>
        </v-toolbar>
        <v-card class="pa-3">
            <v-layout row wrap>

                <v-flex xs12 class="text-xs-center title pa-4">
                    Password reset
                </v-flex>
                <v-flex xs12>
                    <v-form v-model="formValid">
                        <v-flex>
                            <v-text-field label="Email"  v-model="user" required :rules="[rules.email]"/>
                        </v-flex>
                    </v-form>

                </v-flex>
            </v-layout>

            <v-card-actions>
                <a v-show="false"></a>

                <v-spacer></v-spacer>
                <v-btn class="" flat @click.native="$emit('on-cancel')">Cancel</v-btn>
                <v-btn class="" flat :disabled="!canChange" @click.native="onResetPassword">
                    <span class="ml-2">Reset password</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
  /* eslint-disable */
  import {mapActions} from 'vuex'
  export default {
    name: 'ResetPassword',
    methods: {
      ...mapActions('users', ['changePassword']),
      onResetPassword () {

        this.$emit('reset-password', this.user)
        this.user = null
      },
      onCancel () {
        this.$emit('cancel')
      }
    },
    computed: {
      canChange () {
        return this.formValid
      }
    },
    data () {
      return {
        rules: {
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
          required: [
            v => !!v || 'is required'
          ]
        },
        formValid: true,
        user: null
      }
    },
    props: {
      show: {default: false}
    }
  }
</script>
