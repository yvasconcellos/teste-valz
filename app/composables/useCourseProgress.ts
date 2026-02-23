export function useCourseProgress() {
  const progressMap = useState<Record<string, string[]>>(
    'course-progress',
    () => ({})
  )

  function markLessonCompleted(courseSlug: string, lessonId: string) {
    const completed = progressMap.value[courseSlug] ?? []

    if (!completed.includes(lessonId)) {
      progressMap.value[courseSlug] = [...completed, lessonId]
    }
  }

  function isLessonCompleted(courseSlug: string, lessonId: string) {
    return progressMap.value[courseSlug]?.includes(lessonId) ?? false
  }

  function getCompletedLessons(courseSlug: string) {
    return progressMap.value[courseSlug]?.length ?? 0
  }

  function getProgress(courseSlug: string, totalLessons: number) {
    if (!totalLessons) return 0

    return Math.round((getCompletedLessons(courseSlug) / totalLessons) * 100)
  }

  return {
    progressMap,
    markLessonCompleted,
    isLessonCompleted,
    getCompletedLessons,
    getProgress
  }
}
