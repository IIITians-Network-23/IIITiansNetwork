import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  let isLogin = request.cookies.get("logged");
  
  if (!isLogin && request.nextUrl.pathname !== "/signin") {
    return NextResponse.redirect("/signin");
  }
  return NextResponse.next();
}