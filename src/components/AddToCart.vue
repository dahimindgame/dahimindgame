<template>
  <div class="add-to-cart">
    <button class="btn btn-primary" @click="addToCart">Sepete Ekle</button>
  </div>
</template>


<script>
export default {
  name: "AddToCart",
  props: {
    name: String,
    price: String,
    productId: String,
    image: String,
  },

  data() {
    return {
      item: {
        productImage: this.image,
        productName: this.name,
        productPrice: this.price,
        product_Id: this.productId,
        productQuantity: 1,
      },
    };
  },
  methods: {
    addToCart: function () {
      window.$("#miniCart").modal("show");
      this.$store.commit("addToCart", this.item);
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>