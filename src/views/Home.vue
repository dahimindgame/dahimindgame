<template>
  <div class="">
    <Navbar></Navbar>
    <Footer></Footer>
    <Login></Login>
    <LoginError></LoginError>
    <CommentSlide></CommentSlide>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
import LoginError from "@/components/LoginError.vue";
import CommentSlide from "@/components/CommentSlide.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Login,
    LoginError,
    CommentSlide
  },
};
</script>
