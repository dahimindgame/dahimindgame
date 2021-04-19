<template>
    <section id="CommentSlide" style="background-color: #414e65">
    <div id="cSlide" class="carousel slide" data-mdb-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="review">
                    <p class="par">I STRONGLY recommend KIDZ Baby Store to EVERYONE interested in running a successful online business! It’s incredible. Best. Product. Ever! KIDZ Baby Store was worth a fortune to my company</p>
                    <div class="thumb">
                        <img class="image" width="70" height="70" src="https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829912567-70x70.png" srcset="https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829912567-70x70.png 70w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829912567-142x142.png 142w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829912567-53x53.png 53w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829912567-140x140.png 140w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829912567.png 169w" sizes="(max-width: 70px) 100vw, 70px" alt="Untitled 6 2016-09-01 11-41-14" loading="lazy">
                    </div>					
                    <div class="author">
                        – Mair Q.
                    </div>
                    <div class="occupation">
                        Dover, North Carolina							
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="review">
                    <p class="par">Very easy to use. I love your system. Definitely worth the investment. Buy this now.</p>
                    <div class="thumb">
                      <img class="image" width="70" height="70" src="https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829222855-70x70.png" srcset="https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829222855-70x70.png 70w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829222855-142x142.png 142w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829222855-53x53.png 53w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829222855-140x140.png 140w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829222855.png 167w" sizes="(max-width: 70px) 100vw, 70px" alt="Untitled 6 2016-09-01 11-41-43" loading="lazy">
                    </div>						
                    <div class="author">
                      – Neely E.
                    </div>
                    <div class="occupation">
                      Whippleville, New York							
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="review">
                    <p class="par" color:white>I made back the purchase price in just 48 hours! You guys rock!</p>
                    <div class="thumb">
                      <img class="image" width="70" height="70" src="https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-70x70.png" srcset="https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-70x70.png 70w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-142x142.png 142w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-53x53.png 53w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958-140x140.png 140w, https://parkofideas.com/kidz/demo4/wp-content/uploads/2016/09/demo4-1829417958.png 165w" sizes="(max-width: 70px) 100vw, 70px" alt="Untitled 6 2016-09-01 11-42-00" loading="lazy">
                    </div>						
                    <div class="author">
                      – Melony A.
                    </div>
                    <div class="occupation">
                      Faifax, Washington DC							
                    </div>
                </div>
            </div>
        </div>
        <a href="#cSlide" class="carousel-control-prev" role="button" data-slide="next">
            <span class="sr-only">Previous</span>
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a> 
        <a href="#cSlide" class="carousel-control-next" role="button" data-slide="next">
            <span class="sr-only">Previous</span>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>    
    </div>
    </section>
</template>


<script>
  export default {
    name: "ComSlide",
    props: {
      msg: String,
    }
  };
</script>

<style>
  .thumb {
    margin-top: 22px;
    width: 40px;
    height: 40px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    overflow: hidden;
  } 

  .author {
    font: 700 13px/16px var(--font-header),sans-serif;
    color: white;
    letter-spacing: 0.118em;
    margin-top: 17px;
    text-transform: uppercase;
    font-size: 14px;
  }

  .image {
    display:block;
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
  }

  .occupation {
    color: rgba(255,255,255,0.8);
  }

  .review{
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .par{
    font: 400 27px,sans-serif;
    color: white;
    letter-spacing: -0.043em;
    max-width: 610px;
    width: 68%;
    padding: 25px 0 0 0;
    margin: 0 auto;
  }    
</style>