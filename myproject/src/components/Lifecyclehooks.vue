<template>
  <div>
    <h2>Lifecyclehooks beforecreated and created</h2>
    <h3>{{name}}</h3>
  </div>
</template>
<script>
export default {
  name: "Lifecyclehooks",

  data() {
    return {
      name: "Sandip Choraghe",
    };
  },

  beforeCreate() {
    // beforeCreate : before component created  call beforecreate lifecycle hook

    this.name="Ram";
    console.log("beforeCreate...",this.name);
  },
  created() {
    //when component is created then created lifecycle hook is created
    this.name="Saksham" // update the name
    console.log("created",this.name);
  },
};
</script>