<template>
<div id="app" class="bg-gradient-primary">
    <div id="nav">
        <Header />
    </div>
    <router-view />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    name: "App",
    components: {
        Header
    }

}
</script>

<style>

</style>
