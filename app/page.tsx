function HeroArt() {
  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-[320px]" aria-hidden="true">
      <circle cx="256" cy="72" r="34" fill="#ffc800" />
      <circle cx="40" cy="250" r="22" fill="#ce82ff" />
      <rect
        x="40"
        y="60"
        width="220"
        height="220"
        rx="24"
        fill="#ffffff"
        stroke="#000437"
        strokeWidth="3"
      />
      <rect x="66" y="90" width="90" height="14" rx="7" fill="#4b4b4b" />
      <rect x="66" y="150" width="168" height="16" rx="8" fill="#f2f2f2" />
      <rect x="66" y="150" width="118" height="16" rx="8" fill="#58cc02" />
      <rect x="66" y="122" width="130" height="12" rx="6" fill="#e6e6e6" />
      <rect x="66" y="190" width="168" height="34" rx="12" fill="#ffffff" stroke="#afafaf" strokeWidth="2" />
      <rect x="66" y="234" width="168" height="34" rx="12" fill="#ffffff" stroke="#afafaf" strokeWidth="2" />
      <circle cx="215" cy="207" r="6" fill="#1cb0f6" />
      <circle cx="215" cy="251" r="6" fill="#ff9600" />
    </svg>
  );
}

function BudgetArt() {
  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-[360px]" aria-hidden="true">
      <circle cx="160" cy="160" r="120" fill="#d7ffb8" />
      <circle cx="270" cy="70" r="20" fill="#ffc800" />
      <circle cx="52" cy="248" r="16" fill="#ff86d0" />
      <circle
        cx="160"
        cy="160"
        r="86"
        fill="none"
        stroke="#ffffff"
        strokeWidth="24"
      />
      <circle
        cx="160"
        cy="160"
        r="86"
        fill="none"
        stroke="#58cc02"
        strokeWidth="24"
        strokeDasharray="405 540"
        strokeLinecap="round"
        transform="rotate(-90 160 160)"
      />
      <circle cx="160" cy="160" r="86" fill="none" stroke="#000437" strokeWidth="3" />
      <text x="160" y="152" textAnchor="middle" fontSize="30" fontWeight="800" fill="#000437">
        79%
      </text>
      <text x="160" y="178" textAnchor="middle" fontSize="13" fontWeight="700" fill="#4b4b4b">
        今週の予算
      </text>
    </svg>
  );
}

function ExpiryArt() {
  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-[360px]" aria-hidden="true">
      <circle cx="160" cy="160" r="120" fill="#ffe8b8" />
      <circle cx="60" cy="80" r="18" fill="#ce82ff" />
      <circle cx="266" cy="240" r="22" fill="#1cb0f6" />
      <path
        d="M160 56 L268 244 H52 Z"
        fill="#ffffff"
        stroke="#000437"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="152" y="128" width="16" height="66" rx="8" fill="#ff9600" />
      <circle cx="160" cy="216" r="10" fill="#ff9600" />
    </svg>
  );
}

