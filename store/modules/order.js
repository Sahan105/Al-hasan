import products from '../../data/products'

const state = {
  productslist: products.data,
  products: products.data,
  order: []
}

// getters
const getters = {
    getOrder: (state) => {
        return state.order
      }
}

// mutations
const mutations = {
    createOrder: (state, payload) => {
        state.order = payload
      }
}

// actions
const actions = {
    createOrder: (context, payload) => {
        context.commit('createOrder', payload)
      }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
