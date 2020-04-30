<template>
  <!--eslint-disable-->
    <v-app dark class="background pa-0" >
        <notifications position="top right" style="margin-top:50px"/>
        <div v-if="loggingOut">
            <div class="pa-4 text-align-center mt-5">

                <div class="pa-4 text-align-center mt-5">
                <span class="title">Logging out ...</span>
                </div>

            </div>

        </div>

        <div v-if="!loggingOut">
            <v-toolbar style="border-radius:0px"  height="45" dark tabs class="background elevation-1 app-toolbar " fixed >
                <v-toolbar-title>

                    <span class="mt-1 ml-2 title">Take Down</span>

                </v-toolbar-title>
                <v-spacer />
                <v-btn  flat small @click="OnLogout" title="Logout" class="pr-1 mr-0">
                    <span class="caption mr-2">{{userName}}</span>
                    <v-icon >logout</v-icon>
                </v-btn>

                <v-bottom-nav absolute dark  >
                    <template v-if="item" v-for="(item, i) in menuItems">
                        <v-btn  flat small :to="'/'+item.to" :key="i" nuxt :title="item.label">
                            <span>{{item.label}}</span>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>
                    </template>


                </v-bottom-nav>
            </v-toolbar>

            <v-container class="mt-7 mb-5">
                <nuxt />
            </v-container>


            <AppFooter/>

        </div>

    </v-app>
</template>


<script>
  import {mapGetters, mapState} from 'vuex'
  import AppFooter from "./AppFooter";

  export default {
      components: {AppFooter},
      data () {
          return {
            loggingOut: false
          }
        },
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
        },
        methods: {
            OnLogout () {
              this.loggingOut = true
              this.$auth.logout()
                .then(res => this.loggingOut = false)
                .catch(res => this.loggingOut = false)

            }
        },
    }

</script>

<style>
    .v-input__slot {
        border: 0px solid ;
        border-radius:10px;
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
        margin-top: 22px;
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

    .v-card {

    }

    .v-toolbar {
        border-radius: 8px 8px 0px 0px;
    }

    .v-btn--active.v-btn .v-btn__content {
        font-size: 12px !important;
        white-space: nowrap;
        font-weight: bold;
    }
</style>
