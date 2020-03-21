<!--eslint-disable-->
<template>
    <GridContainer title="Reports">
        <CardPanel slot="container-top">
            <v-btn color="primary"
                   class="mb-4 "
                   absolute
                   bottom
                   right
                   @click.native="onAdd"
                   >{{$vuetify.t('Add Report')}}
            </v-btn>

        </CardPanel>



        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :items="reportList"
                :headers="headers"
                class="elevation-0 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.report_id }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.report_brand }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.web }}</td>
                <td>{{ item.report_title }}</td>
                <td><v-tooltip left v-if="item.description">
                    <span class="pa-3" slot="activator">{{ item.description |  truncate(20,'...') }}</span>
                    {{ item.description }}</v-tooltip>
                </td>
                <td>{{ item.report_picture }}</td>
                <td><v-tooltip right v-if="item.location">
                    <span class="pa-3" slot="activator">{{ item.location |  truncate(15,'...') }}</span>
                    {{ item.location }}</v-tooltip>
                </td>
                <td>{{ item.ip_address }}</td>
                <td>{{ item.user_agent }}</td>

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
                { text: this.$vuetify.t('Report ID'), value: 'report_id' },
                { text: this.$vuetify.t('Creation Date'), value: 'date' },
                { text: this.$vuetify.t('Brand Report'), value: 'report_brand' },
                { text: this.$vuetify.t('Username'), value: 'username' },
                { text: this.$vuetify.t('Web Link'), value: 'web' },
                { text: this.$vuetify.t('Report Title'), value: 'report_title' },
                { text: this.$vuetify.t('Description'), value: 'description' },
                { text: this.$vuetify.t('Picture Report'), value: 'report_picture' },
                { text: this.$vuetify.t('Location'), value: 'location' },
                { text: this.$vuetify.t('IP Address'), value: 'ip_address' },
                { text: this.$vuetify.t('HTTP USER AGENT'), value: 'phone_number' },
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
            ...mapState('profileReports', {'reportList': 'list'}),
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapState('brands', ['$record']),
            ...mapState('api', {'isAjax': 'isAjax'}),
        },
        methods: {
            onDelete (id) {
                if(!confirm('Do you confirm the row deletion ?')) return
                this.delete(id)
                    .then(() => {
                        this.load({})
                    })
            },
            onAdd () {
                this.$router.push('/profilereport/add')
            },
            ...mapActions('profileReports', ['add', 'save']),
        }
    }
</script>
