<template>
  <!--eslint-disable-->
    <v-app dark class="background pa-0" >
        <notifications position="top right" style="margin-top:50px"/>

        <v-toolbar  dark tabs class="elevation-1 app-toolbar ma-0">

            <v-layout slots="extension" rows wrap class="pl-0">

                <v-flex xs2 class="pl-0">
                    <a class="default-navbar-brand" href="/">
                        <img src="logo.png" alt="logo" width="85">
                    </a>

                </v-flex>
                <v-flex xs8>

                    <v-tabs
                            class="mt-1"

                            v-model="ui.currentMenuItem"
                            slider-color="green"
                            show-arrows
                    >
                        <v-tabs-slider class="mb-2" color="green"></v-tabs-slider>
                        <v-tab v-for="(item, i) in menuItems" :key="i"  :to="'/'+item.to" >
                            {{ $vuetify.t(item.label) }}
                        </v-tab>
                    </v-tabs>

                </v-flex>


                <v-flex class="text-xs-right" xs2>

                    <v-btn flat @click="" class="py-2 pl-2 pr-0" :fab="$vuetify.breakpoint.xsOnly" :small="$vuetify.breakpoint.xsOnly">
                        <v-tooltip left>
                            <span slot="activator">
                                {{userName}}
                                <v-icon class="ml-1" small>exit_to_app</v-icon>
                            </span>
                            {{$vuetify.t('Logout')}}
                        </v-tooltip>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-toolbar>

        <v-container fluid  class="px-1">
            <nuxt />
        </v-container>


    </v-app>
</template>


<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        head () {
            return {
                title: 'Take Down',
            }
        },
        computed: {
            ...mapState('app', ['title', 'ui']),
            ...mapState('api', ['notification']),
            ...mapGetters('app', ['menuItems', 'role', 'userName'])
        },
        watch: {
            'notification.id'(val) {
                this.$notify(this.notification)
            }
        }
    }

</script>

<style>
    .v-input__slot {
        border: 1px solid ;
        border-radius:4px;
        padding-left: 4px;
    }

    table.v-table thead tr {
        height: 30px;
    }

    .v-text-field > .v-input__control > .v-input__slot:before {
        border-style: solid;
        border-width: 0 0 0 0;
        border-radius: 20px;
    }

    .v-table th.column {
        background: antiquewhite;
        border: 1px  solid;
        cursor: default;
        text-align: center !important;
        font-weight: bold !important;
        color:#333 !important;
        font-size:20px !important;
    }
    .theme--light.v-table thead tr:first-child{
        border: 0;
    }

    .theme--dark.v-tabs__bar {
        background-color: transparent;
    }

    .theme--light.application {
        background: white;
        color: rgba(0,0,0,1);
    }

    .v-tabs__div {
        font-size: 16px !important;
    }
    .v-tabs__div, .v-btn{
        text-transform: none !important;
    }


    .v-text-field {
        margin-top: 10px;
        padding-top: 0px;
        border-radius: 20px;
    }

    .mx-datepicker-range, .mx-datepicker {
        width: 100% !important;

    }

    .v-input, .v-label, .v-list__tile {
        font-size:14px !important;
    }

    .v-text-field .v-label--active {
        -webkit-transform: translateY(-25px) scale(0.75);
        transform: translateY(-25px) scale(0.75);
    }

    .theme--light.v-label {
        color: rgba(0,0,0,1);
    }
    table.v-table thead td:not(:nth-child(1)), table.v-table tbody td:not(:nth-child(1)), table.v-table thead th:not(:nth-child(1)), table.v-table tbody th:not(:nth-child(1)), table.v-table thead td:first-child, table.v-table tbody td:first-child, table.v-table thead th:first-child, table.v-table tbody th:first-child {
        padding: 0 4px 0 4px;
    }

    .v-tooltip__content{
        max-width:400px;
    }
    .active-label-size {
        color: rgba(0,0,0,1);
        font-size: 11px !important;
        line-height:10px;
        position: relative;
        top: -2px;
        left:5px;
    }

    .mx-input {
        height: 31px !important;
    }
    .v-datatable__progress th.column{
        background: transparent;
    }
    .v-progress-linear {
        position: relative !important;
        top: -20px !important;
    }
    .sub-tabs .v-tabs__bar {
        background: #f3f3f3f3;
    }

    .layout.row {
        margin-bottom: 15px;
    }
    .v-toolbar__content {
        padding: 0;
    }

    .v-select__slot{
        height:25px;
    }

    .v-chip .v-chip__content{
        height:24px;
    }
    .v-text-field input {
        padding: 10px 10px 10px;
    }
    .hide-dropdown-icon .v-input__icon {display:none}

    .v-input--checkbox .v-input__slot {
        border:0;
    }

    .theme--dark.v-tabs__bar .v-tabs__div {
        color: white;
    }

    .background {
        background-image: url(https://www.griffeshield.com/wp-content/uploads/2019/04/banner-v2.jpg) !important;
    }

</style>
