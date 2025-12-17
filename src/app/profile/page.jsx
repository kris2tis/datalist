import { headers } from "next/headers";
import { http } from "../../httpServices";
import React from "react";
import UserInfo from "../../features/user/components/user-info";

export default async function Page() {
  const user = await http.get("/get-profile", { headers: await headers() });
  return <UserInfo data={user.data.user} />;
}
