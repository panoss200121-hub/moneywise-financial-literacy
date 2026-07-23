"use client";

import Link from "next/link";
import { Banknote, CheckCircle2, Circle, Flame, Gamepad2, Lock, MapPinned, ShieldCheck, Sparkles, Star, Trophy } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { learningWorlds, type Lesson } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";
import { useAudience } from "@/lib/audience";
import { audiencePaths } from "@/data/platform";

const nodeIcons = {
  lesson: Circle,
  story: Sparkles,
  practice: Star,
  miniGame: Gamepad2,
  checkpoint: ShieldCheck
};

function lessonState(lesson: Lesson, completed: string[], currentLessonId: string, previousUnlocked: boolean) {
  if (completed.includes(lesson.id)) return "completed";
  if (lesson.id === currentLessonId) return "current";
  return previousUnlocked ? "unlocked" : "locked";
}

export default function DashboardPage() {
  const { lang } = useI18n();
  const { progress, level, mastery } = useProgress();
  const { profile } = useAudience();
  const selectedPath = audiencePaths.find((item) => item.id === profile.path);
  let unlockedSoFar = true;

  return (
    <AppShell>
      {!profile.onboarded ? <section className="mb-5 rounded-[1.5rem] bg-sun/30 p-5"><p className="font-black text-ink">{lang === "el" ? "Φτιάξε τη δική σου μαθησιακή διαδρομή σε 3 σύντομα βήματα." : "Create your learning path in 3 short steps."}</p><Link href="/onboarding" className="mt-3 inline-flex rounded-full bg-ink px-5 py-3 font-black text-white">{lang === "el" ? "Έναρξη" : "Start"}</Link></section> : null}
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#243a68] to-[#286f66] p-6 text-white shadow-premium sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-black uppercase text-mint">{selectedPath ? `${lang === "el" ? "Διαδρομή" : "Path"} ${selectedPath.ages}` : (lang === "el" ? "Η διαδρομή σου" : "Your path")}</p>
            <h1 className="mt-3 text-4xl font-black sm:text-6xl">{selectedPath ? selectedPath.title[lang] : (lang === "el" ? "Μάθε για τα χρήματα, απόφαση την απόφαση." : "Learn money, one decision at a time.")}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">
              {lang === "el" ? "Ολοκλήρωσε μικρά μαθήματα, δοκίμασε πρακτικά σενάρια και κράτησε την πρόοδό σου χωρίς πίεση." : "Complete short lessons, try practical scenarios and keep your progress without pressure."}
            </p>
          </div>
          <div className="grid min-w-64 gap-3 rounded-[1.5rem] bg-white/10 p-4">
            <div className="flex items-center justify-between">
              <span className="font-black text-white/70">{lang === "el" ? "Πρόοδος" : "Progress"}</span>
              <span className="text-3xl font-black">{mastery}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/15">
              <div className="h-full rounded-full bg-gradient-to-r from-mint to-sun" style={{ width: `${mastery}%` }} />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm font-black">
              <span className="rounded-2xl bg-white/10 p-2">Lv {level}</span>
              <span className="rounded-2xl bg-white/10 p-2">{progress.xp} XP</span>
              <span className="rounded-2xl bg-white/10 p-2">{progress.wiseCoins} WC</span>
            </div>
          </div>
        </div>
      </section>
      {selectedPath ? <section className="mt-5 rounded-[1.5rem] bg-white p-6 shadow-soft"><p className="text-sm font-black text-grape">{lang === "el" ? `Πρόταση ${profile.minutes} λεπτών` : `${profile.minutes}-minute recommendation`}</p><h2 className="mt-2 text-2xl font-black">{selectedPath.lesson[lang]}</h2><p className="mt-2 text-ink/65">{selectedPath.activity[lang]}</p><Link href={`/lesson/${selectedPath.lessonId}`} className="mt-4 inline-flex rounded-full bg-ink px-5 py-3 font-black text-white">{lang === "el" ? "Συνέχισε τη μάθηση" : "Continue learning"}</Link></section> : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <article className="rounded-[1.5rem] bg-white p-5 shadow-soft">
          <Flame className="h-6 w-6 text-coral" />
          <p className="mt-4 text-3xl font-black text-ink">{progress.streak}</p>
          <p className="text-sm font-bold text-ink/55">{lang === "el" ? "ημέρες σερί" : "day streak"}</p>
        </article>
        <article className="rounded-[1.5rem] bg-white p-5 shadow-soft">
          <Trophy className="h-6 w-6 text-sun" />
          <p className="mt-4 text-3xl font-black text-ink">{progress.achievements.length}</p>
          <p className="text-sm font-bold text-ink/55">{lang === "el" ? "ξεκλειδωμένα σήματα" : "badges unlocked"}</p>
        </article>
        <article className="rounded-[1.5rem] bg-white p-5 shadow-soft">
          <Banknote className="h-6 w-6 text-mint" />
          <p className="mt-4 text-3xl font-black text-ink">{progress.completedLessons.length}/{learningWorlds.flatMap((world) => world.units.flatMap((unit) => unit.lessons)).length}</p>
          <p className="text-sm font-bold text-ink/55">{lang === "el" ? "μαθήματα" : "lessons"}</p>
        </article>
      </div>

      <div className="mt-6 space-y-8">
        {learningWorlds.map((world) => {
          const worldLessons = world.units.flatMap((unit) => unit.lessons);
          const completedCount = worldLessons.filter((lesson) => progress.completedLessons.includes(lesson.id)).length;
          const percent = Math.round((completedCount / worldLessons.length) * 100);

          return (
            <section key={world.id} className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${world.theme} shadow-soft`}>
              <div className="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center sm:p-7">
                <div>
                  <p className="font-black uppercase text-ink/45">{lang === "el" ? `Κόσμος ${world.order}` : `World ${world.order}`}</p>
                  <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">{world.title[lang]}</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-ink/65">{world.objective[lang]}</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/85 p-5 shadow-soft">
                  <MapPinned className="h-8 w-8 text-mint" />
                  <p className="mt-3 text-3xl font-black text-ink">{percent}%</p>
                  <div className="mt-2 h-2 w-40 overflow-hidden rounded-full bg-ink/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-mint to-aqua" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              </div>

              <div className="relative px-6 pb-7 sm:px-8">
                <div className="absolute left-12 top-0 h-[calc(100%-2rem)] w-1 rounded-full bg-ink/10 sm:left-1/2 sm:-translate-x-1/2" />
                <div className="relative grid gap-5">
                  {worldLessons.map((lesson, lessonIndex) => {
                    const state = lessonState(lesson, progress.completedLessons, progress.currentLessonId, unlockedSoFar);
                    const previousWasUnlocked = state !== "locked";
                    unlockedSoFar = previousWasUnlocked && (state === "completed" || state === "current");
                    const Icon = nodeIcons[lesson.lessonType];
                    const offset = lessonIndex % 2 === 0 ? "sm:mr-[52%]" : "sm:ml-[52%]";
                    return (
                      <article key={lesson.id} className={`relative rounded-[1.5rem] bg-white p-5 shadow-soft ${offset}`}>
                        <div className={`absolute -left-2 top-6 grid h-12 w-12 place-items-center rounded-2xl border-4 border-white shadow-soft sm:left-auto ${lessonIndex % 2 === 0 ? "sm:-right-16" : "sm:-left-16"} ${state === "completed" ? "bg-mint text-white" : state === "current" ? "bg-ink text-white" : state === "unlocked" ? "bg-sun text-ink" : "bg-cloud text-ink/35"}`}>
                          {state === "completed" ? <CheckCircle2 className="h-6 w-6" /> : state === "locked" ? <Lock className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                        </div>
                        <div className="pl-12 sm:pl-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-cloud px-3 py-1 text-xs font-black text-ink/55">{lesson.lessonType}</span>
                            <span className="rounded-full bg-sun/25 px-3 py-1 text-xs font-black text-ink">+{lesson.xpReward} XP</span>
                          </div>
                          <h3 className="mt-3 text-2xl font-black text-ink">{lesson.title[lang]}</h3>
                          <p className="mt-2 leading-7 text-ink/62">{lesson.objective[lang]}</p>
                          <Link href={state === "locked" ? "#" : `/lesson/${lesson.id}`} aria-disabled={state === "locked"} className={`mt-4 inline-flex rounded-full px-5 py-3 text-sm font-black ${state === "locked" ? "pointer-events-none bg-cloud text-ink/35" : "bg-ink text-white"}`}>
                            {state === "completed" ? (lang === "el" ? "Επανάληψη" : "Review") : state === "current" ? (lang === "el" ? "Συνέχεια" : "Continue") : (lang === "el" ? "Άνοιγμα" : "Open")}
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </AppShell>
  );
}
