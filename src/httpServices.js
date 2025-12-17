import axios from "axios";

const app = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  put: app.put,
  delete: app.delete,
};
