<template>
    <div class="styless">
         <h1>How to use diffrents types of styles</h1>
         <h2 v-bind:style="{color:isColor}">How to use diffrents types of styles</h2>
         <h3 v-bind:class="{displsy:show, displayshow:show}">How to use diffrents types of styles</h3>
         <h1 v-bind:class="[aclass, show? 'yesClas': 'Noclass']">How to use diffrents types of styles</h1>
        

    </div>
</template>

<script>
export default {
    name:'Action',
  data(){
      return{
          isColor:"red",
          show:false,
          aclass:'arryclass'
      }
  }
}
</script>

<style scoped>
.styless{
    background: rgb(42, 212, 212);
    height: 500px;
}

.displsy{
    color:darkblue;
    background: darkgrey;
}
.arryclass{
    color: darkmagenta;
}
</style>