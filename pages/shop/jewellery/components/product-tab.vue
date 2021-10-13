<template>
  <div>
    <div class="title1 section-t-space title5">
      <h4>{{subtitle}}</h4>
      <h2 class="title-inner1">{{title}}</h2>
      <hr role="tournament6" />
    </div>
    <section class="p-t-0 j-box ratio_square">
      <div class="container">
        <div class="row m-0">      
          <div
          class="col-xl-3 pt-4 col-md-4 col-sm-6"
          v-for="(product,index) in products.slice(0,12)"
          :key="index"
          >
            <div class="product-box">
              <productBox8 
                        @opencartmodel="showCartModal"
                        @showCompareModal="showcomparemodal"
                        @openquickview="showquickview"
                        @showalert="alert"
                        @alertseconds="alert"
                        :product="product"
                        :index="index"
                        />
            </div>
          </div>  
        </div>
      </div>
      <center>
        <div class="col-12 pt-4">
          <nuxt-link to="/products" class="btn btn-solid" >
            See All Products
          </nuxt-link>
        </div>
      </center>
    </section>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
import productBox8 from '../../../../components/product-box/product-box8'
export default {
  data(){
    return{
       dismissSecs: 5,
      dismissCountDown: 0,
    }
  },
  components: {
    productBox8
  },
  mounted(){
    this.$store.dispatch('products/getProductslist')
  },
  computed: {
    ...mapState({
      title: state => state.home.title,
      subtitle: state => state.home.subtitle,
      products: state => state.products.productslist,
    })
  },
  
  methods: {
    /*getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.collection.find(i => i === collection)) {
          return item
        }
      })
    }, */
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData) {
      this.showCart = item
      this.cartproduct = productData
      this.$emit('openCart', this.showCart, this.cartproduct)
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
      this.$emit('openQuickview', this.showquickviewmodel, this.quickviewproduct)
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item
      this.comapreproduct = productData
      this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
    }
  }
}
</script>

<style scoped>

</style>
