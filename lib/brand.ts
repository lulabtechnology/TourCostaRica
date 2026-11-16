export const BRAND_NAME = "Costa Rica Travel and Living";
export const SITE_URL = "https://costaricatravelandliving.com";
export const BRAND_MARK = "/brand/costa-rica-travel-and-living-mark.png";
export const SHARE_IMAGE = "/brand/costa-rica-travel-and-living-share.jpg";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
