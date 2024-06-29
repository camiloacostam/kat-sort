import axios from "axios";

const API_URL = `${import.meta.env.VITE_APP_API_URL}/solution/`;

export const startTestApi = async (accessLink, userEmail, sort) => {
  const response = await axios.post(`${API_URL}start`, {
    accessLink,
    userEmail,
    sort,
  });

  return response.data;
};
