import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import menu from './modules/menu'
import products from './modules/products'
import cart from './modules/cart'
import filter from './modules/filter'
import layout from './modules/layout'
import about from './modules/about'
import home from './modules/home'
import contact from './modules/contact'
import product_details from './modules/wishlist'
import compare from './modules/compare'
import search_product from './modules/search_product'
import login from './modules/login'
import order from './modules/order'
import currency from './modules/currency'
import topbar from './modules/topbar'
import dashboard from './modules/dashboard'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog,
      home,
      menu,
      products,
      cart,
      filter,
      layout,
      about,
      contact,
      login,
      product_details,
      compare,
      search_product,
      order,
      currency,
      dashboard,
      topbar
    }
  })
}
export default createStore
