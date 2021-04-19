<template>
    <b-container>
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000" 
            fade
            indicators
            img-width="1024"
            img-height="480"
        >
            <b-carousel-slide caption="First Product" img-src="https://parkofideas.com/kidz/demo3/wp-content/uploads/2016/08/demo3-2155371509.jpg">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis quam. Donec sodales, magna nec maximus cursus, arcu est porta ipsum, quis molestie dui ligula dictum urna.  
                </p>
            </b-carousel-slide>
            <b-carousel-slide  img-src="https://parkofideas.com/kidz/demo3/wp-content/uploads/2016/08/demo3-2337591600.jpg">
                <h1>Second Product</h1>
            </b-carousel-slide>
            <b-carousel-slide
                caption="Third Slide"
                text="Hello Word small text" 
                img-src="https://parkofideas.com/kidz/demo3/wp-content/uploads/2016/08/demo3-2334068478.jpg"
            ></b-carousel-slide>
        </b-carousel>
    </b-container>
</template>

<script>
  export default {
    name: "MainSlide",
 
    data() {
      return {
   
      }
    }
  }
</script>         