import axios from "axios";

// ✅ Backend Render URL
const BASE_URL = "https://z-backend-gz51.onrender.com";

// EMR APIs (patients, medications, appointments)
export const emrAPI = axios.create({
  baseURL: `${BASE_URL}/emr/`,  // backend root for EMR
});

// Patient Portal APIs
export const patientAPI = axios.create({
  baseURL: `${BASE_URL}/`,     // portal app APIs
});

// ✅ Alias so old code using adminAPI still works
export const adminAPI = emrAPI;

export default emrAPI;
