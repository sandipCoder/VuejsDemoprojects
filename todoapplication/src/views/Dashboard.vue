<template>
<div>
    <h1>Wecome to Dashboard</h1>
    <p>{{user.username}}</p>

    <transition name="fade">
        <p v-if="show">User Login successfull</p> 
    </transition>
</div>
</template>

<script>
export default {
    name: "Dashboard",

    data() {
        return {
            user: '',
            users: []
        }
    },

    mounted() {
        if (localStorage.Activeuser) {
            let lsuser = localStorage.user
            this.users = JSON.parse(lsuser)
            console.log(lsuser)
            let activeUser = localStorage.Activeuser
            this.user = JSON.parse(activeUser)
            console.log(this.user)
        }
    },

    methods: {

    }
}
</script>

<style>

</style>
