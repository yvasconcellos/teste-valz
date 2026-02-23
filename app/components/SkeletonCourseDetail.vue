<template>
  <div class="max-w-6xl mx-auto p-6 animate-pulse grid md:grid-cols-3 gap-6">
    <div class="md:col-span-2">
      <div class="h-6 bg-gray-200 rounded w-1/2 mb-4" />
      <div class="aspect-video bg-gray-200 rounded" />
    </div>

    <div class="space-y-3">
      <div v-for="n in 6" :key="n" class="border rounded p-3 bg-gray-100">
        <div class="h-3 bg-gray-200 rounded w-3/4 mb-2" />
        <div class="h-3 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  </div>
</template>
