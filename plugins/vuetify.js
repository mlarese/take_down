import Vue from 'vue'
import Vuetify from 'vuetify'
import Notifications from 'vue-notification'
import {dmy, time, truncate} from '../assets/filters'
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
import 'vue2-datepicker/index.css';
import '@mdi/font/css/materialdesignicons.css'
import VueMediaQueryMixin from 'vue-media-query-mixin';
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

Vue.use(Vuetify, {

    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        // primary: '#121212', // a color that is not in the material colors palette
        // accent: colors.grey.darken3,
        // secondary: colors.amber.darken3,
        // info: colors.teal.lighten1,
        // warning: colors.amber.base,
        // error: colors.deepOrange.accent4,
        // success: colors.green.accent3
    }
})
Vue.use(Notifications)
Vue.filter('dmy', dmy)
Vue.filter('time', time)
Vue.filter('truncate', truncate)
Vue.filter('numFormat', numFormat(numeral));

Vue.use(VueMediaQueryMixin, {framework:'vuetify'});
export default ({ app, store }) => {

}
