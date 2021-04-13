<template>
  <div class="">
    <Navbar></Navbar>
    <Login></Login>
    <LoginError></LoginError>
    <CommentSlide></CommentSlide>
    <CSlide></CSlide>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
import LoginError from "@/components/LoginError.vue";
import CommentSlide from "@/components/CommentSlide.vue";
import CSlide from "@/components/CSlide.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Login,
    LoginError,
    CommentSlide,
    CSlide,
  },
};
</script>
