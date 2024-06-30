<template>
    <div class="px-3 md:px-0 mt-5">
        <div class="w-full">
            <input class="focus:outline-none w-full p-3 rounded-lg" placeholder="Что ищем ?" />
        </div>
        <div class="mt-5 grid lg:grid-cols-[2fr_3fr] gap-4 items-start justify-center ">
            <div class="w-full flex flex-col gap-2 rounded-lg p-4 bg-white">
                <h2 class="text-xl font-bold mb-3">Запчасти для вашего автомобиля</h2>
                <SelectSingle placeholder="Выбрать производитель" v-if="manufacters" v-model="selectedManufacter"
                    :options="manufacters"></SelectSingle>
                <Select placeholder="Выбрать марку" name="Марка" v-if="car_models" v-model="selectedModificationId"
                    :options="car_models"></Select>
                <Select placeholder="Выбрать наименования" name="Наименования" v-if="catalogStorage.categories.value"
                    v-model="selectedCategory2" :options="catalogStorage.categories.value"></Select>
                <button @click="search"
                    class="flex gap-1 cursor-pointer rounded-lg hover:bg-primary-hover rounded-sm mt-3 p-3 bg-primary items-center justify-center">
                    <MagnifyingGlassIcon class="h-5 w-5"></MagnifyingGlassIcon>
                    <div>Искать</div>
                </button>
            </div>
            <div class="flex flex-wrap gap-2">
                <RouterLink :to="{
                    name: 'catalog',
                    query: {
                        category: category.id
                    }
                }" class="cursor-pointer p-3 rounded-lg bg-white hover:bg-primary " :key="category.id"
                    v-for="category in catalogStorage.categories.value">{{ category.name }}</RouterLink>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import Select from '@/components/Select';
import SelectSingle from '@/components/Select/single.vue';

import { CatalogStorage } from '@/storages/storage';
import { onMounted, ref, watch } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import axiosInstance from '@/api';
import { useRouter } from 'vue-router';

let selectedManufacter = ref<any>();
let selectedModificationId = ref<any>([]);
let selectedCategory2 = ref<any>([]);

const catalogStorage = CatalogStorage.getInstance();

const manufacters = ref<any[]>([]);
const car_models = ref<any[]>([]);
const router = useRouter();


function search() {
    router.push({
        name: selectedManufacter.value != null  ? 'catalog-manufactor' : 'catalog',
        query: {
            category: selectedCategory2.value?.map((item:any)=>item.id).toString(),
            modification: selectedModificationId.value?.map((item:any)=>item.id).toString()
        },
        params: {
            manufactor_id: selectedManufacter?.value != undefined ? selectedManufacter?.value.id : null
        }
    });
}

function getManufacters() {
    axiosInstance.get('/api/car/manufacturers/').then(res => {
        manufacters.value = res.data.results;
    })
        .catch(e => {
            console.log(e);
        });
}

watch(selectedManufacter, (value) => {
    selectedModificationId.value = [];
    getCarModels(value.id);
});

function getCarModels(value: number) {
    axiosInstance.get(`/api/car/models/?manufacturer=${value}`).then(res => {
        car_models.value = res.data.results;
    })
        .catch(e => {
            console.log(e);
        });
}

function getCategories() {
    axiosInstance.get(`/api/category/?page_size=20`).then(
        (res)=>{catalogStorage.categories.value = res.data.results}
    ).catch(e=>console.log(e));
}


onMounted(() => {
    getManufacters();
    getCategories();
});

</script>