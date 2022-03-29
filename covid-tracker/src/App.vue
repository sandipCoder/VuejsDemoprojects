<template>
  <div id="app">
    <CovidTrack/>
  </div>
</template>

<script>
import CovidTrack from './components/CovidTrack.vue'

export default {
  name: 'App',
  components: {
    CovidTrack
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

}
</style>
