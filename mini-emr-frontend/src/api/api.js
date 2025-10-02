import axios from "axios";

const BASE_URL = "https://z-backend-gz51.onrender.com";  // use backend Render URL


// Admin API instance
export const adminAPI = axios.create({
  baseURL: `${BASE_URL}/admin/`,
});

// Patient Portal API instance
export const patientAPI = axios.create({
  baseURL: `${BASE_URL}/`,
});

export default adminAPI;
