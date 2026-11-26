import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GEO_COOKIE = "cd_geo";

/**
 * Passes the visitor's country to the browser in a cookie. The pages are
 * static, so this is the only place that knows where a request came from, and
 * the consent banner needs it to decide whether to ask. A session cookie,
 * rewritten only when the country changes.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const country = request.headers.get("x-vercel-ip-country");
  if (country && request.cookies.get(GEO_COOKIE)?.value !== country) {
    response.cookies.set(GEO_COOKIE, country, { path: "/", sameSite: "lax", secure: true });
  }
  return response;
}

export const config = {
  // Pages only: not the API, Next's own files, or anything with a file extension.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
