<template>
<div>
    <div class="home">
        <div>
            <img alt="Vue logo" src="../assets/logo.png" />
            <HelloWorld msg="Welcome to Vue.js App"  :user="user" :users="users"/>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
    name: "Home",
    components: {
        HelloWorld,
    },

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
};
</script>

<style scoped>

</style>
