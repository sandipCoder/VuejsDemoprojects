<template>
  <div id="app"> 
     <Header/>
     <div class="container-fluid">
        <div class="row justify-content-center"> 
          <router-view />
        </div>
     </div>   
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components:{
    Header,
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
