<template>
<div>
    <nav class="navbar sticky-top navbar-expand-lg  navbar-dark ">
        <div class="container">
            <router-link class="navbar-brand"  to=""> <img alt="Vue logo" src="../assets/logo.png" width="50" /> </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                        <router-link class="nav-link" v-if="user" to="/home">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="user" to="/weather">Weather</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link"  v-if="user" to="/Todo">Todo</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link"  v-if="user" to="/Covid"> Covid Tracker </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link"  v-if="user" to="/restaurant"> Add Restaurant </router-link>
                    </li>

                </ul>
                <div class="d-flex">
                     <a href="" class="nav-link" @click.prevent="logOutUSer"  v-if="user" :title="user.username" >Logout</a>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: "Header",

    data(){
        return{
            user:''
        }
    },

    mounted(){
        if(localStorage.getItem){
            let lsuser = localStorage.getItem('Activeuser')
            this.user = JSON.parse(lsuser)
        }
    },

    methods:{
        logOutUSer(){
            localStorage.removeItem('Activeuser')
            this.$router.push('/');
            window.location.reload();
        }
    }
}
</script>

<style>
.navbar-dark{
    background-color:#4e73df
}
.nav-link{
    color: rgba(255,255,255,.55);
}
.nav-link:focus, .nav-link:hover {
    color: #fff;
}
</style>
