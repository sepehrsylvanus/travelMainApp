import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { routing } from "./i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);

export async function middleware(request) {
  const cookieStore = cookies();
  const defaultLocale = "en"; // تنظیم locale پیش‌فرض
  let locale = request.nextUrl.pathname.split("/")[1];

  // اگر locale در مسیر وجود نداشت یا معتبر نبود، از defaultLocale استفاده کن
  if (!routing.locales.includes(locale)) {
    locale = defaultLocale;
  }

  // اگر مسیر شامل /intro باشد، میدل‌ور next-intl را اجرا کن
  if (request.nextUrl.pathname.includes(`/${locale}/intro`)) {
    return nextIntlMiddleware(request);
  }

  const token = cookieStore.get("token")?.value;

  // اگر توکن وجود نداشت، به /locale/intro ریدایرکت کن
  if (!token) {
    return NextResponse.redirect(new URL(`/${locale}/intro`, request.url));
  }

  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ["/", "/((?!api|_next|.*\\..*).*)"], // شامل همه مسیرها به جز API و فایل‌های استاتیک
};
