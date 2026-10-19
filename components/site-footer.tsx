import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <div className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1168px] flex-wrap items-center gap-x-6 gap-y-3 px-6 pt-8 pb-10">
        <div className="flex flex-1 basis-full items-center gap-2 sm:basis-auto">
          <Image src="/lp/logo.png" alt="" width={28} height={28} className="size-7" />
          <span className="text-[14px] font-extrabold text-charcoal">やりくり献立</span>
        </div>
        <Link
          href="/contact"
          className="text-[14px] font-semibold text-pencil-gray hover:text-eager-green"
        >
          お問い合わせ
        </Link>
        <Link
          href="/privacy"
          className="text-[14px] font-semibold text-pencil-gray hover:text-eager-green"
        >
          プライバシーポリシー
        </Link>
        <span className="text-[14px] text-pencil-gray">
          © {new Date().getFullYear()} Hosokawa Lab
        </span>
      </div>
    </div>
  );
}
