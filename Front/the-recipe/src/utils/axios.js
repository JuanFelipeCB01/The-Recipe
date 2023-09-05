import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : 'http://localhost:5020',
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
})