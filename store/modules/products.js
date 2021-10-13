import axios from 'axios'
import V1API from '../../api-path-name/apipath'

const state = {
  //productslist: products.data,
  productslist: [],
  getDetail:{},
  featuredproducts: [],
  //products: products.data,
  title: 'top collection',
  subtitle: 'Exclusive Products',
  title2: 'Al Hassan Diamond Gallery',
  header: 'Dream to desire!',
  description2: 'Flagship store with exclusive collection of IGI Certified Natural Diamond & Precious Metal jewelry.',
  description: 'Contact us on: 01312-581259 or Mail us on: alhassandiamondgallery@gmail.com',
  bannerimagepath: require('@/assets/images/parallax/295x446.jpg'),
  frontbanner: require('@/assets/images/parallax/1370x385.jpg'),
  banner: [],
  wishlist: [],
  compare: [],
  cart: [],
  /*currency: {
    curr: 'usd',
    symbol: '$'
  },*/
  //order: [],
  locale: 'en',
  searchProduct: []
}
// getters
const getters = {
  getcollectionProduct: (state) => {
    return collection => state.productslist.filter((product) => {
      return collection === product.collection
    })
  },
  getProductById: (state) => {
    return id => state.productslist.find((product) => {
      return product.id === +id
    })
  }, 
  compareItems: (state) => {
    return state.compare
  },
  wishlistItems: (state) => {
    return state.wishlist
  }, 
  cartItems: (state) => {
    return state.cart
  },
  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      return total + (product.regular_price * product.quantity)
    }, 0)
  }
  /*changeCurrency: (state) => {
    if (state.currency.curr === 'eur') {
      state.currency.curr = 0.90
      return state.currency
    } else if (state.currency.curr === 'inr') {
      state.currency.curr = 70.93
      return state.currency
    } else if (state.currency.curr === 'gbp') {
      state.currency.curr = 0.78
      return state.currency
    } else if (state.currency.curr === 'usd') {
      state.currency.curr = 1
      return state.currency
    }
  },*/
  /*getOrder: (state) => {
    return state.order
  } */
}
// actions
const actions = {
  getBanner ({ commit }) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.category_by_id, config).then(result => {
      let banner = result.data.category
          console.log(result.data.category)
            commit('SET_BANNER', banner)
         })
         .catch(error => {
            console.log(error)
         })       
  },
  getRelatedProducts({commit}, payload){
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    let id={
      category:[]
    }
    id.category.push(payload)
    axios.post(V1API.products_list_by_category_slug,id , config).then(result => {
      let productslist = result.data.products
          console.log(result.data.products)
            commit('SET_PRODUCTSLIST', productslist)
         })
         .catch(error => {
            console.log(error)
         })      
  },
  getProductslist ({ commit }) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.products_list, config).then(result => {
      let productslist = result.data.products
          console.log(result.data.products)
            commit('SET_PRODUCTSLIST', productslist)
         })
         .catch(error => {
            console.log(error)
         })       
  },
  getProductByCategory ({ commit },payload) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    let id={
      category:[]
    }
    id.category.push(parseInt(payload))
    axios.post(V1API.products_list_by_category,id , config).then(result => {
      let productslist = result.data.products
          console.log(result.data.products)
            commit('SET_PRODUCTSLIST', productslist)
         })
         .catch(error => {
            console.log(error)
         })       
  },
  getProductById ({ commit,dispatch },payload) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.products_list_by_id+payload+"/" , config).then(result => {
      let productslist = result.data.products[0]
            commit('SET_PRODUCT', productslist)
            dispatch('getRelatedProducts',productslist.categories[0].slug)
         })
         .catch(error => {
            console.log(error)
         })       
  },
  getFeaturedproducts ({ commit }) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.featured_prod, config).then(result => {
      let featuredproducts = result.data.products
          console.log(result.data.products)
            commit('SET_FEATURED', featuredproducts)
         })
         .catch(error => {
            console.log(error)
         })       
  },
  /*changeCurrency: (context, payload) => {
    context.commit('changeCurrency', payload)
  },*/
  addToWishlist: (context, payload) => {
    context.commit('addToWishlist', payload)
  },
  removeWishlistItem: (context, payload) => {
    context.commit('removeWishlistItem', payload)
  }, 
  /* 
  createOrder: (context, payload) => {
    context.commit('createOrder', payload)
  } */
  addToCompare: (context, payload) => {
    context.commit('addToCompare', payload)
  },
  removeCompareItem: (context, payload) => {
    context.commit('removeCompareItem', payload)
  },
  searchProduct: (context, payload) => {
    context.commit('searchProduct', payload)
  },
  addToCart: (context, payload) => {
    context.commit('addToCart', payload)
  },
  updateCartQuantity: (context, payload) => {
    context.commit('updateCartQuantity', payload)
  },
  removeCartItem: (context, payload) => {
    context.commit('removeCartItem', payload)
  }
}
// mutations
const mutations = {
  SET_BANNER (state, banner){
    state.banner = banner
  },
  SET_PRODUCTSLIST (state, productslist){
    state.productslist = productslist
  },
  SET_PRODUCT (state, newProduct){
    state.getDetail = newProduct
  },
  SET_FEATURED (state, featuredproducts){
    state.featuredproducts = featuredproducts
  },
  addToWishlist: (state, payload) => {
    const product = state.productslist.find(item => item.id === payload.id)
    const wishlistItems = state.wishlist.find(item => item.id === payload.id)
    if (wishlistItems) {
    } else {
      state.wishlist.push({
        ...product
      })
    }
  },
  removeWishlistItem: (state, payload) => {
    const index = state.wishlist.indexOf(payload)
    state.wishlist.splice(index, 1)
  }, 
  addToCompare: (state, payload) => {
    const product = state.productslist.find(item => item.id === payload.id)
    const compareItems = state.compare.find(item => item.id === payload.id)
    if (compareItems) {
    } else {
      state.compare.push({
        ...product
      })
    }
  },
  removeCompareItem: (state, payload) => {
    const index = state.compare.indexOf(payload)
    state.compare.splice(index, 1)
  },
 /* addToCompare: (state, payload) => {
    const product = state.productslist.find(item => item.id === payload.id)
    const compareItems = state.compare.find(item => item.id === payload.id)
    if (compareItems) {
    } else {
      state.compare.push({
        ...product
      })
    }
  },
  removeCompareItem: (state, payload) => {
    const index = state.compare.indexOf(payload)
    state.compare.splice(index, 1)
  }, */
  searchProduct: (state, payload) => {
    console.log(payload);
    payload = payload.toLowerCase()
    state.searchProduct = []
    if (payload.length) {
      state.productslist.filter((product) => {
        
        if (product.name.toLowerCase().includes(payload)) {
          state.searchProduct.push(product)
        }
      })
    }
  },
  addToCart: (state, payload) => {
    const product = state.productslist.find(item => item.id === payload.id)
    const cartItems = state.cart.find(item => item.id === payload.id)
    const qty = payload.quantity ? payload.quantity : 1
    if (cartItems) {
      cartItems.quantity = qty
    } else {
      state.cart.push({
        ...product,
        quantity: qty
      })
    }
    product.stock_quantity--
  },
  updateCartQuantity: (state, payload) => {
    // Calculate Product stock Counts
    function calculateStockCounts(product, quantity) {
      const qty = product.quantity + quantity
      const stock = product.stock_quantity
      if (stock < qty) {
        return false
      }
      return true
    }
    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {
          // state.cart.push({
          //   ...product,
          //   quantity: qty
          // })
        }
        return true
      }
    })
  },
  removeCartItem: (state, payload) => {
    const index = state.cart.indexOf(payload)
    state.cart.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
