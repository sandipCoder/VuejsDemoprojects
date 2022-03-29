<template>
  <div class="mt-3">
      <h5 class="text-center">{{text}}</h5>
      <div  class="text-center">
          {{timeSpan}}
      </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
    name:"Datatitle",
    props:['text','dataDate'],

    computed:{
        timeSpan : function(){
            return moment(this.dataDate).format('MMMM Do YYYY, dddd, h:mm:ss a')
        }

    },

    data(){
        return{

        }
    }

}
</script>

<style>

</style>