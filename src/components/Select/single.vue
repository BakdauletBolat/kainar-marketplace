<template>
    <div ref="target" class="relative rounded-lg border flex justify-between items-center p-2">
        <div class="flex flex-wrap w-full items-center gap-1">
            <input v-model="query" @focus="open = true" class="w-full text-sm focus:outline-none p-2" :placeholder="placeholder" />
        </div>
        <div>
            <ChevronUpDownIcon @click="open = !open" class="w-6 h-6 cursor-pointer"></ChevronUpDownIcon>
        </div>
        <div v-if="open"
            class="max-h-[250px] top-full left-0 w-full border rounded-lg shadow-md bg-white z-10 absolute overflow-scroll flex flex-col">
            <div :class="{
                'bg-primary text-white': contains(option)
            }" @click="update(option)" class="p-2 cursor-pointer  hover:bg-primary "
                v-for="option in filteredOptions" :key="option.id">{{ option.name }}</div>
        </div>
    </div>
</template>
  
<script setup lang="ts">

import { Option } from './index';
import { ref, computed } from 'vue';
import { ChevronUpDownIcon } from '@heroicons/vue/24/outline';
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{
    options: Option[],
    placeholder: string;
}>();

const model = defineModel<Option>();



function update(item: Option) {
    model.value = item;
    query.value = item.name;
    open.value = false;
}

function contains(item: Option) {
    return model.value?.id == item.id;
}


const filteredOptions = computed(() => {
    if (query.value === '') {
        return props.options;
    }
    return props.options.filter((item) => {
        const name = item.name.toLowerCase();
        return name.startsWith(query.value.toLowerCase());
    });
});


const query = ref<string>('');

const target = ref(null);

const closeDropDown = () => {
    open.value = false;
}

onClickOutside(target, closeDropDown)

const open = ref<boolean>(false);

</script>
  