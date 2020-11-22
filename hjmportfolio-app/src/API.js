import axios from 'axios';

const API = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4000',
});

API.interceptors.request.use(async (config) => {
  return {
    ...config,
  };
});
API.interceptors.response.use(
  (response) => (response ? response.data : {}),
  (error) => {
    console.log(error);
  }
);

export default API;
