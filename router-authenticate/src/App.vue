<template>
  <div id="app">    
    <Navbar/>
    <main class="my-5">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>


</style>
