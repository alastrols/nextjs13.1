import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});

export const httpClientAdmin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_ADMIN_API,
});

export default httpClient;
