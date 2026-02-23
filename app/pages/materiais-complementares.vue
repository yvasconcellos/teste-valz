<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const materials = ref([
  {
    id: 1,
    title: 'Manual do Curso (PDF)',
    url: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    id: 2,
    title: 'Exercícios Extras (PDF)',
    url: 'https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf'
  },
  {
    id: 3,
    title: 'Leitura Complementar (PDF)',
    url: 'https://pdfobject.com/pdf/sample.pdf'
  }
])
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-[#6366F1] text-2xl font-bold mb-6">Materiais Extras</h1>

    <div v-if="materials.length" class="space-y-4">
      <div
        v-for="material in materials"
        :key="material.id"
        class="border rounded-lg p-4 hover:shadow transition flex justify-between items-center"
      >
        <span class="font-medium text-gray-700">{{ material.title }}</span>
        <a
          :href="material.url"
          target="_blank"
          class="text-[#6366F1] font-semibold hover:underline"
        >
          Abrir
        </a>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 mt-10">
      Nenhum material extra disponível.
    </div>
  </div>
</template>
