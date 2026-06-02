"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, MessageSquareText, NotebookPen } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function LessonPage() {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <div className="max-w-3xl">
        <p className="font-black uppercase tracking-normal text-grape">{t.lesson.eyebrow}</p>
        <h1 className="mt-3 text-5xl font-black text-ink sm:text-6xl">{t.lesson.title}</h1>
        <p className="mt-5 text-lg leading-8 text-ink/65">{t.lesson.intro}</p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] bg-white p-8 shadow-premium">
          <NotebookPen className="h-8 w-8 text-mint" />
          <h2 className="mt-5 text-3xl font-black text-ink">{t.lesson.storyTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-ink/68">{t.lesson.story}</p>
        </section>
        <section className="rounded-[2rem] bg-ink p-8 text-white shadow-premium">
          <Lightbulb className="h-8 w-8 text-sun" />
          <h2 className="mt-5 text-3xl font-black">{t.lesson.conceptTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-white/72">{t.lesson.concept}</p>
        </section>
      </div>

      <section className="mt-5 rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft">
        <h2 className="text-3xl font-black text-ink">{t.lesson.scenarioTitle}</h2>
        <p className="mt-4 text-lg leading-8 text-ink/65">{t.lesson.scenario}</p>
      </section>

      <section className="mt-5 rounded-[2rem] bg-gradient-to-br from-[#fff7dd] to-[#e9f9ff] p-8 shadow-soft">
        <MessageSquareText className="h-8 w-8 text-coral" />
        <h2 className="mt-4 text-3xl font-black text-ink">{t.lesson.decisionTitle}</h2>
        <p className="mt-3 text-lg font-bold text-ink/65">{t.lesson.decisionPrompt}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {t.lesson.options.map((option) => (
            <button key={option} className="rounded-2xl border border-ink/10 bg-white p-5 text-left font-extrabold leading-6 text-ink shadow-soft transition hover:-translate-y-0.5">
              {option}
            </button>
          ))}
        </div>
        <p className="mt-6 rounded-2xl bg-white/75 p-5 leading-7 text-ink/68">{t.lesson.bestChoice}</p>
      </section>

      <section className="mt-5 rounded-[2rem] bg-white p-8 shadow-soft">
        <h2 className="text-3xl font-black text-ink">{t.lesson.miniQuiz}</h2>
        <div className="mt-6 grid gap-3">
          {t.lesson.miniAnswers.map((answer, index) => (
            <div key={answer} className={`flex items-center gap-3 rounded-2xl p-5 font-extrabold ${index === 0 ? "bg-mint/12 text-ink" : "bg-cloud text-ink/55"}`}>
              {index === 0 ? <CheckCircle2 className="h-5 w-5 text-mint" /> : <span className="h-5 w-5 rounded-full border border-ink/20" />}
              {answer}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/quiz" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-black text-white shadow-soft">
          {t.common.takeQuiz}
          <ArrowRight className="h-5 w-5" />
        </Link>
        <Link href="/learning-path" className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-7 py-4 font-black text-ink">
          {t.common.nextLesson}
        </Link>
      </div>
    </main>
  );
}
