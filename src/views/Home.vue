<template>
  <div class="">
    <Navbar></Navbar>
    <Login></Login>
    <LoginError></LoginError>
    <ComSlide></ComSlide>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
import LoginError from "@/components/LoginError.vue";
import ComSlide from "@/components/ComSlide.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Login,
    LoginError,
    ComSlide,
  },
};
</script>
