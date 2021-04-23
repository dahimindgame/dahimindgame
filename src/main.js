import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
library.add(faTwitter, faFacebook, faYoutube, faInstagram);

import 'bootstrap';
import 'popper.js';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
})


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import './assets/app.scss';
import {
  fb
} from "./firebase";

import VueFirestore from 'vue-firestore';
Vue.use(VueFirestore)


import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters)

import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 4000
})

window.Toast = Toast;

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('addToCart', require('./components/AddToCart.vue').default);
Vue.component('miniCart', require('./components/MiniCart.vue').default);
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('login', require('./components/Login.vue').default);

Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function (user) {
    user;
    if (!app) {
      new Vue({
        router,
        store,
        render: (h) => h(App),
      }).$mount("#app");
    }
  }

);