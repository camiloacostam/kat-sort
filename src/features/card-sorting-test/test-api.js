import axios from 'axios'
import useAuthStore from '../user/auth-store'

const API_URL = `${import.meta.env.VITE_APP_API_URL}/test`

const getUserId = () => {
  // Primero intenta obtener el userId del estado global de Zustand
  const userId = useAuthStore.getState().user?.id
  if (userId) {
    return userId
  }

  // Si no está en Zustand, intenta obtenerlo del session storage
  const user = sessionStorage.getItem('user')
  return user ? JSON.parse(user).id : null
}

const createTestApi = async (testData) => {
  const userId = getUserId()

  if (!userId) {
    throw new Error('No se encontró el ID de usuario')
  }

  const response = await axios.post(`${API_URL}/create`, {
    ...testData,
    userId
  })

  return response.data
}

const getUserTestsApi = async () => {
  const userId = getUserId()

  if (!userId) {
    throw new Error('No se encontró el ID de usuario')
  }

  const response = await axios.get(`${API_URL}/${userId}`)

  return response.data?.tests
}

const getTestByAccessLinkApi = async (accessLink) => {
  const response = await axios.get(`${API_URL}/solve/${accessLink}`)

  return response.data
}

const getTestDetailApi = async (testId) => {
  const response = await axios.get(`${API_URL}/details/${testId}`)

  return response.data
}

const editTestNameApi = async (testId, newName) => {
  const response = await axios.patch(`${API_URL}/edit/${testId}`, {
    name: newName
  })

  return response.data
}

const deleteTestApi = async (testId) => {
  const response = await axios.patch(`${API_URL}/${testId}/delete`)
  return response.data
}

const calculateDendrogramApi = async (testId) => {
  const response = await axios.get(`${API_URL}/details/dendrogram/${testId}`)

  return response.data
}

const getTestResultsAnalysisApi = async (testId) => {
  const response = await axios.get(`${API_URL}/details/analysis/${testId}`)

  return response.data
}

export {
  createTestApi,
  getUserTestsApi,
  getTestByAccessLinkApi,
  getTestDetailApi,
  editTestNameApi,
  deleteTestApi,
  calculateDendrogramApi,
  getTestResultsAnalysisApi
}
