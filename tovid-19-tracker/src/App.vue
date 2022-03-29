<template>
<div id="app">
    <Headers />
    <div class="container">
        <div class="row justify-content-center">
            <router-view />
        </div>

    </div>

</div>
</template>

<script>
import Headers from '@/components/Header.vue'
export default {
    name: "App",
    components: {
        Headers
    }
}
</script>

<style lang="less">

</style>
