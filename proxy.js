import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["ar", "en"];
let defaultLocale = "ar";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  
  try {
    return match(languages, locales, defaultLocale);
  } catch (e) {
    return defaultLocale;
  }
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  
  // Skip all internal paths (_next), files with extensions like .png, .ico, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(.*)$/)
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|api/).*)",
  ],
};
