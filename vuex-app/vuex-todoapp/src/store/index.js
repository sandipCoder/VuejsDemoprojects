import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo.js'
import addTodos from './modules/addTodos.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
      todo,
      addTodos
  }

})

export default store;