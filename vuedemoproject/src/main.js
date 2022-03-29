import Vue from 'vue'
import App from './App.vue'
import style from './style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  style
}).$mount('#app')
