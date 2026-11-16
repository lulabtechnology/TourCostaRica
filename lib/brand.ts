export const BRAND_NAME = "Costa Rica Travel and Living";
export const SITE_URL = "https://costaricatravelandliving.com";
// Stable public asset host also works while the custom domain awaits DNS.
export const ASSET_ORIGIN = "https://tour-costa-rica.vercel.app";
export const BRAND_MARK = "/brand/costa-rica-travel-and-living-mark.png";
export const SHARE_IMAGE = "/brand/costa-rica-travel-and-living-share.jpg";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function assetUrl(path: string) {
  return new URL(path, ASSET_ORIGIN).toString();
}
