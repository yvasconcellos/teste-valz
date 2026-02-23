<template>
  <div class="w-full bg-gray-200 rounded h-2">
    <div class="bg-blue-600 h-2 rounded" :style="{ width: `${value}%` }" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: number }>()
</script>
