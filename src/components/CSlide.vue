<template>
  <div class="cslide">
    <carousel-3d
      :autoplay="true"
      :autoplay-timeout="5000"
      :display="3"
      :controls-visible="true"
      :controls-width="50"
      :controls-height="70"
      :inverse-scaling="150"
      :space="750"
      :width="528"
      :height="358"
    >
      <slide :index="0">
        <div class="review">
          <div class="thumb">
            <img
              class="image"
              width="40"
              height="40"
              src="https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-70x70.png"
              srcset="
                https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-70x70.png    70w,
                https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-142x142.png 142w,
                https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-53x53.png    53w,
                https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-140x140.png 140w,
                https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958.png         165w
              "
              sizes="(max-width: 70px) 100vw, 70px"
              alt="Untitled 6 2016-09-01 11-42-00"
              loading="lazy"
            />
          </div>
          <p>
            I STRONGLY recommend KIDZ Baby Store to EVERYONE interested in
            running a successful online business! It’s incredible. Best.
            Product. Ever! KIDZ Baby Store was worth a fortune to my company
          </p>
        </div>
        <figcaption>
          <div class="author">
            <p>– Melony A.</p>
            <p>Faifax, Washington DC</p>
          </div>
        </figcaption>
      </slide>
      <slide :index="1">
        <figcaption>
          The sky is the limit only for those who aren't afraid to fly! The sky
          is the limit only for those who aren't afraid to fly!
        </figcaption>
      </slide>
      <slide :index="2">
        <figcaption>
          The sky is the limit only for those who aren't afraid to fly! The sky
          is the limit only for those who aren't afraid to fly!
        </figcaption>
      </slide>
    </carousel-3d>
  </div>
</template>


<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(175, 161, 161, 0.5);
  color: #fff;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.thumb {
  margin-top: 22px;
  width: 70px;
  height: 70px;
  background-size: cover;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.review p {
  margin: 25px 65px 0 80px;
  text-align: center;
  color: #fff;
}

.author {
  font: 700 13px/16px var(--font-header), sans-serif;
  color: white;
  letter-spacing: 0.118em;
  margin-top: 17px;
  text-transform: uppercase;
  font-size: 14px;
}

.image {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.review {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>