import item from "./item";
import {mapGetters} from 'vuex'

export default {
    actions: {
        addItemToOrdered(context, itemsId) {
            context.commit('addItemToOrdered', itemsId)
        },
        async deleteOrdered(context) {
            context.commit('deleteOrderedItems')
        }
    },
    mutations: {
        addItemToOrdered(state, itemsId) {
            const newOrderItems = []
            for (const id of itemsId) {
                console.log('for ', id)
                newOrderItems.push(this.$store.getters.getItemById(id))
                console.log('after for')
                console.log(newOrderItems)
            }
            state.orderedItems.push(newOrderItems)
        },
        deleteOrderedItems(state) {
            state.orderedItems = []
        }
    },
    state: {
        orderedItems: [],
    },
    getters: {
        orderedItems(state) {
            return state.orderedItems
        },
    },
    computed: mapGetters(['getItemById'])
}
