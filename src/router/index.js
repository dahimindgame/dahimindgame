import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
      {
          path : '/',
          component : Home,
      },
      {
          path : '/admin',
          component : Admin,
      },
      {
          path : '/about',
          component : About,
      }
  ]
  });

export default router;
