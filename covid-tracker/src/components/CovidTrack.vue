<template>
<div class="covid">
    <Header />

    <div class="searchdata">
        <select class="form-control" v-model="selected" @change="countryWise">
            <option value="0">Select Country</option>
            <option v-for="country in getAllCovidDetails.Countries" :key="country.ID" :value="country.ID">
                {{country.Country}}
            </option>
        </select>
    </div>
    <h3> Title : {{ title }}</h3>
    <p> Date : {{ getAllCovidDetails.Date }}</p>

    <div class="dflex">
        <div>
            <span>
                New Confirmed : {{ getGlobalData.NewConfirmed }}
            </span>
            <span>
                Total Confirmed :{{ getGlobalData.TotalConfirmed }}
            </span>
        </div>
        <div>
            <span> New Deaths : {{ getGlobalData.NewDeaths }} </span>
            <span>
                Total TotalDeaths : {{ getGlobalData.TotalDeaths }}
            </span>
        </div>
        <div>
            <span>New Recovered: {{getGlobalData.NewRecovered }}
            </span>
            <span>Total Recovered :{{ getGlobalData.TotalRecovered }}
            </span>
        </div>
    </div>

    <p>{{getCountryData.Country}}</p>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapState
} from "vuex";
import Header from "./Header";
export default {
    name: "CovidTrack",
    components: {
        Header,
    },
    data() {
        return {
            dateData: "",
            title: "Global",
            status: "",
            countries: "",
            selected: 0
        };
    },

    computed: {
        ...mapState(["covidData"]),
        ...mapGetters(["getAllCovidDetails",'getGlobalData','getCountryData']),
    },

    async created() {
        await this.ShowCovidData();
        
    },

    methods: {
        ...mapActions(["ShowCovidData",'getContryDetail']),

        countryWise() {                 
                 this.getContryDetail();
        }
    },
};
</script>

<style scoped>
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

.searchdata {
    margin-top: 20px
}
</style>
