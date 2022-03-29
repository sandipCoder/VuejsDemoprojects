<template>
    <div class="child">
        <h5>{{name}} {{nameofchild}}</h5>
    </div>
</template>

<script>
export default {
    name:"Child",
    props:{
        nameofchild:String
    },

    data(){        
        return{
            name:"This is the child Components."
        }
    }
}
</script>
<style scoped>
.child{
    background:blueviolet;
    width: 100px;
    margin: 20px;
    display: flex;
}
</style>