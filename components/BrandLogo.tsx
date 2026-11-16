import Image from "next/image";
import { BRAND_MARK } from "@/lib/brand";

export function BrandLogo() {
  return <>
    <Image className="brand-mark" src={BRAND_MARK} width={44} height={44} alt="" priority />
    <span className="brand-text">Costa Rica<br />Travel and Living</span>
  </>;
}
