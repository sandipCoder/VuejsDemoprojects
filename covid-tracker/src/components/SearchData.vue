<template>
<div>
    <div class="searchdata">
        <select class="form-control" v-model="selected" @change="selectedCountryDetail">
            <option value="0">Select Country</option>
            <option v-for="getItem in getCovidDetail" :key="getItem.ID" :value="getItem.ID"> {{getItem.Country}} </option>
        </select>
    </div>

</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: "SearchData",
    props: ['getCovidDetail'],

    data() {
        return {
            selected: 0
        }
    },

    methods: {
        ...mapActions(['selectedCountry']),

        selectedCountryDetail() {
            const getContry = this.getCovidDetail.find(item => item.ID === this.selected)
            this.selectedCountry(getContry);
        }
    }

}
</script>

<style>
.searchdata {
    margin-top: 20px
}
</style>
