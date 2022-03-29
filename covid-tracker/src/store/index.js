import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex, axios);

const store = new Vuex.Store({
  state: {
    covidData: []
  },
  getters: {
    getAllCovidDetails(state) {
      return state.covidData;
    },
    getGlobalData(state) {
      return state.covidData.Global;
    },
    getCountryData(state) {
      return state.covidData.Countries;
    }
  },
  actions: {
    async ShowCovidData({ commit }) {
      const res = await axios.get('https://api.covid19api.com/summary');       
      commit('covidDeatail', res.data);
      console.log(res.data);
    },

    getContryDetail(){
      
    }

  },
  mutations: {
    covidDeatail(state, alldata) {
      state.covidData = alldata;
    },


  }
})

export default store