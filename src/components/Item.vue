<template>
    <div class="item">
        Item
        <img :src="item.src">
        {{ item.id }}
        {{ item.name }}
        {{ item.price }}
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Array,
            default: []
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