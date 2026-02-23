<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ src: string }>()

const isLoading = ref(true)

watch(
  () => props.src,
  () => {
    isLoading.value = true
  }
)

function handleLoad() {
  isLoading.value = false
}
</script>

<template>
  <div class="relative w-full aspect-video rounded overflow-hidden bg-black">
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-black/50 z-10"
    >
      <div
        class="w-12 h-12 border-4 border-t-indigo-600 border-gray-300 rounded-full animate-spin"
      ></div>
    </div>

    <iframe
      :key="props.src"
      :src="props.src"
      class="w-full h-full rounded transition-opacity duration-500"
      :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }"
      frameborder="0"
      allowfullscreen
      @load="handleLoad"
    />
  </div>
</template>
