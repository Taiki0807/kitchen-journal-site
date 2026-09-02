# やりくり献立 — 紹介サイト

「やりくり献立」アプリの紹介LP、お問い合わせ、プライバシーポリシーページ。Next.js (App Router) + Tailwind CSS v4。

## セットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
```

`http://localhost:3000` で確認できます。

## お問い合わせフォーム(Resend)

`/contact` の送信は [Resend](https://resend.com) 経由でメール通知します。

1. resend.com でアカウント作成 → API キーを発行
2. 送信元ドメイン `hosokawa-lab.dev` を認証する
   - Resendダッシュボード → **Domains** → **Add Domain** で `hosokawa-lab.dev` を追加
   - 表示されるDNSレコード(SPF用の`TXT`、DKIM用の`TXT`、任意で`MX`)を、ドメインを管理しているDNS(お名前.com / Cloudflare / Route 53 など)に追加
   - Resend側で **Verify** を押し、ステータスが緑の「Verified」になれば完了(反映まで数分〜数時間かかることがあります)
3. `.env.local` に以下を設定

   ```bash
   RESEND_API_KEY=re_xxxxxxxx
   RESEND_FROM="やりくり献立 <noreply@hosokawa-lab.dev>"
   CONTACT_TO_EMAIL=hosokawa.dev@gmail.com
   ```

   ドメイン認証が終わるまでの動作確認だけなら、`RESEND_FROM` を一時的に `やりくり献立 <onboarding@resend.dev>` に戻しても送れます(ただしResendアカウント登録メール宛にしか届きません)。

`RESEND_API_KEY` が未設定のときはAPIが500を返し、フォームにエラーメッセージが表示されます(クラッシュはしません)。

## デプロイ(Vercel)

1. このリポジトリをGitHubにpush
2. [vercel.com/new](https://vercel.com/new) でインポート
3. Project Settings → Environment Variables に `.env.example` と同じキーを設定(`RESEND_API_KEY` / `RESEND_FROM` / `CONTACT_TO_EMAIL`)
4. Deploy

## 構成

```
app/
  page.tsx           トップページ(LP)
  contact/page.tsx   お問い合わせページ
  privacy/page.tsx   プライバシーポリシー
  api/contact/route.ts  お問い合わせ送信API(Resend)
  icon.png           アプリアイコン(favicon / OGアイコンとして自動使用)
components/
  site-header.tsx    共通ヘッダー
  site-footer.tsx    共通フッター
  contact-form.tsx   お問い合わせフォーム(クライアントコンポーネント)
```

## 未確定の項目

- お問い合わせ受信先メールアドレス: 現在 `hosokawa.dev@gmail.com`(`.env` の `CONTACT_TO_EMAIL` で変更可)
- 運営者名: フッター/プライバシーポリシーに「Hosokawa Lab」と仮置き
- App Storeリンク: まだ未公開のため「近日公開」表示。公開後はボタンのリンク先を実際のApp Store URLに差し替えてください
