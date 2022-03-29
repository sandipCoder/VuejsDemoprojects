<template>
<div>
    <form @submit.prevent="serchCity">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="City Search" v-model="city">
            <div class="input-group-append">
                <button type="submit" class="btn btn-primary input-group-text">Search</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "SelectCountry",

    data() {
        return {
             city:''
        }
    },
    methods:{
        serchCity(){
            this.$emit('searchCity',this.city)

            this.city = ''
        }
    }

}
</script>
