import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  withCredentials: true,
});

export const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  put: app.put,
  delete: app.delete,
};
