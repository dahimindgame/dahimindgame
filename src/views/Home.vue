<template>
  <div class="mainHome">
    <div class="home">
      <navbar />
      <login />
      <LoginError></LoginError>
      <MainSlide></MainSlide>
      <ProductList></ProductList>
      <ComSlide></ComSlide>
      <Footer></Footer>
      <miniCart />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import LoginError from "@/components/LoginError.vue";
import ComSlide from "@/components/ComSlide.vue";
import MainSlide from "@/components/MainSlide.vue";
import ProductList from "@/sections/ProductList.vue";

export default {
  name: "Home",
  components: {
    Footer,
    LoginError,
    ComSlide,
    MainSlide,
    ProductList,
  },
};
</script>

<style>
.home {
  background-color: #f0f7fd;
  min-width: 20px;
  max-width: 1240px;
  width: 100%;
  position: relative;
  margin: 0 auto;
}

.mainHome {
  background-color: #6ecded;
  background-image: url(https://parkofideas.com/kidz/demo2/wp-content/uploads/2018/10/clothes-2049536750.jpg);
  background-position: left top;
  background-size: auto;
  background-repeat: no-repeat;
  background-attachment: scroll;
}
</style>

