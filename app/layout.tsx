import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BRAND_NAME, SITE_URL } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...pageMetadata(),
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND_NAME,
  category: "travel",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }, { url: "/brand/icon-192.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
