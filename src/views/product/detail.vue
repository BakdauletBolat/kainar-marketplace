<template>
    <div class="mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8">
        <div v-if="product" class="grid relative w-full grid-cols-1 lg:grid-cols-[500px_1fr] gap-5">
            <div class="order-2 lg:order-1">
                <div class="p-5 w-full bg-white border">
                    <ProductSlider :pictures="product?.pictures"></ProductSlider>
                </div>
                <div class="p-5 w-full mt-5 bg-white border">
                    <h2 class="font-bold text-lg">Машина</h2>
                    <div>
                        <ul>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Модификация
                                </div>
                                <p class="font-light">
                                    420 d (2015, 140kw, 2.00l)
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Год
                                </div>
                                <p class="font-light">
                                    2015
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Код двигателя
                                </div>
                                <p class="font-light">
                                    B47 D20 A
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Тип топлива
                                </div>
                                <p class="font-light">
                                    Дизель
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Объем двигателя
                                </div>
                                <p class="font-light">
                                    2.0 l
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Тип коробки передач
                                </div>
                                <p class="font-light">
                                    Ручная
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Ведущие колеса
                                </div>
                                <p class="font-light">
                                    Задний
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Цвет
                                </div>
                                <p class="font-light">
                                    Синий
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Тип кузова
                                </div>
                                <p class="font-light">
                                    Купе
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Пробег
                                </div>
                                <p class="font-light">
                                    99459
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Положение рулевого колеса
                                </div>
                                <p class="font-light">
                                    Правосторонний руль
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    OEM-коды
                                </div>
                                <p class="font-light">
                                    6792112
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Состояние
                                </div>
                                <p class="font-light">
                                    Использованная/-ый
                                </p>
                            </li>

                            <li class="flex py-3 justify-between border-b">
                                <div class="font-light text-slate-500">
                                    Мощность двигателя
                                </div>
                                <p class="font-light">
                                    140 kW
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="order-1 lg:order-2">
                <div class="sticky top-20 z-10">
                    <div class="border bg-white p-5">
                        <h1 class="text-lg lg:text-2xl font-bold ">{{ product.name }}</h1>
                        <div class="flex justify-between flex-col lg:flex-row gap-2 lg:gap-0 lg:items-center mt-3">
                            <div class="text-xl lg:text-2xl font-bold">{{product.price}} ₸</div>
                            <div>
                                <button class="p-3 bg-primary rounded-sm flex gap-1">
                                    <ShoppingCartIcon class="h-6 w-6"></ShoppingCartIcon> Добавить к корзину
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex lg:gap-2 lg:flex-row py-5 px-5 justify-between flex-col gap-5">
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
import { TruckIcon, CheckBadgeIcon, StarIcon, ShoppingCartIcon } from "@heroicons/vue/24/outline";
import SelectSingle from "@/components/Select/single.vue";
import { Option } from "@/components/Select";
import { ref, onMounted } from "vue";
import ProductSlider from "./product-slider.vue";
import { useRoute } from "vue-router";
import axiosInstance from "@/api";
import {Product} from '@/api/products';

const route = useRoute();

const product = ref<Product | null>(null);

function getProduct(id: number) {
    axiosInstance.get<Product>(`/api/product/${id}/`).then(res=>product.value=res.data);
}

onMounted(()=>{
    getProduct(parseInt(route.params.id.toString()));
});



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

