import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import About from "../views/About.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";

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
          children:[
              {
                path : 'overview',
                component : Overview,        
              },
              {
                path : 'products',
                component : Products,        
              }
          ]
      },
      {
          path : '/about',
          component : About,
      }
  ]
  });

export default router;
