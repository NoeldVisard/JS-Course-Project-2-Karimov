<template>
    <div>
        <div class="modal active" data-modal="1">
            <div id="modalColor">
                <!--   Svg иконка для закрытия окна  -->
                <svg @click="$emit('closeModal')" class="modal__cross js-modal-close" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path
                        d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
                </svg>
                <p class="modal__title">{{ item.name }}</p>
                <div class="data-place">
                    <div>
                        <!--                    TODO: make style this block acceptable-->
                        <img :src="item.src">
                        {{ item.description }}
                        {{ item.price }}
                        Chosen: {{ item.count }}
                    </div>
                    <IncDecButton :item="item"></IncDecButton>
                </div>
            </div>
        </div>

        <!-- Подложка под модальным окном -->
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
        }
    },
    data() {
        return {
            item: {},
        }
    },
    mounted() {
        this.item = this.$store.getters.getItemById(this.idModal)
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
    z-index: 30; /* Должен быть выше чем у подложки*/

    /*  Побочные стили   */
    box-shadow: 0 3px 10px -.5px rgba(0, 0, 0, .2);
    text-align: center;
    padding: 30px;
    border-radius: 3px;
    background-color: #fff;
    transition: 0.3s all;
}

.modal.active,
.overlay.active {
    /*background-color: rgba(194, 234, 246, 0.91);*/
    opacity: 1;
    visibility: visible;
}


/* Стили для кнопки закрытия */

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