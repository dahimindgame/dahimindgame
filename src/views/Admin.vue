<template>
  <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
    <a id="show-sidebar" class="btn btn-sm btn-dark">
      <i class="fa fa-bars" @click="closeSidebar"></i>
    </a>
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <!-- sidebar-brand  -->
        <div class="sidebar-item sidebar-brand">
          <a href="#" @click="closeSidebar">pro sidebar</a>
        </div>
        <!-- sidebar-header  -->
        <div class="sidebar-item sidebar-header">
          <div class="user-pic">
            <img
              class="img-responsive img-rounded"
              src="/img/user.png"
              alt="User picture"
            />
          </div>
          <div class="user-info">
            <span class="user-name"
              >Jhon
              <strong>Smith</strong>
            </span>
            <span class="user-role">Administrator</span>
            <span class="user-status">
              <i class="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>
        <!-- sidebar-search  -->
        <div class="sidebar-item sidebar-search">
          <div>
            <div class="input-group">
              <input
                type="text"
                class="form-control search-menu"
                placeholder="Search..."
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- sidebar-menu  -->
        <div class="sidebar-item sidebar-menu">
          <ul>
            <li class="header-menu">
              <span>Menu</span>
            </li>

            <li>
              <router-link to="/admin/overview">
                <i class="fa fa-chart-line"></i>
                <span>Overview</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/products">
                <i class="fab fa-amazon"></i>
                <span>Products</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/orders">
                <i class="fa fa-shopping-cart"></i>
                <span>Orders</span>
              </router-link>
            </li>

            <li>
              <router-link to="/admin/profile">
                <i class="fa fa-user"></i>
                <span>Profile</span>
              </router-link>
            </li>
            <li>
              <a href="#" @click="logout()">
                <i class="fa fa-power-off"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>
      <!-- sidebar-footer  -->
      <div class="sidebar-footer">
        <div class="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-bell"></i>
            <span class="badge badge-pill badge-warning notification">3</span>
          </a>
          <div
            class="dropdown-menu notifications"
            aria-labelledby="dropdownMenuMessage"
          >
            <div class="notifications-header">
              <i class="fa fa-bell"></i>
              Notifications
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i
                    class="fas fa-check text-success border border-success"
                  ></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    totam explicabo
                  </div>
                  <div class="notification-time">6 minutes ago</div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i
                    class="fas fa-exclamation text-info border border-info"
                  ></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    totam explicabo
                  </div>
                  <div class="notification-time">Today</div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification-content">
                <div class="icon">
                  <i
                    class="fas fa-exclamation-triangle text-warning border border-warning"
                  ></i>
                </div>
                <div class="content">
                  <div class="notification-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    totam explicabo
                  </div>
                  <div class="notification-time">Yesterday</div>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-center" href="#"
              >View all notifications</a
            >
          </div>
        </div>
        <div class="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-envelope"></i>
            <span class="badge badge-pill badge-success notification">7</span>
          </a>
          <div
            class="dropdown-menu messages"
            aria-labelledby="dropdownMenuMessage"
          >
            <div class="messages-header">
              <i class="fa fa-envelope"></i>
              Messages
            </div>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="img/user.jpg" alt="" />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong> Jhon doe</strong>
                  </div>
                  <div class="message-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    totam explicabo
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="img/user.jpg" alt="" />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong> Jhon doe</strong>
                  </div>
                  <div class="message-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    totam explicabo
                  </div>
                </div>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="message-content">
                <div class="pic">
                  <img src="img/user.jpg" alt="" />
                </div>
                <div class="content">
                  <div class="message-title">
                    <strong> Jhon doe</strong>
                  </div>
                  <div class="message-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    totam explicabo
                  </div>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-center" href="#">View all messages</a>
          </div>
        </div>
        <div class="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-cog"></i>
            <span class="badge-sonar"></span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
            <a class="dropdown-item" href="#">My profile</a>
            <a class="dropdown-item" href="#">Help</a>
            <a class="dropdown-item" href="#">Setting</a>
          </div>
        </div>
        <div>
          <a href="#" @click="logout()">
            <i class="fa fa-power-off"></i>
          </a>
        </div>
        <div class="pinned-footer">
          <a href="#">
            <i class="fas fa-ellipsis-h"></i>
          </a>
        </div>
      </div>
    </nav>
    <!-- page-content  -->
    <main class="pt-2">
      <div id="overlay" class="overlay"></div>
      <div class="container-fluid p-5">
        <div class="row">
          <div class="form-group col-md-12">
            <router-view> </router-view>
          </div>

          <div class="form-group col-md-12"></div>

          <div class="form-group col-md-12"></div>
        </div>
      </div>
    </main>
    <!-- page-content" -->
  </div>
</template>

<script>
import { fb } from "../firebase";

export default {
  name: "Admin",
  data() {
    return {
      name: "",
    };
  },
  components: {},
  methods: {
    closeSidebar() {
      window.$(".page-wrapper").toggleClass("toggled");
    },
    logout: function () {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    var user = fb.auth().currentUser;
    this.name = user.email;
  },
};
</script>
<style lang="sass" scoped>
.container-fluid
  height: 100% !important,
</style>