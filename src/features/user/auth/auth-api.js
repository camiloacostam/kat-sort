import axios from 'axios'

const API_URL = `${import.meta.env.VITE_APP_API_URL}`

const register = (registerData) => {
  return axios.post(`${API_URL}/users/register`, {
    name: registerData.name,
    last_name: registerData.lastName,
    email: registerData.email,
    password: registerData.password
  })
}

const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login`, {
    email,
    password
  })
}

const getUserInfo = (token) => {
  return axios.get(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export default {
  register,
  login,
  getUserInfo
}
