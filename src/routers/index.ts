import Home from '@/views/home.vue';
import Services from '@/views/services.vue';
import ProductDetail from '@/views/product/detail.vue';
import Catalog from '@/views/catalog/index.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
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
    }
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })