<template>
    <div>
        <button @click="incCountItem(item)">+</button>
        <button @click="decCountItem(item)">-</button>
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

</style>