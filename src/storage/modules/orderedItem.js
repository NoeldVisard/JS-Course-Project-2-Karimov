import item from "./item";

export default {
    actions: {
        async addItemToOrdered(context, items) {
            const newOrderItems = {}
            Object.assign(newOrderItems, items)
            context.commit('addItemToOrdered', newOrderItems)
            items.forEach(item => item.count = 0)
        },
        async deleteOrdered(context) {
            context.commit('deleteOrderedItems')
        }
    },
    mutations: {
        addItemToOrdered(state, items) {
            state.orderedItems.push(items)
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
}
