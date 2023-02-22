<template>
  <div class="flex justify-between w-56">
    <button @click="pullMouth">-</button>
    <button @click="setToNow">NOW</button>
    <button @click="addMouth">+</button>
  </div>
  {{ mouth_name }} {{ year_selected }}
  <div class="flex flex-wrap w-56">
    <div v-for="name in NAME_OF_DAYS" class="text-sm w-8 h-8 flex items-center justify-center cursor-pointer rounded-full space-y-2">
      {{ name }}
    </div>
    <div v-for="i in (first_day_of_mouth - 1) ?? 0" class="w-8 h-8 flex items-center justify-center hover:bg-[#000] cursor-pointer rounded-full space-y-2"></div>
    <div v-for="i in number_of_day_in_mouth" class="w-8 h-8 flex items-center justify-center hover:bg-[#000] cursor-pointer rounded-full space-y-2">
      {{ i }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import {computed, ref} from "vue";

  interface Props {

  }

  const NAME_OF_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  const MOUTH_NAME = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const year_selected = ref(new Date().getFullYear())
  const mouth_selected = ref(new Date().getMonth())

  const number_of_day_in_mouth = computed(() => new Date(year_selected.value, mouth_selected.value + 1, 0).getDate())
  const first_day_of_mouth = computed(() => new Date(year_selected.value, mouth_selected.value, 1).getDay())

  const mouth_name = computed(() => MOUTH_NAME[new Date(year_selected.value, mouth_selected.value + 1, 0).getMonth()])

  const setToNow = () => {
    year_selected.value = new Date().getFullYear()
    mouth_selected.value = new Date().getMonth()
  }

  const addMouth = () => {
    if (mouth_selected.value >= 11) {
      year_selected.value += 1
      mouth_selected.value = 0
    } else {
      mouth_selected.value += 1
    }
  }

  const pullMouth = () => {
    if (mouth_selected.value <= 0) {
      year_selected.value -= 1
      mouth_selected.value = 11
    } else {
      mouth_selected.value -= 1
    }
  }
</script>