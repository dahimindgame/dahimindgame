<template>
  <div class="">
      <a class="navbar-brand" href="https://www.youtube.com" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" class="icon alt"/></a>
      <a class="navbar-brand" href="https://www.instagram.com" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="icon alt"/></a>
      <a class="navbar-brand" href="https://www.facebook.com" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" class="icon alt"/></a>
      <a class="navbar-brand" href="https://www.twitter.com" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/></a>
  </div>
</template>


<script>
  export default {
    name: "SocialMediaButtons",
    props: {
      msg: String,
    },
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>