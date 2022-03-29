import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'

Vue.use(Vuex)
//create store
export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  
  modules: {
    products
  }

})
