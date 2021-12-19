<template>
    <div class="items">
        <h2>Orders</h2>
        <div v-for="(items, id) of orderedItems" :key="id">
            <Item v-for="item of items"
                  :item="item"
                  :key="item.id"></Item>

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
        }
    },
    components: {
        Item
    },
    computed: mapGetters(['orderedItems']),
    mounted() {
        console.log(this.orderedItems)
    }

}
</script>

<style scoped>

</style>