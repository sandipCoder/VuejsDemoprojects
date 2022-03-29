<template>
<div>
    <p>Add User</p>
    <div>
       
        <input type="text" v-model="name" placeholder="Add User here">

        <button @click="addusers"> Add List</button>

    </div>
</div>
</template>

<script>
export default {
    name: "Comp2",
    props: ['names'],

    data() {
        return {
            userData: [],
            name: '',
            completed: false
        }
    },
    methods: {
        addusers() {
           
                this.$emit('add', this.name)
                this.name = ''
            

        },

        save() {
            console.log(this.name)
        }
    }
}
</script>

<style>

</style>
