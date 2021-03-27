import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTwitter, faFacebook, faYoutube, faInstagram);

import 'bootstrap';
import 'popper.js';
import jQuery from 'jquery';
import './assets/app.scss';
window.$ = window.jQuery = jQuery;

Vue.component('font-awesome-icon', FontAwesomeIcon);
//Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
