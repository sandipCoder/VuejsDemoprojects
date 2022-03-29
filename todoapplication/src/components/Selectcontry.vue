<template>
<div class="mx-4 my-3">
    <select class="form-control" @change="selectCountry" v-model="selected">
        <option value="0" selected>Select Country</option>
        <option v-for="(country,index) in countries" :key="index" :value="country.CountryCode">
            {{country.Country}}
        </option>
    </select>
</div>
</template>

<script>
export default {
    name: 'Selectcontry',
    props: ['countries'],
    data(){
        return{
            selected:0
        }
    },

    methods: {
        selectCountry() {
             let country = this.countries.find(item=> item.CountryCode === this.selected);
            this.$emit('countryWisedetails',country)
          
        }
    },
}
</script>

<style>

</style>
