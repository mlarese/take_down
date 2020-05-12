<!--eslint-disable-->
<template>
    <GridContainer title="Submissions">
        <div slot="header-right" class="pt-3 pr-1">

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
                :items="reportList"
                :headers="headers"
                :search="ui.filter"
                class="elevation-4 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}" style="text-align: center">
                <td width="1" class="no-wrap pa-0 text-xs-center">
                    <GridButton icon="edit" color="primary" @click="onEdit(item.id )"></GridButton>
                    <GridButton v-if="false" icon="cancel" color="error" @click="onDelete(item.id)"></GridButton>
                </td>

                <td :title="reportStatesByKey[item.submission_status].text" class="text-xs-center">
                    <v-icon>{{reportStatesByKey[item.submission_status].icon}}</v-icon>
                </td>
                <td class="no-wrap">{{ item.name }}</td>
                <td class="no-wrap">{{ item.surname }}</td>
                <td style="text-align: center">{{ item.submission_date  | dmy }}</td>
                <td class="no-wrap">{{ item.submission_title |  truncate(20,'...')  }}</td>
                <td class="no-wrap">{{ item.submission_brand |  truncate(20,'...')}}</td>
                <td class="no-wrap">{{ item.submission_url }}</td>

            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                {{ pageStart }} - {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
            </template>

        </v-data-table>

        <template slot="__fab">
            <ButtonNew  title="New" @click.native="onAdd" />
        </template>
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
                { text: 'Actions', value: 'action', sortable: false },
                { text: this.$vuetify.t('Status'), value: 'submission_status' },
                { text: this.$vuetify.t('Username'), value: 'name' },
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
            ...mapGetters('reports', ['reportStatesByKey']),
            ...mapState('reports', {'reportList': 'list', 'ui': 'ui'}),
            ...mapState('api', {'isAjax': 'isAjax'}),
        },
        methods: {
            onAdd () {
                this.$router.push('/report/add')
            },
            onDelete (id) {
                if(!confirm('Do you confirm the row deletion ?')) return
                this.delete(id)
                    .then(() => {
                        this.load({})
                    })
            },
            onEdit (id) {
                this.$router.push(`/report/${id}`)
            }
        }
    }
</script>
