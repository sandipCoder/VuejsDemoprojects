import axios from "axios"

export default {
    state: {
        weatherinfo: []
    },

    getters: {
        weatherDetail(state){
            return state.weatherinfo
        }
    },

    actions: {
        //api = 58a2421733e913c3b03c5127d5a61afc
        /// url = https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric

        async getWeatherInfo({ commit }) {
            let api = '58a2421733e913c3b03c5127d5a61afc';
            let city ='Pune'
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
            commit('getWeatherDetail', response.data)
        },
        
        async getCityWiseData({commit},city) {
            let api = '58a2421733e913c3b03c5127d5a61afc';           
            const responsedata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
            commit('getCityWiseDataFetch', responsedata.data)
        }
    },
    mutations: {
        getWeatherDetail(state,data) {
            state.weatherinfo = data;
            console.log(state.weatherinfo)
        },
        getCityWiseDataFetch(state,rsdata) {
            state.weatherinfo = rsdata;
            console.log(state.weatherinfo)
        }
    },
}