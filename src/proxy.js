import { NextResponse } from "next/server";
import { auth } from "../lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

export default async function Proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user?.id) {
    return NextResponse.redirect(new URL("/sign-up", request.nextUrl));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/cart", "/profile"],
};
