import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const register = (nombre, apellido, correo, contraseña) => {
  return axios.post(`${API_URL}/users/register`, {
    nombre,
    apellido,
    correo,
    contraseña
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
