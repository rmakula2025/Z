import axios from "axios";

// Use your Render backend URL instead of localhost
const BASE_URL = "https://z-backend-gz51.onrender.com";

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
