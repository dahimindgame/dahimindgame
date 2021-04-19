<template>
  <footer class="bg-light text-center text-lg-start" style="background-image: linear-gradient(90deg, #2c3e50 ,#bdc3c7)">
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2021 Copyright:
      <a class="text-dark" href="https://dahimindgame.com/">DahiMindGame</a>
      <li class="nav-item">
        <SocialMediaButtons></SocialMediaButtons>
      </li>
    </div>
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
  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>