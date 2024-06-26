import axios from "axios";

const API_URL = `${import.meta.env.REACT_APP_API_URL}/solution/`;

export const startTestApi = async (testId, userId) => {
  const response = await axios.post(`${API_URL}start`, {
    testId,
    userId,
  });

  return response.data;
};
