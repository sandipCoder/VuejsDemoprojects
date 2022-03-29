<template>
  <div>
     <!-- <h1>{{message}}</h1> -->
    <Slotchild>
      <h3>This is the header tag using slot</h3>
      <p>This is the paragraph tag slot</p>
    </Slotchild>

    <Slotchild>
      <!-- The name slot -->
      <h1 slot="header">This is the header tag using name slot</h1>
      <p slot="para">This is the paragraph tag using name slot</p>
    </Slotchild>

    <Slotchild>
        <h4>Form using slot</h4>
      <form action="" slot="form">
        <div class="mb-3">
          <label for="" class="form-label"></label>
          <input
            type="text"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="enter user name"
          />
         
        </div>
        <div class="mb-3">
          <label for="" class="form-label"></label>
          <input
            type="text"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="enter password"
          />
        
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </Slotchild>
  </div>
</template>

<script>
import Slotchild from "./Slotchild.vue";
export default {
  name: "Slotparent",
  components: {
    Slotchild,
  },
  data(){
      return{
          message:"Hello this is the slot"
      }
  }
};
</script>
