<template>
  <div>
    <h1>{{ name }}</h1>

    <div class="childp">
      <Child :nameofchild="1"/>
      <Child :nameofchild="2"/>
      <Child :nameofchild="3"/>
      <Child :nameofchild="4" />
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: { Child },

  name: "Parent",
 
  data() {
    return {
      name: "Parent Componennts",
    };
  },
};
</script>

<style scoped>
div {
  background-color: blue;
  height: auto;
  padding: 20px;
}
.childp{
    display: flex;
}
</style>