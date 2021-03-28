<template>
  <div class="">
    <Navbar></Navbar>
    <Footer></Footer>
    <Login></Login>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Login,
  },
};
</script>
