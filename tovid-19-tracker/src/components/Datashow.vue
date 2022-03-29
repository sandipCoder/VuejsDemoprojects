<template>
<div class="mt-3">

    <div class="jumbotron">
        <h5>Cases</h5>
        <p> <strong>Total Confirm : </strong>{{numberWithCommas(status.NewConfirmed)}} </p>
        <p> <strong> New Confirm : </strong>{{numberWithCommas(status.TotalConfirmed)}}</p>
    </div>

    <div class="jumbotron">
        <h5>Death Cases</h5>
        <p> <strong>New Deaths :</strong> {{status.NewDeaths}} </p>
        <p><strong>Total Deaths : </strong>{{numberWithCommas(status.TotalDeaths)}}</p>
    </div>

    <div class="jumbotron">
        <h5>Recovered Cases</h5>
        <p> <strong> New Recovered :</strong> : {{status.NewRecovered}}</p>
        <p><strong>Total Recovered : </strong>{{status.TotalRecovered}}</p>
    </div>

</div>
</template>

<script>
export default {
    name: "Datashow",
    props: ['status'],

    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
    }

}
</script>

<style>

</style>
