<script setup lang="ts">
import { ref } from 'vue'

const { isAuthenticated, logout } = useAuth()
const mobileMenuOpen = ref(false)

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="bg-[#6366F1] border-b w-full z-50 shadow-md">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink to="/meus-cursos" class="w-24">
        <img src="/assets/univalz_alternative.png" alt="Univalz" />
      </NuxtLink>

      <nav v-if="isAuthenticated" class="hidden sm:flex items-center gap-6">
        <NuxtLink
          to="/meus-cursos"
          class="text-white hover:text-slate-200 font-semibold"
        >
          Meus Cursos
        </NuxtLink>
        <NuxtLink
          to="/materiais-complementares"
          class="text-white hover:text-slate-200 font-semibold"
        >
          Materiais
        </NuxtLink>
        <button
          @click="logout"
          class="text-sm text-white rounded-md py-2 px-4 bg-red-600 hover:bg-red-500 transition"
        >
          Logout
        </button>
      </nav>

      <button
        class="sm:hidden flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 transition"
        @click="toggleMenu"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition name="fade-scale">
      <div
        v-if="mobileMenuOpen && isAuthenticated"
        class="fixed inset-0 bg-[#6366F1] flex flex-col items-center justify-center sm:hidden z-40 p-6"
      >
        <button
          @click="toggleMenu"
          class="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-indigo-600 transition"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <NuxtLink
          to="/meus-cursos"
          class="text-white text-2xl font-bold hover:text-slate-200 mt-12"
          @click="mobileMenuOpen = false"
        >
          Meus Cursos
        </NuxtLink>
        <NuxtLink
          to="/materiais-complementares"
          class="text-white text-2xl font-bold hover:text-slate-200 mt-4"
          @click="mobileMenuOpen = false"
        >
          Materiais
        </NuxtLink>

        <button
          @click="logout"
          class="text-white text-lg mt-16 rounded-md py-2 px-6 bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </transition>
  </header>
</template>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
