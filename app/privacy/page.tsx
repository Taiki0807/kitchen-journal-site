import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | やりくり献立",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-xl font-extrabold tracking-[-0.02em] text-charcoal">{title}</h2>
      <div className="text-[15px] leading-[1.85] text-pencil-gray">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pb-32 pt-20 sm:pt-24">
      <h1 className="text-3xl font-extrabold tracking-[-0.02em] text-charcoal sm:text-4xl">
        プライバシーポリシー
      </h1>
      <p className="mt-4 text-[13px] text-faded-gray">制定日:2026年9月2日</p>

      <p className="mt-8 text-[15px] leading-[1.85] text-pencil-gray">
        Hosokawa Lab(以下「当方」)は、当方が提供するアプリケーション「やりくり献立」(以下「本アプリ」)における、ユーザーの情報の取り扱いについて、以下のとおりプライバシーポリシー(以下「本ポリシー」)を定めます。
      </p>

      <Section title="1. 取得する情報">
        <p>本アプリは、サービス提供のため以下の情報を取得・保存します。</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>アカウント情報(メールアドレス、表示名)</li>
          <li>月間の食費予算、献立の記録、レシピとその材料・参考リンク</li>
          <li>在庫として登録した食材の名称・数量・賞味期限</li>
          <li>買い物リストの内容</li>
        </ul>
      </Section>

      <Section title="2. 利用目的">
        <p>取得した情報は、以下の目的で利用します。</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>本アプリの機能(献立管理・予算計算・在庫管理・買い物リスト作成)を提供するため</li>
          <li>不具合の調査・対応、お問い合わせへの回答のため</li>
          <li>サービス改善のための利用状況の分析(統計化・匿名化した上で実施します)</li>
        </ul>
      </Section>

      <Section title="3. 第三者への提供">
        <p>
          当方は、法令に基づく場合を除き、取得した情報を本人の同意なく第三者に提供することはありません。ただし、本アプリは以下の外部サービスを利用しており、その運営会社にデータの保存・処理が委託される場合があります。
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Supabase Inc.(アカウント認証、データベースの保存基盤として利用)</li>
          <li>YouTube(Google LLC)(レシピに登録した動画のサムネイル取得のため通信する場合があります)</li>
          <li>Resend(お問い合わせフォームの送信処理のため利用しています)</li>
        </ul>
      </Section>

      <Section title="4. データの保存・削除">
        <p>
          ユーザーの情報は、アカウントが存在する間、本アプリのサービス提供のために保存されます。アカウントおよび関連データの削除をご希望の場合は、下記お問い合わせ窓口までご連絡ください。
        </p>
      </Section>

      <Section title="5. お問い合わせ窓口">
        <p>
          本ポリシーに関するお問い合わせは、
          <Link href="/contact">お問い合わせページ</Link>
          よりご連絡ください。
        </p>
      </Section>

      <Section title="6. 本ポリシーの変更">
        <p>
          本ポリシーの内容は、法令の変更やサービス内容の変更に応じて、予告なく改定することがあります。改定後のポリシーは、本アプリ内または本ページに掲載した時点から効力を生じるものとします。
        </p>
      </Section>
    </div>
  );
}
