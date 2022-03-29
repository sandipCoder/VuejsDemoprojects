<template>
  <div></div>
</template>
<script>
export default {
  name: "Lifecycle",

  beforeCreate() {
    console.log("beforecreate");
  },
  created() {
    console.log("create");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mount");
  },
};
</script>