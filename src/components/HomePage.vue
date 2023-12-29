<template>
  <div>   
    <LoadingComponent v-show="isShowLoading" ref="loadingComponent"/>
    <TopBarComponent ref="topBarComponent"/>
    <HeaderComponent ref="headerComponent"/>
    <div>
      
    </div>
      <main>
        <article>    
          <section class="hero text-center" aria-label="home" id="home">
    
            <ul class="hero-slider">
    
              <li class="slider-item active">
    
                <div class="slider-bg">
                  <img :src="srcBackGroundImage" width="1880" height="950" alt="" class="img-cover">
                </div>
    
                <p class="label-2 section-subtitle slider-reveal">For the love of delicious food</p>
    
                <h1 class="display-1 hero-title slider-reveal">
                  Hôm nay ăn gì!!!
                </h1>
    
                <p class="body-2 hero-text slider-reveal">
                  Come with family & feel the joy of mouthwatering food
                </p>
    
                <a href="#" class="btn btn-primary slider-reveal">
                  <span class="text text-1">Tham khảo những thực đơn có sẵn</span>
    
                  <span class="text text-2" aria-hidden="true">Tham khảo những thực đơn có sẵn</span>
                </a>
    
              </li>
    
              <li class="slider-item">
    
                <div class="slider-bg">
                  <img src="@/assets/images/hero-slider-2.jpg" width="1880" height="950" alt="" class="img-cover">
                </div>
    
                <p class="label-2 section-subtitle slider-reveal">delightful experience</p>
    
                <h1 class="display-1 hero-title slider-reveal">
                  Flavors Inspired by <br>
                  the Seasons
                </h1>
    
                <p class="body-2 hero-text slider-reveal">
                  Come with family & feel the joy of mouthwatering food
                </p>
    
                <a href="#" class="btn btn-primary slider-reveal">
                  <span class="text text-1">View Our Menu</span>
    
                  <span class="text text-2" aria-hidden="true">View Our Menu</span>
                </a>
    
              </li>
    
              <li class="slider-item">
    
                <div class="slider-bg">
                  <img src="@/assets/images/hero-slider-3.jpg" width="1880" height="950" alt="" class="img-cover">
                </div>
    
                <p class="label-2 section-subtitle slider-reveal">amazing & delicious</p>
    
                <h1 class="display-1 hero-title slider-reveal">
                  Where every flavor <br>
                  tells a story
                </h1>
    
                <p class="body-2 hero-text slider-reveal">
                  Come with family & feel the joy of mouthwatering food
                </p>
    
                <a href="#" class="btn btn-primary slider-reveal">
                  <span class="text text-1">View Our Menu</span>
    
                  <span class="text text-2" aria-hidden="true">View Our Menu</span>
                </a>
    
              </li>
    
            </ul>
    
            <button class="slider-btn prev" @click='changeSlide("prev")'>
              <ion-icon name="chevron-back"></ion-icon>
            </button>
    
            <button class="slider-btn next" @click='changeSlide("next")'>
              <ion-icon name="chevron-forward"></ion-icon>
            </button>
    
            <a href="#" class="hero-btn has-after">
              <img src="@/assets/images/hero-icon.png" width="48" height="48" alt="booking icon">
    
              <span class="label-2 text-center span">Sức khỏe là vàng</span>
            </a>
    
          </section>
    
    
    
    
    
          <!-- 
            - #SERVICE
          -->
    
          <section class="section service bg-black-10 text-center" aria-labelledby="menu-label" id="menu">
            <div class="container">
    
              <p class="section-subtitle label-2">Flavors For Royalty</p>
    
              <h2 class="headline-1 section-title">We Offer Top Notch</h2>
    
              <p class="section-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys
                standard dummy text ever.
              </p>
    
              <ul class="grid-list">
    
                <li>
                  <div class="service-card">
    
                    <a href="#" class="has-before hover:shine">
                      <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                        <img src="@/assets/images/service-1.jpg" width="285" height="336" loading="lazy" alt="Breakfast"
                          class="img-cover">
                      </figure>
                    </a>
    
                    <div class="card-content">
    
                      <h3 class="title-4 card-title">
                        <a href="#">Breakfast</a>
                      </h3>
    
                      <a href="#" class="btn-text hover-underline label-2">View Menu</a>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="service-card">
    
                    <a href="#" class="has-before hover:shine">
                      <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                        <img src="@/assets/images/service-2.jpg" width="285" height="336" loading="lazy" alt="Appetizers"
                          class="img-cover">
                      </figure>
                    </a>
    
                    <div class="card-content">
    
                      <h3 class="title-4 card-title">
                        <a href="#">Appetizers</a>
                      </h3>
    
                      <a href="#" class="btn-text hover-underline label-2">View Menu</a>
    
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="service-card">
    
                    <a href="#" class="has-before hover:shine">
                      <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                        <img src="@/assets/images/service-3.jpg" width="285" height="336" loading="lazy" alt="Drinks"
                          class="img-cover">
                      </figure>
                    </a>
    
                    <div class="card-content">
    
                      <h3 class="title-4 card-title">
                        <a href="#">Drinks</a>
                      </h3>
    
                      <a href="#" class="btn-text hover-underline label-2">View Menu</a>
    
                    </div>
    
                  </div>
                </li>
    
              </ul>
    
              <img src="@/assets/images/shape-1.png" width="246" height="412" loading="lazy" alt="shape"
                class="shape shape-1 move-anim">
              <img src="@/assets/images/shape-2.png" width="343" height="345" loading="lazy" alt="shape"
                class="shape shape-2 move-anim">
    
            </div>
          </section>
    
    
    
    
    

    
    
    
    
    
          <section class="special-dish text-center">
    
            <div class="special-dish-banner">
              <img src="@/assets/images/special-dish-banner.jpg" width="940" height="900" loading="lazy" alt="special dish"
                class="img-cover">
            </div>
    
            <div class="special-dish-content bg-black-10">
              <div class="container">
    
                <img src="@/assets/images/badge-1.png" width="28" height="41" loading="lazy" alt="badge" class="abs-img">
    
                <p class="section-subtitle label-2">Special Dish</p>
    
                <h2 class="headline-1 section-title">Lobster Tortellini</h2>
    
                <p class="section-text">
                  Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
                  industrys standard dummy text ever since the when an unknown printer took a galley of type.
                </p>
    
                <div class="wrapper">
                  <del class="del body-3">$40.00</del>
    
                  <span class="span body-1">$20.00</span>
                </div>
    
                <a href="#" class="btn btn-primary">
                  <span class="text text-1">View All Menu</span>
    
                  <span class="text text-2" aria-hidden="true">View All Menu</span>
                </a>
    
              </div>
            </div>
    
            <img src="@/assets/images/shape-4.png" width="179" height="359" loading="lazy" alt="" class="shape shape-1">
    
            <img src="@/assets/images/shape-9.png" width="351" height="462" loading="lazy" alt="" class="shape shape-2">
    
          </section>

          <section class="section testi text-center has-bg-image"
            style="background-image: url('/src/assets/images/testimonial-bg.jpg')" aria-label="testimonials">
            <div class="container">
    
              <div class="quote">”</div>
    
              <p class="headline-2 testi-text">
                I wanted to thank you for inviting me down for that amazing dinner the other night. The food was
                extraordinary.
              </p>
    
              <div class="wrapper">
                <div class="separator"></div>
                <div class="separator"></div>
                <div class="separator"></div>
              </div>
    
              <div class="profile">
                <img src="@/assets/images/testi-avatar.jpg" width="100" height="100" loading="lazy" alt="Sam Jhonson"
                  class="img">
    
                <p class="label-2 profile-name">Sam Jhonson</p>
              </div>
    
            </div>
          </section>
    
          <!-- 
            - #EVENT
          -->
    
          <section class="section event bg-black-10" aria-label="event">
            <div class="container">
    
              <p class="section-subtitle label-2 text-center">Recent Updates</p>
    
              <h2 class="section-title headline-1 text-center">Upcoming Event</h2>
    
              <ul class="grid-list">
    
                <li>
                  <div class="event-card has-before hover:shine">
    
                    <div class="card-banner img-holder" style="--width: 350; --height: 450;">
                      <img src="@/assets/images/event-1.jpg" width="350" height="450" loading="lazy"
                        alt="Flavour so good you’ll try to eat with your eyes." class="img-cover">
    
                      <time class="publish-date label-2" datetime="2022-09-15">15/09/2022</time>
                    </div>
    
                    <div class="card-content">
                      <p class="card-subtitle label-2 text-center">Food, Flavour</p>
    
                      <h3 class="card-title title-2 text-center">
                        Flavour so good you’ll try to eat with your eyes.
                      </h3>
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="event-card has-before hover:shine">
    
                    <div class="card-banner img-holder" style="--width: 350; --height: 450;">
                      <img src="@/assets/images/event-3.jpg" width="350" height="450" loading="lazy"
                        alt="Flavour so good you’ll try to eat with your eyes." class="img-cover">
    
                      <time class="publish-date label-2" datetime="2022-09-08">08/09/2022</time>
                    </div>
    
                    <div class="card-content">
                      <p class="card-subtitle label-2 text-center">Healthy Food</p>
    
                      <h3 class="card-title title-2 text-center">
                        Flavour so good you’ll try to eat with your eyes.
                      </h3>
                    </div>
    
                  </div>
                </li>
    
                <li>
                  <div class="event-card has-before hover:shine">
    
                    <div class="card-banner img-holder" style="--width: 350; --height: 450;">
                      <img src="@/assets/images/event-3.jpg" width="350" height="450" loading="lazy"
                        alt="Flavour so good you’ll try to eat with your eyes." class="img-cover">
    
                      <time class="publish-date label-2" datetime="2022-09-03">03/09/2022</time>
                    </div>
    
                    <div class="card-content">
                      <p class="card-subtitle label-2 text-center">Recipie</p>
    
                      <h3 class="card-title title-2 text-center">
                        Flavour so good you’ll try to eat with your eyes.
                      </h3>
                    </div>
    
                  </div>
                </li>
    
              </ul>
    
              <a href="#" class="btn btn-primary">
                <span class="text text-1">View Our Blog</span>
    
                <span class="text text-2" aria-hidden="true">View Our Blog</span>
              </a>
    
            </div>
          </section>
    
        </article>
      </main>
      <section class="section about text-center" aria-labelledby="about-label" id="about">
        <div class="container">

          <div class="about-content">

            <p class="label-2 section-subtitle" id="about-label">Our Story</p>

            <h2 class="headline-1 section-title">Every Fla vor Tells a Story</h2>

            <p class="section-text">
              Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
              it to make a type specimen book It has survived not only five centuries, but also the leap into.
            </p>
          </div>

          <figure class="about-banner">

            <img src="@/assets/images/about-banner.jpg" width="570" height="570" loading="lazy" alt="about banner"
              class="w-100" data-parallax-speed="1">

            <div class="abs-img abs-img-1 has-before" data-parallax-speed="1.75">
              <img src="@/assets/images/about-abs-image.jpg" width="285" height="285" loading="lazy" alt=""
                class="w-100">
            </div>

            <div class="abs-img abs-img-2 has-before">
              <img src="@/assets/images/badge-2.png" width="133" height="134" loading="lazy" alt="">
            </div>

          </figure>

          <img src="@/assets/images/shape-3.png" width="197" height="194" loading="lazy" alt="" class="shape">

        </div>
      </section>
      <section class="reservation" aria-labelledby="contact-label" id="contact">
        <div class="container">

          <div class="form reservation-form bg-black-10">

            <form action="" class="form-left">

              <h2 class="headline-1 text-center">Online Reservation</h2>

              <p class="form-text text-center">
                Booking request <a href="tel:+88123123456" class="link">+88-123-123456</a>
                or fill out the order form
              </p>

              <div class="input-wrapper">
                <input type="text" name="name" placeholder="Your Name" autocomplete="off" class="input-field">

                <input type="tel" name="phone" placeholder="Phone Number" autocomplete="off" class="input-field">
              </div>

              <div class="input-wrapper">

                <div class="icon-wrapper">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                  <select name="person" class="input-field">
                    <option value="1-person">1 Person</option>
                    <option value="2-person">2 Person</option>
                    <option value="3-person">3 Person</option>
                    <option value="4-person">4 Person</option>
                    <option value="5-person">5 Person</option>
                    <option value="6-person">6 Person</option>
                    <option value="7-person">7 Person</option>
                  </select>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

                <div class="icon-wrapper">
                  <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>

                  <input type="date" name="reservation-date" class="input-field">

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

                <div class="icon-wrapper">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                  <select name="person" class="input-field">
                    <option value="08:00am">08 : 00 am</option>
                    <option value="09:00am">09 : 00 am</option>
                    <option value="010:00am">10 : 00 am</option>
                    <option value="011:00am">11 : 00 am</option>
                    <option value="012:00am">12 : 00 am</option>
                    <option value="01:00pm">01 : 00 pm</option>
                    <option value="02:00pm">02 : 00 pm</option>
                    <option value="03:00pm">03 : 00 pm</option>
                    <option value="04:00pm">04 : 00 pm</option>
                    <option value="05:00pm">05 : 00 pm</option>
                    <option value="06:00pm">06 : 00 pm</option>
                    <option value="07:00pm">07 : 00 pm</option>
                    <option value="08:00pm">08 : 00 pm</option>
                    <option value="09:00pm">09 : 00 pm</option>
                    <option value="10:00pm">10 : 00 pm</option>
                  </select>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

              </div>

              <textarea name="message" placeholder="Message" autocomplete="off" class="input-field"></textarea>

              <button type="submit" class="btn btn-secondary">
                <span class="text text-1">Book A Table</span>

                <span class="text text-2" aria-hidden="true">Book A Table</span>
              </button>

            </form>

            <div class="form-right text-center" style="background-image: url('src/assets/images/form-pattern.png')">

              <h2 class="headline-1 text-center">Contact Us</h2>

              <p class="contact-label">Booking Request</p>

              <a href="tel:+88123123456" class="body-1 contact-number hover-underline">+88-123-123456</a>

              <div class="separator"></div>

              <p class="contact-label">Location</p>

              <address class="body-4">
                Restaurant St, Delicious City, <br>
                London 9578, UK
              </address>

              <p class="contact-label">Lunch Time</p>

              <p class="body-4">
                Monday to Sunday <br>
                11.00 am - 2.30pm
              </p>

              <p class="contact-label">Dinner Time</p>

              <p class="body-4">
                Monday to Sunday <br>
                05.00 pm - 10.00pm
              </p>

            </div>

          </div>

        </div>
      </section>
    
      <footer class="footer section has-bg-image text-center"
        style="background-image: url('@/assets/images/footer-bg.jpg')">
        <div class="container">  
          <div class="footer-bottom">
    
            <p class="copyright">
              &copy; 2022 Grilli. All Rights Reserved | Crafted by <a href="https://www.facebook.com/trieu.vy.5245/"
                target="_blank" class="link">Triệu Vỷ</a>
            </p>
    
          </div>
    
        </div>
      </footer>
      <!-- 
        - #BACK TO TOP
      -->
    
      <a href="#top" class="back-top-btn active" aria-label="back to top">
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
  </div>
