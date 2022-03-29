<template>
  <div>
    <h1>Routing with vue js</h1>

    <nav class="nav justify-content-center">
      <router-link class="nav-link text-dark" to="/"> Home </router-link>
      <router-link class="nav-link text-dark" to="/about"> About </router-link>
      <router-link class="nav-link text-dark" to="/blog"> Blog </router-link>
      <router-link class="nav-link text-dark" to="/contact">
        Contact
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Routing",
};
</script>