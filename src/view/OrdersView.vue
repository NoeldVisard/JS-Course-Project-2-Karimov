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
            // this.$store.dispatch('deleteOrdered')
            // TODO
        },
        showModal(id) {
            this.$emit('showModal', id, false)
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

        this.orderedItems = JSON.parse(localStorage.getItem('order'))


    }

}
</script>

<style scoped>

</style>