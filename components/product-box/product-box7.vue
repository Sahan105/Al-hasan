<template>
  <div>
      <div class="img-wrapper">
        <div class="front">
        <nuxt-link :to="{ path: '/products/details/'+product.id}">
          <img v-if="product.images.length !== 0"
            :src="product.images[0].image_url"
            :id="product.id"
            class="img-fluid bg-img"
            :key="index"
          /> 
           <img v-else
            src='https://via.placeholder.com/736x1000'
            :id="product.id"
            class="img-fluid bg-img"
            :key="index"
          /> 
        </nuxt-link>
      </div>
        <div class="cart-info cart-wrap">
          <!--<button
            data-toggle="modal"
            data-target="#addtocart"
            title="Add to cart"
            @click="addToCart(product)"
            v-b-modal.modal-cart
            variant="primary"
          >
            <i class="ti-shopping-cart"></i>
          </button>-->
          <a href="javascript:void(0)" title="Add to Wishlist" tabindex="0">
            <i class="fa fa-heart" aria-hidden="true" @click="addToWishlist(product)"></i>
          </a>
        <a>
          <!-- <i class="fa fa-refresh" aria-hidden="true"></i> -->
        </a>
          <!--<a
            class="mobile-quick-view"
            title="Quick View"
            @click="showQuickview(product)"
            v-b-modal.modal-lg
            variant="primary"
          >
            <i class="ti-search" aria-hidden="true"></i>
          </a>-->
        </div>
        <!--<div class="quick-view-part">
            <a href="javascript:void(0)" title="Quick View" @click="showQuickview(product)" v-b-modal.modal-lg variant="primary">
          <i class="ti-search" aria-hidden="true"></i>
        </a>
        </div>-->
      </div>
      <div class="product-info">
        <div class="rating">
          <!--<i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>-->
        <!--<nuxt-link :to="{ path: '/products/details/'+product.id}">
        <h4>{{ product.name }}</h4>
      </nuxt-link>
      <p>{{ product.short_description }}</p>-->
      <h4 class="mb-2"> {{ product.name }} </h4>
      </div>
      </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  props: ['product', 'index'],
  data() {
    return {
      quickviewProduct: {},
      compareProduct: {},
      cartProduct: {},
      showquickview: false,
      showCompareModal: false,
      cartval: false,
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    }),
    ...mapGetters({
      curr: 'currency/changeCurrency'
    })
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    addToCart: function (product) {
      this.cartval = true
      this.cartProduct = product
      this.$emit('opencartmodel', this.cartval, this.cartProduct)
      this.$store.dispatch('products/addToCart', product)
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs
      this.$emit('showalert', this.dismissCountDown)
      this.$store.dispatch('products/addToWishlist', product)
    },
    showQuickview: function (productData) {
      this.showquickview = true
      this.quickviewProduct = productData
      this.$emit('openquickview', this.showquickview, this.quickviewProduct)
    },
    addToCompare: function (product) {
      this.showCompareModal = true
      this.compareProduct = product
      this.$emit('showCompareModal', this.showCompareModal, this.compareProduct)
      this.$store.dispatch('products/addToCompare', product)
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$emit('alertseconds', this.dismissCountDown)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    }
  }
}
</script>
