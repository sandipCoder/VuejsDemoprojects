<template>
<div class="about">
    <div class="page-content d-flex justify-content-center align-items-center">
        <div class="padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <!--weather card-->
                        <div class="card card-weather">
                            <div class="card-body">
                                <div class=" my-4">
                                    <SearchCity @getCity="searchCityWisw" />
                                </div>
                                <div class="weather-date-location">
                                    <p class="text-gray"><span class="weather-date">{{timeformat}}</span></p>
                                    <h3 class="weather-location"> {{city}}, {{country}}</h3>
                                </div>
                                <WeatherTemp :tempr="tempr" :tempMin="tempMin" :tempMax="tempMax" :cweather="cweather" />
                            </div>
                            <WeatherFooter :humidity="humidity" :grdlevel="grdlevel" :sealevel="sealevel" :feellike="feellike" :pressure="pressure" />
                        </div>
                        <!--weather card ends-->
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapState
} from 'vuex'
import moment from 'moment'
import SearchCity from '../components/SearchCity.vue'
import WeatherFooter from '../components/WeatherFooter.vue'
import WeatherTemp from '../components/WeatherTemp.vue'
export default {
    name: "Weather",
    components: {
        SearchCity,
        WeatherFooter,
        WeatherTemp
    },

    data() {
        return {
            tempr: '',
            city: '',
            country: '',
            weatherDate: '',
            tempMin: '',
            tempMax: '',
            pressure: '',
            humidity: '',
            cweather: '',
            grdlevel: '',
            sealevel: '',
            feellike: '',
            clear: ''
        }
    },

    computed: {
        ...mapGetters(['weatherDetail']),
        ...mapState(['weatherinfo']),
        timeformat(weatherDate) {
            return moment(weatherDate).format('LLLL')
        }
    },
    methods: {
        ...mapActions(['getWeatherInfo', 'getCityWiseData']),

        async searchCityWisw(city) {
            await this.getCityWiseData(city);
            this.tempr = this.weatherDetail.main.temp;
            this.city = this.weatherDetail.name;
            this.country = this.weatherDetail.sys.country
            this.weatherDate = this.weatherDetail.dt
            this.tempMin = this.weatherDetail.main.temp_min
            this.tempMax = this.weatherDetail.main.temp_max
            this.pressure = this.weatherDetail.main.pressure
            this.humidity = this.weatherDetail.main.humidity
            this.cweather = this.weatherDetail.weather[0].main
            this.grdlevel = this.weatherDetail.main.grnd_level
            this.sealevel = this.weatherDetail.main.sea_level
            this.feellike = this.weatherDetail.main.feels_like
            this.clear = this.weatherDetail.main.clear
        }

    },
    async created() {
        await this.getWeatherInfo(),
        this.tempr = this.weatherDetail.main.temp;
        this.city = this.weatherDetail.name;
        this.country = this.weatherDetail.sys.country
        this.weatherDate = this.weatherDetail.dt
        this.tempMin = this.weatherDetail.main.temp_min
        this.tempMax = this.weatherDetail.main.temp_max
        this.pressure = this.weatherDetail.main.pressure
        this.humidity = this.weatherDetail.main.humidity
        this.cweather = this.weatherDetail.weather[0].main
        this.grdlevel = this.weatherDetail.main.grnd_level
        this.sealevel = this.weatherDetail.main.sea_level
        this.feellike = this.weatherDetail.main.feels_like
        this.clear = this.weatherDetail.main.clear
    },

    //api = 58a2421733e913c3b03c5127d5a61afc
    /// url = https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric

}
</script>

<style>

</style>
