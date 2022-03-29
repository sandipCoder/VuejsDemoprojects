<template>
<div class="hello">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div class="container">
            <router-link class="navbar-brand" to="/"> <img src="@/assets/logo.png" width="50px"> </router-link>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                    <router-link class="nav-link" v-if="!user" to="/Register">Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link"  v-if="!user" to="/Login">Login</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="logOut" v-if="user" href="">Logout</a>
                </li>
            </ul>
        </div>

    </nav>

</div>
</template>

<script>
export default {
    name: "Navbar",

    data(){
        return{
            user:''
        }
    },
    mounted(){
        if(localStorage.Activeuser){
          let activeuser = localStorage.Activeuser
          this.user = JSON.parse(activeuser)
        }
    },

    methods:{
        logOut(){
            localStorage.removeItem('Activeuser');
            this.$router.push('/login')
            window.location.reload();
        }
    }
   
};
</script>

