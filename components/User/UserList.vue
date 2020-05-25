<!--eslint-disable-->
<template>
    <GridContainer title="Users">
        <<div slot="header-right" class="pt-3 pr-1">

            <v-text-field class=""
                          single-line
                          style="width:200px"
                          label="Search"
                          clearable
                          height="28"
                          v-model="ui.filter"
                          autofocus
                          append-icon="search"/>
        </div>
        <v-data-table
                :rows-per-page-items="[7,20,50,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :items="userList"
                :headers="headers"
                style="text-align: center"
                :search="ui.filter"
                class="elevation-0 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td width="1" class="pa-1" style="white-space: nowrap;">
                    <GridButton icon="edit" color="primary" @click="onEdit(item.id )"></GridButton>
                    <GridButton v-if="false" icon="delete" color="error" @click="onDelete(item.id)"></GridButton>
                </td>
                <td class="text-xs-left" >{{ item.user_id }}</td>
                <td class="text-xs-left" style="white-space: nowrap;">{{ item.name }} {{ item.surname }}</td>
                <td class="text-xs-left" >{{ item.role }}</td>
                <td class="text-xs-left" >{{ item.email }}</td>
                <td class="text-xs-left" >{{ item.cell_phone }}</td>
                <td class="text-xs-left" >{{ item.working_at_company }}</td>
                <td class="text-xs-left"  style="white-space: nowrap;">{{ item.subscription_datetime  | dmy}}</td>
                <td class="text-xs-left" >{{ item.email_verified }}</td>
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
                { text: 'Action', value: 'action', sortable: false },
                { text: this.$vuetify.t('ID'), value: 'user_id' },
                { text: this.$vuetify.t('User'), value: 'name' },
                { text: this.$vuetify.t('Role'), value: 'role' },
                { text: this.$vuetify.t('Email'), value: 'email' },
                { text: this.$vuetify.t('Phone Number'), value: 'cell_phone' },
                { text: this.$vuetify.t('Company'), value: 'working_at_company' },
                { text: this.$vuetify.t('Submission Date'), value: 'subscription_datetime' },
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
            ...mapState('users', {'userList': 'list', 'ui': 'ui'}),
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
                this.$router.push(`/user/${id}`)
            },
            onAdd () {
                this.$router.push('/user/add')
            }
        }
    }
</script>
