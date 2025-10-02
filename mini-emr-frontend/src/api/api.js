import axios from "axios";

// ✅ Use your deployed backend Render URL
const BASE_URL = "https://z-backend-gz51.onrender.com";

// Admin / EMR API instance (now under /emr/)
export const adminAPI = axios.create({
  baseURL: `${BASE_URL}/emr/`,
});

// Patient Portal API instance (root level)
export const patientAPI = axios.create({
  baseURL: `${BASE_URL}/`,
});

// Default export (so old imports still work)
export default adminAPI;
