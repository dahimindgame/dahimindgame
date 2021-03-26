<template>
  <footer class="footer text-lg-start">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2021 Copyright:
      <a class="text-dark" href="https://dahimindgame.com/">DahiMindGame</a>
      <li class="nav-item">
        <SocialMediaButtons></SocialMediaButtons>
      </li>
    </div>
    <!-- Copyright -->
  </footer>
</template>


<script>
  import SocialMediaButtons from "@/components/SocialMediaButtons.vue";
  export default {
    components: {
      SocialMediaButtons,
    },
    name: "Footer",
    props: {
      msg: String,
    },
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .footer{
      background-image: linear-gradient(90deg, #2c3e50 ,#bdc3c7);
  }
</style>