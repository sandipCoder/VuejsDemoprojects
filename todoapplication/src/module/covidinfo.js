import axios from "axios"

export default {
    state: {
      covidData:[]
    },

    getters: {
        getallRecord(state){
         return state.covidData
        }
    },

    actions: {
       async fetchData({commit}){
           try{
            const respose = await axios.get('./data/covid.json')
            console.log("dfasfdas", respose.data)

            commit('getCovidData', respose.data)
           }catch(err){
               console.log("err", err)
           }
         
          
        },

        getCountryData({commit}, country){
           commit('getCountryDataAll',country)
        }

    },

    mutations: {
        getCovidData(state,data){
           state.covidData = data;

        },

        getCountryDataAll(state,country){
            state.covidData = country;
            console.log(state.covidData)
        }
    }
}