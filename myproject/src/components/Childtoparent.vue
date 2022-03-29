<template>
    <div>
        <!-- <h1>Pass data child to parent</h1> -->
        <button v-on:click="updateParent">Change child to parent</button>
    </div>
</template>
<script>
export default {
    name:"Childtoparent",

    methods: {
        updateParent(){
            // console.log("updateParent");
            this.$emit('changeParent','The parent component handle using child components')
        }
    }
}
</script>