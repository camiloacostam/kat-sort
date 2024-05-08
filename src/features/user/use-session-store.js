import create from "zustand";

const sessionStore = create((set) => ({
  isLoggedIn: false,
  authToken: undefined,
  user: undefined,
  login: async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        email,
        password,
      });
      set({
        isLoggedIn: true,
        authToken: response.data.token,
        user: response.data.user,
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  },
}));

export default sessionStore;
