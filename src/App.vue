<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="relative min-h-full">
    <Header></Header>
    <div class="pt-[64px] md:pt-[80px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
