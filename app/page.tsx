import Image from "next/image";
import { APP_STORE_URL } from "@/lib/app-store";

const CURRENT_FEATURES = [
  "月の食費予算と今週の残り",
  "1週間の献立(朝・昼・夜)",
  "買い物リスト",
  "レシピの保存(YouTubeリンク対応)",
  "在庫と賞味期限のお知らせ",
];

const UPCOMING_FEATURES = [
  { name: "新デザイン", body: "予算が主役の見やすい画面に", ai: false },
  { name: "✦ AI献立プラン", body: "予算内で1週間を自動で組む", ai: true },
  { name: "✦ 在庫で作れるレシピ", body: "冷蔵庫の食材から提案", ai: true },
  { name: "✦ 金額をAIで計算", body: "1食あたりの費用を推定", ai: true },
  { name: "お店ごとの価格メモ", body: "過去の値段と最安値がわかる", ai: false },
];

const AI_FEATURES = [
  {
    title: "AI献立プラン",
    body: "予算内で1週間を組み、キャベツ1玉を何品にも使い回すように食材をまとめます。",
  },
  {
    title: "在庫で作れるレシピ",
    body: "冷蔵庫にある食材から作れる料理を提案。足りないものと金額もわかります。",
  },
  {
    title: "金額をAIで計算",
    body: "レシピの材料から、最近の平均価格で1食あたりの費用を推定します。",
  },
  {
    title: "お店ごとの価格メモ",
    body: "よく行くスーパーの値段を記録。過去の値段と最安値を見ながら買い物できます。",
  },
];

const STEPS = [
  { n: "1", title: "今月の予算を決める", body: "食費として使える金額を入力します。" },
  {
    n: "2",
    title: "1週間の献立を組む",
    body: "朝・昼・夜にレシピを選ぶか、自由に入力します。AIにまとめて組んでもらうこともできます。",
  },
  {
    n: "3",
    title: "あとは自動で更新",
    body: "買い物リスト・在庫・予算バーが、献立に合わせて変わります。",
  },
];

const SCREENS = [
  { src: "/lp/phone-recipes.png", caption: "保存したレシピ" },
  { src: "/lp/phone-stock.png", caption: "在庫と賞味期限" },
  { src: "/lp/phone-price-memo.png", caption: "お店ごとの価格メモ" },
];

