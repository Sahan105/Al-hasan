import axios from 'axios'
import V1API from '../../api-path-name/apipath'
const state = {
    items: [
       /* {
          imagepath: require('@/assets/images/home-banner/47.jpg'),
          title: 'an exemplart gateway to happiness',
          subtitle: 'all jewellery',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/48.jpg'),
          title: '75th birthday sale',
          subtitle: 'flat 20% off',
          alignclass: 'p-right'
        } */
      ],

      /*categories: [
          {
            img: require('@/assets/images/jewellery/icon/cat-1.svg'),
            title: 'rings',
            itemcount: '21 items'
          },
          {
            img: require('@/assets/images/jewellery/icon/cat-2.svg'),
            title: 'diamonds',
            itemcount: '53 items'
          },
          {
            img: require('@/assets/images/jewellery/icon/cat-3.svg'),
            title: 'necklace',
            itemcount: '18 items'
          },
          {
            img: require('@/assets/images/jewellery/icon/cat-4.svg'),
            title: 'watches',
            itemcount: '34 items'
          },
          {
            img: require('@/assets/images/jewellery/icon/cat-5.svg'),
            title: 'piercing',
            itemcount: '47 items'
          },
          {
            img: require('@/assets/images/jewellery/icon/cat-6.svg'),
            title: 'tiara',
            itemcount: '62 items'
          },
          {
            img: require('@/assets/images/jewellery/icon/cat-7.svg'),
            title: 'bracelates',
            itemcount: '70 items'
          }
      ], */
      title: 'Exclusive Products',
      subtitle: 'all products',
      categories: [],
      titles: [],
      banner: {
        imagepath: require('@/assets/images/parallax/1920x1271.jpg'),
        title: '2021',
        subtitle: 'fashion trends',
        text: 'special offer'
      }, 

    services: []
}
// getters
const getters = {
}
//actions
const actions = {
  getCategories ({ commit }) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.category_details_list, config).then(result => {
      let categories = result.data.category
          console.log(result.data.category)
            commit('SET_CATEGORIES', categories)
         })
         .catch(error => {
            console.log(error)
         })       
  },
  getBanners ({ commit }) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.banner_image, config).then(result => {
      let items = result.data.data
          console.log(result.data.data)
            commit('SET_BANNERS', items)
         })
         .catch(error => {
            console.log(error)
         })       
  },
  getTitles ({ commit }) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.home_titles, config).then(result => {
      let titles = result.data.data
          console.log(result.data.data)
            commit('SET_TITLES', titles)
         })
         .catch(error => {
            console.log(error)
         })       
  },
  getServices ({ commit }) {
    var config = {
      headers: { 
        'Authorization': 'Token 54ed9c2355e2e7fd071826b73404ab499797a9d0'
      }
    };
    axios.get(V1API.home_features, config).then(result => {
      let services = result.data.data
          console.log(result.data.data)
            commit('SET_SERVICES', services)
         })
         .catch(error => {
            console.log(error)
         })       
  }
}
// mutations
const mutations = {
  SET_CATEGORIES (state, categories){
    state.categories = categories
  },
  SET_BANNERS (state, items){
    state.items = items
  },
  SET_TITLES (state, titles){
    state.titles = titles
  },
  SET_SERVICES (state, services){
    state.services = services
  },
}
 
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}