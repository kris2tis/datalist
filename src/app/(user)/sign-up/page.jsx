import { redirect } from "next/navigation";
import { auth } from "../../../../lib/auth";
import { headers } from "next/headers";
import AuthForm from "../../../features/auth/components/auth-form";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.session;

  if (user?.userId) redirect("/");

  return <AuthForm mode={"sign-up"} />;
}
