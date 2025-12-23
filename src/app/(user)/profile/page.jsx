import { headers } from "next/headers";
import { http } from "../../../httpServices";
import React from "react";
import UserInfo from "../../../features/user/components/user-info";
import SignoutButton from "../../../shared/components/ui/signout-button";

export const dynamic = "force-dynamic";
export default async function Page() {
  const user = await http.get(`/user`, {
    headers: await headers(),
  });
  return (
    <div className="max-w-[600px] mx-auto py-6">
      <UserInfo data={user.data.user} />
      <div className="bg-red-500 border-red-300 rounded-sm mt-3">
        <SignoutButton />
      </div>
    </div>
  );
}
