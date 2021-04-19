<template>
  <div
    class="modal fade"
    id="login"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
                @click="clearLoginValues"
                >Login</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-register-tab"
                data-toggle="pill"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
                @click="clearLoginValues"
                >Signup</a
              >
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="pills-login-tab"
            >
              <div class="modal-body">
                <div class="container h-100">
                  <div class="d-flex justify-content-center h-100">
                    <div class="user_card">
                      <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                          <img :src="require('../assets/dmg.png')" />
                        </div>
                      </div>
                      <div class="d-flex justify-content-center form_container">
                        <form>
                          <div class="input-group mb-3">
                            <div class="input-group-append">
                              <span class="input-group-text"
                                ><i class="fas fa-at"></i
                              ></span>
                            </div>
                            <input
                              type="email"
                              v-model="email"
                              class="form-control input_e-mail"
                              value=""
                              placeholder="email"
                            />
                          </div>
                          <div class="input-group mb-2">
                            <div class="input-group-append">
                              <span class="input-group-text"
                                ><i class="fas fa-key"></i
                              ></span>
                            </div>
                            <input
                              type="password"
                              @keyup.enter="login"
                              v-model="password"
                              class="form-control input_pass"
                              value=""
                              placeholder="password"
                            />
                          </div>
                          <div class="form-group">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customControlInline"
                              />
                              <label
                                class="custom-control-label"
                                for="customControlInline"
                                >Remember me</label
                              >
                            </div>
                          </div>
                          <div
                            class="d-flex justify-content-center mt-3 login_container"
                          >
                            <button
                              type="button"
                              @click="login"
                              name="button"
                              class="btn login_btn"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                          <a href="#">Forgot your password?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="pills-register-tab"
            >
              <div class="modal-body">
                <div class="container h-100">
                  <div class="d-flex justify-content-center h-100">
                    <div class="user_card">
                      <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                          <img :src="require('../assets/dmg.png')" />
                        </div>
                      </div>
                      <div class="d-flex justify-content-center form_container">
                        <form>
                          <div class="input-group mb-3">
                            <div class="input-group-append">
                              <span class="input-group-text"
                                ><i class="fas fa-user"></i
                              ></span>
                            </div>
                            <input
                              type="text"
                              v-model="name"
                              class="form-control input_user"
                              value=""
                              placeholder="username"
                            />
                          </div>
                          <div class="input-group mb-3">
                            <div class="input-group-append">
                              <span class="input-group-text"
                                ><i class="fas fa-key"></i
                              ></span>
                            </div>
                            <input
                              type="password"
                              v-model="password"
                              class="form-control input_pass"
                              value=""
                              placeholder="password"
                            />
                          </div>
                          <div class="input-group mb-2">
                            <div class="input-group-append">
                              <span class="input-group-text"
                                ><i class="fas fa-at"></i
                              ></span>
                            </div>
                            <input
                              type="email"
                              v-model="email"
                              class="form-control input_e-mail"
                              value=""
                              placeholder="email"
                            />
                          </div>
                          <div class="form-group"></div>
                          <div
                            class="d-flex justify-content-center mt-3 login_container"
                          >
                            <button
                              type="button"
                              @click="register"
                              class="btn register_btn"
                            >
                              Register
                            </button>
                          </div>
                          <div class="mt-4"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { fb, db } from "../firebase";

export default {
  components: {},
  name: "Login",
  props: {
    msg: String,
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register: function () {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          window.$("#login").modal("hide");
          db.collection("profiles").doc(user.user.uid).set({
            name: this.name,
          });
          this.$router.replace("admin");
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },

    login: function () {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          user;
          this.$router.replace("admin");
          window.$("#login").modal("hide");
        })
        .catch(function (error) {
          window.$("#loginError").modal("show");
          console.log(error);
        });
    },

    clearLoginValues() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #60a3bc !important;
}
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #f39c12;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.brand_logo_container {
  position: absolute;
  height: 145px;
  width: 152px;
  top: -60px;
  border-radius: 50%;
  border-color: #f39c12;
  border-style: solid;
  background: #ffffff;
  padding: 9px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_btn,
.register_btn {
  width: 100%;
  background: #c0392b !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #c0392b !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #c0392b !important;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #f39c12;
}

a {
  color: #c0392b;
  text-decoration: none;
  background-color: transparent;
}

.modal-content {
  background-color: blanchedalmond;
}
</style>