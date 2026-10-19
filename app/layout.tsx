import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "やりくり献立",
  description: "献立を作るだけで、食費が見える化する。予算管理・賞味期限のお知らせ・買い物リスト自動作成ができる家計×献立プランナーアプリ。iPhone向けにApp Storeで配信中。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${urbanist.variable} antialiased`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white text-charcoal">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