function ShoppingArt() {
  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-[360px]" aria-hidden="true">
      <circle cx="160" cy="160" r="120" fill="#dff3ff" />
      <circle cx="252" cy="90" r="18" fill="#ff86d0" />
      <circle cx="66" cy="242" r="16" fill="#ffc800" />
      <path
        d="M96 118 H224 L212 232 a16 16 0 0 1 -16 14 H120 a16 16 0 0 1 -16 -14 Z"
        fill="#ffffff"
        stroke="#000437"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M124 118 V96 a36 36 0 0 1 72 0 v22"
        fill="none"
        stroke="#000437"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="118" y="150" width="84" height="12" rx="6" fill="#58cc02" />
      <rect x="118" y="176" width="60" height="12" rx="6" fill="#1cb0f6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-12 px-6 pt-12 sm:flex-row sm:gap-16 sm:pt-20">
        <div className="flex-1">
          <h1 className="text-[32px] leading-[1.2] font-extrabold text-charcoal sm:text-[40px]">
            献立を作るだけで、
            <br />
            食費が見える化する。
          </h1>
          <p className="mt-5 max-w-[440px] text-[17px] leading-[1.5] text-pencil-gray">
            今月の予算を入れるだけで、週ごとの目安と使った金額が自動で計算されます。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-xl bg-eager-green px-6 py-3.5 text-[15px] font-extrabold tracking-[0.05em] text-white uppercase hover:bg-eager-green-hover"
            >
              App Storeで入手
            </a>
            <a
              href="#how"
              className="rounded-xl border-2 border-faded-gray px-6 py-3.5 text-[14px] font-extrabold text-spark-blue hover:border-spark-blue"
            >
              使い方を見る
            </a>
          </div>
          <div className="mt-3 text-[13px] font-bold tracking-[0.05em] text-faded-gray uppercase">
            近日公開
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <HeroArt />
        </div>
      </section>

      {/* SECTION 1: budget */}
      <section
        id="features"
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 pt-24 sm:flex-row sm:gap-16 sm:pt-32"
      >
        <div className="flex-1">
          <h2 className="text-[40px] leading-[1.2] font-extrabold tracking-[-0.02em] text-eager-green sm:text-[56px]">
            予算が、
            <br />
            ひと目でわかる。
          </h2>
          <p className="mt-6 max-w-[480px] text-[17px] leading-[1.5] text-pencil-gray">
            月の食費予算を入れておくだけで、週ごとの目安を自動で計算。レシピを選ぶたびに、使った分だけ予算バーが減っていきます。
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <BudgetArt />
        </div>
      </section>

      {/* SECTION 2: expiry (reversed) */}
      <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 pt-24 sm:flex-row-reverse sm:gap-16 sm:pt-32">
        <div className="flex-1">
          <h2 className="text-[40px] leading-[1.2] font-extrabold tracking-[-0.02em] text-eager-green sm:text-[56px]">
            賞味期限、
            <br />
            逃さない。
          </h2>
          <p className="mt-6 max-w-[480px] text-[17px] leading-[1.5] text-pencil-gray">
            在庫を登録しておけば、期限が近い食材を先に知らせます。その食材を使えるレシピもあわせて表示するので、使い切りやすくなります。
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <ExpiryArt />
        </div>
      </section>

      {/* SECTION 3: shopping + recipes */}
      <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 pt-24 sm:flex-row sm:gap-16 sm:pt-32">
        <div className="flex-1">
          <h2 className="text-[40px] leading-[1.2] font-extrabold tracking-[-0.02em] text-eager-green sm:text-[56px]">
            買い物も、
            <br />
            レシピの記録も。
          </h2>
          <p className="mt-6 max-w-[480px] text-[17px] leading-[1.5] text-pencil-gray">
            週の献立に使うレシピから、買い物リストを自動で作成。YouTubeのリンクを貼るだけでレシピとしても保存できるので、1食ずつコストが記録されていきます。
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <ShoppingArt />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-[1200px] px-6 pt-24 sm:pt-32">
        <h2 className="text-center text-[32px] font-extrabold tracking-[-0.02em] text-charcoal">
          使い方は3ステップ
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {[
            { n: "1", title: "今月の予算を設定", body: "食費として使える1ヶ月の金額を入力します。" },
            { n: "2", title: "週の献立を組む", body: "レシピを選ぶか、自由入力で朝・昼・夜の献立を埋めます。" },
            { n: "3", title: "あとは自動で更新", body: "買い物リストと在庫、予算バーがそのつど更新されます。" },
          ].map((s) => (
            <div key={s.n} className="flex flex-col items-start">
              <span className="text-[32px] leading-none font-extrabold text-eager-green">
                {s.n}
              </span>
              <h3 className="mt-3 text-[19px] font-extrabold text-charcoal">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-pencil-gray">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-[1200px] px-6 pt-24 pb-24 text-center sm:pt-32 sm:pb-32">
        <h2 className="mx-auto max-w-[600px] text-[36px] leading-[1.25] font-extrabold tracking-[-0.02em] text-eager-green sm:text-[48px]">
          今日から、無理なく続く
          <br />
          食費管理を。
        </h2>
        <p className="mx-auto mt-4 max-w-[440px] text-[17px] text-pencil-gray">
          献立と一緒に、家計もラクになる。
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-xl bg-eager-green px-8 py-3.5 text-[15px] font-extrabold tracking-[0.05em] text-white uppercase hover:bg-eager-green-hover"
        >
          App Storeで入手(近日公開)
        </a>
      </section>
    </>
  );
}
