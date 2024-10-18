import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
 function(error) {
    // Handle request errors here
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
    (response) => {
      // If the response is successful, just return the data
      alert(response.data.email)
      return response;
    },
    (error) => {
      const navigate = useNavigate(); // For navigating to login if token expired
  
      // Check if the error is due to an unauthorized (401) response
      if (error.response && error.response.status === 401) {
        // Handle 401 errors (unauthorized) - Token expired or invalid
  
        // Optionally, remove the token and redirect to login page
        localStorage.removeItem('token'); // Remove token if expired/invalid
        navigate('/login'); // Redirect to login page
  
        // You can also display a message to the user or handle error in other ways
      }
  
      // Handle any other errors globally
      return Promise.reject(error);
    }
  );

export default api;
