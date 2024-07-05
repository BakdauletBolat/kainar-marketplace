<script setup lang="ts">
import { CardStorage } from '@/storages/storage';
import { useRoute, useRouter } from 'vue-router';
import logoPng from '@/assets/new-logo.png';
import Dialog from './Dialog';
import UserCard from '@/components/UserCard.vue';

const cardStorage = CardStorage.getInstance();

const router = useRouter();
const navigation = [
    { name: 'Запчасти', to: 'home' },
    { name: 'Ремонт и услуги', to: 'services' },
]


function navigateToOrder() {
    cardStorage.isActive.value = false;
    router.push({
        name: 'order-create'
    })
}


const route = useRoute();

</script>

<template>
  <div>
    <Dialog title="Ваша корзина" v-model="cardStorage.isActive.value">
      <UserCard></UserCard>
      <button @click="navigateToOrder" class="mt-3 bg-primary w-full block p-3 text-center rounded-sm">Оформить заказ</button>
    </Dialog>
  </div>
  <div class="w-full bg-white z-[9999] border-b border-b-slate-100 fixed top-0">
    <div class="mx-auto bg-white flex max-w-7xl px-6 py-4">
      <div class="flex items-center gap-2">
        <RouterLink to="/"
                    class="">
          <img class="h-10 w-10" :src="logoPng" alt="Home" />
        </RouterLink>
        <div class="text-lg"><span class="font-bold">Kainar</span> Авто</div>
      </div>
    </div>
  </div>
    <div class="bg-white absolute top-[73px] z-[9998] w-full">
        <div class="mx-auto max-w-7xl">
            <div class="flex p-2 items-center justify-between">
                        <div class="flex items-baseline">
                            <RouterLink v-for="item in navigation" :key="item.name" :to="{ name: item.to }"
                                :class="[item.to == route.name ? 'underline underline-offset-2' : 'hover:black', 'rounded-sm px-3 py-2 text-sm']"
                                :aria-current="item.to == route.name ? 'page' : undefined">{{ item.name }}</RouterLink>
                        </div>
                <div class="md:block">
                    <div class="flex items-center md:ml-6">
                        <!-- Profile dropdown -->
                        <div class="relative ml-3">
                            <div>
                                <div @click="() => {cardStorage.isActive.value = !cardStorage.isActive.value; console.log('asds')}"
                                    class="relative text-white cursor-pointer flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span class="absolute -inset-1.5" />
                                    <span class="sr-only">Open user menu</span>
                                    <div class="px-2">
                                      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 8H21" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <div class="h-[125px]"></div>
</template>

<style scoped></style>