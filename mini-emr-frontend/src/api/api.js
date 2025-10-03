import axios from "axios";

const BASE_URL = "https://z-backend-5cdi.onrender.com";

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