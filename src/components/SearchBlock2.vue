<template>
    <div class="px-3 md:px-0 mt-5">
        <div class="w-full">
            <input class="w-full border p-2 rounded-sm border-slate-200" placeholder="Что ищем ?" />
        </div>
        <div class="mt-5 grid lg:grid-cols-[2fr_3fr] gap-4 items-start justify-center ">
            <div class="w-full flex flex-col gap-2 border p-4 bg-white rounded-sm">
                <h2 class="text-xl font-bold mb-3">Запчасти для вашего автомобиля</h2>
                <Select placeholder="Выбрать категорию" name="Категория" v-if="catalogStorage.categories.value" v-model="selectedCategory"
                :options="catalogStorage.categories.value"></Select>
                <Select placeholder="Выбрать марку" name="Марка" v-if="catalogStorage.categories.value" v-model="selectedCategory1"
                :options="catalogStorage.categories.value"></Select>
                <Select placeholder="Выбрать наименования" name="Наименования" v-if="catalogStorage.categories.value" v-model="selectedCategory2"
                :options="catalogStorage.categories.value"></Select>
                <RouterLink to="/catalog" class="flex gap-1 cursor-pointer hover:bg-sky-700 rounded-sm mt-3 p-3 bg-sky-600 text-white items-center justify-center" >
                    <MagnifyingGlassCircleIcon class="h-5 w-5"></MagnifyingGlassCircleIcon>
                    <div >Искать</div>
                </RouterLink>
            </div>
            <div class="flex flex-wrap gap-2">
                <div class="cursor-pointer p-3 border rounded-sm hover:bg-sky-600 hover:border-transparent hover:text-white" :key="category.id" v-for="category in catalogStorage.categories.value">{{ category.name }}</div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import Select from '@/components/Select.vue';
import { CatalogStorage } from '@/storages/storage';
import { ref } from 'vue';
import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/outline';

let selectedCategory = ref<any>([]);
    let selectedCategory1 = ref<any>([]);
        let selectedCategory2 = ref<any>([]);

const catalogStorage = CatalogStorage.getInstance();

</script>