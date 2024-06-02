import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./utils/cookiesUtils";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const authToken = getCookie("token");

  if (path === "/auth/login") {
    if (authToken) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/auth/login"],
};
