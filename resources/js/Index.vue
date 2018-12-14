<template>
    <div id="app">
        <router-view :key="this.$route.path"></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>
html,body{
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
}
#app{
    width: 100%;
    height: 100%;
}
.magic{
    display: none;
}
</style>
