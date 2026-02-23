<script setup lang="ts">
import type { Course } from '@/types/Course'
import type { Lesson } from '@/types/Lesson'
import VideoPlayer from '@/components/VideoPlayer.vue'

const props = defineProps<{
  course: Course | null | undefined
  activeLesson: Lesson
  isCourseCompleted: boolean
}>()

const emit = defineEmits<{
  (e: 'markCompleted'): void
  (e: 'goNextLesson'): void
  (e: 'goBack'): void
}>()
</script>

<template>
  <div class="flex flex-col">
    <button
      @click="$emit('goBack')"
      class="mb-3 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
    >
      ← Voltar
    </button>

    <div class="flex flex-col mb-2">
      <div class="flex max-md:flex-col justify-between md:items-center mb-2">
        <h1 class="text-2xl font-bold text-[#6366F1]">
          {{ course?.title }}
        </h1>
        <p>Duração estimada: {{ course?.duration }}</p>
      </div>
      <h2 class="font-medium">{{ activeLesson.title }}</h2>
    </div>

    <VideoPlayer :src="activeLesson.videoUrl" />

    <div class="flex gap-3 mt-4 justify-end">
      <button
        v-if="!activeLesson.completed && !isCourseCompleted"
        @click="$emit('markCompleted')"
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Marcar como concluída
      </button>

      <button
        v-if="activeLesson.completed && !isCourseCompleted"
        @click="$emit('goNextLesson')"
        class="px-4 py-2 bg-[#6366F1] text-white rounded hover:bg-blue-700"
      >
        Próxima aula →
      </button>

      <span
        v-if="isCourseCompleted"
        class="px-4 py-2 bg-emerald-100 text-emerald-700 rounded font-medium"
      >
        🎉 Curso concluído
      </span>
    </div>
  </div>
</template>
