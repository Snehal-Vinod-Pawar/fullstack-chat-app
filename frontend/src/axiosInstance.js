import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api', // points to your backend
  withCredentials: true                 // required if your backend uses cookies/sessions
});

export default axiosInstance;
