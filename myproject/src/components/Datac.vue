<template>
    <div>
        <h1>Filters</h1>
        <span>{{name|upper}}</span>
    </div>
</template>
<script>
export default {
    name:'Datac',
    filters:{
        upper(val){
         return val.toUpperCase();
        }
    },

    data(){
        return{
            name:'snadip',
        }
    }
}
</script>