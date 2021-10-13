<template>
  <div>
    <section class="p-0 height-100">
      <div class="slide-1 home-slider">
        <div class="slide-6 no-arrow">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="home text-center"
                v-bind:style="{ 'background-image': 'url(' + item.banner_image + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <!--<div>
                          <h4>{{ item.title }}</h4>
                          <h1>{{ item.subtitle }}</h1>
                          <div class="btn btn-solid">
                            <nuxt-link to="/products">
                              Shop now
                            </nuxt-link>
                          </div>
                        </div>-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: true ,
        dots: false,
        loop: true,
        fade: true,
        slideSpeed: 300,
        slidesPerView: 1,
        breakpoints: {
          1367: {
            slidesPerView: 5,
            loop: true
          },
          1024: {
            slidesPerView: 4,
            loop: true
          },
          767: {
            slidesPerView: 3,
            loop: true
          },
          480: {
            slidesPerView: 2
          }
        }
      }
    }
  },
  mounted(){
    this.$store.dispatch('home/getBanners')
  },
  computed: {
    ...mapState({
      items: state => state.home.items,
      
    })
  }
}
</script>
