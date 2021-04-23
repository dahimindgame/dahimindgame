import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import About from "../views/About.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Profile from "../views/Profile.vue";
import Checkout from "@/components/Checkout.vue";
import {
  fb
} from "../firebase";

Vue.use(VueRouter);

//const currentUser = fb.auth().currentUSer;
let isAuthenticated = fb.auth().isAuthenticated;
isAuthenticated;
const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home,
    },
    {
      path: '/admin',
      component: Admin,
      meta: {
        requiresAuth: true
      },
      children: [{
          path: 'overview',
          component: Overview,
        },
        {
          path: 'products',
          component: Products,
        },
        {
          path: "profile",
          component: Profile
        },
      ]
    },
    {
      path: '/about',
      component: About,
    },

    {
      path: '/checkout',
      component: Checkout,
    }
  ]
});

router.beforeEach((to, from, next) => {
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  var currentUser = fb.auth().currentUser;
  if (requiresAuth && !currentUser) {
    next('/');
  } else {
    next();
  }
})


export default router;