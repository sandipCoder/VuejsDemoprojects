<template>
  <div>
   <div class="mb-3">
       <label for="" class="form-label"></label>
       <select @change="onChange()" class="form-control" name="" id="" v-model="selected">
           <option value="0" selected>Select one</option>
           <option v-for="country in countries" :key="country.ID" :value="country.ID">{{country.Country }}</option>
       </select>
   </div>
  </div>
</template>

<script>
export default {
    name:"Country",
    props:['countries'],

    data(){
        return{
            selected:0
        }
    },

    methods:{
        onChange(){
            let country = this.countries.find(item=> item.ID === this.selected);
           // console.log(data);
            this.$emit("getCountry", country)
        }
    }

}
</script>

<style>

</style>