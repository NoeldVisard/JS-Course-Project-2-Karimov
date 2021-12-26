<template>
    <div>
        <button @click="decCountItem(item)" class="red">-</button>
        <button @click="incCountItem(item)" class="green">+</button>
    </div>
</template>

<script>
export default {
    name: "IncDecButton",
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    methods: {
        incCountItem(item) {
            this.$store.dispatch('incCountItem', item)
        },
        decCountItem(item) {
            this.$store.dispatch('decCountItem', item)
        },
    }
}
</script>

<style scoped>
button {
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.08);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.08);
    color: #fff;
    display: inline-block;
    width: 1rem;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    padding: 8px 16px;
    margin: 20px 1rem;
    text-decoration: none;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: background-color 0.1s linear;
    -moz-transition: background-color 0.1s linear;
    -o-transition: background-color 0.1s linear;
    transition: background-color 0.1s linear;
}
button.green {
    background-color: rgb( 43, 153, 91 );
    border: 1px solid rgb( 33, 126, 74 );
}

button.green:hover {
    background-color: rgb( 75, 183, 141 );
}

button.red {
    background-color: rgb(153, 43, 72);
    border: 1px solid rgb(126, 33, 58);
}

button.red:hover {
    background-color: rgb(183, 75, 104);
}

</style>