<script setup lang="ts">
import SearchBlock from "@/components/SearchBlock.vue";
import Card from '@/components/Card.vue';
import { onMounted } from 'vue';
import {CatalogStorage} from '@/storages/storage';


const catalogStorage = CatalogStorage.getInstance();


onMounted(() => {
  catalogStorage.loadProducts();  
});



</script>

<template>
    <main>
      <div class="mx-auto max-w-7xl lg:px-6">
        <SearchBlock></SearchBlock>
        <h3 class="mt-9 px-3 md:px-0 text-lg font-bold">Лучшие предложение</h3>
        <div class="grid px-3 gap-1 md:px-0 grid-cols-2 md:gap-3 mt-3">
          <Card :item="item" v-for="item in catalogStorage.products.value"></Card>
        </div>
      </div>
    </main>
</template>

<style scoped></style>
