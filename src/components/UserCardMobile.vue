<template>
    <transition enter-active-class="transition ease-out duration-100"
        enter-from-class="transform translate-y-full transform" enter-to-class="transform translate-y-0"
        leave-active-class="translate-y-full transition ease-in duration-75" leave-from-class="transform translate-y-0">
        <div data-key="mobile-menu" @click="close" v-if="cardStorage.isActive.value" class="fixed cursor-pointer bg-[rgb(0,0,0,0.4)] flex justify-end items-end z-10 bottom-0 h-[100vh] w-full origin-top-right">
            <div
                ref="target"
                class="overflow-scroll relative z-20 max-h-[80vh] w-full  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <h3 class="font-medium text-lg px-5 py-3">Ваша корзина</h3>
                <BasketCard v-if="cardStorage.goods.value.length > 0" v-for="item in cardStorage.goods.value"
                    :key="item.name" :item="item"></BasketCard>
                <div v-else class="text-center p-2">Пока что пусто</div>
                <div class="sticky bottom-[-3px] border-t bg-white w-full p-5 text-lg font-medium">
                    <div class="flex w-full justify-between">
                        <div>Общая стоимость</div>
                        <div>{{ cardStorage.totalCost }} ₸</div>
                    </div>
                    <div class="mt-3 bg-sky-600 p-3 text-white text-center rounded-sm">Оформить заказ</div>
                </div>
            </div>
        </div>  
    </transition>
</template>
<script setup lang="ts">
import {CardStorage} from '@/storages/storage';
import BasketCard from './BasketCard.vue';
const cardStorage = CardStorage.getInstance();
const closesList = ['mobile-menu'];
const close = (e: any) => {
    const key = e.target.dataset.key;
    if (closesList.includes(key)) {
        cardStorage.isActive.value = false;
    }
}
</script>
../storages/storage