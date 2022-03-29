<template>
  <div id="app">    
    <MainComp msg="Welcome to Vuex Todo js Application"/>
  </div>
</template>

<script>
import MainComp from './components/MainComp.vue'

export default {
  name: 'App',
  components: {
    MainComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
