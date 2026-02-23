<script setup lang="ts">
const { search, status, filteredCourses } = useCourses()
definePageMeta({
  middleware: 'auth'
})

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1200)
})
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-[#6366F1] text-2xl font-bold mb-6">Meus Cursos</h1>

    <div class="flex gap-4 mb-6">
      <input
        v-model="search"
        placeholder="Buscar"
        class="border px-3 py-2 w-full rounded"
      />

      <select v-model="status" class="border px-3 py-2 rounded">
        <option value="all">Todos</option>
        <option value="in_progress">Em andamento</option>
        <option value="completed">Concluído</option>
        <option value="not_started">Não iniciado</option>
      </select>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <SkeletonCourseCard v-if="loading" v-for="i in 6" :key="i" />

      <CourseCard
        v-else
        v-for="course in filteredCourses"
        :key="course.id"
        :course="course"
      />
    </div>

    <div
      v-if="!loading && filteredCourses.length === 0"
      class="text-center text-gray-500 mt-10"
    >
      Nenhum curso encontrado.
    </div>
  </div>
</template>
