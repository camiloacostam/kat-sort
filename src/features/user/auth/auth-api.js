import axios from 'axios'

const API_URL = 'http://localhost:5000/'

export default class AuthAPI {
  static async login({ email, password }) {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    })
    return response.data
  }

  static async register({ name, last_name, email, password }) {
    const response = await axios.post(`${API_URL}/users/register`, {
      name,
      last_name,
      email,
      password
    })
    return response.data
  }

  static getUserInfo(token) {
    return axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
