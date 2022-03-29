<template>
<div class="home">
    <div v-if="!loading">
        <Datatitle :text="title" :dataDate="dataDate" />
        <Datashow :status="status"/>
        <Country :countries="countries" @getCountry="getContries"/>
    </div>

    <div v-else>

        <div>
            fetch data
        </div>

        <img :src="loadImage" />

    </div>
</div>
</template>

<script>
import Datatitle from '@/components/Datatitle.vue'
import Datashow from '@/components/Datashow.vue'
import Country from '@/components/Country.vue'
export default {
    name: 'Home',
    components: {
        Datatitle,
        Datashow,
        Country
    },

    data() {
        return {
            loading: true,
            title: 'Global',
            status: '',
            countries: [],
            dataDate: '',
            loadImage: require('../assets/loading.gif')
        }
    },

    methods: {
        async fetchCovidtrackdata() {
            const res = await fetch('https://api.covid19api.com/summary')
            const data = await res.json();
            return data           
        },
        getContries(country){
             this.status = country,
             this.title = country.Country
            }

    },
    async created() {
        const data = await this.fetchCovidtrackdata();
        console.log(data);

        this.dataDate = data.Date,
        this.status = data.Global
        this.countries = data.Countries
        this.loading = false

    },

}
</script>
