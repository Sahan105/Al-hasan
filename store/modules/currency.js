import products from '../../data/products'

const state = {
  productslist: products.data,
  products: products.data,
  currency: {
    curr: 'bdt',
    symbol: '৳'
  },
}

// getters
const getters = {
    changeCurrency: (state) => {
         if (state.currency.curr === 'bdt') {
          state.currency.curr = 1
          return state.currency
        }
      },
}

// mutations
const mutations = {
}

// actions
const actions = {
    changeCurrency: (context, payload) => {
        context.commit('changeCurrency', payload)
      },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}