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
        <button @click="orderItems">Make an order</button>
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
    },
    methods: {
        orderItems() {
            const profile = this.$store.getters.getProfile
            if (profile.username.length > 0 & profile.email.length > 0 && profile.address.length > 0) {
                console.log(this.$store.getters.buyItems);
                this.$store.dispatch('addItemToOrdered', this.$store.getters.buyItems)
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