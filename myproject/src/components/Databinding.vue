<template>
<div>
    <h2 style="white-space:pre-line">{{message}}</h2>
    <textarea type="text" v-model="message" ></textarea>
   
</div>
    
</template>
<script>
export default {
    name:"Databinding",
    data(){
        return{
            message:"hi",
        }
    }

}
</script>

<style scoped>

</style>