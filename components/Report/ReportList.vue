<!--eslint-disable-->
<template>
    <GridContainer title="Reports">

        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :items="reportList"
                :headers="headers"
                class="elevation-0 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.username }} {{ item.surname }}</td>
                <td>{{ item.submission_title }}</td>
                <td>{{ item.submission_brand }}</td>
                <td>{{ item.submission_HTTP_USER_AGENT }}</td>
                <td>{{ item.submission_url }}</td>
                <td>{{ item.submission_country }}</td>
                <td>{{ item.submission_address }}</td>
                <td>{{ item.submission_city }}</td>
                <td>{{ item.submission_region }}</td>
                <td>{{ item.submission_zipcode }}</td>
                <td>{{ item.submission_ip }}</td>
                <td>{{ item.submission_geo_location_latitude }}</td>
                <td>{{ item.submission_geo_location_longitude }}</td>
                <td><v-tooltip left v-if="item.submission_description">
                    <span class="pa-3" slot="activator">{{ item.submission_description |  truncate(20,'...') }}</span>
                    {{ item.submission_description }}</v-tooltip>
                </td>
                <td>{{ item.pictures }}</td>
                <td>{{ item.submission_status }}</td>
                <td>{{ item.submission_status_change_datetime }}</td>
                <td>{{ item.submission_date }}</td>

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
    import {statusIdToText} from '../../assets/filters'
    export default {
        components: {ButtonNew, CardPanel, GridButton, GridContainer, DatePicker},
        data () {

            const headers = [
                { text: this.$vuetify.t('Username'), value: 'username' },
                { text: this.$vuetify.t('Submission'), value: 'submission_title' },
                { text: this.$vuetify.t('Submission Brand'), value: 'submission_brand' },
                { text: this.$vuetify.t('HTTP USER AGENT'), value: 'submission_HTTP_USER_AGENT' },
                { text: this.$vuetify.t('URL'), value: 'submission_url' },
                { text: this.$vuetify.t('Country'), value: 'submission_country' },
                { text: this.$vuetify.t('Address'), value: 'submission_address' },
                { text: this.$vuetify.t('Region'), value: 'submission_region' },
                { text: this.$vuetify.t('City'), value: 'submission_city' },
                { text: this.$vuetify.t('Zip/Code'), value: 'submission_zipcode' },
                { text: this.$vuetify.t('Submission IP'), value: 'submission_ip' },
                { text: this.$vuetify.t('Geo Location Latitude'), value: 'submission_geo_location_latitude' },
                { text: this.$vuetify.t('Geo Location Longitude'), value: 'submission_geo_location_longitude' },
                { text: this.$vuetify.t('Description'), value: 'submission_description' },
                { text: this.$vuetify.t('Picture'), value: 'pictures' },
                { text: this.$vuetify.t('Status'), value: 'submission_status' },
                { text: this.$vuetify.t('Status Date Modified'), value: 'submission_status_change_datetime' },
                { text: this.$vuetify.t('Submission'), value: 'submission_date' },
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
            ...mapState('reports', {'reportList': 'list'}),
            ...mapState('api', {'isAjax': 'isAjax'}),
        },
        methods: {
            statusIdToText,
            onDelete (id) {
                if(!confirm('Do you confirm the row deletion ?')) return
                this.delete(id)
                    .then(() => {
                        this.load({})
                    })
            },
        }
    }
</script>
