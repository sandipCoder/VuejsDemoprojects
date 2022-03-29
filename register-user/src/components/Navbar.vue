<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-if="!user">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
                    <li class="nav-item" v-if="!user">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="user">
                        <a class="nav-link" href="" @click.prevent="logoutUser">Logout:{{user.username}} </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: "Navbar",

    data() {
        return {
            user: '',
        }
    },
    mounted() {

        if (localStorage.activeUser) {
            let activeUser = localStorage.activeUser;
            this.user = JSON.parse(activeUser);
        }

    },

    methods:{
        logoutUser(){
            localStorage.removeItem('activeUser');
            this.$router.push('/home');
            window.location.reload();
        }
    }
}
</script>

<style scoped>
</style>
