<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div>
    <div>
      <!-- Mobile filter dialog -->
      <Dialog title="Фильтр" v-model="mobileFiltersOpen">
        <!-- Filters -->
        <FilterForm></FilterForm>
      </Dialog>
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex bg-white border p-5 items-baseline justify-between">
          <h1 class="text-xl font-bold tracking-tight text-gray-900">Каталог</h1>

          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Сортировка
                  <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true" />
                </MenuButton>
              </div>

              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                    <a :href="option.href"
                      :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{
                        option.name }}</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span class="sr-only">View grid</span>
              <Squares2X2Icon class="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              @click="mobileFiltersOpen = true">
              <span class="sr-only">Filters</span>
              <FunnelIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pb-24">
          <div class="grid grid-cols-1 relative gap-3 lg:grid-cols-[350px_1fr]">
            <!-- Filters -->
            <div class="">
              <FilterForm class="sticky top-20 hidden bg-white lg:block"></FilterForm>
            </div>

            <!-- Product grid -->
            <div class="grid md:px-0 grid-cols-2 gap-1 md:gap-3">
              <Card :item="item" v-for="item in catalogStorage.products.value"></Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Dialog from '@/components/Dialog';
import { MenuButton, MenuItems, MenuItem, Menu } from '@headlessui/vue';
import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/vue/20/solid';
import FilterForm from './filter-form.vue';
import { CatalogStorage } from '@/storages/storage';
import Card from '@/components/Card.vue';
import { useRoute } from 'vue-router';


const catalogStorage = CatalogStorage.getInstance();


onMounted(async () => {
  const route = useRoute();
  if (route.query.category != undefined) {
    catalogStorage.selectedValues.value.category = route.query.category?.toString().split(",").map(Number) as [];
  }
  catalogStorage.loadProducts();
});

const sortOptions = [
  { name: 'Самые популярные', href: '#', current: true },
  { name: 'Лучший рейтинг', href: '#', current: false },
  { name: 'Новинки', href: '#', current: false },
  { name: 'Цена: по возрастанию', href: '#', current: false },
  { name: 'Цена: по убыванию', href: '#', current: false }
];

const mobileFiltersOpen = ref(false)
</script>