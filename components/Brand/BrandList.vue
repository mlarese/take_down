<!--eslint-disable-->
<template>
    <GridContainer title="Brand">
        <CardPanel slot="container-top">
            <v-btn color="primary"
                   class="mb-4 "
                   absolute
                   bottom
                   right
                   @click.native="onAdd"
            >{{$vuetify.t('Add Brand')}}
            </v-btn>

        </CardPanel>



        <v-data-table
                :rows-per-page-items="[100,200,500,{'text':'All','value':-1}]"
                :loading="isAjax" fixed
                :items="list"
                :headers="headers"
                class="elevation-0 fixed-header"
                slot="body-center">
            <template slot="items" slot-scope="{item}">
                <td>{{ item.id }}</td>
                <td>{{ item.brand_name }}</td>
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
                { text: this.$vuetify.t('ID'), value: 'id' },
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
            ...mapState('brands', ['list', '$record']),
            ...mapState('api', {'isAjax': 'isAjax'}),
        },
        methods: {
            onAdd () {
                this.$router.push('/brand/add')
            },
            ...mapActions('brands', ['add', 'save']),
        }
    }
</script>
