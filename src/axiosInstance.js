// src/axiosInstance.js
import axios from 'axios';
import { baseURL } from './static';
// Check if the environment variable is defined
console.log(baseURL);
console.log(baseURL);

// Create an Axios instance with a default base URL
const axiosInstance = axios.create({
  baseURL
});

// You can add interceptors here if needed

export default axiosInstance;
