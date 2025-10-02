import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

// Admin API instance
export const adminAPI = axios.create({
  baseURL: `${BASE_URL}/admin/`,
});

// Patient Portal API instance
export const patientAPI = axios.create({
  baseURL: `${BASE_URL}/`,
});

// Default export for backward compatibility
export default adminAPI;