const cardShadow = "drop-shadow-[0px_4px_30px_rgba(4,6,15,0.08)]";

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-14 items-center rounded-full bg-charcoal px-7 text-[17px] font-extrabold whitespace-nowrap text-white hover:bg-black hover:text-white ${className}`}
    >
      App Storeで入手
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center font-extrabold">
      <span className="text-[14px] tracking-[0.08em] text-eager-green">{eyebrow}</span>
      <h2 className="text-[28px] leading-[1.3] text-charcoal sm:text-[40px]">{title}</h2>
    </div>
  );
}

// Phone mockups are exported from Figma as flat images; the device corner radius and drop
// shadow are applied here so the exports stay transparent-free at the edges.
function HeroPhones() {
  return (
    <div className="relative aspect-[456/537] w-full max-w-[456px]">
      <Image
        src="/lp/phone-shopping.png"
        alt="買い物リストの画面"
        width={234}
        height={490}
        className="absolute top-[1.3%] left-[47.37%] w-[51.32%] rounded-[36px] shadow-[0px_24px_48px_0px_rgba(17,122,54,0.18)]"
      />
      <Image
        src="/lp/phone-home.png"
        alt="献立と今週の予算の画面"
        width={256}
        height={537}
        priority
        className="absolute top-0 left-0 w-[56.14%] rounded-[40px] shadow-[0px_30px_60px_0px_rgba(17,122,54,0.22)]"
      />
    </div>
  );
}

function AiPhone() {
  return (
    <Image
      src="/lp/phone-ai-plan.png"
      alt="AI献立プランの画面"
      width={284}
      height={598}
      className="w-full max-w-[284px] rounded-[40px] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.25)]"
    />
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-storybook-green">
        <Image
          src="/lp/hero-wave.svg"
          alt=""
          width={1440}
          height={160}
          className="absolute bottom-0 left-0 h-[160px] w-full"
        />
        <div className="relative mx-auto flex max-w-[1168px] flex-col items-center gap-12 px-6 pt-12 pb-20 lg:flex-row lg:pt-20 lg:pb-24">
          <div className="flex w-full flex-1 flex-col items-start gap-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3.5 py-1.5 text-[14px] font-bold text-eager-green">
                家計 × 献立プランナー
              </span>
              <a
                href="#update"
                className="rounded-full bg-spark-blue px-3.5 py-1.5 text-[14px] font-bold text-white hover:text-white hover:opacity-90"
              >
                ✦ アップデート予定:AIアシスト・新デザイン ›
              </a>
            </div>
            <h1 className="text-[36px] leading-[1.25] font-extrabold tracking-[-0.01em] text-charcoal sm:text-[50px]">
              献立を作るだけで、
              <br />
              食費が<span className="text-eager-green">見える化</span>する。
            </h1>
            <p className="max-w-[460px] text-[16px] leading-[30px] font-medium text-pencil-gray sm:text-[18px]">
              月の食費を決めて、1週間の献立を組むだけ。予算の残り、期限の近い食材、買い物リストが自動でそろいます。予算内で賢く、おいしく。
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <AppStoreButton className="px-[26px]" />
              <span className="text-[14px] font-semibold text-pencil-gray">iPhone 向けアプリ</span>
            </div>
          </div>
          <div className="flex w-full flex-1 justify-center">
            <HeroPhones />
          </div>
        </div>
      </section>

      {/* UPDATE */}
      <section id="update" className="mx-auto max-w-[1168px] scroll-mt-24 px-6 pt-16 pb-2">
        <div className="flex flex-col gap-7 rounded-[32px] bg-sky-tint p-6 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-extrabold tracking-[0.08em] text-spark-blue">
                アップデート情報
              </span>
              <h2 className="text-[26px] leading-[1.3] font-extrabold text-charcoal sm:text-[36px]">
                いまのアプリが、もっと便利になります。
              </h2>
              <p className="text-[15px] leading-[26px] text-pencil-gray">
                すでにお使いの方は、App Store からアップデートするだけで新しい機能が使えます。
              </p>
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] shrink-0 items-center rounded-full bg-spark-blue px-6 text-[16px] font-extrabold text-white hover:text-white hover:opacity-90"
            >
              App Storeでアップデート
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-3.5 rounded-3xl bg-white p-6">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-surface px-2.5 py-1 text-[12px] font-extrabold text-pencil-gray">
                  いま
                </span>
                <span className="text-[17px] font-extrabold text-charcoal">Ver. 1.0.0</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-[15px] leading-[22px] text-pencil-gray">
                {CURRENT_FEATURES.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3.5 rounded-3xl border-2 border-spark-blue bg-white p-6">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-spark-blue px-2.5 py-1 text-[12px] font-extrabold text-white">
                  NEW
                </span>
                <span className="text-[17px] font-extrabold text-charcoal">次のアップデート</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-[15px] leading-[22px] font-semibold text-charcoal">
                {UPCOMING_FEATURES.map((f) => (
                  <li key={f.name}>
                    <span className={f.ai ? "text-spark-blue" : "text-eager-green"}>{f.name}</span>
                    {` — ${f.body}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto flex max-w-[1168px] scroll-mt-24 flex-col gap-10 px-6 pt-[72px] pb-24"
      >
        <SectionTitle eyebrow="機能" title="やりくりに必要なことを、ひとつに。" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article
            className={`flex flex-col gap-4 rounded-3xl border border-hairline bg-white p-7 ${cardShadow}`}
          >
            <div className="grid size-[52px] place-items-center rounded-2xl bg-storybook-green">
              <Image src="/lp/icon-budget.svg" alt="" width={20} height={20} />
            </div>
            <h3 className="text-[22px] leading-[30px] font-extrabold text-charcoal">
              予算がひと目でわかる
            </h3>
            <p className="text-[15px] leading-[26px] text-pencil-gray">
              月の食費を入れるだけで、1週間の目安を自動で計算。レシピを選ぶたびに予算バーが減っていきます。
            </p>
            <div
              className={`flex flex-col rounded-3xl border border-hairline bg-white p-5 ${cardShadow}`}
            >
              <div className="flex justify-between text-[14px] leading-5">
                <span className="font-medium text-pencil-gray">今週の予算</span>
                <span className="font-bold text-eager-green">79% 使用</span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[32px] leading-9 font-extrabold tracking-[-0.01em] text-charcoal">
                  ¥971
                </span>
                <span className="text-[14px] leading-5 font-medium text-pencil-gray">残り</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-surface">
                <div className="h-full w-[79%] rounded-full bg-progress-green" />
              </div>
              <div className="mt-2 flex justify-between text-[12px] leading-4 font-medium text-pencil-gray">
                <span>使った額 ¥3,680</span>
                <span>予算 ¥4,651</span>
              </div>
            </div>
          </article>

          <article
            className={`flex flex-col gap-4 rounded-3xl border border-hairline bg-white p-7 ${cardShadow}`}
          >
            <div className="grid size-[52px] place-items-center rounded-2xl bg-alert-tint">
              <Image src="/lp/icon-alert.svg" alt="" width={20} height={20} />
            </div>
            <h3 className="text-[22px] leading-[30px] font-extrabold text-charcoal">
              賞味期限をお知らせ
            </h3>
            <p className="text-[15px] leading-[26px] text-pencil-gray">
              在庫を登録しておけば、期限が近い食材を教えてくれます。その食材で作れるレシピも一緒に。
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3">
                <span className="text-[16px] font-bold text-charcoal">卵</span>
                <span className="flex items-center gap-1 rounded-lg bg-warn-tint px-2.5 py-1 text-[12px] leading-4 font-semibold text-warn-amber">
                  <Image src="/lp/icon-warning-small.svg" alt="" width={14} height={14} />
                  あと2日
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3">
                <span className="text-[16px] font-bold text-charcoal">じゃがいも</span>
                <span className="rounded-lg bg-storybook-green px-2.5 py-1 text-[12px] leading-4 font-semibold text-eager-green">
                  あと6日
                </span>
              </div>
            </div>
          </article>

          <article
            className={`flex flex-col gap-4 rounded-3xl border border-hairline bg-white p-7 ${cardShadow}`}
          >
            <div className="grid size-[52px] place-items-center rounded-2xl bg-storybook-green">
              <Image src="/lp/icon-cart.svg" alt="" width={20} height={20} />
            </div>
            <h3 className="text-[22px] leading-[30px] font-extrabold text-charcoal">
              買い物リストも自動で
            </h3>
            <p className="text-[15px] leading-[26px] text-pencil-gray">
              献立のレシピから買い物リストを作成。YouTubeのリンクを貼ればレシピも保存でき、1食ごとの費用が記録されます。
            </p>
            <ul className="flex flex-col px-1">
              <li className="flex items-center gap-3 border-b border-hairline py-4">
                <span className="grid size-7 place-items-center rounded-lg border-2 border-eager-green bg-eager-green">
                  <Image src="/lp/icon-check.svg" alt="" width={16} height={16} />
                </span>
                <span className="flex-1 text-[16px] leading-6 font-semibold text-strike-gray line-through">
                  キャベツ
                </span>
                <span className="text-[14px] leading-5 font-medium text-pencil-gray">1玉</span>
              </li>
              <li className="flex items-center gap-3 border-b border-hairline py-4">
                <span className="size-7 rounded-lg border-2 border-check-gray" />
                <span className="flex-1 text-[16px] leading-6 font-semibold text-charcoal">
                  鶏むね肉
                </span>
                <span className="text-[14px] leading-5 font-medium text-pencil-gray">300g</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* AI ASSIST */}
      <section id="ai" className="scroll-mt-24 bg-eager-green">
        <div className="mx-auto flex max-w-[1168px] flex-col items-center gap-14 px-6 py-24 lg:flex-row">
          <div className="flex w-full justify-center lg:w-[442px] lg:shrink-0">
            <AiPhone />
          </div>
          <div className="flex flex-1 flex-col items-start gap-7">
            <span className="rounded-full bg-white px-3.5 py-1.5 text-[14px] font-extrabold text-spark-blue">
              ✦ AIアシスト · 次のアップデートで追加
            </span>
            <h2 className="text-[30px] leading-[1.3] font-extrabold text-white sm:text-[42px]">
              残りの予算と、いまある食材から。
              <br />
              献立はAIにおまかせ。
            </h2>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {AI_FEATURES.map((f) => (
                <div key={f.title} className="rounded-3xl bg-white/10 p-5">
                  <h3 className="text-[18px] leading-[26px] font-extrabold text-white">{f.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-[23px] text-white opacity-92">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="mx-auto flex max-w-[1168px] scroll-mt-24 flex-col gap-10 px-6 py-24"
      >
        <SectionTitle eyebrow="使い方" title="3ステップではじめる" />
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="flex flex-col items-start gap-3 rounded-3xl bg-surface p-7">
              <span className="grid size-12 place-items-center rounded-full bg-eager-green text-[22px] font-extrabold text-white">
                {s.n}
              </span>
              <h3 className="text-[20px] leading-7 font-extrabold text-charcoal">{s.title}</h3>
              <p className="text-[15px] leading-[26px] text-pencil-gray">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SCREENS */}
      <section className="bg-surface">
        <div className="mx-auto flex max-w-[1168px] flex-col gap-10 px-6 py-[88px]">
          <h2 className="text-center text-[26px] leading-[1.3] font-extrabold text-charcoal sm:text-[36px]">
            毎日の献立管理を、やさしくサポート
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {SCREENS.map((s) => (
              <figure key={s.src} className="flex flex-col items-center gap-3.5">
                <Image src={s.src} alt={`${s.caption}の画面`} width={244} height={512} />
                <figcaption className="text-[15px] font-bold text-charcoal">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-[1168px] px-6 py-24">
        <div className="flex flex-col items-start gap-8 overflow-hidden rounded-[32px] bg-storybook-green p-8 md:flex-row md:items-center md:p-12">
          <div className="grid size-28 shrink-0 place-items-center rounded-[28px] bg-white drop-shadow-[0px_10px_15px_rgba(17,122,54,0.15)]">
            <Image src="/lp/logo.png" alt="やりくり献立のアイコン" width={84} height={84} />
          </div>
          <div className="flex-1">
            <h2 className="text-[28px] leading-[1.3] font-extrabold text-charcoal sm:text-[36px]">
              今日から、予算内で賢く。
            </h2>
            <p className="mt-2 text-[16px] leading-[26px] text-pencil-gray">
              やりくり献立で、食費と献立をいっしょに管理しましょう。
            </p>
          </div>
          <AppStoreButton />
        </div>
      </section>
    </>
  );
}
