import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = [
  "/login",
  "/register",
];

export function middleware(
  request: NextRequest
) {
  const token =
    request.cookies.get("accessToken");

  const { pathname } =
    request.nextUrl;

  const isPublic =
    PUBLIC_ROUTES.includes(pathname);

  if (!token && !isPublic) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  if (token && isPublic) {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/fields/:path*",
    "/weather/:path*",
    "/reports/:path*",
    "/notifications/:path*",
    "/profile/:path*",
    "/search/:path*",
    "/login",
    "/register",
  ],
};