<script setup lang="ts">
import { courses } from '@/data/courses'
import type { Lesson } from '@/types/Lesson'
import { generateLessons } from '@/data/lessons'
import { useCourseProgress } from '@/composables/useCourseProgress'

definePageMeta({ middleware: 'auth' })

const route = useRoute()
const router = useRouter()

const loading = ref(true)

const courseSlug = route.params.slug as string

const { markLessonCompleted, isLessonCompleted } = useCourseProgress()

const course = computed(() => courses.find((c) => c.slug === courseSlug))

const lessons = ref<Lesson[]>([])

const activeLesson = ref<Lesson | null>(null)

const completedCount = computed(
  () => lessons.value.filter((l) => l.completed).length
)

const isCourseCompleted = computed(
  () => completedCount.value === lessons.value.length
)

watchEffect(() => {
  if (!course.value) return

  const generatedLessons = generateLessons(
    course.value.id,
    course.value.lessonsCount
  ).map((l) => ({
    ...l,
    completed: isLessonCompleted(courseSlug, l.id)
  }))

  lessons.value = generatedLessons

  if (!activeLesson.value && generatedLessons.length) {
    activeLesson.value =
      generatedLessons.find((l) => !l.completed) ?? generatedLessons[0] ?? null
  }
})

function markCurrentLessonCompleted() {
  if (!activeLesson.value) return
  if (activeLesson.value.completed) return

  activeLesson.value.completed = true
  markLessonCompleted(courseSlug, activeLesson.value.id)
}

function goToNextLesson() {
  const index = lessons.value.findIndex((l) => l.id === activeLesson.value?.id)

  const next = lessons.value[index + 1]
  if (next) activeLesson.value = next
}

function goBack() {
  router.push('/meus-cursos')
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <SkeletonCourseDetail v-if="loading" />

  <div
    v-else-if="activeLesson"
    class="max-w-6xl mx-auto mt-4 p-6 grid md:grid-cols-3 gap-6 bg-white rounded-md"
  >
    <LessonContent
      class="md:col-span-2"
      :course="course"
      :activeLesson="activeLesson"
      :isCourseCompleted="isCourseCompleted"
      @markCompleted="markCurrentLessonCompleted"
      @goNextLesson="goToNextLesson"
      @goBack="goBack"
    />
    <LessonList
      class="md:col-span-1 md:border-l border-gray-300 md:pl-6"
      :lessons="lessons"
      :activeLessonId="activeLesson.id"
      @select="activeLesson = $event"
    />
  </div>
</template>
