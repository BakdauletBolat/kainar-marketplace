<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="relative min-h-full">
    <Header></Header>
    <div class="pt-[64px] md:pt-[80px]">
      <router-view></router-view>
    </div>
    <div class="flex p-3 max-w-7xl mx-auto mt-[200px] gap-3 justify-end">
      <div>О нас</div>
      <div>Условия использования</div>
      <div>Покупка</div>
      <div>Политика конфиденциальности</div>
      <div>ЧЗВ</div>
      <div>Контакты</div>
    </div>
    <div class="w-full h-[1px] my-5 bg-slate-300"></div>
    <div class="mx-auto max-w-7xl py-5">
      2024 Все права защищены
    </div>
  </div>
</template>

<style scoped></style>
