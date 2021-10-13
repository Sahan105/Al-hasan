<template>
  <div>
    <div class="container">
      <section class="section-b-space border-section border-top-0">
        <div class="row">
          <div class="col">
            <div class="slide-6 no-arrow">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in categories" :key="index">
                  <div class="category-block">
                    <a href="#">
                      <div class="category-image">
                       <!-- <p>{{item.image.image_url}}</p> -->
                        <!-- <img :src="item.image[0].image_url" alt> -->
                        <img v-if="item.image.length !== 0"
                        :src="item.image[0].image_url" 
                        alt="">
                        <img v-else
                        src="@/assets/images/icon/image2vector.svg" 
                        alt="">
                      </div>
                    </a>
                    <div class="category-details">
                      <nuxt-link :to="{ path: '/products/'+item.id , params: {id: item.id}}" >
                        <h5>{{item.name}}</h5>
                      </nuxt-link>
                      <!--<h6>{{item.itemcount}}</h6>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        dots: false,
        loop: true,
        autoplay: true,
        slideSpeed: 30,
        slidesPerView: 7,
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
 
  mounted() {
    this.$store.dispatch('home/getCategories')
  }, 
  computed: {
    ...mapState({
      categories: state => state.home.categories
    })
  }
}
</script>