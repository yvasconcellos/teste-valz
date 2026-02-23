<script setup lang="ts">
const recovering = ref(false)

definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <AuthCard>
    <AuthLoginForm
      v-if="!recovering"
      @success="navigateTo('/meus-cursos')"
      @recover="recovering = true"
    />

    <AuthRecoverPasswordForm v-else @back="recovering = false" />
  </AuthCard>
</template>
