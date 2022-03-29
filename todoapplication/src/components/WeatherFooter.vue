<template>
<div class="card-body p-0">
    <div class="d-flex weakly-weather">
        <div class="weakly-weather-item">
            <p class="mb-1"> Humidity </p> <i class="mdi mdi-weather-hail"></i>
            <p class="mb-0"> {{humidity}}</p>
        </div>

        <div class="weakly-weather-item">
            <p class="mb-1"> Pressure </p> <i class="mdi mdi-weather-hail"></i>
            <p class="mb-0"> {{pressure}}</p>
        </div>
        <div class="weakly-weather-item">
            <p class="mb-1"> GrndLevel </p> <i class="mdi mdi-weather-partlycloudy"></i>
            <p class="mb-0"> {{grdlevel}} </p>
        </div>
        <div class="weakly-weather-item">
            <p class="mb-1"> SeaLevel </p> <i class="mdi mdi-weather-pouring"></i>
            <p class="mb-0"> {{sealevel}}</p>
        </div>
        <div class="weakly-weather-item">
            <p class="mb-1"> Feelslike </p> <i class="mdi mdi-weather-pouring"></i>
            <p class="mb-0"> {{feellike}}</p>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "WeatherFooter",
    props: [
        'pressure',
        'humidity',
        'grdlevel',
        'sealevel',
        'feellike'
    ],
}
</script>

<style>

</style>
