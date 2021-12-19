<template>
    <div class="item">
        Item
        <img :src="item.src" @click="showModal(item.id)">
        {{ item.id }}
        {{ item.name }}
        {{ item.price }}
        Chosen: {{ item.count }}
        <IncDecButton :item="item"></IncDecButton>
    </div>
</template>

<script>
import IncDecButton from "./IncDecButton.vue";
export default {
    components: {IncDecButton},
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    methods: {
        showModal(id) {
            console.log('showModal method')
            this.$emit('showModal', id)
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