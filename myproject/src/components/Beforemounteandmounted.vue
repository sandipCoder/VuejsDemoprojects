<template>
  <div id="demo">
    <h1>Beforemount and Mounted</h1>
  </div>
</template>

<script>
export default {
  name: "Beforemounteandmounted",

  data() {
    return {
      name: "Sandip Choraghe",
    };
  },

//before mounted is run bfore html is created
  beforeMount() {
    console.log("Before Mount.......", this.$el);
    console.warn('beforemount',document.getElementById('demo'))
  },

  // mounted is run after html is creaated you can change DOM element
  mounted() {
    console.log("Mounted..........",this.$el);
    console.warn('Mounted',document.getElementById('demo'))
  },
};
</script>