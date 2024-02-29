<template>
  <div style="overflow: auto;height: 100vh;">   
    <TopBarComponent ref="topBarComponent"/>
    <HeaderComponent :userInfo="userData.infor" ref="headerComponent"/>
    <ReLoadComponent v-show="isShowReLoad" ref="reLoadComponent"/>
    <main>
      <section class="hero text-center" id="home">

        <ul>

          <li class="slider-item active">

            <div class="slider-bg">
              <transition mode="out-in">
                <img :key="srcBackGroundImage" :src="srcBackGroundImage" width="1880" height="950" alt="" class="img-cover">
              </transition>
            </div>

            <p class="label-2 section-subtitle slider-reveal">For the love of delicious food</p>

            <h1 class="display-1 hero-title slider-reveal">
              Hôm nay ăn gì!!!
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" class="btn slider-reveal">
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

            <a href="#" class="btn slider-reveal">
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

            <a href="#" class="btn slider-reveal">
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

            <p class="label-2 profile-name">Triệu Vỷ</p>
          </div>

        </div>
      </section>

      <section class="section event bg-black-10" id="menu">
        <div class="container" style="margin-top: 20px;">

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
                  <img src="@/assets/images/event-2.jpg" width="350" height="450" loading="lazy"
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

          <a href="#" class="btn" style="display: flex;">
            <span class="text text-1">View Our Blog</span>

            <span class="text text-2" aria-hidden="true">View Our Blog</span>
          </a>

        </div>
      </section>

      <section class="section about text-center" id="about">
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

      <section class="reservation" id="contact">
        <div class="container">

          <div class="form bg-black-10">
            <div class="form-right text-center" style="background-image: url('../../src/assets/images/form-pattern.png')">

              <h2 class="headline-1 text-center">Contact Us</h2>

              <p class="contact-label">Phone number</p>

              <a href="tel:+84363240449" class="body-1 contact-number hover-underline">+84-363-240449</a>

              <div class="separator"></div>

              <p class="contact-label">Location</p>

              <address class="body-4">
                Tan Phong Ward, District 7<br>
                HCMC, VietNam
              </address>
            </div>

          </div>

        </div>
      </section>
    </main>
    
    
    <FooterComponent ref="footerComponent"/>

    <a href="#home" class="back-top-btn active" aria-label="back to top">
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
  </div>
</template>

<script>
import HeaderComponent from './base/HeaderComponent.vue';
import TopBarComponent from './base/TopBar.vue';
import FooterComponent from './base/Footer.vue';
export default {
    name:'HomePage',
    components:{
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
},
    data() {
      return {
        isShowReLoad:false,
        srcBackGroundImageList:
        [
          require('../../src/assets/images/hero-slider-1.jpg'),
          require('../../src/assets/images/hero-slider-2.jpg'),
          require('../../src/assets/images/hero-slider-3.jpg')
        ],
        indexBackGroundImage:0,
        userData:{},
      };
    },
    created(){
      this.isShowReLoad = true; 
      this.userDataHandler();
      this.startImageSlider();
    },
    methods:{
      showLogoutDialog() {
        this.$swal({
          title: 'Bạn chắc chứ!',
          html: '<div class="custom-html-container">Bạn chắc chắn về việc đăng xuất khỏi tài khoản này?</div>',
          icon: 'warning',
          confirmButtonText: 'Đăng xuất',
          cancelButtonText: 'Hủy',
          showCancelButton: true, 
          preConfirm: () => {
            this.confirmLogout();
          },
          customClass: {
            popup: 'custom-dialog',
            confirmButton: 'custom-confirm-button',
            cancelButton: 'custom-cancel-button',
            title: 'custom-title',
          },
        });
      },
      async confirmLogout() {
        localStorage.removeItem('userInfo');
        this.isShowReLoad = true;
        window.location.reload();
        this.isShowReLoad = false;
      },
      userDataHandler(){
        let userString = localStorage.getItem('userInfo');
        if(userString){
          this.userData =  JSON.parse(userString);
        }
      },
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
    },
    async mounted(){
      await this.sleep(1000);
      this.isShowReLoad = false;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.custom-dialog {
  width: 600px !important; /* Đặt chiều rộng */
  height: 300px !important; /* Đặt chiều cao */
  border-radius: 10px !important;
  border: 5px solid var(--gold-crayola) !important;
}
.custom-title {
  font-size: 3rem; 
  font-family: var(--fontFamily-dm_sans) !important;
}

.custom-confirm-button, .custom-cancel-button {
  width: 10rem !important;
  border-radius: 10px !important;
  font-size: 1.3rem !important;
  font-family: var(--fontFamily-dm_sans) !important;
}

.custom-confirm-button {
  background-color: red !important; 
}

.custom-cancel-button {
  background-color: white !important; 
  color: black  !important;
  border: 1px solid black !important;
}
.custom-html-container {
  font-size: 1.5rem; /* Kích thước chữ */
  font-family: var(--fontFamily-dm_sans) !important;
}

</style>