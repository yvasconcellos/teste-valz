<script setup lang="ts">
import { isValidCPF } from '@/utils/cpf'
import { IMaskComponent as IMask } from 'vue-imask'

const cpf = ref('')
const error = ref('')
const successMessage = ref('')

const emit = defineEmits<{
  (e: 'back'): void
}>()

function handleRecover() {
  error.value = ''
  successMessage.value = ''

  if (!isValidCPF(cpf.value)) {
    error.value = 'CPF inválido'
    return
  }

  successMessage.value =
    'Se este CPF estiver cadastrado, você receberá instruções no e-mail.'
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="handleRecover">
    <img src="/assets/univalz.png" alt="Univalz" />
    <h1 class="text-xl text-center mt-0">Recuperar senha</h1>

    <div>
      <label class="block text-sm font-medium mb-1">CPF</label>
      <IMask
        v-model="cpf"
        mask="000.000.000-00"
        placeholder="000.000.000-00"
        inputmode="numeric"
        class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <p v-if="error" class="text-sm text-red-600">
      {{ error }}
    </p>

    <p v-if="successMessage" class="text-sm text-green-600">
      {{ successMessage }}
    </p>

    <button
      type="submit"
      class="w-full bg-[#6366F1] text-white py-2 rounded hover:bg-blue-700"
    >
      Enviar instruções
    </button>

    <button
      type="button"
      class="w-full text-sm text-blue-600 hover:underline"
      @click="emit('back')"
    >
      Voltar para o login
    </button>
  </form>
</template>
