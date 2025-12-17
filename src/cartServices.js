import { http } from "./httpServices";
import { headers } from "next/headers";

export async function cartApi(id) {
  return http.post("/cart", id);
}

export async function getUserWithCart() {
  return http.get(
    "/cart",
    { method: "GET", headers: { Cookie: "" }, withCredentials: true },
    { headers: await headers() }
  );
}
