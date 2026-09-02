import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "お問い合わせ | やりくり献立",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[640px] px-6 pb-32 pt-20 sm:pt-24">
      <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-charcoal sm:text-[48px]">
        お問い合わせ
      </h1>
      <p className="mt-5 text-[17px] leading-[1.5] text-pencil-gray">
        不具合のご報告、ご要望、その他お気づきの点がありましたら、下記フォームよりお気軽にご連絡ください。
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
