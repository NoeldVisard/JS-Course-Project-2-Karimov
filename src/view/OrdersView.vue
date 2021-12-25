<template>
    <div class="items">
        <h2>Orders</h2>
        <!--        <div v-for="(items, id) of orderedItems" :key="id">-->
        <!--            <Item v-for="item of items"-->
        <!--                  :item="item"-->
        <!--                  :key="item.id"-->
        <!--                  :isItemForBuy="false"-->
        <!--            @showModal="showModal"></Item>-->
        <!--        </div>   -->
        <Item v-for="item of orderedItems"
              :item="item"
              :key="item.id"
              :isItemForBuy="false"
              @showModal="showModal"/>
        <button @click="clearOrdered">Clear orders</button>
    </div>
</template>

<script>
import Item from '../components/Item.vue'
import {mapGetters} from 'vuex'

export default {
    name: "Orders",
    data() {
        return {
            orderedItems: []
        }
    },
    methods: {
        clearOrdered() {
            localStorage.removeItem('order')
            // this.$router.go()
            // window.location.reload()
            // this.$forceUpdate();
            // this.mounted()
            this.orderedItems = this.updatedOrderedItems()
        },
        showModal(id) {
            this.$emit('showModal', id, false)
        },
        updatedOrderedItems() {
            return JSON.parse(localStorage.getItem('order'))
        }
    },
    components: {
        Item
    },
    // computed: mapGetters(['orderedItems']),
    mounted() {
        // const itemsId = JSON.parse(localStorage.getItem('ordersId'))
        // const itemsCount = JSON.parse(localStorage.getItem('ordersCount'))
        // console.log('itemsId', itemsId)
        // console.log('itemsCount', itemsCount)
        //
        // for (let id of itemsId) {
        //     console.log('id: ', id)
        //     console.log('this.$store.getters.getItemById(id)', this.$store.getters.getItemById(id))
        //     this.orderedItems.push(Object.assign({}, this.$store.getters.getItemById(id)))
        // }

        this.orderedItems = this.updatedOrderedItems()
    }

}
</script>

<style scoped>

</style>