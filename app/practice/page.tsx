"use client";

import Link from "next/link";
import { ArrowRight, BookOpenCheck, Brain, Calculator, ReceiptText, ShieldCheck, ShoppingBasket } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { allLessons, practiceHubs } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

const icons = [Brain, BookOpenCheck, ReceiptText, Calculator, ShoppingBasket, ShieldCheck];

export default function PracticePage() {
  const { lang } = useI18n();
  const { progress } = useProgress();
  const weakExercises = allLessons.flatMap((lesson) => lesson.exercises.map((exercise) => ({ lesson, exercise }))).filter((item) => progress.exerciseMistakes.includes(item.exercise.id));
  const queue = weakExercises.length ? weakExercises : allLessons.flatMap((lesson) => lesson.exercises.map((exercise) => ({ lesson, exercise }))).slice(0, 5);

  return (
    <AppShell>
      <section className="rounded-[2rem] bg-white p-6 shadow-premium sm:p-8">
        <p className="font-black uppercase text-coral">{lang === "el" ? "Κέντρο πρακτικής" : "Practice hub"}</p>
        <h1 className="mt-3 text-4xl font-black text-ink sm:text-6xl">{lang === "el" ? "Δυνάμωσε ό,τι χρειάζεται επανάληψη." : "Strengthen what needs review."}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/65">
          {lang === "el" ? "Η ουρά επανάληψης χρησιμοποιεί τα λάθη που αποθηκεύονται τοπικά. Αν δεν υπάρχουν λάθη, εμφανίζει ενδεικτικές ασκήσεις." : "The review queue uses locally stored mistakes. If there are no mistakes yet, it shows sample practice."}
        </p>
      </section>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {practiceHubs.map((hub, index) => {
          const Icon = icons[index];
          const count = queue.filter((item) => hub.tag === "quick" || item.exercise.tags.includes(hub.tag) || (hub.tag === "review" && progress.exerciseMistakes.includes(item.exercise.id))).length;
          return (
            <article key={hub.id} className="rounded-[1.5rem] bg-white p-5 shadow-soft">
              <Icon className="h-7 w-7 text-mint" />
              <h2 className="mt-4 text-2xl font-black text-ink">{hub.title[lang]}</h2>
              <p className="mt-2 leading-7 text-ink/60">{count} {lang === "el" ? "διαθέσιμες δραστηριότητες" : "available activities"}</p>
              <Link href={`/lesson/${queue[0]?.lesson.id ?? allLessons[0].id}`} className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-black text-white">
                {lang === "el" ? "Έναρξη" : "Start"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>

      <section className="mt-6 rounded-[2rem] bg-gradient-to-br from-[#e6fbf5] to-[#fff7dd] p-6 shadow-soft">
        <h2 className="text-3xl font-black text-ink">{lang === "el" ? "Προσωπική ουρά επανάληψης" : "Personal review queue"}</h2>
        <div className="mt-5 grid gap-3">
          {queue.slice(0, 5).map(({ lesson, exercise }) => (
            <Link key={`${lesson.id}-${exercise.id}`} href={`/lesson/${lesson.id}`} className="rounded-2xl bg-white p-4 font-bold text-ink shadow-soft transition hover:-translate-y-0.5">
              <span className="block text-sm font-black text-ink/45">{lesson.title[lang]}</span>
              {exercise.prompt[lang]}
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
