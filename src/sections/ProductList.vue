<template>
  <div class="products" id="products">
    <div class="container fullH">
      <h1 class="text-center p-2">Featured</h1>
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card product-item">
            <carousel :perPage="1">
              <slide v-for="(image, index) in product.images" :key="index">
                <img
                  :src="image"
                  class="card-img-top"
                  alt="..."
                  width="150px"
                />
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-priceS">
                  {{
                    product.price
                      | currency("TL", 0, {
                        symbolOnLeft: false,
                        spaceBetweenAmountAndSymbol: true,
                      })
                  }}
                </h5>
              </div>

              <addToCart
                :image="getImage(product.images)"
                :product-id="product.id"
                :name="product.name"
                :price="product.price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "Products-list",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
    };
  },

  methods: {
    getImage: function (images) {
      return images[0];
    },
  },

  firestore() {
    return {
      products: db.collection("products"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 3rem;
  background: #f2f2f2;
  padding-bottom: 1rem;
}

.fullH {
  height: 100%;
}
</style>