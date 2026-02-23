export function useAuth() {
  const isAuthenticated = useState<boolean>('auth', () => false)

  if (process.client) {
    isAuthenticated.value = localStorage.getItem('auth') === 'true'
  }

  function login(matricula: string, password: string) {
    if (!matricula || !password) return false

    localStorage.setItem('auth', 'true')
    isAuthenticated.value = true
    navigateTo('/meus-cursos')
    return true
  }

  function logout() {
    localStorage.removeItem('auth')
    isAuthenticated.value = false

    navigateTo('/login')
  }

  return { isAuthenticated, login, logout }
}
