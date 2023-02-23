<template>
  <div class="bg-white p-4 w-72 rounded-xl">
    <div class="flex justify-between w-full p-2 items-center mb-2">
      <div @click="pullMouth" class="flex h-8 w-8 bg-blue-200 rounded-full justify-center items-center cursor-pointer">
        <svg class="stroke-gray-700" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="m11.5 14.5l-4-4l4-4"/></svg>
      </div>
      <button v-if="false" @click="setToNow">NOW</button>
      <div class="text-xl">
        {{ month_name }}
      </div>
      <div @click="addMonth" class="flex h-8 w-8 bg-blue-200 rounded-full justify-center items-center cursor-pointer">
        <svg class="stroke-gray-700" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="m9.5 14.5l4-4l-4-4"/></svg>
      </div>
    </div>
    <div v-if="false">
      {{ mouth_name }} {{ year_selected }}
    </div>
    <div class="border-t border-gray-200 w-full"></div>
    <div class="flex flex-wrap w-72 p-1">
      <div v-for="name in NAME_OF_DAYS" class="text-sm w-9 h-9 flex items-center justify-center cursor-pointer rounded-full space-y-2 text-gray-500">
        {{ name }}
      </div>
      <div v-for="i in (first_day_of_mouth - 1) ?? 0" class="w-9 h-9 flex items-center justify-center hover:bg-[#000] cursor-pointer rounded-full space-y-2"></div>
      <div v-for="i in number_of_day_in_mouth" class="w-9 h-9 flex items-center justify-center hover:bg-purple-300 cursor-pointer rounded-full space-y-2">
        {{ i }}
      </div>
    </div>
    <div class="border-t border-gray-200 w-full"></div>
    <div class="flex justify-end space-x-2 mt-4">
      <button class="px-3 py-2 border border-gray-400 rounded text-blue-500 text-bold">Cancel</button>
      <button class="flex px-3 py-2 bg-blue-600 rounded text-blue-200 text-bold items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21"><path fill="none" stroke="#dedede" stroke-linecap="round" stroke-linejoin="round" d="M17 4a2.121 2.121 0 0 1 0 3l-9.5 9.5l-4 1l1-3.944l9.504-9.552a2.116 2.116 0 0 1 2.864-.125zm-1.5 2.5l1 1"/></svg>
        <div>
          Done
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {computed, ref} from "vue";

  const NAME_OF_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  const MONTH_NAME = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  interface Props {
    mouth_name?: string[]
    days_name?: string[]
    modelValue: Date
  }

  const props = withDefaults(defineProps<Props>(), {
    mouth_name: () => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days_name: () => ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    modelValue: () => new Date()
  })
  */

  const year_selected = ref(new Date().getFullYear())
  const month_selected = ref(new Date().getMonth())

  const number_of_day_in_mouth = computed(() => new Date(year_selected.value, month_selected.value + 1, 0).getDate())
  const first_day_of_mouth = computed(() => new Date(year_selected.value, month_selected.value, 1).getDay())

  const month_name = computed(() => MONTH_NAME[new Date(year_selected.value, month_selected.value + 1, 0).getMonth()])

  const setToNow = () => {
    year_selected.value = new Date().getFullYear()
    month_selected.value = new Date().getMonth()
  }

  const addMonth = () => {
    if (month_selected.value >= 11) {
      year_selected.value += 1
      month_selected.value = 0
    } else {
      month_selected.value += 1
    }
  }

  const pullMouth = () => {
    if (month_selected.value <= 0) {
      year_selected.value -= 1
      month_selected.value = 11
    } else {
      month_selected.value -= 1
    }
  }
</script>