"use client";

import { FormEvent, useState } from "react";
import NextLink from "next/link";
import type { Blog } from "@/types";

type Topic = "skills" | "work" | "writing" | "career";

const prompts: { label: string; topic: Topic }[] = [
  { label: "What does Rakshit build?", topic: "work" },
  { label: "Core skills", topic: "skills" },
  { label: "What does he write about?", topic: "writing" },
];

function detectTopic(question: string): Topic {
  const value = question.toLowerCase();
  if (/blog|write|article|learn/.test(value)) return "writing";
  if (/career|experience|journey|role|job/.test(value)) return "career";
  if (/skill|stack|tech|language|tool/.test(value)) return "skills";
  return "work";
}

export default function PortfolioAssistant({ blogs = [] }: { blogs?: Blog[] }) {
  const [question, setQuestion] = useState("");
  const [topic, setTopic] = useState<Topic | null>(null);

  const answer = topic === "skills"
    ? "Rakshit works across React, Next.js, TypeScript, APIs, cloud services, testing, and delivery automation."
    : topic === "writing"
      ? `He writes concise engineering notes about ${blogs.flatMap((blog) => blog.tags ?? []).slice(0, 4).join(", ") || "web development and cloud engineering"}.`
      : topic === "career"
        ? "His career spans frontend, backend, cloud infrastructure, testing, and product delivery. The complete timeline lives on the career page."
        : "He builds dependable full-stack web products, from polished interfaces to APIs, cloud workflows, and automation.";

  function ask(event: FormEvent) {
    event.preventDefault();
    if (question.trim()) setTopic(detectTopic(question));
  }

  return (
    <section className="px-4 py-10 md:px-8 md:py-14" aria-labelledby="portfolio-assistant-title">
      <div className="rounded-2xl border border-[#e7e3f6] bg-[#faf9ff] p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#6e57e0] text-sm text-white" aria-hidden="true">✦</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6e57e0]">Portfolio assistant</p>
            <h2 id="portfolio-assistant-title" className="mt-1 text-xl font-bold">Ask about my work</h2>
            <p className="mt-1 text-sm leading-6 text-[#666]">A private, lightweight guide built from this portfolio.</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {prompts.map((prompt) => (
            <button key={prompt.topic} type="button" onClick={() => { setQuestion(prompt.label); setTopic(prompt.topic); }} className="rounded-full border border-[#ddd7f3] bg-white px-3 py-1.5 text-xs font-semibold text-[#51448e] transition-colors hover:border-[#6e57e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e57e0]">
              {prompt.label}
            </button>
          ))}
        </div>

        <form onSubmit={ask} className="mt-4 flex gap-2">
          <label htmlFor="portfolio-question" className="sr-only">Ask a question about Rakshit’s portfolio</label>
          <input id="portfolio-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about skills, work, or writing…" className="min-w-0 flex-1 rounded-xl border border-[#ddd] bg-white px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-[#999] focus:border-[#6e57e0]" />
          <button type="submit" className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Ask</button>
        </form>

        {topic && (
          <div className="mt-4 border-l-2 border-[#6e57e0] pl-4" aria-live="polite">
            <p className="text-sm leading-6 text-[#444]">{answer}</p>
            {topic === "career" && <NextLink href="/career" className="mt-2 inline-block text-sm font-semibold text-[#6e57e0] hover:underline">Explore the career timeline →</NextLink>}
          </div>
        )}
      </div>
    </section>
  );
}
