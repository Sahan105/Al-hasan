import products from '../../data/products'
const state = {
  //productslist: products.data,
  products: products.data,
  wishlist: [],
  }
  
  // getters
  const getters = {
    wishlistItems: (state) => {
      return state.wishlist

    },
  }
  
  // mutations
  const mutations = {
    addToWishlist: (state, payload) => {
     // localStorage.setItem('productslist')
     // list=localStorage.getItem('productslist')
    //  list.push(payload)
      
      const product = state.products.find(item => item.id === payload.id)
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
  }
  
  // actions
  const actions = {
    addToWishlist: (context, payload) => {
      context.commit('addToWishlist', payload)
    },
    removeWishlistItem: (context, payload) => {
      context.commit('removeWishlistItem', payload)
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  