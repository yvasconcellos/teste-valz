import type { Course } from '@/types/Course'

export const courses: Course[] = [
  {
    id: '1',
    slug: 'nuxt-para-iniciantes',
    title: 'Nuxt para Iniciantes',
    description: 'Aprenda Nuxt 4 do zero com foco em SSG.',
    image: '/assets/curso_1.png',
    progress: 0,
    lessonsCount: 10,
    duration: '50 min'
  },
  {
    id: '2',
    slug: 'vue-avancado',
    title: 'Vue Avançado',
    description: 'Arquitetura, composables e boas práticas.',
    image: '/assets/curso_2.png',
    progress: 0,
    lessonsCount: 8,
    duration: '40 min'
  },
  {
    id: '3',
    slug: 'typescript-para-front',
    title: 'TypeScript para Front-end',
    description: 'Tipos, interfaces e produtividade no dia a dia.',
    image: '/assets/curso_3.png',
    progress: 0,
    lessonsCount: 12,
    duration: '60 min'
  }
]
