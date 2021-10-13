<template>
  <div class="container">
    <section class="section-b-space border-section border-top-0">
        <div class="col-12 product-related">
          <h2>{{ title }}</h2>
        </div>
        <div class="row">
          <div class="col">
            <div class="slide-6 no-arrow">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div
                  class="swiper-slide"
                  v-for="(product,index) in productslist"
                  :key="index"
                  >
                  <div class="productbox">
                    <div class="product-box" >
                      <productBox8 v-if="slug == product.categories.id"
                      @opencartmodel="showCart"
                      @showCompareModal="showCoampre"
                      @openquickview="showQuickview"
                      @showalert="alert"
                      @alertseconds="alert"
                      :product="product"
                      :index="index"
                      />
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
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <!--<compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />-->
    <cartModel :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal" :products="products" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import productBox8 from '../product-box/product-box8'
import cartModel from '../cart-model/cart-modal-popup'
import quickviewModel from './quickview'
import compareModel from './compare-popup'
export default {
  props: ['productTYpe', 'productId', 'slug'],
  components: {
    productBox8,
    quickviewModel,
    compareModel,
    cartModel
  },
  data() {
    return {
      title: 'Related Products',
      products: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        dots: false,
        loop: true,
        slideSpeed: 300,
        slidesPerView: 6, 
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
            slidesPerView: 2,
          }
        }
      }
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    })
  },
  mounted() {
   // this.productsArray()
  
  },
  methods: {
    // relatedProducts() {
    //   this.$store.dispatch('products/relatedProducts', {
    //     productTYpe: this.productTYpe,
    //     productId: this.productId
    //   })
    // },
     /* productsArray: function () {
      this.productslist.map((item) => {
        if (item.categories[0].slug === this.productTYpe) {
          if (item.id !== this.productId) {
            this.products.push(item)
          }
        }
      })
    }, */
    alert(item) {
      this.dismissCountDown = item
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item
      this.comapreproduct = productData
    },
    closeCompareModal(item) {
      this.showcomparemodal = item
    },
    showCart(item, productData) {
      this.showcartmodal = item
      this.cartproduct = productData
    },
    closeCartModal(item) {
      this.showcartmodal = item
    }
  }
}
</script>

<style scoped>
.productbox {
  padding: 10px;
  padding-bottom: 0px;
}
</style>
