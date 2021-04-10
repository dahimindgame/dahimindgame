<template>
  <div class="">
    <Navbar></Navbar>
    <Footer></Footer>
    <Login></Login>
    <LoginError></LoginError>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
import LoginError from "@/components/LoginError.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Login,
    LoginError,
  },
};
</script>
