<!--eslint-disable-->
<template>
    <GridContainer title="Brands">
        <div slot="header-right" class="">
            <ButtonNew color="green darken-2"  title="New Brand" @click.native="onAdd"/>
        </div>
        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :headers="headers"
                :items="brandsList"
                hide-details
                dark
                hide-actions
                class="elevation-0"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td width="1" class="pa-1" style="white-space: nowrap;">
                    <GridButton icon="edit" color="primary" @click="onEdit(item.brand_id )"></GridButton>
                    <GridButton icon="delete" color="error" @click="onDelete(item.brand_id)"></GridButton>
                </td>
                <td style="justify-content: left">{{ item.brand_name }}</td>
            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop, itemsLength }">
                {{$vuetify.t('From')}} {{ pageStart }} {{$vuetify.t('To')}} {{ pageStop }}  {{$vuetify.t('of')}} {{ itemsLength }}
            </template>

        </v-data-table>

    </GridContainer>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
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
                { text: this.$vuetify.t('Brand Name'), value: 'brand_name' }
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
            ...mapState('brands', {'brandsList': 'list'}),
            ...mapState('api', {'isAjax': 'isAjax'}),
        },
        methods: {
            onAdd () {
                this.$router.push('/brand/add')
            },
            onDelete (id) {
                if(!confirm('Do you confirm the row deletion ?')) return
                this.delete(id)
                    .then(() => {
                        this.load({})
                    })
            },
            onEdit (id) {
                this.$router.push(`/brand/${id}`)
            }
        }
    }
</script>
