import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './view/MainPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/catalog',
            component: () => import('./view/CatalogView.vue')
        },
        {
            path: '/cart',
            component: () => import('./view/CartView.vue')
        },
        {
            path: '/profile',
            component: () => import('./view/ProfileView.vue')
        },
        {
            path: '/orders',
            component: () => import('./view/OrdersView.vue')
        }
    ]
})