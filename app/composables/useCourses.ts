import { courses } from '@/data/courses'
import { useCourseProgress } from '@/composables/useCourseProgress'

export function useCourses() {
  const search = ref('')
  const status = ref<'all' | 'completed' | 'not_started' | 'in_progress'>('all')

  const { getProgress } = useCourseProgress()

  const filteredCourses = computed(() =>
    courses.filter((course) => {
      const progress = getProgress(course.slug, course.lessonsCount)
      const matchSearch = course.title
        .toLowerCase()
        .includes(search.value.toLowerCase())

      const matchStatus =
        status.value === 'all' ||
        (status.value === 'completed' && progress === 100) ||
        (status.value === 'not_started' && progress === 0) ||
        (status.value === 'in_progress' && progress > 0 && progress < 100)

      return matchSearch && matchStatus
    })
  )

  return { search, status, filteredCourses }
}
