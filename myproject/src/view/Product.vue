<template>
  <div>
    <h1>Product page</h1>
    <p>{{ products }}</p>
    <span>Hello I am {{$route.params.name}}</span>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Product",

  data() {
    return {
      products: "Lifeboy soap",
    };
  },
};
</script>
