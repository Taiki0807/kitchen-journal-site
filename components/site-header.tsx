import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/app-store";

const NAV_ITEMS = [
  { href: "/#update", label: "アップデート", highlight: true },
  { href: "/#features", label: "機能" },
  { href: "/#ai", label: "AIアシスト" },
  { href: "/#how", label: "使い方" },
];

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-20 border-b border-hairline bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1168px] items-center gap-6 px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex flex-1 items-center gap-2.5">
          <Image src="/lp/logo.png" alt="" width={36} height={36} className="size-9" />
          <span className="text-xl font-extrabold text-charcoal">やりくり献立</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-bold hover:text-eager-green ${
                item.highlight ? "text-spark-blue" : "text-pencil-gray"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center justify-center rounded-full bg-eager-green px-4 py-2 text-[14px] leading-5 font-bold whitespace-nowrap text-white drop-shadow-[4px_8px_12px_rgba(27,172,75,0.25)] hover:bg-eager-green-hover hover:text-white sm:min-h-[58px]"
        >
          App Storeで入手
        </a>
      </div>
    </div>
  );
}
