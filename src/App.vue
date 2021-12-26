<template>
    <div id="app">
        <h1>Shop</h1>
        <hr>

        <router-link to="/catalog">Catalog</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/orders">Orders</router-link>

        <router-view @showModal="showModal"/>

        <Modal v-if="isModalOpened"
               :idModal="idModal"
               :isShowCntBtn="isShowCntBtn"
               @closeModal="isModalOpened = false"/>
    </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
    name: 'shop',
    data() {
        return {
            isModalOpened: false,
            idModal: 0,
            isShowCntBtn: true
        }
    },
    components: {
        Modal
    },
    async mounted() {
        await this.$store.dispatch('createItems')
    },
    methods: {
        showModal(id, isShowCntBtn) {
            this.idModal = id
            this.isShowCntBtn = isShowCntBtn
            this.isModalOpened = true
        },
        closeModal() {
            this.isModalOpened = false
        }
    }
}
</script>

<style>
body {
    background-image: url("https://cdn.discordapp.com/attachments/921852012017123348/922181616158244874/kedy_nogi_obuv_135220_2560x1440.png");
    background-size: cover;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 20px;
}

a:hover {
    background: #60b5fa;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #60b5fa,
    0 0 25px #60b5fa,
    0 0 50px #60b5fa,
    0 0 100px #60b5fa;
}

</style>