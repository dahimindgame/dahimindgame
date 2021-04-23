import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
  },
  mutations: {
    addToCart: function (state, data) {
      let found = state.cart.find(product => product.product_Id == data.product_Id);

      if (found) {
        found.productQuantity++;
      } else {
        state.cart.push(data);

      }




    }
  },
  actions: {},
  modules: {},
});