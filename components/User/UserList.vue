<!--eslint-disable-->
<template>
    <GridContainer title="Users">
       <!-- <CardPanel slot="container-top">
            <div class="">
            </div>
        </CardPanel>-->



        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :items="userList"
                :headers="headers"
                style="text-align: center"
                class="elevation-0 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <!--<td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.surname }}</td>
                <td>{{ item.role }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.partita_iva }}</td>
                <td>{{ item.country }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.city}}</td>
                <td>{{ item.zip_code }}</td>
                <td>{{ item.phone_number}}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.web }}</td>-->
                <td style="white-space: nowrap;text-align: center">{{ item.name }} {{ item.surname }}</td>
                <td>{{ item.role }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.web }}</td>
                <td>{{ item.subscription_ip }}</td>
                <td>{{ item.HTTP_USER_AGENT }}</td>
                <td>{{ item.cell_phone }}</td>
                <td>{{ item.working_at_company }}</td>
                <td>{{ item.working_at_company_VAT }}</td>
                <td>{{ item.country }}</td>
                <td>{{ item.city }}</td>
                <td>{{ item.region }}</td>
                <td>{{ item.zipcode }}</td>
                <td style="white-space: nowrap; text-align: center">{{ item.address }}</td>
                <td>{{ item.number_of_submissions }}</td>
                <td>{{ item.number_of_submissions_accepted }}</td>
                <td>{{ item.number_of_submissions_rejected }}</td>
                <td>{{ item.last_datetime_pwd_resetted | dmy}}</td>
                <td>{{ item.subscription_datetime  | dmy}}</td>
                <td>{{ item.email_verified }}</td>
                <!--<td ><v-checkbox class="ml-3 pt-3" v-model="item.status"  primary></v-checkbox></td>
                <!--<td width="1" class="pa-1">
                    <GridButton icon="edit" color="primary" @click="onEdit(item.id )"></GridButton>
                </td>
                <td width="1" class="pa-1">
                    <GridButton icon="delete" color="error" @click="onDelete(item.id)"></GridButton>
                </td>-->
            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                {{$vuetify.t('From')}} {{ pageStart }} {{$vuetify.t('To')}} {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
            </template>

        </v-data-table>

    </GridContainer>
</template>
<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    import GridButton from '../General/GridButton'
    import GridContainer from '../General/GridContainer'
    import CardPanel from "../General/CardPanel"
    import ButtonNew from "../General/ButtonNew"
    import DatePicker from 'vue2-datepicker'
    export default {
        components: {ButtonNew, CardPanel, GridButton, GridContainer, DatePicker},
        data () {

            const headers = [
                { text: this.$vuetify.t('Name'), value: 'name' },
                { text: this.$vuetify.t('Role'), value: 'role' },
                { text: this.$vuetify.t('Web Address'), value: 'web' },
                { text: this.$vuetify.t('Email'), value: 'email' },
                { text: this.$vuetify.t('Subscription IP'), value: 'subscription_ip' },
                { text: this.$vuetify.t('HTTP USER AGENT'), value: 'HTTP_USER_AGENT' },
                { text: this.$vuetify.t('Phone Number'), value: 'cell_phone' },
                { text: this.$vuetify.t('Company'), value: 'working_at_company' },
                { text: this.$vuetify.t('Company VAT'), value: 'working_at_company_VAT' },
                { text: this.$vuetify.t('Country'), value: 'country' },
                { text: this.$vuetify.t('City'), value: 'city' },
                { text: this.$vuetify.t('Region'), value: 'region' },
                { text: this.$vuetify.t('Zip/Code'), value: 'zipcode' },
                { text: this.$vuetify.t('Address'), value: 'address' },
                { text: this.$vuetify.t('Number of Subm'), value: 'number_of_submissions' },
                { text: this.$vuetify.t('Number of Subm Accepted'), value: 'number_of_submissions_accepted' },
                { text: this.$vuetify.t('Number Of Subm Rejected'), value: 'number_of_submissions_rejected' },
                { text: this.$vuetify.t('Last Date Password Resetted'), value: 'last_datetime_pwd_resetted' },
                { text: this.$vuetify.t('Subscription Date'), value: 'subscription_datetime' },
                { text: this.$vuetify.t('Email Verified'), value: 'email_verified' }
                //{ text: 'Edit', value: 'action', sortable: false },
                //{ text: 'Delete', value: 'action', sortable: false }
            ]
            return {
                sms_mo_date: null,
                click_date: null,
                gridFilter: '',
                headers
            }
        },
        computed: {
            ...mapState('users', {'userList': 'list'}),
            ...mapState('api', {'isAjax': 'isAjax'}),
        },
        created () {
            this.resetSearch()
        },
        methods: {
            ...mapActions('users', ['resetSearch', 'search']),

            doSearch () {
                this.search()
            },
            doResetSearch () {
                this.resetSearch()

            },
            onDelete (id) {
                if(!confirm('Do you confirm the row deletion ?')) return
                this.delete(id)
                    .then(() => {
                        this.load({})
                    })
            },
            onEdit (id) {
                this.$router.push(`/users/${id}`)
            }
        }
    }
</script>
