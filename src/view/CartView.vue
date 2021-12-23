<template>
    <div>
        <h3>Cart</h3>
        <div class="items">
            <Item
                v-for="item of buyItems"
                :key="item.id"
                :item="item"
                @showModal="$emit('showModal', item.id)"></Item>
        </div>
        <button v-if="isItemsForBuy" @click="orderItems">Make an order</button>
    </div>
</template>

<script>
import Item from '../components/Item.vue'
import {mapGetters} from 'vuex'

export default {
    name: "Cart",
    computed: mapGetters(['buyItems', 'isItemsForBuy', 'buyItemsId']),
    components: {
        Item
    },
    methods: {
        orderItems() {
            const profile = JSON.parse(localStorage.getItem('profile'))
            const isEmptyProfile = !(profile.name && profile.email && profile.address)
            if (!isEmptyProfile) {
                this.$store.dispatch('addItemToOrdered', this.$store.getters.buyItemsId)
                this.$router.push('/orders')
            } else {
                alert('No profile data!')
                this.$router.push('/profile')
            }
        }
    }
}
</script>

<style scoped>

</style>