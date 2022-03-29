<template>
<div class="col">
    <div class="weather-card rain">
        <div class="top">
            <div class="wrapper">
                <SelectCountry @searchCity="getCity" />
                <ShowcityRecord :wheather="wheather" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SelectCountry from "../components/SelectCountry";
import ShowcityRecord from "../components/ShowcityRecord";
import axios from 'axios';
export default {
    name: "Home",
    components: {
        SelectCountry,
        ShowcityRecord
    },

    data() {
        return {
            wheather: {
                city: 'Pune',
                country: 'IN',
                lowtemp: '20',
                hightemp: '30',
                temp: '25',
                wheathers:[{description: 'Clean'}]
            }

        }
    },

    methods: {
        getCity(city) {
            const api = 'd6fcf78730853bd51fee32306a8acf5b';
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
                .then(response => {
                    const data = response.data
                    console.log(data)
                    this.wheather.city = data.name
                    this.wheather.country = data.sys.country
                    this.wheather.temp = data.main.temp,
                    this.wheather.lowtemp = data.main.temp_min
                    this.wheather.hightemp = data.main.temp_max
                    this.wheather.wheathers = data.weather
                   
                })
        }
    },

}
</script>

<style>

</style>
