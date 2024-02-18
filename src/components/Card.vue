<template>
    <div class="flex border lg:flex-row flex-col p-5 gap-3 hover:bg-slate-100 rounded-sm">
        <div>
            <img class="rounded lg:h-[120px] h-[200px] object-cover w-full lg:w-[160px]"
                :src="item.pictures.length != 0 ? item.pictures[0].image : 'https://demofree.sirv.com/nope-not-here.jpg'"
                alt="">
        </div>
        <div class="w-full">
            <div class="flex justify-between w-full">
                <h2 class="max-w-[250px]"><RouterLink class="text-lg font-medium text-blue-500 hover:underline-offset-1 hover:underline" :to="{
                    name: 'product-detail',
                    params: {
                        id: item.id
                    }
                }">{{ item.name }}</RouterLink></h2>
                <span>{{ item.price }} ₸</span>
            </div>
            <p class="text-sm mt-3 text-slate-500 font-light">б/у {{ item.modification.modelCar.name }}</p>
            <p class="text-sm text-slate-500 font-light max-w-[400px]">Продаю раму на Прадо 78.5 дверный. В отличном состоянии с
                документами</p>
            <ul class="flex gap-4 mt-3">
                <li class="text-sm text-slate-400 font-light">{{ item.warehouse ?? 'Шымкент' }}</li>
                <li class="text-sm text-slate-400 font-light">{{ formatted }}</li>
            </ul>

            <!-- <div class="flex justify-end">
                <button @click="addGood(item)" class="bg-sky-500 hover:bg-sky-700 text-white px-4 py-1 rounded-sm">Купить</button>
            </div> -->
        </div>

    </div>
</template>
<script setup lang="ts">
import { useDateFormat } from '@vueuse/core';
const props = defineProps(['item']);
const formatted = useDateFormat(props.item.created_at, 'MMMM DD');
</script>