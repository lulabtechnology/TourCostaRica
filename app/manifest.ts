import type { MetadataRoute } from "next";
import { BRAND_NAME } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND_NAME,
    short_name: "Costa Rica T&L",
    start_url: "/en",
    display: "browser",
    background_color: "#061f1a",
    theme_color: "#0b3d2e",
    icons: [192, 512].map((size) => ({ src: `/brand/icon-${size}.png`, sizes: `${size}x${size}`, type: "image/png" }))
  };
}
