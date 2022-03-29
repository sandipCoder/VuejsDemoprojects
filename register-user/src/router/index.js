import Vue from 'vue';
import VueRouter from 'vue-router';
import Registeruser from '../components/Registeruser';
import Login from '../components/Login';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

Vue.use(VueRouter);

//using router(navigation gaurds) gaurds

function guest(to, from, next) {
    if (localStorage.activeUser) {
        next('/dashboard')
    } else {
        next()
    }
}
//using router(navigation gaurds) function
function gaurds(to, from, next) {
    if (localStorage.activeUser) {
        next()
    } else {
        next({ name: 'Login' })
    }
}

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: guest,

    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: gaurds,
    },

    {
        path: '/register',
        name: 'Registeruser',
        component: Registeruser,
        beforeEnter: guest
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: guest
    }
]


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes
})

export default router