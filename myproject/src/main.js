import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// import VueRouter from 'vue-router'
import routers from './routers'

//importing compnents
// import Home from './view/Home.vue'
// import About from './view/About.vue'
// import Blog from './view/Blog.vue'
// import Contact from './view/Contact.vue'



// Vue.use(VueRouter);
// const routes = [
//   { path: "/", component: Home },
//   { path: "/about", component: About },
//   { path: "/blog", component: Blog },
//   { path: "/contact", component: Contact },
// ]
// const router = new VueRouter({
//   routes: routes,
// });
Vue.config.productionTip = false;

// Vue.filter('Ucase',function(val){
//   return val.toLowerCase();
// })

// Vue.filter('Curencyconvertor',function(val){
//   return val*75;
// })

// Vue.filter('caps',function(val){
//   return val.charAt(0).toUpperCase() + val.slice(1);
// })
new Vue({
  render: h => h(App),
  // router:router,
  
  router:routers
  
  
}).$mount('#app')
