import Vue from "vue";
import App from "./App.vue";
import router from "./router"

Vue.config.productionTip = false;

if(localStorage.users === undefined){
  let users = [
    {username:"admin", email:"admin@admin.com",  password:"admin"}
  ]

  localStorage.setItem("users", JSON.stringify(users));
}

new Vue({
  render: (h) => h(App),
  router:router
}).$mount("#app");
