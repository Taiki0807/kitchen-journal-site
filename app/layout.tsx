import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "やりくり献立",
  description: "献立を作るだけで、食費が見える化する。予算管理・在庫の賞味期限アラート・買い物リスト自動作成ができる家計×献立プランナーアプリ。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${nunito.variable} antialiased`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white text-charcoal">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
