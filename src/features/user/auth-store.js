import { create } from 'zustand'
import AuthAPI from './auth/auth-api'

const useAuthStore = create((set) => ({
  isAuthenticated: sessionStorage.getItem('token') ? true : false,
  user: sessionStorage.getItem('user') || null,
  token: sessionStorage.getItem('token') || null,
  error: null,
  login: async (email, password) => {
    try {
      const response = await AuthAPI.login({ email, password })
      const token = response.data.token
      sessionStorage.setItem('token', token)
      sessionStorage.setItem('user', JSON.stringify(response.data.user))
      sessionStorage.setItem('isAuthenticated', true)
      set({ isAuthenticated: true, user: response.data.user, token })
    } catch (error) {
      set({ error: error.response.data.message })
    }
  },
  logout: () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('isAuthenticated')
    set({ user: null, token: null, isAuthenticated: false })
  },
  setUser: (user) => set({ user })
}))

export default useAuthStore
