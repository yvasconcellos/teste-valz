<script setup lang="ts">
import type { Lesson } from '@/types/Lesson'

defineProps<{
  lessons: Lesson[]
  activeLessonId: string | undefined
}>()

defineEmits(['select'])
</script>

<template>
  <ul class="space-y-2">
    <li
      v-for="lesson in lessons"
      :key="lesson.id"
      @click="$emit('select', lesson)"
      class="p-2 rounded cursor-pointer flex justify-between"
      :class="{
        'bg-blue-100': lesson.id === activeLessonId,
        'opacity-60': lesson.completed
      }"
    >
      <p class="text-[#6366F1] font-medium">{{ lesson.title }}</p>
      <span v-if="lesson.completed">✔</span>
    </li>
  </ul>
</template>
