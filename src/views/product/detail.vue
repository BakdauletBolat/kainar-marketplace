<template>
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    Detail {{ route.params.id }}
</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>