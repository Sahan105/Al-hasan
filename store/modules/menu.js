import axios from 'axios'
import V1API from '../../api-path-name/apipath'

const state = {
  data: [
    {
      "title": "Home", "type": "sub", "badgeValue": "new", "active": false, "path" : "/"  
    },
    {
      "title": "Shop", "type": "sub", "active": false, "path": "/products", 
      "children":[]
    },
    {
      "title": "About Us", "type": "sub", "badgeValue": "new", "active": false, "path": "/about-us"  
    },
    {
      "title": "Store Locator", "type": "sub", "badgeValue": "new", "active": false, "path": "/store-locator"   
    }
  ],
}

// getters
const getters = {
}

// mutations
const mutations = {
  SET_CATEGORIES (state, children){
    state.data[1].children = children
    console.log(state.data)
  },
}

// actions
const actions = {
  getCategories ({ commit }) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.category_all, config).then(result => {
      let children = result.data.category
          console.log(result.data.category)
            commit('SET_CATEGORIES', children)
         })
         .catch(error => {
            console.log(error)
         })       
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
