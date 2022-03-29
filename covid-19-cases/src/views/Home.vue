<template>
<div class="home">
    <div class="col-sm-12">
        <div class="tile">
            <div class="wrapper">
                <Contries-detail :countries="countries" @getCountry="contriesDetail" />
                <DataDate :dataDate="dataDate" :title="title" />
                <ShowRecord :status="status" />

            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import DataDate from '@/components/DataDate.vue'
import ShowRecord from '@/components/ShowRecord.vue';
import ContriesDetail from '@/components/ContriesDetail.vue';

export default {
    name: "Home",
    components: {
        DataDate,
        ShowRecord,
        ContriesDetail,
    },

    data() {
        return {
            dataDate: '',
            title: 'Global',
            status: '',
            countries: ''

        }
    },

    methods: {
        async fetchData() {
            const res = await fetch('https://api.covid19api.com/summary')
            const data = await res.json();
            console.log(data)
            return data;
        },

        contriesDetail(country) {
            this.status = country,
                this.title = country.Country
        }
    },

    async created() {
        const data = await this.fetchData();
        this.dataDate = data.Date,
            this.status = data.Global,
            this.countries = data.Countries
    }

};
</script>
