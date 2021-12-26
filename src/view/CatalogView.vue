<template>
    <div>
        <h3>Catalog</h3>
        <div class="items">
            <Item
                v-for="item of allItems"
                :key="item.id"
                :item="item"
            @showModal="showModal" class="item"></Item>
        </div>
    </div>
</template>

<script>
import Item from '../components/Item.vue'
import {mapGetters} from 'vuex'

export default {
    components: {
        Item,
    },
    computed: mapGetters(['allItems']),
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
}

.items {
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}
</style>