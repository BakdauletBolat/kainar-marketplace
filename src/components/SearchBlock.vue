<template>
    <div class="px-3 md:px-0 mt-5">
        <div class="w-full">
            <input class="focus:outline-none w-full border p-3 rounded-sm border-slate-200" placeholder="Что ищем ?" />
        </div>
        <div class="mt-5 grid lg:grid-cols-[2fr_3fr] gap-4 items-start justify-center ">
            <div class="w-full flex flex-col gap-2 border p-4 bg-white rounded-sm">
                <h2 class="text-xl font-bold mb-3">Запчасти для вашего автомобиля</h2>
                <Select placeholder="Выбрать категорию" v-if="catalogStorage.categories.value" v-model="selectedCategory"
                :options="catalogStorage.categories.value"></Select>
                <SelectSingle placeholder="Выбрать марку" name="Марка" v-if="catalogStorage.categories.value" v-model="selectedCategory1"
                :options="catalogStorage.categories.value"></SelectSingle>
                <Select placeholder="Выбрать наименования" name="Наименования" v-if="catalogStorage.categories.value" v-model="selectedCategory2"
                :options="catalogStorage.categories.value"></Select>
                <RouterLink to="/catalog" class="flex gap-1 cursor-pointer hover:bg-primary-hover rounded-sm mt-3 p-3 bg-primary items-center justify-center" >
                    <MagnifyingGlassIcon class="h-5 w-5"></MagnifyingGlassIcon>
                    <div >Искать</div>
                </RouterLink>
            </div>
            <div class="flex flex-wrap gap-2">
                <RouterLink :to="{
                    name: 'catalog',
                    query: {
                        category: category.id.toString()
                    }
                }" class="cursor-pointer p-3 border rounded-sm bg-white hover:bg-primary " :key="category.id" v-for="category in catalogStorage.categories.value">{{ category.name }}</RouterLink>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import Select from '@/components/Select';
import SelectSingle from '@/components/Select/single.vue';

import { CatalogStorage } from '@/storages/storage';
import { ref } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

let selectedCategory = ref<any>([]);
    let selectedCategory1 = ref<any>([]);
        let selectedCategory2 = ref<any>([]);

const catalogStorage = CatalogStorage.getInstance();

</script>