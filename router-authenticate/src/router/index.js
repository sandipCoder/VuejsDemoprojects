import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Dashboard from '../components/Dashboard.vue'

Vue.use(VueRouter);

const guest=(to,from,next) =>{
    if(localStorage.Activeuser){
        next({name:"Dashboard"})
    }else{
        next()
    }
}

const gaurd=(to,from,next) =>{
    if(localStorage.Activeuser){
        next()
    }else{
        next({name:"Login"})
    }
}

const routes = [
    { path: '/', name: 'Home', component: Home, beforeEnter:guest},
    { path:'/dashboard', name: 'Dashboard', component: Dashboard, beforeEnter: gaurd },    
    { path: '/register', name: 'Register', component: Register, beforeEnter:guest },
    { path: '/login', name: 'Login', component: Login , beforeEnter:guest}
];

const router = new VueRouter({ routes });


export default router
