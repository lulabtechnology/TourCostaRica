import type { ReactNode } from "react";
import { siteMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata = siteMetadata();

export default function EntryLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
