import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { authRoutes, protectedRoutes } from "./src/router/routes";

export function middleware(request) {
  // const currentUser = request.cookies.get("currentUser")?.value;
  console.log("request.nextUrl.pathname", request);
  // console.log("response", response);
  // return NextResponse.redirect(new URL("/login", request.url));

  // if (
  //   protectedRoutes.includes(request.nextUrl.pathname) &&
  //   (!currentUser || Date.now() > JSON.parse(currentUser).expiredAt)
  // ) {
  //   request.cookies.delete("currentUser");
  //   const response = NextResponse.redirect(new URL("/login", request.url));
  //   response.cookies.delete("currentUser");

  //   return response;
  // }

  // if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
  //   return NextResponse.redirect(new URL("/profile", request.url));
  // }
}
