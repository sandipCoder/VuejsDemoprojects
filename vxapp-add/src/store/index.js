import Vue from 'vue'
import Vuex from 'vuex'
import addModule from '../modules/addModule';


Vue.use(Vuex);

const store = new Vuex.Store({
     modules:{
     addItem : addModule
     },
})

export default store;