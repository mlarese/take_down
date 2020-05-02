<!--eslint-disable-->
<template>
    <v-layout align-center justify-center class="signup">

                        <v-card-text>
                            <div class="deepshadow display-2 mb-1 mt-3 text-xs-center">Take Down</div>
                            <div class="body-1 mb-2 mt-0 text-xs-center">Register</div>

                            <div style="height:380px;overflow-y: auto">
                                <v-form method="post" action="#" novalidate="true">

                                    <v-text-field  hide-details  append-icon="" v-model="record.name " :rules="[rules.name]" label="Name" required></v-text-field>
                                    <v-text-field hide-details  append-icon="" v-model="record.surname" :rules="[rules.surname]" label="Surname" required></v-text-field>
                                    <v-autocomplete :items="usersRoles" hide-details v-model="record.role" :rules="[rules.role]" label="Role" counter="25" required></v-autocomplete>
                                    <v-text-field hide-details append-icon="" v-model="record.working_at_company" :rules="[rules.company]" label="Company" required></v-text-field>
                                    <v-text-field hide-details  append-icon="" v-model="record.working_at_company_VAT" label="Company VAT"></v-text-field>
                                    <v-autocomplete hide-details :items="countries" label="Country" v-model="record.country" :rules="[rules.country]"  required item-value="code" item-text="name" ></v-autocomplete>
                                    <v-text-field hide-details append-icon="" v-model="record.address" label="Address"></v-text-field>
                                    <v-text-field  hide-details append-icon="" v-model="record.city" label="City"></v-text-field>
                                    <v-text-field hide-details append-icon="" v-model="record.zipcode" label="ZIP / Postal Code"></v-text-field>
                                    <v-text-field hide-details append-icon="" v-model="record.cell_phone" :rules="[rules.phoneNumber]" label="Phone Number" required></v-text-field>
                                    <v-text-field hide-details append-icon="" v-model="record.email" :rules="[rules.email]" label="Email" required></v-text-field>
                                    <v-text-field hide-details append-icon="" label="Web"></v-text-field>

                                </v-form>
                            </div>

                            <portal to="signup-bottom-bar">
                                <v-card>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn flat class="elevation-0" :disabled="!canRegister" small color="green darken-2" >Sign Up</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </portal>

                        </v-card-text>

    </v-layout>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "SignUp",
        data() {
            return {
                record : {
                    username: '',
                    password: '',
                    alert: null,
                    unverified: false,
                    showReset: false,
                    loading: false,
                    dialog: false,
                    email: null,
                    form: false,
                    isLoading: false,
                    phone: undefined,
                    name: null,
                    role: null,
                    cell_phone: null,
                    zipcode: null,
                    working_at_company_VAT: null,
                    cap: null,
                    surname: null,
                    address: null,
                    country: null,
                    city: null,
                    working_at_company: null,

                },
                rules: {
                    email: v => (v || '').match(/@/) || 'Please enter a valid email',
                    name: val => (val || 'must enter your name').name > 0 || 'This field is required',
                    surname: val => (val || '').surname > 0 || 'This field is required',
                    phoneNumber: val => (val || '').phoneNumber > 0 || 'This field is required',
                    company: val => (val || '').company > 0 || 'This field is required',
                    country: val => (val || '').country > 0 || 'This field is required',
                    role: val => (val || '').role > 0 || 'This field is required'
                }
            }
        },
        computed: {
            ...mapState('users', ['usersRoles']),
            ...mapState('users', ['countries']),
            canRegister () {
                if (!this.name) {
                    return false
                }
                if (!this.surname) {
                    return false
                }
                if (!this.role) {
                    return false
                }
                if (!this.company) {
                    return false
                }
                if (!this.country) {
                    return false
                }
                if (!this.address) {
                    return false
                }
                if (!this.city) {
                    return false
                }
                if (!this.cap) {
                    return false
                }
                if (!this.zip) {
                    return false
                }
                if (!this.phoneNumber) {
                    return false
                }
                if (!this.email) {
                    return false
                }
                return true
            }
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
