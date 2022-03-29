<template>
  <div>
    <h1>Hi Sandip How are you...!</h1>
    <h2>{{ name | Filter|reverFilter}}</h2>
    <span>{{ price | curencyconvertor }}</span>
    
  </div>
</template>

<script>
import Filter from '../Fillter';
export default {
  name: "Fillterdata",

  filters: {
    Filter,
    reverFilter(val){
        return val.split("").reverse().join("");
    },

    curencyconvertor(val){
        return val*75;
    },

  },

  data() {
    return {
      name: "Saksham is my son",
      price: 100,
    };
  },
};
</script>