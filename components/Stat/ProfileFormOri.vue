<!--eslint-disable-->
<template>
    <FormPanel v-bind="$attrs" title="Stats" >
        <v-form ref="form" class="" lazy-validation>

                <v-layout rows wrap>
                    <v-flex xs12 sm12>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Report Abuse')"
                                v-model="$record.number_of_submissions"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Accepted')"
                                v-model="$record.number_of_submissions_accepted"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12>
                        <v-text-field
                                hide-details
                                :label="$vuetify.t('Rejected')"
                                v-model="$record.number_of_submissions_rejected"
                                readonly
                                color="null"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                    <v-divider class="mt-4 mb-1"></v-divider>

            <template v-if="item" v-for="(item, i) in reportStates">
                <v-icon>{{item.icon}}</v-icon>
                <span style="position:relative;top:-3px" class="mr-3" :key="i"  :title="item.text">{{item.text}}</span>
            </template>
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
            ...mapState('reports', ['reportStates']),
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
