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
              <tr v-for="product in products" :key="product.id">
                <td>
                  {{ product.name }}
                </td>
                <td>
                  {{ product.price }}
                </td>
                <td>
                  <button
                    class="btn btn-primary btn-sm"
                    @click="editProduct(product)"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteProduct(product)"
                    class="btn btn-warning btn-sm"
                  >
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
                <h5 class="modal-title" id="editLabel" v-if="modal == 'new'">
                  Add Product
                </h5>
                <h5 class="modal-title" id="editLabel" v-if="modal == 'edit'">
                  Edit Product
                </h5>
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
                      <vue-editor v-model="product.description"> </vue-editor>
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
                        @keyup.188="addTag"
                        type="text"
                        placeholder="Product tags"
                        v-model="tag"
                        class="form-control"
                      />
                      <div class="d-flex">
                        <p v-for="tag in product.tags" :key="tag">
                          <span class="p-1">{{ tag }}</span>
                        </p>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input
                        type="file"
                        @change="uploadImage"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group d-flex">
                      <div
                        class="p-1"
                        v-for="(image, index) in product.images"
                        :key="image"
                      >
                        <div class="img-wrap">
                          <img width="80px" height="80px" :src="image" alt="" />
                          <span
                            class="delete-img"
                            @click="deleteImage(image, index)"
                          >
                            x
                          </span>
                        </div>
                      </div>
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
                  v-if="modal == 'new'"
                >
                  Save changes
                </button>
                <button
                  @click="updateProduct()"
                  type="button"
                  class="btn btn-primary"
                  v-if="modal == 'edit'"
                >
                  Apply changes
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
import { db, fb } from "../firebase";
import { VueEditor } from "vue2-editor";

export default {
  name: "Products",
  props: {
    msg: String,
  },

  components: {
    VueEditor,
  },

  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
        tags: [],
        images: [],
        description: null,
      },
      modal: null,
      activeItem: null,
      tag: null,
    };
  },

  firestore() {
    return {
      products: db.collection("products"),
    };
  },

  created() {},

  methods: {
    addTag() {
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    addNew() {
      this.reset();
      this.modal = "new";
      window.$("#product").modal("show");
    },
    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      window.$("#product").modal("hide");
    },
    editProduct(product) {
      this.modal = "edit";
      this.product = product;
      this.activeItem = product[".key"];
      window.$("#product").modal("show");
    },
    deleteProduct(doc) {
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
            console.log(doc.id);
            this.$firestore.products.doc(doc.id).delete();
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
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = fb
          .storage()
          .ref("products/" + Math.random() + "_" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            snapshot;
          },
          (error) => {
            console.log(error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
            });
          }
        );
      }
    },
    deleteImage(img, index) {
      let image = fb.storage().refFRomURL(img);

      this.product.images.splice(index, 1);
      image
        .delete()
        .then(function () {
          console.log("deleted" + "");
        })
        .catch(function (error) {
          console.log(error + "");
        });
    },
    addProduct() {
      this.$firestore.products.add(this.product);
      window.$("#product").modal("hide");
    },
    reset() {
      this.product = {
        name: null,
        price: null,
        tags: [],
        images: [],
        description: null,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-wrap {
  position: relative;
}
.img-wrap span.delete-img {
  position: absolute;
  top: -12px;
  left: -2px;
}
.img-wrap span.delete-img:hover {
  cursor: pointer;
}
</style>