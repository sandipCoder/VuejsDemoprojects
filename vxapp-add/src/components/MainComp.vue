<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <AddItem />
      <AddList />
    </div>
  </div>
</template>

<script>
import AddItem from "./AddItem.vue"
import AddList from "./AddList.vue"

export default {
  components: {
    AddList,
    AddItem,
  },
  name: "MainComp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
