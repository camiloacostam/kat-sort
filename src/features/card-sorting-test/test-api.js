import axios from "axios";
import useAuthStore from "../user/auth-store";

const API_URL = "http://localhost:5000/api/test";

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

export { createTestApi };
