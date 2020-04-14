<!--eslint-disable-->
<template>
    <GridContainer title="Submission">
        <div slot="header-right" class="">
            <ButtonNew color="green darken-2"  title="New Submission" @click.native="onAdd"/>
        </div>
        <v-data-table
                :rows-per-page-items="[7]"
                :loading="isAjax" fixed
                :items="reportList"
                :headers="headers"
                hide-details
                dark
                :hide-actions="false"

                class="elevation-0"
                slot="body-center">
            <template slot="items" slot-scope="{item}" style="text-align: center">
                <td width="1" class="no-wrap px-1">
                    <GridButton icon="edit" color="primary" @click="onEdit(item.reports_id )"></GridButton>
                    <GridButton icon="delete" color="error" @click="onDelete(item.reports_id)"></GridButton>
                </td>

                <td style="text-align: center">{{ item.submission_status }}</td>
                <td style="text-align: center">{{ item.username }}</td>
                <td style="text-align: center">{{ item.surname }}</td>
                <td style="text-align: center">{{ item.submission_date  | dmy }}</td>
                <td class="no-wrap">{{ item.submission_title |  truncate(20,'...')  }}</td>
                <td class="no-wrap">{{ item.submission_brand |  truncate(20,'...')}}</td>
                <td class="no-wrap">{{ item.submission_url }}</td>

            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                {{ pageStart }} - {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
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
                { text: 'Actions', value: 'action', sortable: false },
                { text: this.$vuetify.t('Status'), value: 'submission_status' },
                { text: this.$vuetify.t('Username'), value: 'username' },
                { text: this.$vuetify.t('Surname'), value: 'surname' },
                { text: this.$vuetify.t('Date'), value: 'submission_date' },
                { text: this.$vuetify.t('Title'), value: 'submission_title' },
                { text: this.$vuetify.t('Brand'), value: 'submission_brand' },
                { text: this.$vuetify.t('URL'), value: 'submission_url' }
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
            onEdit (id) {
                this.$router.push(`/profilereport/${id}`)
            },
            ...mapActions('profilereport', ['add', 'save']),
        }
    }
</script>
