<!--eslint-disable-->
<template>
    <v-dialog v-model="show" max-width="300" persistent>
        <v-toolbar dense color="blue" dark >
            <v-toolbar-title class="subheading">
                'Password reset request'
            </v-toolbar-title>
        </v-toolbar>
        <v-card class="pa-3">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-form v-model="formValid">
                        <v-flex>
                            <v-text-field label="User" box v-model="user" required :rules="rules.required"/>
                        </v-flex>
                    </v-form>

                </v-flex>
            </v-layout>

            <v-card-actions>
                <a v-show="false"></a>

                <v-spacer></v-spacer>
                <v-btn class="elevation-1"  @click.native="$emit('on-cancel')">Cancel</v-btn>
                <v-btn class="elevation-1" :disabled="!canChange" @click.native="onResetPassword">
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
