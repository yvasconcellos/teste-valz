import type { Lesson } from '@/types/Lesson'

const sampleVideos: string[] = [
  'https://www.youtube.com/embed/3D0GHN1tc6U',
  'https://www.youtube.com/embed/5G6AcREzee8',
  'https://www.youtube.com/embed/J6NEe7rOfIc',
  'https://www.youtube.com/embed/tqX8XcZ-UGM',
  'https://www.youtube.com/embed/PWHeCbWxjMo'
]

export function generateLessons(
  courseId: string,
  lessonsCount: number
): Lesson[] {
  return Array.from({ length: lessonsCount }).map((_, i) => ({
    id: String(i + 1),
    courseId,
    title: `Título da Aula ${i + 1}`,
    videoUrl: sampleVideos[i % sampleVideos.length]!
  }))
}
