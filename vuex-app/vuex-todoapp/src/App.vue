<template>
<div id="app">
  <div class="container">
    <div class="row">
     <Addtodo />
     <Filtertodo />
     <Todo msg="Todo app using Vuex..." />
     <Student/>
  
    </div>
  </div>
 
</div>
</template>

<script>

import Addtodo from './components/Addtodo.vue'
import Filtertodo from './components/Filtertodo.vue'
import Student from './components/Student.vue'
import Todo from './components/Todo.vue'


export default {
    name: 'App',
    components: {
        Addtodo,
        Todo,
        Filtertodo,
        Student,
   
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
