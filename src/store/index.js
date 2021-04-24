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

      this.commit('saveData');
    },

    saveData(state) {
      console.log(JSON.stringify(state.cart));
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart(state, item) {
      let itemPosition = state.cart.indexOf(item);
      state.cart.splice(itemPosition, 1);
      this.commit('saveData');
    }
  },
  actions: {},
  modules: {},
});