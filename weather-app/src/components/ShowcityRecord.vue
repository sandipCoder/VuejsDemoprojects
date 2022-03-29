<template>
<div>
    <div>
        <div class="mynav">
            <a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
            <a href="javascript:;"><span class="lnr lnr-cog"></span></a>
        </div>
        <h1 class="heading" v-for=" wether in wheather.wheathers " :key="wether.id">{{wether.main}}</h1>
        <h3 class="location">{{wheather.city}}, {{wheather.country}}</h3>
        <p class="temp">
            <span class="temp-value"> {{wheather.temp}}</span>
            <span class="deg">0</span>
            <a href="javascript:;"><span class="temp-type">C</span></a>
        </p>

        <div class="row justify-content-center">
            <div class="col-10 d-flex justify-content-around">
                <div>
                    <span class="templow"> <i class="fas fa-cloud-sun-rain"></i>  {{wheather.lowtemp}} </span>
                    <span class="sup"><sup>0</sup>C</span>
                </div>
                <div>
                    <span class="temphigh"> <i class="fas fa-cloud-sun-rain"></i>  {{wheather.hightemp}} </span>
                    <span class="sup"><sup>0</sup>C</span>
                </div>

            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: "ShowcityRecord",
    props: ['wheather']

}
</script>

<style scoped>
.templow, .temphigh,span,sup{
 color: #ccc
}

</style>
