<template>
  <!--eslint-disable-->
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm7 md3>
                <v-card class="elevation-10">
                    <v-tabs color="light-blue lighten-1" dark slider-color="green">
                        <v-tab style="width: 100%">Login</v-tab>
                        <v-tab style="width: 100%">Register</v-tab>
                        <v-tab-item>
                            <v-card >
                                <v-card-text>
                                    <v-form method="post" action="#" @submit="checkLogin" novalidate="true">
                                        <div class="title" style="text-align: center">Welcome back</div>
                                        <br>
                                        <v-text-field prepend-icon="person" ref="name" v-model="email" :rules="[rules.email]" label="Email address" color="deep-purple" type="email"></v-text-field>
                                        <v-text-field  prepend-icon="lock" v-model="password" :rules="[rules.password, rules.length(8)]" color="deep-purple" counter="8" label="Password" type="password"></v-text-field>
                                        <re-c-a-p-t-c-h-a/>
                                        <br>
                                        <div><v-layout align-center class="justify-center"><a href="#" class="forgot-pass">Forgot password?</a></v-layout></div>
                                    </v-form>

                                </v-card-text>
                                <v-card-actions><v-spacer></v-spacer><v-btn color="primary" :disabled="!isValid" >Sign In</v-btn></v-card-actions>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-form method="post" action="#" @submit="checkForm" novalidate="true">
                                        <div class="title" style="text-align: center">New here? Register</div>
                                        <br>
                                        <v-text-field append-icon="" v-model="name" :rules="[rules.name]" label="Name" required></v-text-field>
                                        <v-text-field append-icon="" v-model="surname" :rules="[rules.surname]" label="Surname" required></v-text-field>
                                        <v-text-field append-icon="" v-model="role" :rules="[rules.role]" label="Role" counter="25" required></v-text-field>
                                        <v-text-field append-icon="" v-model="company" :rules="[rules.company]" label="Company" required></v-text-field>
                                        <v-text-field append-icon=""  label="Partita Iva"></v-text-field>
                                        <v-autocomplete append-icon="" v-model="country" :rules="[rules.country]" label="Country" required></v-autocomplete>
                                        <v-text-field append-icon="" v-model="address" :rules="[rules.address]" label="Address" required></v-text-field>
                                        <v-text-field append-icon="" v-model="city" :rules="[rules.city]" label="City" required></v-text-field>
                                        <v-text-field append-icon="" v-model="cap" :rules="[rules.cap]" label="Cap" required></v-text-field>
                                        <v-text-field append-icon="" v-model="zip" :rules="[rules.zip]" label="ZIP / Postal Code" required></v-text-field>
                                        <v-text-field append-icon="" v-model="phoneNumber" :rules="[rules.phoneNumber]" label="Phone Number" required></v-text-field>
                                        <v-text-field append-icon="" v-model="email" :rules="[rules.email]" label="Email" required></v-text-field>
                                        <v-text-field append-icon="" label="Web"></v-text-field>
                                        <re-c-a-p-t-c-h-a/>
                                        <br>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" :disabled="!isValid" >Sign Up</v-btn>
                                        </v-card-actions>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    import {getSchema} from 'assets/helpers'
    import reCAPTCHA from './General/reCAPTCHA'
    export default {
        name: "Login",
        components: {reCAPTCHA},
        data() {
            return {
                title: 'Take Down',
                dialog: false,
                email: undefined,
                form: false,
                isLoading: false,
                password: undefined,
                phone: undefined,
                name: null,
                role: null,
                phoneNumber: null,
                zip: null,
                surname: null,
                address: null,
                alert: null,
                unverified: false,
                showReset: false,
                city: null,
                company: null,
                country: null,
                rules: {
                    email: v => (v || '').match(/@/) || 'Please enter a valid email',
                    length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
                    password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                        'Password must contain an upper case letter, a numeric character, and a special character',
                    required: v => !!v || 'This field is required',
                    name: val => (val || 'must enter your name').length > 0 || 'This field is required',
                    surname: val => (val || '').length > 0 || 'This field is required',
                    address: val => (val || '').address > 0 || 'This field is required',
                    city: val => (val || '').city > 0 || 'This field is required',
                    phoneNumber: val => (val || '').phoneNumber > 0 || 'This field is required',
                    company: val => (val || '').company > 0 || 'This field is required',
                    zip: val => (val || '').zip > 0 || 'This field is required',
                    country: val => (val || '').country > 0 || 'This field is required',
                    role: val => (val || '').role > 0 || 'This field is required',
                },

                computed: {
                    ...mapState('app', ['title', 'ui']),
                    ...mapState('api', ['notification']),
                    ...mapGetters('app', ['menuItems', 'role', 'userName']),
                    isValid () {
                        if(!this.$record.email) return false
                        if(!this.$record.password) return false
                        if(!this.$record.cap) return false
                        return true
                    }
                },
                methods: {
                    ...mapActions('appauth', ['passwordReset']),
                    onResetPassword(user) {
                        this.showReset = false
                        this.$notify({
                            type: 'success',
                            text: this.$t('You will receive an email shortly')
                        })
                        return this.passwordReset(user)
                    },
                    async login() {
                        if (!this.canLogin) {
                            return
                        }
                        this.error = null
                        let schema = getSchema()
                        this.loading = true
                        return this.$auth
                            .loginWith(schema, {
                                data: {
                                    username: this.username,
                                    password: this.password
                                }
                            })
                            .then(() => {
                                this.loading = false
                                return this.$router.push(this.redirectRoute)
                            })

                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
