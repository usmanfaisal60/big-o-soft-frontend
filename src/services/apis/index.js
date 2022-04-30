import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_SERVER_URL || "http://localhost:3200/";

export const apis = {
    register: ({ email, password }) => axios.post("auth/register", { email, password, role: "USER" }),
}

const getAuthHeader = () => ({ headers: { 'Authorization': `Bearer ${localStorage.getItem("AUTH_TOKEN")}` } })