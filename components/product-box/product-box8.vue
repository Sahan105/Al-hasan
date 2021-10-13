<template>
  <div>
    <div class="img-wrapper">
        <div class="lable-block">
        <span class="lable3" v-if="product.featured">new</span>
        <span class="lable4" v-if="product.on_sale">on sale</span>
      </div>
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
        <!--  <button
            data-toggle="modal"
            data-target="#addtocart"
            title="Add to cart"
            @click="addToCart(product, counter)"
            :disabled="counter > product.stock_quantity"
            v-b-modal.modal-cart
            variant="primary"
          >
            <i class="ti-shopping-cart"></i>
          </button>    -->            
        <a href="javascript:void(0)" title="Wishlist">
          <i class="ti-heart" aria-hidden="true" @click="addToWishlist(product)"></i>
        </a>
        <a>
        </a>
        <!--<a href="javascript:void(0)" title="Quick View" @click="showQuickview(product)" v-b-modal.modal-lg variant="primary">
          <i class="ti-search" aria-hidden="true"></i>
        </a>-->
        <!--<a href="javascript:void(0)" title="Comapre" @click="addToCompare(product)" v-b-modal.modal-compare variant="primary">
          <i class="ti-reload" aria-hidden="true"></i>
        </a>-->
      </div>
    </div>
    <div class="product-detail">
      <!-- <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div> -->
      <nuxt-link :to="{ path: '/products/details/'+product.id}">
        <h6>{{ product.name }}</h6>
      </nuxt-link>
      <p>{{ product.short_description }}</p>
      <h4 v-if="product.on_sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.regular_price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.regular_price * curr.curr | currency(curr.symbol) }}</h4>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  props: ['product', 'index'],
  data() {
    return {
      counter: 1,
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
      //const price = product.price - (product.price * product.discount / 100)
      const price = product.sale_price
      return price
    }
  }
}
</script>
