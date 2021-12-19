<template>
    <div>
        <h3>Cart</h3>
        <router-link to="/catalog">Catalog</router-link>
        <div class="items">
            <Item
                v-for="item of buyItems"
                :key="item.id"
                :item="item"
                @showModal="$emit('showModal', item.id)"></Item>
        </div>
    </div>
</template>

<script>
import Item from '../components/Item.vue'
import {mapGetters} from 'vuex'

export default {
    name: "Cart",
    computed: mapGetters(['buyItems']),
    components: {
        Item
    }
}
</script>

<style scoped>

</style>