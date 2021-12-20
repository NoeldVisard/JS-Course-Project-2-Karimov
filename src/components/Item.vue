<template>
    <div class="item">
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
    /*margin-bottom: 1rem;*/
    width: 400px;

    display: inline-block;
    background-color: rgba(194, 234, 246, 0.91);

    margin: 1rem 1rem 1rem;
}
img {
    width: 200px;
    height: auto;
}

</style>