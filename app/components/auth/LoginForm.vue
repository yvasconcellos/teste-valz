<script setup lang="ts">
import { isValidMatricula } from '@/utils/matricula'

const matricula = ref('')
const password = ref('')
const error = ref('')

const emit = defineEmits<{
  (e: 'success'): void
  (e: 'recover'): void
}>()

const { login } = useAuth()

function handleSubmit() {
  error.value = ''

  if (!isValidMatricula(matricula.value)) {
    error.value = 'A matrícula deve conter apenas números'
    return
  }

  if (!password.value) {
    error.value = 'Informe sua senha'
    return
  }

  const success = login(matricula.value, password.value)

  if (success) emit('success')
  else error.value = 'Matrícula ou senha inválidos'
}

function sanitizeMatricula() {
  matricula.value = matricula.value.replace(/\D/g, '')
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <img src="/assets/univalz.png" alt="Univalz" />
    <h1 class="text-xl text-center mt-0">Entrar</h1>

    <div>
      <label class="block text-sm font-medium mb-1">Matrícula</label>
      <input
        v-model="matricula"
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        placeholder="Digite sua matrícula"
        class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        @input="sanitizeMatricula"
      />
    </div>

    <div>
      <label class="block text-sm font-medium mb-1">Senha</label>
      <input
        v-model="password"
        type="password"
        placeholder="••••••••"
        class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <p v-if="error" class="text-sm text-red-600">
      {{ error }}
    </p>

    <button
      type="submit"
      class="w-full bg-[#6366F1] text-white py-2 rounded hover:bg-blue-700"
    >
      Entrar
    </button>

    <button
      type="button"
      class="w-full text-sm text-blue-600 hover:underline"
      @click="emit('recover')"
    >
      Esqueci minha senha
    </button>
  </form>
</template>
