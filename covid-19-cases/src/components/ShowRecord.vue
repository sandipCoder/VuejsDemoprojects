<template>
  <div>
    <div class="stats">
      <div><strong>New Cases</strong> {{status.NewConfirmed}}</div>

      <div><strong>Total Cases</strong> {{status.TotalConfirmed}}</div>
    </div>

     <div class="stats">
      <div><strong>New Deaths</strong> {{status.NewDeaths}}</div>

      <div><strong>Total Deaths</strong> {{status.TotalDeaths}}</div>
    </div>

    <div class="stats">
      <div><strong>New Recovered</strong> {{status.NewRecovered}}</div>

      <div><strong>Total Recovered</strong> {{status.TotalRecovered}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ShowRecord",
  props:['status']
};
</script>

<style scoped>
</style>
