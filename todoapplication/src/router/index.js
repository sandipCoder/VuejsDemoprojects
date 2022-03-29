import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Restaurant from "../views/Restaurant.vue";

Vue.use(VueRouter);


function guest(to, from, next) {
  if (localStorage.Activeuser) {
    next('/home')
  } else {
    next()
  }
}

function gaurds(to,from, next) {
  if (localStorage.Activeuser) {
    next()
  }else {
    next({ name: 'Login' })
  }

}

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: gaurds
  },
  {
    path: "/weather",
    name: "Weather",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Weather.vue"),
      beforeEnter: gaurds
  },

  {
    path: "/todo",
    name: "Todo",
    component: Todo,
    beforeEnter: gaurds
   
  },
  {
    path: "/covid",
    name: "Covid",
    component: () =>import(/* webpackChunkName: "about" */ "../views/Covid.vue"),
    beforeEnter: gaurds
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    beforeEnter: guest
   
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: guest
  },  
  {
    path: "/restaurant",
    name: "Restaurant",
    component: Restaurant,
    beforeEnter: gaurds
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: guest
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
