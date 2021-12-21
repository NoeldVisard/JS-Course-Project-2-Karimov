export default {
    actions: {
        async createItems(context) {
            const items = [
                {
                    id: 0,
                    src: 'https://cdn.discordapp.com/attachments/921874728606658570/922429249917444146/Air-Force-1_1.jpg',
                    name: 'Nike Air Force 1',
                    description: 'Originally designed for basketball, these sneakers have become a street style legend. Durable, comfortable and versatile, they\'re great for everyday life. In addition, the metallic detailing makes this legendary model truly shine.',
                    price: '$130',
                    count: 0
                },
                {
                    id: 1,
                    src: 'https://cdn.discordapp.com/attachments/921874728606658570/922429762763386920/GW3774_01_1.jpg',
                    name: 'Air Jordan 1',
                    description: 'A colorway synonymous with His Airness for over 35 years, the Air Jordan 1 Black and Red returns this season to shine like never before. Made famous by its "banned" mythology and MJ\'s majestical jumps during the 1985 dunk contest, this edition is covered in patent leather, adding a touch of luxury to one of MJ\'s most legendary looks.',
                    price: '$170',
                    count: 0
                },
                {
                    id: 2,
                    src: 'https://cdn.discordapp.com/attachments/921874728606658570/922429763027599370/Air-Jordan-1_1.jpg',
                    name: 'YEEZY BOOST 350 V2 MX ROCK',
                    description: 'Doesn\'t need a description',
                    price: '$220',
                    count: 0
                },
                {
                    id: 3,
                    src: 'https://cdn.discordapp.com/attachments/921874728606658570/922430923121778778/Air-Huarache.jpg',
                    name: 'Air Huarache LE',
                    description: 'The Nike Air Huarache LE sneaker is a popular street model that provides a comfortable fit and comfort.The upper of shiny ultra-breathable material that resembles neoprene, with elements of textured leather will stylishly complement any look.The legendary heel lock and only partially left logo preserves the aesthetic of the early 90s.',
                    price: '$155',
                    count: 0
                },
                {
                    id: 4,
                    src: 'https://cdn.discordapp.com/attachments/921874728606658570/922432120318730290/Blazer-mid-77.jpg',
                    name: 'Blazer Mid \'77 Vintage',
                    description: 'In the ‘70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid ’77 Vintage—classic since the beginning.',
                    price: '$100',
                    count: 0
                },
                {
                    id: 5,
                    src: 'https://cdn.discordapp.com/attachments/921874728606658570/922432929483849768/Air-Max-97.jpg',
                    name: 'Air Max 97',
                    description: 'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.',
                    price: '$170',
                    count: 0
                }
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
        },
        getItemById: state => id => {
            return state.items.filter(it => it.id === id)[0]
        },
        isItemsForBuy(state) {
            return state.items.filter(it => it.count > 0).length > 0
        }
    },
}
