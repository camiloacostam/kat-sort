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

export const saveAnswersApi = async (solutionId, answers) => {
  const response = await axios.put(`${API_URL}answer`, {
    solutionId,
    answers,
  });

  return response.data;
};

export const completeTestApi = async (solutionId, sort) => {
  const response = await axios.put(`${API_URL}complete`, {
    solutionId,
    sort,
  });

  return response.data;
};
