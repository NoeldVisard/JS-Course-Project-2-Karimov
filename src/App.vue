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
        this.$store.dispatch('createItems')
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
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 20px;
    /*width: 600px;*/
}

</style>