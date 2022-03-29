<template>
<div class="hello">
  <header class="bg-info p-3 text-center">
       <h5 class=" text-white"> <i class="fas fa-virus"></i> Covid-19 Tracker</h5>
       <p class="text-white">API by <a target="_blank" href="https://covid19api.com/"> covid19api.com </a></p>
  </header>
</div>
</template>

<script>
export default {
    name: 'Header',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
header{
  h5{
    font-size:2rem
  }
  p{
    a{
      color:#ccc
    }
  }
}

</style>
