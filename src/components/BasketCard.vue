<template>
    <div class="grid grid-cols-[100px_1fr] p-5 gap-3 hover:bg-slate-100 rounded-sm">
        <div class="h-[100px] block">
            <img class="rounded w-full h-full object-cover"
                :src="item.picture_url ?? 'https://demofree.sirv.com/nope-not-here.jpg'"
                alt="">
        </div>
        <div class="">
            <div class="flex flex-col justify-between w-full">
                <h2><a href="#">{{ item.name }}</a></h2>
                <span>{{ item.price }} ₸</span>
                <div class="flex items-center mt-3 gap-2">
                    <div><PlusCircleIcon @click="cardStorage.increaseGood(item.id)" class="w-[24px] text-blue-400 cursor-pointer"></PlusCircleIcon></div>
                    <div>{{ item.quantity }}</div>
                    <div><MinusCircleIcon @click="cardStorage.decreaseGood(item.id)" class="w-[24px] text-red-400 cursor-pointer"></MinusCircleIcon></div>
                    <div><TrashIcon @click="cardStorage.removeGood(item.id)" class="w-[24px] text-red-500 cursor-pointer"></TrashIcon></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '@heroicons/vue/24/outline';
import {CardStorage} from '@/storages/storage';
const cardStorage = CardStorage.getInstance();
defineProps(['item']);
</script>../storages/storage