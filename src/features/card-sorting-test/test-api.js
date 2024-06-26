import axios from "axios";
import useAuthStore from "../user/auth-store";

const API_URL = `${import.meta.env.REACT_APP_API_URL}/test`;

const getUserId = () => {
  // Primero intenta obtener el userId del estado global de Zustand
  const userId = useAuthStore.getState().user?.id;
  if (userId) {
    return userId;
  }

  // Si no está en Zustand, intenta obtenerlo del session storage
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user).id : null;
};

const createTestApi = async (testData) => {
  const userId = getUserId();

  if (!userId) {
    throw new Error("No se encontró el ID de usuario");
  }

  const response = await axios.post(`${API_URL}/create`, {
    ...testData,
    userId,
  });

  return response.data;
};

const getUserTestsApi = async () => {
  const userId = getUserId();

  if (!userId) {
    throw new Error("No se encontró el ID de usuario");
  }

  const response = await axios.get(`${API_URL}/${userId}`);

  return response.data?.tests;
};

const getTestByAccessLinkApi = async (accessLink) => {
  const response = await axios.get(`${API_URL}/solve/${accessLink}`);

  return response.data;
};

export { createTestApi, getUserTestsApi, getTestByAccessLinkApi };
