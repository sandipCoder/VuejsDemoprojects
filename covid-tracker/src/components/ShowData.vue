<template>
<div>
    <h3> Title : {{getTitle}} </h3>
    <p>  Date : {{dataDate}}</p>

    <div class="dflex">
        <div><span> New Confirmed : {{getStatus.NewConfirmed}} </span> <span> Total Confirmed :{{getStatus.TotalConfirmed}} </span></div>
        <div><span> New Deaths : {{getStatus.NewDeaths}} </span> <span> Total TotalDeaths : {{getStatus.TotalDeaths}} </span></div>
        <div><span>New Recovered: {{getStatus.NewRecovered}} </span> <span>Total Recovered :{{getStatus.TotalRecovered}} </span></div>
    </div>

    
    
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "showData",
    props:['dataDate','getCovidDetail','getTitle', 'getStatus'],

        methods: {
        ...mapActions(['selectedCountry'])
    },
};
</script>

<style>
.dflex {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}

.dflex div {
    background-color: grey;
    margin: 15px;
    padding: 15px;
    color: #fff;
}

.dflex div span {
    width: 100%;
    display: block;
}
</style>
