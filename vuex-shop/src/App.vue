<template>
  <div id="app">
    <Addproduct/>
    <Product/>
    
  </div>
</template>

<script>
import Addproduct from './components/Addproduct.vue'
import Product from './components/Product.vue'

export default {
  name: 'App',
  components: {
    Product,
    Addproduct,

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin-top: 60px;
}
</style>
