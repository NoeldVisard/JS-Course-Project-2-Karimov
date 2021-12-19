export default {
    actions: {
        async createItems(context) {
            const items = [
                {
                    id: 0,
                    src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ab9ec7d6-0542-40e9-8e22-4e41c2f7af2c/кроссовки-air-force-1-kSbj8t.png',
                    name: 'Nike Air Force 1',
                    description: 'Originally designed for basketball, these sneakers have become a street style legend. Durable, comfortable and versatile, they\'re great for everyday life. In addition, the metallic detailing makes this legendary model truly shine.',
                    price: '$130',
                    count: 0
                },
                {
                    id: 1,
                    src: 'https://static.nike.com/a/images/t_prod_ls/w_1920,c_limit,f_auto/b6774197-8edd-47a8-ba8d-1e731b20843f/air-jordan-1-patent-bred-555088-063-release-date.jpg',
                    name: 'Air Jordan 1',
                    description: 'A colorway synonymous with His Airness for over 35 years, the Air Jordan 1 Black and Red returns this season to shine like never before. Made famous by its "banned" mythology and MJ\'s majestical jumps during the 1985 dunk contest, this edition is covered in patent leather, adding a touch of luxury to one of MJ\'s most legendary looks.',
                    price: '$170',
                    count: 0
                },
                {
                    id: 2,
                    src: 'https://assets.adidas.com/images/w_840,h_840,q_auto:sensitive/7ca41b60a7d8455e9cd1adfa0133e92b_9366/GW3774_01_standard.jpg',
                    name: 'YEEZY BOOST 350 V2 MX ROCK',
                    description: 'Doesn\'t need a description',
                    price: '$220',
                    count: 0
                },
                // {
                //     id: 2,
                //     src: '',
                //     name: '',
                //     description: '',
                //     price: ''
                // }
            ]
            context.commit('createItems', items)
        },
        async incCountItem(context, item) {
            item.count++
            context.commit('addItem', item)
        },
        async decCountItem(context, item) {
            if (item.count > 0) {
                item.count--
                context.commit('addItem', item)
            } else console.log('You cannot buy less than 0 \\_(ツ)_/¯ ')
        }
    },
    mutations: {
        createItems(state, items) {
            state.items = items
        },
        addItem(state, item) {
            state.items = state.items.filter(it => it.id !== item.id)
            state.items = state.items.concat(item)
            state.items.sort((prev, next) => prev.id - next.id)
        }
    },
    state: {
        items: [],
    },
    getters: {
        allItems(state) {
            return state.items
        },
        buyItems(state) {
            return state.items.filter(it => it.count > 0)
        }
    },
}
