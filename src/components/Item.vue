<template>
    <div class="item">
        <div id="img-block">
            <img :src="item.src" @click="showModal(item.id)">
        </div>
        <div id="info-block">
            <p> {{ item.name }} </p>
            <p> {{ item.price }} </p>
            <p> Chosen: {{ item.count }} </p>
            <IncDecButton v-if="isItemForBuy" :item="item"></IncDecButton>
        </div>
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
        },
        isItemForBuy: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        showModal(id) {
            this.$emit('showModal', id)
        }
    }
}
</script>

<style>
.item {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 25%;

    display: inline-block;
    background-color: rgba(194, 234, 246, 0.91);

    margin: 1rem 1rem 1rem;
}
img {
    width: 200px;
    height: auto;
    margin-left: 1rem;
}
#img-block {
    float: left;
}
</style>