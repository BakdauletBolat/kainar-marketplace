<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { CardStorage } from '@/storages/storage';
import { useRoute } from 'vue-router';
import logoPng from '@/assets/new-logo.png';
import Dialog from './Dialog';
import UserCard from '@/components/UserCard.vue';

const cardStorage = CardStorage.getInstance();

const navigation = [
    { name: 'Запчасти', to: 'home' },
    { name: 'Ремонт и услуги', to: 'services' },
]


const route = useRoute();

</script>

<template>
    <div>
        <Dialog title="Ваша корзина" v-model="cardStorage.isActive.value">
            <UserCard></UserCard>
            <div class="mt-3 bg-primary p-3 text-center rounded-sm">Оформить заказ</div>
        </Dialog>
    </div>
    <Disclosure as="nav" class="bg-white border-b fixed z-[9999] w-full" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <RouterLink to="/"
                        class="flex-shrink-0 border-transparent border hover:border rounded-md hover:border-white">
                        <img class="h-10 w-10 " :src="logoPng" alt="Home" />
                    </RouterLink>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <RouterLink v-for="item in navigation" :key="item.name" :to="{ name: item.to }"
                                :class="[item.to == route.name ? 'bg-primary ' : 'hover:black', 'rounded-sm px-3 py-2 text-sm']"
                                :aria-current="item.to == route.name ? 'page' : undefined">{{ item.name }}</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <!-- Profile dropdown -->
                        <div class="relative ml-3">
                            <div>
                                <div @click="() => {
                                    cardStorage.isActive.value = !cardStorage.isActive.value;

                                }"
                                    class="relative text-white cursor-pointer flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span class="absolute -inset-1.5" />
                                    <span class="sr-only">Open user menu</span>
                                    <ShoppingCartIcon class="h-6 w-6 text-black" aria-hidden="true" />
                                    <div
                                        class="bg-red-400 w-[20px] text-white text-sm flex items-center justify-center rounded-[100%] h-[20px]">
                                        {{
                                            cardStorage.goods.value.length }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex md:hidden gap-3 items-center">
                    <!-- Mobile menu button -->
                    <div @click="cardStorage.isActive.value = !cardStorage.isActive.value"
                        class="pr-2 flex relative cursor-pointer">
                        <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
                        <div
                            class="bg-red-400 text-white w-[15px] bottom-[-3px] right-0 absolute text-[10px] flex items-center justify-center rounded-[100%] h-[15px]">
                            {{
                                cardStorage.goods.value.length }}</div>
                    </div>
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md bg-primary p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-hover">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>


                </div>
            </div>
        </div>

        <DisclosurePanel class="md:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="div">
                    <RouterLink :to="{ name: item.to }"
                        :class="[item.to == route.name ? 'bg-primary' : 'hover:bg-primart-hover', 'block rounded-md px-3 py-2 text-base font-medium']"
                        :aria-current="item.to == route.name ? 'page' : undefined">{{ item.name }}</RouterLink>
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<style scoped></style>