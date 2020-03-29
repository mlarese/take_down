<template>
  <!--eslint-disable-->
    <v-app dark class="background pa-0" >
        <notifications position="top right" style="margin-top:50px"/>

        <v-toolbar height="80" dark tabs class="elevation-1 app-toolbar" fixed >

            <v-layout slots="extension" rows wrap class="pl-0">

                <v-flex xs1 class="py-2 px-2">
                    <a class="default-navbar-brand" href="/">
                        <img src="logo.png" alt="logo" width="80">
                    </a>

                </v-flex>
                <v-flex xs9 class="text-xs-center mt-2 ml-5">

                    <template v-for="(item, i) in menuItems" v-if="item">

                        <v-btn fab flat  :to="'/'+item.to" :key="i" class="pa-0" nuxt :title="item.label">
                            <v-icon large v-if="!wXS">{{item.icon}}</v-icon>
                            <v-icon medium v-if="wXS" class="">{{item.icon}}</v-icon>
                        </v-btn>


                    </template>
                </v-flex>


                <v-flex class="text-xs-right" xs1>

                    <v-btn  v-if="false" flat @click="" class="py-2 pl-2 pr-0" :fab="$vuetify.breakpoint.xsOnly" :small="$vuetify.breakpoint.xsOnly">
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

        <v-container class="mt-7 mb-5">
            <nuxt />
        </v-container>

        <v-footer app></v-footer>
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
        border: 0px solid ;
        border-radius:4px;
        padding-left: 8px;
        padding-right: 8px;

        background-color: #393939;
    }

    table.v-table thead tr {
        height: 36px;
    }

    .v-text-field > .v-input__control > .v-input__slot:before {
        border-style: solid;
        border-width: 0 0 0 0;
        border-radius: 4px;
    }

    .v-table th.column {
        cursor: default;
        text-align: center !important;
        font-weight: bold !important;
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
    .v-tabs__slider {
        color: blue;
    }


    .v-text-field {
        margin-top: 10px;
        padding-top: 0px;
        border-radius: 4px;
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
        height:32px;
    }

    .v-chip .v-chip__content{
        height:24px;
    }
    .v-text-field input {
        padding: 10px 10px 10px;
    }
    .hide-dropdown-icon .v-input__icon {display:none}

    .v-input--checkbox .v-input__slot {
        border:0px;
    }

    .theme--dark.v-tabs__bar .v-tabs__div {
        color: white;
    }

    .background {

    }

    .v-card {}

    .v-toolbar {
        border-radius: 8px 8px 0px 0px;
    }
</style>
