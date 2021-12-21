<template>
    <div class="items">
        <h2>Orders</h2>
        <div v-for="(items, id) of orderedItems" :key="id">
            <Item v-for="item of items"
                  :item="item"
                  :key="item.id"
            @showModal="showModal"></Item>
        </div>
        <button @click="clearOrdered">Clear orders</button>
    </div>
</template>

<script>
import Item from '../components/Item.vue'
import {mapGetters} from 'vuex'

export default {
    name: "Orders",
    methods: {
        clearOrdered() {
            this.$store.dispatch('deleteOrdered')
        },
        showModal(id) {
            this.$emit('showModal', id)
        }
    },
    components: {
        Item
    },
    computed: mapGetters(['orderedItems']),
    mounted() {
    }

}
</script>

<style scoped>

</style>