import products from '../../data/products'

const state = {
    productslist: products.data,
    products: products.data,
    compare: [],
  }
  
  // getters
  const getters = {
    compareItems: (state) => {
        return state.compare
      },
  }
  
  // mutations
  const mutations = {
    addToCompare: (state, payload) => {
        const product = state.products.find(item => item.id === payload.id)
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
  }
  
  // actions
  const actions = {
    addToCompare: (context, payload) => {
        context.commit('addToCompare', payload)
      },
      removeCompareItem: (context, payload) => {
        context.commit('removeCompareItem', payload)
      },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }