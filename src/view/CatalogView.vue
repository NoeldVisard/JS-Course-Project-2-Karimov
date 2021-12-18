<template>
    <div>
        <h3>Catalog</h3>
        <router-link to="/cart">Cart</router-link>
        <div class="items">
            <Item
                v-for="(item, key) of allItems"
                :key="key"
                :item="item"></Item>
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
    async mounted() {
        this.$store.dispatch('createItems')
    }

}
</script>

<style>
Item {
    border: 1px solid #ccc;
}

.items {
    /*display: flex;*/
    /*justify-content: space-between;*/
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    justify-content: center;

}
</style>