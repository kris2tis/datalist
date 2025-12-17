import { NextResponse } from "next/server";

export default function Proxy(request) {
  let id = request.cookies.get("id");
  if (request.nextUrl.pathname.startsWith("/cart") && !id) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (request.nextUrl.pathname.startsWith("/auth") && id) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (request.nextUrl.pathname.startsWith("/profile") && !id) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/cart", "/auth", "/profile"],
};
