<script setup lang="ts">
import type { Course } from '@/types/Course'
import { useCourseProgress } from '@/composables/useCourseProgress'

const props = defineProps<{ course: Course }>()

const { getProgress, getCompletedLessons } = useCourseProgress()

const progress = computed(() =>
  getProgress(props.course.slug, props.course.lessonsCount)
)

const courseContentLabel = computed(() => {
  if (progress.value === 0) return 'Ver detalhes →'
  if (progress.value === 100) return 'Rever curso →'
  return 'Continuar →'
})

const completedLessons = computed(() => getCompletedLessons(props.course.slug))
</script>

<template>
  <NuxtLink
    :to="`/cursos/${course.slug}`"
    class="border rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col"
  >
    <div class="w-full aspect-[16/9] overflow-hidden bg-gray-100">
      <img
        :src="course.image"
        class="w-full h-full object-cover"
        alt="Thumbnail do curso"
      />
    </div>

    <div class="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-lg mb-1">{{ course.title }}</h3>
        <p class="text-sm text-gray-600 mb-3">{{ course.description }}</p>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <ProgressBar :value="progress" class="flex-1 mr-3" />

          <span class="text-xs text-gray-500 whitespace-nowrap">
            {{ completedLessons }} / {{ course.lessonsCount }} aulas
          </span>
        </div>

        <div class="block mt-4 text-[#6366F1] font-semibold">
          {{ courseContentLabel }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
