import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./utils/cookiesUtils";
import { getIsTokenExpired } from "./actions/auth";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const authToken = getCookie("token");
  const tokenExpired = await getIsTokenExpired(authToken?.value);
  const authenticated = authToken && !tokenExpired;

  if (path === "/auth/login") {
    if (authenticated) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (!authenticated) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/users", "/auth/login"],
};
