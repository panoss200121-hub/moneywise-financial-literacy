"use client";

import Link from "next/link";
import { Clock, Coins, ListChecks } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { LessonEngine } from "@/components/LessonEngine";
import { getLessonById } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";

export default function LessonRunPage({ params }: { params: { lessonId: string } }) {
  const { lang } = useI18n();
  const lesson = getLessonById(params.lessonId);

  return (
    <AppShell showRightRail={false}>
      <Link href="/dashboard" className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-ink shadow-soft">
        {lang === "el" ? "Πίσω στη διαδρομή" : "Back to path"}
      </Link>
      <section className="mb-5 rounded-[2rem] bg-gradient-to-br from-ink to-[#286f66] p-6 text-white shadow-premium sm:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase text-mint">{lang === "el" ? "Μάθημα Moneywise" : "Moneywise lesson"}</p>
            <h1 className="mt-3 text-4xl font-black sm:text-6xl">{lesson.title[lang]}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/72">{lesson.objective[lang]}</p>
          </div>
          <div className="grid min-w-56 gap-2 text-sm font-black">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><Clock className="h-4 w-4" /> {lesson.estimatedMinutes} min</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><ListChecks className="h-4 w-4" /> {lesson.exercises.length} {lang === "el" ? "ασκήσεις" : "exercises"}</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><Coins className="h-4 w-4" /> +{lesson.xpReward} XP</span>
          </div>
        </div>
      </section>
      <LessonEngine lesson={lesson} />
    </AppShell>
  );
}
