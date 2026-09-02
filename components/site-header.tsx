import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-10 flex h-20 items-center justify-between bg-white/90 px-6 backdrop-blur sm:px-10">
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/icon.png"
          alt="やりくり献立"
          width={32}
          height={32}
          className="rounded-xl object-cover"
        />
        <span className="text-lg font-extrabold tracking-tight text-charcoal">
          やりくり献立
        </span>
      </Link>
      <nav className="hidden items-center gap-2 sm:flex">
        <Link
          href="/#features"
          className="rounded-xl border-2 border-transparent px-4 py-2.5 text-[15px] font-bold tracking-[0.05em] text-pencil-gray uppercase hover:border-faded-gray"
        >
          機能
        </Link>
        <Link
          href="/#how"
          className="rounded-xl border-2 border-transparent px-4 py-2.5 text-[15px] font-bold tracking-[0.05em] text-pencil-gray uppercase hover:border-faded-gray"
        >
          使い方
        </Link>
      </nav>
      <a
        href="#"
        className="rounded-xl bg-eager-green px-4 py-2.5 text-[13px] font-extrabold tracking-[0.05em] text-white uppercase hover:bg-eager-green-hover sm:px-5 sm:text-[15px]"
      >
        App Storeで入手
      </a>
    </div>
  );
}
