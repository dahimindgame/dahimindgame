<template>
  <div class="home">
    <Navbar></Navbar>
    <Login></Login>
    <LoginError></LoginError>
    <MainSlide></MainSlide>
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
import MainSlide from "@/components/MainSlide.vue";


export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Login,
    LoginError,
    ComSlide,
    MainSlide
},
};
</script>

<style>
  .home{
    background-color: #f0f7fd;
  }
</style>

