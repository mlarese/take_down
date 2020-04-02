<!--eslint-disable-->
<template>
    <GridContainer title="Users">
        <div slot="header-right" class="">
            <ButtonNew color="green darken-2"  title="New User" @click.native="onAdd"/>
        </div>

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
                <td width="1" class="pa-1">
                    <GridButton icon="edit" color="primary" @click="onEdit(item.id )"></GridButton>
                </td>
                <td width="1" class="pa-1">
                    <GridButton icon="delete" color="error" @click="onDelete(item.id)"></GridButton>
                </td>
                <td style="white-space: nowrap;text-align: center">{{ item.name }} {{ item.surname }}</td>
                <td>{{ item.role }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.cell_phone }}</td>
                <td>{{ item.working_at_company }}</td>
               <!-- <td style="white-space: nowrap; text-align: center">{{ item.address }}</td>-->
                <td style="white-space: nowrap; text-align: center">{{ item.subscription_datetime  | dmy}}</td>
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
                { text: 'Edit', value: 'action', sortable: false },
                { text: 'Delete', value: 'action', sortable: false },
                { text: this.$vuetify.t('User'), value: 'name' },
                { text: this.$vuetify.t('Role'), value: 'role' },
                { text: this.$vuetify.t('Email'), value: 'email' },
                { text: this.$vuetify.t('Phone Number'), value: 'cell_phone' },
                { text: this.$vuetify.t('Company'), value: 'working_at_company' },
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
            onAdd () {
                this.$router.push('/profile')
            }
        }
    }
</script>
