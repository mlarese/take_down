<!--eslint-disable-->
<template>
    <GridContainer title="Reports">
        <div slot="header-right" class="">
            <ButtonNew color="green darken-2"  title="New" @click.native="onAdd"/>
        </div>
        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :items="reportList"
                :headers="headers"
                hide-details
                dark
                hide-actions

                class="elevation-0"
                slot="body-center">
            <template slot="items" slot-scope="{item}" style="text-align: center">
                <td style="white-space: nowrap; text-align: center">{{ item.username }} {{ item.surname }}</td>
                <td>{{ item.submission_title }}</td>
                <td>{{ item.submission_brand }}</td>
                <td>{{ item.submission_url }}</td>
                <!--<td>{{ item.submission_country }}</td>
                <td style="white-space: nowrap">{{ item.submission_address }}</td>
                <td>{{ item.submission_city }}</td>
                <td>{{ item.submission_region }}</td>
                <td style="white-space: nowrap">{{ item.submission_zipcode }}</td>
                <td>{{ item.submission_ip }}</td>-->
                <td>{{ item.submission_geo_location_latitude }}</td>
                <td>{{ item.submission_geo_location_longitude }}</td>
                <td style="text-align: center"><v-tooltip left v-if="item.submission_description">
                    <span class="pa-3" slot="activator">{{ item.submission_description |  truncate(20,'...') }}</span>
                    {{ item.submission_description }}</v-tooltip>
                </td>
                <td style="text-align: center">{{ item.submission_status }}</td>
               <!-- <td style="white-space: nowrap">{{ item.submission_status_change_datetime | dmy }}</td>-->
                <td style="text-align: center">{{ item.submission_date  | dmy }}</td>

            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                {{$vuetify.t('From')}} {{ pageStart }} {{$vuetify.t('To')}} {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
            </template>

            <template v-slot:footer>
                <td :colspan="headers.length" >
                </td>
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
                { text: this.$vuetify.t('User'), value: 'username' },
                { text: this.$vuetify.t('Title'), value: 'submission_title' },
                { text: this.$vuetify.t('Brand'), value: 'submission_brand' },
                { text: this.$vuetify.t('URL'), value: 'submission_url' },
                { text: this.$vuetify.t('Geo Location Latitude'), value: 'submission_geo_location_latitude' },
                { text: this.$vuetify.t('Geo Location Longitude'), value: 'submission_geo_location_longitude' },
                { text: this.$vuetify.t('Description'), value: 'submission_description' },
                { text: this.$vuetify.t('Status'), value: 'submission_status' },
                { text: this.$vuetify.t('Date'), value: 'submission_date' },
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
