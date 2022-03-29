<template>
<ul class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-around">
        <div class="card text-black bg-light mb-3">
            <div class="card-header">NewConfirmed Cases</div>
            <div class="card-body">
                <p class="card-text">{{status.NewConfirmed }}</p>
            </div>
        </div>

        <div class="card text-black bg-light mb-3">
            <div class="card-header">TotalConfirmed Cases</div>
            <div class="card-body">
                <p class="card-text">{{status.TotalConfirmed }}</p>
            </div>
        </div>
    </li>

    <li class="list-group-item d-flex justify-content-around">
        <div class="card text-black bg-light mb-3">
            <div class="card-header">NewRecovered Cases</div>
            <div class="card-body">
                <p class="card-text">{{status.NewRecovered}}</p>
            </div>
        </div>
        <div class="card text-black bg-light mb-3">
            <div class="card-header">TotalRecovered Cases</div>
            <div class="card-body">
                <p class="card-text">{{status.TotalRecovered}}</p>
            </div>
        </div>
    </li>
    <li class="list-group-item d-flex justify-content-around">
        <div class="card text-black bg-light mb-3">
            <div class="card-header">NewDeaths Cases</div>
            <div class="card-body">
                <p class="card-text">{{status.NewDeaths}}</p>
            </div>
        </div>

        <div class="card text-black bg-light mb-3">
            <div class="card-header">TotalDeaths Cases</div>
            <div class="card-body">
                <p class="card-text">{{status.TotalDeaths }}</p>
            </div>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    name: "CovidStatus",
    props: ['status'],
    // filters: {
    //     couteDetails(val) {
    //       //  console.log(val.typeOf())
    //         return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    //     }
    // }

}
</script>

<style scoped>
.list-group-item .card{
    box-shadow:none;
}
p{
    font-size: 20px;
    font-weight: 600;
    
}
</style>
