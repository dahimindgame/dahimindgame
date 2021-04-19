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
window.$ = window.jQuery = jQuery;

import Carousel3d from 'vue-carousel-3d'

Vue.use(Carousel3d)

import './assets/app.scss';
import {fb} from "./firebase";

import VueFirestore from 'vue-firestore';
Vue.use(VueFirestore)

import Swal from 'sweetalert2'
window.Swal = Swal;

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('font-awesome-icon', FontAwesomeIcon);
//Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(user){
  user;
  if(!app){
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
}

);


