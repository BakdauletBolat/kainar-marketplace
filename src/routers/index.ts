import Home from '@/views/home.vue';
import Services from '@/views/services.vue';
import ProductDetail from '@/views/product/detail.vue';
import Catalog from '@/views/catalog/index.vue';
import OrderCreate from '@/views/order/create.vue';
import Login from '@/views/auth/login.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/order',
        meta: { isRequiresAuth: true },
        name: 'order-create',
        component: OrderCreate
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/product/:id',
        name: 'product-detail',
        component: ProductDetail
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: Catalog
    },
    {
        path: '/catalog/:manufactor_id',
        name: 'catalog-manufactor',
        component: Catalog
    },
    {
        path:'/login',
        name: 'login',
        component: Login
    }
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

// router.beforeEach((to, from, next) => {
//     if (to.meta.isRequiresAuth &&  to.name !== 'login' && localStorage.getItem('auth-token') == undefined) next({ name: 'login' })
//     else next()
// })