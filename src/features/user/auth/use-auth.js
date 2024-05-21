import { useEffect } from 'react'
// auth Helpers hooks
import useAuthStore from '../auth-store'
import AuthAPI from './auth-api'
// Jwt utilities
import { jwtDecode } from 'jwt-decode'

export default function useAuth() {
  const { isAuthenticated, user, token, error, login, logOut, setUser } =
    useAuthStore()

  const checkAuth = async () => {
    if (token) {
      try {
        const decodedTokent = jwtDecode(token)
        if (decodedTokent.exp * 1000 < Date.now()) {
          logOut()
        } else {
          const userFromSession = sessionStorage.getItem('user')
          if (userFromSession) {
            setUser(JSON.parse(userFromSession))
          } else {
            const response = await AuthAPI.getUserInfo(token)
            setUser(response.data.user)
          }
        }
      } catch (error) {
        logOut()
      }
    }
  }

  useEffect(() => {
    checkAuth()
  }, [token, setUser, logOut])

  return { isAuthenticated, user, token, error, login, logOut }
}
