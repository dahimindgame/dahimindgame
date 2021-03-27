<template>
  <div class="menu-bar">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <div class="navbar-nav mr-auto">
            <SocialMediaButtons></SocialMediaButtons>
          </div>
      </div>
      <div class="mx-auto order-0">
          <img :src="require('../assets/dmg.png')"/>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa fa-sign-in" aria-hidden="true"></i> Giriş</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i> Kayıt Ol</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Sepetim</a>
              </li>
          </ul>
      </div>
      <div class="ml-auto">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>  



  </div>
</template>


<script>
  import SocialMediaButtons from "@/components/SocialMediaButtons.vue";
  export default {
    components: {
      SocialMediaButtons,
    },
    name: "Navbar",
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
    color: #a93279;
  }

  .navbar-nav{
      margin: 0 auto;
      margin-bottom: auto;
  }

  .navbar{
      background-image: linear-gradient(90deg, #2a1b3d ,#d83f87);
  }

  $shopping-cart-red: #DF0000;

.fa-stack[data-count]:after{
  position:absolute;
  right:0%;
  top:0%;
  content: attr(data-count);
  font-size:40%;
  padding:.6em;
  border-radius:999px;
  line-height:.75em;
  color: white;
  color:$shopping-cart-red;
  text-align:center;
  min-width:2em;
  font-weight:bold;
  background: white;
  border-style:solid;
}
.fa-circle {
  color:#DF0000;
}

.red-cart {
	color: #DF0000; background:white;
}

</style>