<template>
    <div>
        <div class="modal active" data-modal="1">
            <div id="modalColor">
                <svg @click="$emit('closeModal')" class="modal__cross js-modal-close" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path
                        d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                </svg>
                <p class="modal__title">{{ item.name }}</p>
                <div class="data-place">
                    <div>
                        <img :src="item.src">
                        <p>{{ item.description }}</p>
                        <p>{{ item.price }}</p>
                        <p v-if="boughtCount === 0">Chosen: {{ item.count }}</p>
                        <p v-else>Chosen: {{ boughtCount }}</p>
                    </div>
                    <IncDecButton v-if="isShowCntBtn" :item="item"></IncDecButton>
                </div>
            </div>
        </div>
        <div class="overlay js-overlay-modal  active"></div>
    </div>
</template>

<script>
import IncDecButton from "./IncDecButton.vue";

export default {
    name: "Modal",
    components: {IncDecButton},
    props: {
        idModal: {
            type: Number,
            default: 0
        },
        isShowCntBtn: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            item: {},
            boughtCount: 0
        }
    },
    mounted() {
        this.item = this.$store.getters.getItemById(this.idModal)
        if (!this.isShowCntBtn) {
            const orderedItems = JSON.parse(localStorage.getItem('order'))
            this.boughtCount = orderedItems.find(item => item.id === this.idModal).count
        }
    },
}
</script>

<style scoped>

.overlay {

    opacity: 0;
    visibility: hidden;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
    transition: .3s all;
}

#modalColor {
    background-color: rgba(194, 234, 246, 0.91);

}

.modal {
    opacity: 0;
    visibility: hidden;

    width: 100%;
    max-width: 500px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30;

    box-shadow: 0 3px 10px -.5px rgba(0, 0, 0, .2);
    text-align: center;
    padding: 30px;
    border-radius: 3px;
    background-color: #fff;
    transition: 0.3s all;
}

.modal.active,
.overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal__cross {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 20px;
    right: 20px;
    fill: #444;
    cursor: pointer;
}
</style>