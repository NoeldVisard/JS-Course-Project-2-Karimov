import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './storage'

console.log('Hello, world!')

new Vue({
    router, store,
    render: h => h(App),
}).$mount('#app')