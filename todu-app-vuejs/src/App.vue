<template>
<div id="app">
    <div class="container">
        <div class="row ">   
            <Projectbase />      
            <Todo-5-sept/>   
            <Adddeledit/>
        </div>
    </div>
</div>
</template>
<script>
import Adddeledit from './components/Adddeledit.vue'
import Projectbase from './components/Projectbase.vue'
import Todo5Sept from './components/Todo-5-sept.vue'
export default {
    name: 'App',
    components: {       
        Projectbase,
        Todo5Sept,
        Adddeledit,
    }
}
</script>
<style scoped>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 30px;
}
</style>
