<template>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-if="cardStorage.isActive.value"
            class="absolute right-0 z-10 mt-2 overflow-scroll h-[500px] w-[400px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <h3 class="font-medium text-lg px-5 py-3">Ваша корзина</h3>
            <BasketCard v-if="cardStorage.goods.value.length > 0" v-for="item in cardStorage.goods.value" :key="item.name"
                :item="item"></BasketCard>
            <div v-else class="text-center p-2">Пока что пусто</div>
            <div class="sticky bottom-[-3px] border-t bg-white w-full p-5 text-lg font-medium">
                <div class="flex w-full justify-between">
                    <div>Общая стоимость</div>
                    <div>{{ cardStorage.totalCost }} ₸</div>
                </div>
                <div class="mt-3 bg-sky-600 p-3 text-white text-center rounded-sm">Оформить заказ</div>
            </div>
        </div>
    </transition>
</template>
<script setup lang="ts">
import {CardStorage} from '@/storages/storage';
import BasketCard from './BasketCard.vue';
const cardStorage = CardStorage.getInstance();
</script>
../storages/storage