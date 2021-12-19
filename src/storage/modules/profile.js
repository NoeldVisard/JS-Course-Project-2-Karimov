export default {
    actions: {
        changeProfile(context, name, email, address) {
            context.commit('changeProfile', {name, email, address})
        }

    },
    mutations: {
        changeProfile(state, profile) {
            state.profile.username = profile.name
            state.profile.email = profile.email
            state.profile.address = profile.address
        },
    },
    state: {
        profile: {
            username: '',
            email: '',
            address: ''
        }
    },
    getters: {
        getProfile(state) {
            return state.profile
        }
    }
}