<template>
<div>
    <div class="mb-3">
        <label for="" class="form-label">ContryWise Details</label>
        <select class="form-control" name="" id="" @change="selectedCountry" v-model="selected">
            <option value="0" selected>Select Country</option>
            <option v-for="country in countries" :key="country.ID" :value="country.ID">
                {{ country.Country }}
            </option>
        </select>
    </div>
</div>
</template>

<script>
export default {
    name: "ContriesDetail",
    props: ["countries"],
    data() {
        return {
            selected: 0,
        };
    },

    methods: {
        selectedCountry() {
            let country = this.countries.find(item=> item.ID === this.selected);
            console.log(country)
            this.$emit("getCountry", country);
        },
    },
};
</script>
