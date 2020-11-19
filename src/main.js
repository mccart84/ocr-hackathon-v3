//Import Libraries
import Vue from 'vue'
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload);
Vue.component('vue-fontawesome', FontAwesomeIcon);

//Import Styles
import 'buefy/dist/buefy.css'

//Using Statements
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})

//Import Components
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
