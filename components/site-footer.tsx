import Link from "next/link";

export function SiteFooter() {
  return (
    <div className="bg-eager-green px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-12">
        <div className="max-w-xs">
          <span className="text-lg font-extrabold text-white">やりくり献立</span>
          <p className="mt-3 text-[15px] leading-relaxed text-storybook-green">
            週の献立から、今日の家計まで。
          </p>
        </div>
        <div className="flex flex-wrap gap-16">
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-[13px] font-bold tracking-[0.05em] text-white uppercase">
              プロダクト
            </span>
            <Link href="/#features" className="text-[15px] text-fresh-leaf hover:text-white">
              機能
            </Link>
            <Link href="/#how" className="text-[15px] text-fresh-leaf hover:text-white">
              使い方
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-[13px] font-bold tracking-[0.05em] text-white uppercase">
              サポート
            </span>
            <Link href="/contact" className="text-[15px] text-fresh-leaf hover:text-white">
              お問い合わせ
            </Link>
            <Link href="/privacy" className="text-[15px] text-fresh-leaf hover:text-white">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1200px] text-[13px] text-storybook-green">
        © {new Date().getFullYear()} Hosokawa Lab
      </div>
    </div>
  );
}
