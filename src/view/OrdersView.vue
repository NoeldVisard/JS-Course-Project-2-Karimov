<template>
    <div class="items">
        <h3>Orders</h3>
        <Item v-for="item of orderedItems"
              :item="item"
              :key="item.id"
              :isItemForBuy="false"
              @showModal="showModal"/>
        <a @click="clearOrdered" class="bot8">Clear orders</a>
    </div>
</template>

<script>
import Item from '../components/Item.vue'

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
    mounted() {
        this.orderedItems = this.updatedOrderedItems()
    }
}
</script>

<style scoped>
a.bot8 {
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: #555555;
    display:block;
    width:120px;
    margin: 20px auto;
    font-size: 14px;
    text-align:center;
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    padding: 4px 6px;
    vertical-align: middle;
    text-decoration:none;
}
a.bot8:hover, a.bot8:focus {
    border-color: rgba(236, 82, 110, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(236, 82, 136, 0.6);
    outline: 0 none;
}
</style>