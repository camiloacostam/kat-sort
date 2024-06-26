import axios from "axios";

const API_URL = `${import.meta.env.REACT_APP_API_URL}`;

const register = (nombre, apellido, correo, contraseña) => {
  return axios.post(`${API_URL}/users/register`, {
    nombre,
    apellido,
    correo,
    contraseña,
  });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
};

const getUserInfo = (token) => {
  return axios.get(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default {
  register,
  login,
  getUserInfo,
};
