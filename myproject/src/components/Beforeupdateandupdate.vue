<template>
  <div>
    <h1>Beforeupdate and Updated</h1>
    <h2 ref="counts">{{ count }}</h2>
    <button @click="counteInc">Count++</button>
  </div>
</template>

<script>
export default {
  name: "BeforeupdateandUpdated",
  data() {
      return{
          count:0,
      }
    },
    beforeUpdate(){
        //before updated the ui
        console.log("beforeUpdate the UI", this.$refs['counts'].textContent)
    },
    updated(){
        //After the updated the ui
        console.log("after updated the UI",this.$refs['counts'].textContent)
    },
    methods:{
            counteInc(){
                this.count = this.count+1
            }
      }
};
</script>