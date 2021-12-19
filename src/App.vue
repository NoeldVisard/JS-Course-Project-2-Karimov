<template>
    <div id="app">
        <h1>Shop</h1>
        <hr>

        <router-view @showModal="showModal"/>

<!--        <Modal v-if="isModalOpen"/>-->
        <Modal v-if="isModalOpened"
        :idModal="idModal"
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
            idModal: 0
        }
    },
    components: {
        Modal
    },
    async mounted() {
        await this.$store.dispatch('createItems')
    },
    methods: {
        showModal(id) {
            this.idModal = id
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
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 20px;
    /*width: 600px;*/
}

</style>