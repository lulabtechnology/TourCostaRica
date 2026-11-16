import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/content";
import { siteMetadata } from "@/lib/seo";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return siteMetadata(locale as Locale);
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <html lang={locale}><body>{children}</body></html>;
}
