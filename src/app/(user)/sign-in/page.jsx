import { auth } from "../../../../lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AuthForm from "../../../features/auth/components/auth-form";

export const metadata = {
  title: "ورود",
};

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.session;

  if (user?.userId) redirect("/");

  return <AuthForm mode={"sign-in"} />;
}
