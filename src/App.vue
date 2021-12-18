<template>
    <div id="app">
        <h1>Shop</h1>
        <hr>

        <router-view />
    </div>
</template>

<script>

export default {
    name: 'shop',
    components: {

    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 20px;
    /*width: 600px;*/
}

</style>