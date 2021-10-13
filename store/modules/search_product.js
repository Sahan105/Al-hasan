import products from '../../data/products'

const state = {
    productslist: products.data,
    products: products.data,
    searchProduct: []
}

// getters
const getters = {
}

// mutations
const mutations = {
    searchProduct: (state, payload) => {
        payload = payload.toLowerCase()
        state.searchProduct = []
        if (payload.length) {
          state.products.filter((product) => {
            if (product.title.toLowerCase().includes(payload)) {
              state.searchProduct.push(product)
            }
          })
        }
      },
}

// actions
const actions = {
    searchProduct: (context, payload) => {
        context.commit('searchProduct', payload)
      },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
