<template>
    <div class="item">
        Item
        <img :src="item.src">
        {{ item.id }}
        {{ item.name }}
        {{ item.price }}
        <button @click="incCountItem(item)">+</button>
        <button @click="decCountItem(item)">-</button>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: []
        }
    },
    methods: {
        incCountItem(item) {
            this.$store.dispatch('incCountItem', item)
        },
        decCountItem(item) {
            this.$store.dispatch('decCountItem', item)
        }
    }
}
</script>

<style>
.item {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
    width: 400px;

    display: inline-block;
}
img {
    width: 200px;
    height: auto;
}

</style>