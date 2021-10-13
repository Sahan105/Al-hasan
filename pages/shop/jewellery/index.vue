<template>
  <div>
    <Header />
<!--<div>
      <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zBQ2u5lTnuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center>
    </div> -->
    <Slider />
    <Category />
    <ProductSlider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Services />
    <Banner />
    <ProductTab :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    
    <Footer />
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <cartModel :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal" :products="products" />
    <!--<newsletterModel />-->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../../components/header/header6'
import Footer from '../../../components/footer/footer1'
import quickviewModel from '../../../components/widgets/quickview'
import compareModel from '../../../components/widgets/compare-popup'
import cartModel from '../../../components/cart-model/cart-left-model'
//import newsletterModel from '../../../components/widgets/newsletter-popup'
import Slider from './components/slider'
import Category from './components/category'
import ProductSlider from './components/product-slider'
import Services from './components/services'
import Banner from './components/parallax-banner'
import ProductTab from './components/product-tab'
//import Instagram from './components/instagram'
export default {
  components: {
    Header,
    Slider,
    Category,
    ProductSlider,
    Services,
    Banner,
    ProductTab,
    //Instagram,
    Footer,
    quickviewModel,
    compareModel,
    cartModel,
    //newsletterModel
  },
  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {}
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist,
      
    })
  },
  mounted() {
    this.$store.dispatch('products/getProductslist')
    this.productsArray()
  },
  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'jewellery') {
          this.products.push(item)
          item.collection.map((i) => {
            const index = this.category.indexOf(i)
            if (index === -1) this.category.push(i)
          })
        }
      })
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