</template>

<script>
import HeaderComponent from './base/HeaderComponent.vue';
import LoadingComponent from './base/LoadingComponent.vue';
import TopBarComponent from './base/TopBar.vue';
export default {
    name:'HomePage',
    components:{
    LoadingComponent,
    TopBarComponent,
    HeaderComponent
},
    data() {
      return {
        isShowLoading:true,
        srcBackGroundImageList:
        [
          require('../../src/assets/images/hero-slider-1.jpg'),
          require('../../src/assets/images/hero-slider-2.jpg'),
          require('../../src/assets/images/hero-slider-3.jpg')
        ],
        indexBackGroundImage:0,
      };
    },
    async created(){
      await this.sleep(1000);
      this.isShowLoading = false; 
      this.startImageSlider();
    },
    methods:{
      startImageSlider() {
        setInterval(() => {
          this.indexBackGroundImage = (this.indexBackGroundImage + 1) % this.srcBackGroundImageList.length;
        }, 5000); 
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      changeSlide(event){
        this.indexBackGroundImage = (event ==='prev')? this.indexBackGroundImage-1:this.indexBackGroundImage+1;
        this.indexBackGroundImage = (this.indexBackGroundImage>this.srcBackGroundImageList.length-1) ? 0: this.indexBackGroundImage;
        this.indexBackGroundImage = (this.indexBackGroundImage<0)?this.srcBackGroundImageList.length-1:this.indexBackGroundImage;
      }
    },
    computed:{
      srcBackGroundImage(){
        return this.srcBackGroundImageList[this.indexBackGroundImage];
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
