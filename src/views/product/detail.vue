<template>
    <div class="mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid relative grid-cols-[2fr_3fr] gap-5">
            <div class="p-5 bg-white border">
                <Flicking :options="{
                    preventClickOnDrag: true
                }" @move-end="() => console.log('end')">
                    <div v-for="product in products" class="panel cursor-move w-full h-[200px]">
                        <img class="w-full pointer-events-none h-full object-cover" :src="product" />
                    </div>
                </Flicking>
                <div class="h-[200vh]"></div>
            </div>
            <div>
                <div class="sticky top-20 z-10">
                    <div class="border bg-white p-5">
                        <h1 class="text-2xl font-bold ">MERCEDES-BENZ C Coupe (C205) (2015-наст. время) Запаска A0005830712
                            23323980</h1>
                        <div class="flex justify-between items-center mt-3">
                            <div class="text-2xl font-bold">49 990₸</div>
                            <div>
                                <button class="p-3 bg-primary rounded-sm">Добавить к корзину</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 py-5 px-5 justify-between">
                        <div class="flex gap-2">
                            <TruckIcon class="w-12 h-12 text-sky-500"></TruckIcon>
                            <div class="flex flex-col justify-center">
                                <h3>1-2 д.</h3>
                                <p class="text-sm text-gray-500">Расчетная дата доставки*</p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <CheckBadgeIcon class="w-12 h-12 text-sky-500"></CheckBadgeIcon>
                            <div class="flex flex-col justify-center">
                                <h3>14 д.</h3>
                                <p class="text-sm text-gray-500">Гарантия возврата</p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <StarIcon class="w-12 h-12 text-sky-500"></StarIcon>
                            <div class="flex flex-col justify-center">
                                <h3>4.6/5</h3>
                                <p class="text-sm text-gray-500">Оценка клиента</p>
                            </div>
                        </div>
                    </div>
                    <div class="border pt-5 bg-white p-3">
                        <h2 class="text-xl font-bold">Расчетная время доставки*</h2>
                        <SelectSingle class="mt-5" v-model="countryId" :options="countryOptions"
                            placeholder="Выберите страну"></SelectSingle>
                            <table class="table-auto mt-5 w-full">
                            <thead>
                                <tr class="text-left border-b  text-gray-500 font-light">
                                    <th class="font-light py-2">Курьер</th>
                                    <th class="font-light py-2">Цена от</th>
                                    <th class="font-light py-2">Доставка</th>
                                </tr>
                            </thead>
                            <tbody class="font-light">
                                <tr>
                                    <td class="py-2">FedEx Plus</td>
                                    <td class="py-2">1290 ₸</td>
                                    <td class="py-2">26 Февраля</td>
                                </tr>
                                <tr>
                                    <td class="py-2">FedEx Priority</td>
                                    <td class="py-2">1400 ₸</td>
                                    <td class="py-2">2 Марта</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { TruckIcon, CheckBadgeIcon, StarIcon } from "@heroicons/vue/24/outline";
import SelectSingle from "@/components/Select/single.vue";
import { Option } from "@/components/Select";
import { ref } from "vue";


const products = [
    "https://d39yomwm6w3gfy.cloudfront.net/images/kno42P9zvd/23323980_431b0770-db95-4754-ae71-44522bf2242c.jpg", "https://d39yomwm6w3gfy.cloudfront.net/images/kno42P9zvd/23323980_fb03a7f1-1883-4736-b656-f7d2e34db9b3.jpg"
]


const countryId = ref<Option | undefined>(undefined);

const countryOptions: Option[] = [{
    id: 1,
    name: 'Казахстан'
},
{
    id: 2,
    name: 'Россия'
},

{
    id: 3,
    name: 'Грузия'
}
]

</script>

