<template>
<div class="mt-5">
    <h3></h3>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card" style="width: 30rem">
                <div class="card-body big-infos">
                    <h5 class="card-title h3 text-white"><i class="fas fa-virus"></i> Covid -19 Tracker</h5>
                    <p class="card-text">
                        API From: <a href="https://covid19api.com" class="link"> covid19api.com</a>
                    </p>
                </div>
                <Selectcontry :countries="countries" @countryWisedetails="selectCountrycovid" />
                <div class="text-black bg-light mb-3 mx-4 dd">
                    <div class="card-header h5"><i class="fas fa-globe-europe"></i> <strong>{{title}} Cases</strong></div>
                    <div class="card-body">
                        <p class="card-text">{{covidDate}}</p>
                    </div>
                </div>
                <CovidStatus :status="status" />
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Selectcontry from '../components/Selectcontry.vue'
import CovidStatus from '../components/CovidStatus.vue';
import {
    mapActions,
    mapGetters,
    mapState
} from 'vuex'

export default {
    name: "Covid",
    components: {
        Selectcontry,
        CovidStatus
    },

    data() {
        return {
            title: "Global",
            covidDate: '',
            status: '',
            countries: '',
        }
    },

    computed: {
        ...mapState(['covidData']),
        ...mapGetters(['getallRecord'])
    },

    methods: {
        ...mapActions(['fetchData', 'getCountryData']),
        selectCountrycovid(country) {
            this.getCountryData(country)
            this.title = country.Country
            this.status = country
        }
    },

    async created() {
        console.log(this.fetchData())
        await this.fetchData();
        this.status = this.getallRecord.Global,
        this.covidDate = this.getallRecord.Date
        this.countries = this.getallRecord.Countries

    },

};
</script>

<style scoped>
.big-infos {
    background: #4e73df;
}

.card-img-top {
    padding: 2rem;
    background: linear-gradient(45deg, #44a6ff 0%, #0081f6 100%);
}

.card-body {
    padding: 15px !important;
}

.card {
    padding: 0px 0px;

}

.list-group-item .card {
    width: 13rem;
}

#app {
    height: 100vh
}

.link {
    color: #ccc
}
</style>
