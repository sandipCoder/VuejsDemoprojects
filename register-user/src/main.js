import Vue from 'vue'
import App from './App.vue'
import router from './router'

if (localStorage.users === undefined) {
  let users = [
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin'
    }
  ];
  localStorage.setItem('users', JSON.stringify(users))
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
