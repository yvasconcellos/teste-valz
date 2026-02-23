export default defineNuxtRouteMiddleware(() => {
  if (!process.client) return

  const isAuth = localStorage.getItem('auth') === 'true'

  if (!isAuth) {
    return navigateTo('/login')
  }
})
