import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import style from "./style/main.css";

Vue.config.productionTip = false;

if(localStorage.user === undefined){
  let user =[
    {
      username:"admin",
      email:'admin@gmail.com',
      password:'123'

    }
  ];
  localStorage.setItem('user', JSON.stringify(user));
}

new Vue({
  router,
  store,
  style,
  render: (h) => h(App),
}).$mount("#app");
