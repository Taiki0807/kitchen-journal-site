"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots tend to fill every field, humans never see this one.
    if (data.get("company")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "送信に失敗しました。");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-faded-gray bg-white p-8 text-center">
        <p className="text-[17px] font-extrabold text-charcoal">送信しました</p>
        <p className="mt-2 text-[15px] text-pencil-gray">
          お問い合わせありがとうございます。内容を確認のうえご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border-2 border-faded-gray bg-white p-8"
    >
      {/* Honeypot field, hidden from real users via CSS. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-[13px] font-bold text-charcoal">
          お名前
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="山田 太郎"
          className="w-full rounded-xl border-2 border-faded-gray bg-white px-4 py-3 text-[15px] text-charcoal outline-none focus:border-spark-blue"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[13px] font-bold text-charcoal">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border-2 border-faded-gray bg-white px-4 py-3 text-[15px] text-charcoal outline-none focus:border-spark-blue"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[13px] font-bold text-charcoal">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="不具合の内容やご要望をご記入ください"
          className="w-full rounded-xl border-2 border-faded-gray bg-white px-4 py-3 text-[15px] text-charcoal outline-none focus:border-spark-blue"
        />
      </div>

      {status === "error" && (
        <p className="text-[14px] text-[#ff4b4b]">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 self-start rounded-xl bg-eager-green px-7 py-3.5 text-[15px] font-extrabold tracking-[0.05em] text-white uppercase hover:bg-eager-green-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
