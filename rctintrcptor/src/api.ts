import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://dummyjson.com/auth', // Replace with your API base URL
});

// Add a request interceptor to attach the token
api.interceptors.request.use(
  (config) => {
    // Retrieve the token from local storage (or any other method)
    //const token = localStorage.getItem('token');
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    if (token) {
      // If the token exists, add it to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

export default api;
