export default {
    actions: {
        async addItemToOrdered(context, items) {
            context.commit('addItemToOrdered', items)
        },
    },
    mutations: {
        addItemToOrdered(state, items) {
            const newOrderItems = {}
            Object.assign(newOrderItems, items)
            state.orderedItems.push(newOrderItems)
            console.log(state.orderedItems)
            items.forEach(item => item.count = 0)
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
