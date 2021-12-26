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
<!--        <button v-if="isItemsForBuy" @click="orderItems">Make an order</button>-->
        <a class="botr" v-if="isItemsForBuy" @click="orderItems">Make an order</a>
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
                // this.$store.dispatch('addItemToOrdered', this.$store.getters.buyItemsId)
                // const newOrders = JSON.parse(localStorage.getItem('orders')).concat(this.$store.getters.buyItemsId)

                // let newOrders = []
                // const orders = JSON.parse(localStorage.getItem('orders'))
                // if (orders) { // TODO: check does it need .length > 0
                //     newOrders.push(...orders)
                // }
                // // newOrders.push(...this.$store.getters.buyItemsId)
                // localStorage.setItem('ordersId', JSON.stringify(newOrders))
                //
                // const ordersCount = []
                // for (const item of this.$store.getters.buyItems) {
                //     ordersCount.push(item.count)
                // }
                // localStorage.setItem('ordersCount', JSON.stringify(ordersCount))

                let orderItems = []
                const orderedItems = JSON.parse(localStorage.getItem('order'))
                if (orderedItems) {
                    orderItems.push(...orderedItems)
                }
                orderItems.push(...this.$store.getters.buyItems)
                localStorage.setItem('order', JSON.stringify(orderItems))

                this.$store.dispatch('resetItemCount')

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
a.botr{
    background:#fff;
    width:225px;
    display:block;
    height:33px;
    padding-top:19px;
    border:1px solid #000;
    margin: 20px auto;
    font-family: 'Dosis', sans;
    font-size: 18px;
    font-weight:200;
    color:#000;
    text-transform:uppercase;
    text-decoration:none;
    text-align:center;
    opacity:.8;
    letter-spacing: 1px;
    -webkit-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
    -moz-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
    -o-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
}
a.botr:hover{
    width:225px;
    height:33px;
    padding-top:19px;
    border:1px solid teal;
    margin: 20px auto;
    opacity:1;
    letter-spacing: 4px;
    -webkit-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
    -moz-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
    -o-transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750);
    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
}

</style>