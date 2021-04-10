<template>
  <div class="products">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              ducimus.
            </p>
          </div>
          <div class="col-md-6">
            <img
              :src="require('../assets/logo.png')"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>

      <hr />
      <div class="product-test">
        <h3 class="d-inline-block">Product List</h3>
        <button @click="addNew" class="btn btn-primary btn-md float-right">
          Add Product
        </button>
        <div class="table-responsive-lg">
          <table class="table table-striped table-hover">
            <thead>
              <th>name</th>
              <th>price</th>
              <th>modify</th>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.tag">
                <td>
                  {{ product.name }}
                </td>
                <td>
                  {{ product.price }}
                </td>
                <td>
                  <button class="btn btn-primary btn-sm">Edit</button>
                  <button @click="deleteProduct" class="btn btn-warning btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="product"
          tabindex="-1"
          role="dialog"
          aria-labelledby="editLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editLabel">Edit Product</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Product Name"
                        v-model="product.name"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group">
                      <textarea
                        name="description"
                        class="form-control"
                        placeholder="Product description"
                        v-model="product.description"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Product Details</h4>
                    <hr />

                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Product price"
                        v-model="product.price"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Product tags"
                        v-model="product.tag"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input
                        type="file"
                        @change="uploadImage()"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  @click="addProduct()"
                  type="button"
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
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
  name: "Products",
  props: {
    msg: String,
  },

  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
        tag: null,
        image: null,
        description: null,
      },
      modal: null,
      activeItem: null,
    };
  },

  firestore() {
    return {
      products: db.collection("products"),
    };
  },

  created() {},

  methods: {
    addNew() {
      window.$("#product").modal("show");
    },
    updateProduct() {},
    editProduct() {},
    deleteProduct() {
      const swalWithBootstrapButtons = window.Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === window.Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },
    readData() {},
    addProduct() {
      this.$firestore.products.add(this.product);
      window.$("#product").modal("hide");
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>