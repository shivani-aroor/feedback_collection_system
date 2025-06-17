import axios from 'axios';

// Your backend is running on port 5000
const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// ===================================
// Auth API Calls (Matches your auth.js)
// ===================================

// This will make a POST request to http://localhost:5000/api/auth/signup
export const registerUser = (userData) => api.post('/auth/signup', userData);

// This will make a POST request to http://localhost:5000/api/auth/login
export const loginUser = (credentials) => api.post('/auth/login', credentials);


// We will add more functions here later for forms and feedback
export default api;