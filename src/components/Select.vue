<template>
  <Combobox @update:model-value="value => emit('update:modelValue', value)" :model-value="props.selected" multiple
    v-slot="{ open, value }">
    <!-- <ComboboxLabel>{{props.name}}</ComboboxLabel> -->
    <div class="relative mt-1">
      <div
        class="relative w-full cursor-default overflow-hidden rounded-sm bg-white border text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
        <div class="flex w-full gap-1 flex-wrap border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          @input="console.log($event.target)">
          <ComboboxButton>
            <div class="flex gap-1 flex-wrap"><div v-if="value.length > 0" class="p-1 border flex rounded-md" v-for="item_id in value"
              :key="item_id">
              <div>{{ getItemById(item_id).name }}</div>
              <XMarkIcon @click="removeItem(item_id, value)"
                class="h-5 w-5 cursor-pointer rounded-full border border-transparent hover:border-black"></XMarkIcon>
            </div></div>
          </ComboboxButton>
          <ComboboxButton class="flex max-w-full">
            <ComboboxInput v-if="open || value.length <= 0" :placeholder="open || value.length <= 0 ? props.placeholder : ''"
            class="p-1 max-w-full focus:outline-none" @change="query = $event.target.value"></ComboboxInput>
          </ComboboxButton>
         
        </div>
        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>
      </div>
      <div>
        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
          @after-leave="query = ''">
          <ComboboxOptions
            class="absolute mt-1 z-[1000] max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            <div v-if="filtered.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700">
              Nothing found.
            </div>

            <ComboboxOption v-for="item in filtered" as="template" :key="item.id" :value="item.id"
              v-slot="{ selected, active }">
              <li class="relative z-[1000] cursor-default select-none py-2 pl-10 pr-4" :class="{
                'bg-sky-600 text-white': active,
                'text-gray-900': !active,
              }">
                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ item.name }}
                </span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-sky-600': !active }">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </div>
  </Combobox>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/vue/20/solid'

const props = defineProps(['options', 'selected', 'name', 'placeholder']);

const emit = defineEmits(['update:modelValue'])


let query = ref('');

const removeItem = (id: number, value: any) => {
  const exists = value.findIndex((item: any) => item == id);
  if (exists != -1) {
    value.splice(exists, 1);
  }
}

const getItemById = (id: number) => {
  return props.options.filter((option: any) => option.id == id)[0];
}

let filtered = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter((option: any) =>
      option.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.value.toLowerCase().replace(/\s+/g, ''))
    )
)
</script>
  