<template>
  <div v-for="name in props.days_name" class="text-sm w-9 h-9 flex items-center justify-center cursor-pointer rounded-full space-y-2 text-gray-500">
    {{ name }}
  </div>
  <div v-for="i in first_day_of_mouth === 0 ? first_day_of_mouth + 6 : first_day_of_mouth - 1" class="w-9 h-9 flex items-center justify-center rounded-full space-y-2"></div>
  <div v-for="i in number_of_day_in_mouth" @click="selectDay(i) " :class="[i === day && month_selected === month ? 'bg-purple-200 border border-purple-400': '']" class="w-9 h-9 flex items-center text-gray-800 hover:text-purple-800 justify-center hover:bg-purple-200 hover:border hover:border-purple-400 transition duration-100 cursor-pointer rounded-full space-y-2">
    {{ i }}
  </div>
</template>

<script setup lang="ts">
  import {computed, ref} from "vue";
  interface Props {
    modelValue: Date
  }

  const props = defineProps<Props>()

  const month_selected = ref(props.modelValue.getMonth())
  const year_selected = ref(props.modelValue.getFullYear())

  const number_of_day_in_mouth = computed(() => new Date(year_selected.value, month_selected.value + 1, 0).getDate())
  const first_day_of_mouth = computed(() => new Date(year_selected.value, month_selected.value, 1).getDay())

</script>

<style scoped>

</style>