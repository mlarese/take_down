<!--eslint-disable-->
<template>
    <GridContainer title="Profile">
        <v-tabs slot="container-top"
                class="mb-2 sub-tabs"
                v-model="ui.currentTab"
                slider-color="grey"
                show-arrows
        >
            <v-tab v-for="(item, i) in settingTabs" :key="i"  :to="'/'+item.to" >
                {{ $vuetify.t(item.label) }}
            </v-tab>
        </v-tabs>

        <nuxt-child slot="body-center"/>
    </GridContainer>
</template>

<script>
    import {mapState} from 'vuex'
    import GridContainer from '../components/General/GridContainer'
    export default {
        components: {GridContainer},
        data () {
            return {
                gridFilter: '',
            }
        },
        computed: {
            ...mapState('app', ['ui'])
        },
        methods: {
            onClick () {
                alert('onClick')
            }
        }
    }
</script>

