<template>
    <div class="flex bg-white border lg:flex-row flex-col p-5 gap-3 hover:border-slate-400  rounded-sm">
        <div>
            <img class="rounded lg:h-[120px] h-[200px] object-cover w-full lg:w-[160px]"
                :src="item.pictures.length != 0 ? item.pictures[0].image : 'https://demofree.sirv.com/nope-not-here.jpg'"
                alt="">
        </div>
        <div class="w-full">
            <div class="flex justify-between w-full">
                <h2 class="max-w-[250px]">
                    <RouterLink class="text-lg font-medium text-blue-500 hover:underline-offset-1 hover:underline" :to="{
                        name: 'product-detail',
                        params: {
                            id: item.id
                        }
                    }">{{ item.name }}</RouterLink>
                </h2>
                <span>{{ item.price }} ₸</span>
            </div>
            <p class="text-sm mt-3 ">б/у {{ item.modification.modelCar.name }}</p>
            <p class="text-sm text-slate-500 font-light max-w-[400px]">Продаю раму на Прадо 78.5 дверный. В отличном
                состоянии с
                документами</p>
            <ul class="flex gap-4 mt-3">
                <li class="text-sm text-slate-400 font-light">{{ item.warehouse ?? 'Шымкент' }}</li>
                <li class="text-sm text-slate-400 font-light">{{ formatted }}</li>
            </ul>

            <div class="flex justify-end">
                <button @click="addGood(item)" class="bg-primary hover:bg-primary-hover  px-4 py-1 rounded-sm">В корзину</button>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { CardStorage } from '@/storages/storage';
import { useDateFormat } from '@vueuse/core';
const cardStorage = CardStorage.getInstance();
const props = defineProps(['item']);
function addGood(item: any) {
    cardStorage.addGood({
                    id: item.id,
                    name: item.name,
                    picture_url: item.pictures.length > 0 ? item.pictures[0].image : null,
                    price: item.price,
                    quantity: 1
                })
    cardStorage.isActive.value = true;
}
const formatted = useDateFormat(props.item.created_at, 'MMMM DD');
</script>