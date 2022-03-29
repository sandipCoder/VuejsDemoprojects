<template>
<div class="weather-data d-flex">
    <div class="m-auto">
        <h4 class="display-1">{{tempr}}<sup>°</sup>C</h4>
        <p :class="{cloud: cweather ==='Clouds', rain: cweather ==='Rain', haze: cweather ==='Haze', clear: cweather ==='Clear' }">
            {{ cweather}}</p>
        <div class="d-flex weakly-weather">
            <div class="weakly-weather-item">
                <p class="mb-0"> MaxTemp </p> <i class="mdi mdi-weather-cloudy"></i>
                <p class="mb-0"> {{tempMax}}° </p>
            </div>
            <div class="weakly-weather-item">
                <p class="mb-1"> MinTemp </p> <i class="mdi mdi-weather-hail"></i>
                <p class="mb-0"> {{tempMin}}° </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"WeatherTemp",
    props: ["tempr","tempMin","tempMax","cweather"]
}
</script>

<style>

</style>
