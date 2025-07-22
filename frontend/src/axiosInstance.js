import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"? 'http://localhost:5001/api' : "/api", // points to your backend
  withCredentials: true                 // required if your backend uses cookies/sessions
});


