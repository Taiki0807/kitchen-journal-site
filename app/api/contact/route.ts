import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hosokawa.dev@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM ?? "やりくり献立 <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const resend = getResendClient();
  if (!resend) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "現在お問い合わせを受け付けられません。しばらくしてから再度お試しください。" },
      { status: 500 }
    );
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "すべての項目を入力してください。" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "メールアドレスの形式が正しくありません。" }, { status: 400 });
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "入力内容が長すぎます。" }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[やりくり献立] ${name} 様からのお問い合わせ`,
      text: `お名前: ${name}\nメールアドレス: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        { error: "送信に失敗しました。時間をおいて再度お試しください。" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Failed to send contact email", err);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
