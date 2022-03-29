<template>
  <div id="app">
    <StudentData />
  </div>
</template>

<script>
import StudentData from './components/StudentData.vue'

export default {
  name: 'App',
  components: {
    StudentData
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
