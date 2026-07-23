"use client";

import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, Clock3, RefreshCcw, ShieldCheck, Sparkles, Target, Wrench } from "lucide-react";
import { getPathwayById, type PathwayConfig, type PathwayModule } from "@/data/pathways";
import { attributionShort } from "@/data/platform";
import { useAudience } from "@/lib/audience";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

type Shared = { config: PathwayConfig; el: boolean };

function PathwayHeader({ config, el, percent, completed }: Shared & { percent: number; completed: number }) {
  return <header className="rounded-[1.6rem] border border-ink/10 bg-white p-5 sm:p-7">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-extrabold text-mint">{el ? "Η διαδρομή μου" : "My pathway"} · {config.ages}</p>
          <Link href="/learning-path" className="rounded-full bg-cloud px-3 py-1 text-xs font-black text-ink/65">{el ? "Αλλαγή" : "Change"}</Link>
        </div>
        <h1 className="mt-3 text-3xl font-black tracking-[-.025em] sm:text-4xl">{config.title[el ? "el" : "en"]}</h1>
        <p className="mt-3 max-w-2xl leading-7 text-ink/62">{config.subtitle[el ? "el" : "en"]}</p>
        <div className="mt-4 flex flex-wrap gap-2">{config.focus[el ? "el" : "en"].map((focus) => <span key={focus} className="rounded-full bg-[#edf7f8] px-3 py-2 text-sm font-bold text-ink/70">{focus}</span>)}</div>
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <div className="relative grid h-24 w-24 place-items-center rounded-full" style={{ background: `conic-gradient(#2a9d8f ${percent * 3.6}deg,#e9efef 0)` }}><span className="grid h-20 w-20 place-items-center rounded-full bg-white text-xl font-black">{percent}%</span></div>
        <div><p className="font-black">{el ? "Πρόοδος διαδρομής" : "Pathway progress"}</p><p className="mt-1 text-sm text-ink/55">{completed}/{config.modules.length} {el ? "ενότητες" : "modules"}</p></div>
      </div>
    </div>
  </header>;
}

function ContinueLearningCard({ module, el, mode }: { module: PathwayModule; el: boolean; mode: PathwayConfig["mode"] }) {
  return <section className={`overflow-hidden rounded-[1.6rem] text-white shadow-premium ${mode === "adult" || mode === "accessible" ? "bg-[#183f45]" : "bg-ink"}`}>
    <div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
      <div><p className="text-sm font-extrabold text-mint">{el ? "Συνέχισε από εδώ" : "Continue here"}</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">{module.title[el ? "el" : "en"]}</h2><p className="mt-3 max-w-xl leading-7 text-white/72">{module.objective[el ? "el" : "en"]}</p><Link href={`/lesson/${module.lessonId}`} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 font-extrabold text-ink">{el ? "Συνέχισε τη μάθηση" : "Continue learning"}<ArrowRight className="h-5 w-5" /></Link></div>
      <BookOpenCheck className="hidden h-24 w-24 text-white/15 sm:block" aria-hidden />
    </div>
  </section>;
}

function RecommendedLessonCard({ module, index, done, el }: { module: PathwayModule; index: number; done: boolean; el: boolean }) {
  return <Link href={`/lesson/${module.lessonId}`} className="flex min-h-20 items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-soft">
    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-black ${done ? "bg-mint text-white" : "bg-cloud text-ink"}`}>{done ? <CheckCircle2 className="h-5 w-5" /> : index + 1}</span>
    <span className="min-w-0 flex-1"><span className="block font-black">{module.title[el ? "el" : "en"]}</span><span className="mt-1 block text-sm text-ink/55">{module.minutes} {el ? "λεπτά" : "minutes"} · {module.outcome[el ? "el" : "en"]}</span></span><ArrowRight className="h-4 w-4 shrink-0" />
  </Link>;
}

function PracticalActivityCard({ config, el }: Shared) {
  return <article className="rounded-[1.5rem] border border-ink/10 bg-white p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff0cf]"><Wrench className="h-5 w-5" /></span><p className="text-sm font-extrabold text-ink/50">{el ? "Πρακτική δραστηριότητα" : "Practical activity"}</p></div><h2 className="mt-5 text-2xl font-black">{config.practical.title[el ? "el" : "en"]}</h2><p className="mt-3 leading-7 text-ink/60">{config.practical.description[el ? "el" : "en"]}</p><Link href="/tools" className="mt-5 inline-flex min-h-11 items-center gap-2 font-extrabold">{el ? "Άνοιξε τα εργαλεία" : "Open tools"}<ArrowRight className="h-4 w-4" /></Link></article>;
}

function ReviewTopicsCard({ count, el }: { count: number; el: boolean }) {
  return <article className="rounded-[1.5rem] border border-ink/10 bg-white p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf6f7]"><RefreshCcw className="h-5 w-5" /></span><p className="text-sm font-extrabold text-ink/50">{el ? "Θέματα για επανάληψη" : "Topics to review"}</p></div><h2 className="mt-5 text-2xl font-black">{count ? `${count} ${el ? "έννοιες χρειάζονται επανάληψη" : "concepts need review"}` : (el ? "Δεν υπάρχει εκκρεμότητα" : "Nothing pending")}</h2><p className="mt-3 leading-7 text-ink/60">{el ? "Επανέλαβε μια έννοια χωρίς ποινή ή χρονική πίεση." : "Review a concept without penalties or time pressure."}</p><Link href="/practice" className="mt-5 inline-flex min-h-11 items-center gap-2 font-extrabold">{el ? "Έναρξη επανάληψης" : "Start review"}<ArrowRight className="h-4 w-4" /></Link></article>;
}

function FinancialGoalCard({ el, adult, goal }: { el: boolean; adult: boolean; goal: { name: string; initialAmount: number; cost: number } }) {
  const isDemoChildGoal = goal.name.includes("Ποδηλα") || goal.name.includes("bike");
  return <section className="rounded-[1.5rem] bg-[#edf7f8] p-5"><ShieldCheck className="h-6 w-6 text-mint" /><h2 className="mt-4 text-xl font-black">{el ? "Ο οικονομικός στόχος σου" : "Your financial goal"}</h2><p className="mt-2 text-sm leading-6 text-ink/60">{adult && isDemoChildGoal ? (el ? "Δημιούργησε έναν προσωπικό στόχο με υποθετικά ποσά." : "Create a personal goal with fictional amounts.") : goal.name}</p>{!(adult && isDemoChildGoal) && <><div className="mt-4 h-3 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-mint" style={{ width: `${Math.min(100, (goal.initialAmount / goal.cost) * 100)}%` }} /></div><p className="mt-2 text-sm font-bold">{goal.initialAmount} € / {goal.cost} €</p></>}<Link href="/lesson/goal-calculator" className="mt-4 inline-flex min-h-11 items-center font-black">{el ? "Επεξεργασία στόχου" : "Edit goal"}</Link></section>;
}

function AchievementSummary({ el, adult, count, xp, coins }: { el: boolean; adult: boolean; count: number; xp: number; coins: number }) {
  return <section className="rounded-[1.5rem] border border-ink/10 bg-white p-5"><Sparkles className="h-6 w-6 text-coral" /><h2 className="mt-4 text-xl font-black">{adult ? (el ? "Σύνοψη μάθησης" : "Learning summary") : (el ? "Τα ορόσημά σου" : "Your milestones")}</h2><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-cloud p-3"><p className="text-2xl font-black">{count}</p><p className="text-xs text-ink/55">{el ? "ολοκληρώσεις" : "completed"}</p></div><div className="rounded-xl bg-cloud p-3"><p className="text-2xl font-black">{xp}</p><p className="text-xs text-ink/55">XP</p></div></div>{!adult && <p className="mt-4 text-sm font-bold text-ink/55">{coins} WiseCoins</p>}<Link href="/achievements" className="mt-4 inline-flex min-h-11 items-center font-black">{el ? "Δες την πρόοδο" : "View progress"}</Link></section>;
}

function EducationalSourceNote({ el }: { el: boolean }) {
  return <aside className="rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm leading-6 text-ink/62"><p className="font-black text-ink">{el ? "Εκπαιδευτική τεκμηρίωση" : "Educational foundation"}</p><p className="mt-1">{attributionShort[el ? "el" : "en"]}</p><Link href="/institute" className="mt-2 inline-flex font-black text-[#176f67]">{el ? "Πώς σχεδιάστηκε το περιεχόμενο" : "How the content was designed"}</Link></aside>;
}

export function AdaptiveDashboard() {
  const { lang } = useI18n();
  const { profile } = useAudience();
  const { progress } = useProgress();
  const el = lang === "el";
  const config = getPathwayById(profile.path);
  const completed = config.modules.filter((item) => progress.completedLessons.includes(item.lessonId)).length;
  const percent = Math.round((completed / config.modules.length) * 100);
  const next = config.modules.find((item) => !progress.completedLessons.includes(item.lessonId)) ?? config.modules[0];
  const adult = config.mode === "adult" || config.mode === "accessible";
  return <div className={`space-y-5 ${config.mode === "accessible" ? "text-[1.06rem]" : ""}`}>
    {!profile.onboarded && <section className="rounded-[1.4rem] border border-sun/50 bg-[#fff8df] p-5"><h2 className="text-xl font-black">{el ? "Διάλεξε τη μαθησιακή διαδρομή που σου ταιριάζει." : "Choose the learning pathway that fits you."}</h2><Link href="/learning-path" className="mt-4 inline-flex min-h-12 items-center rounded-xl bg-ink px-5 font-extrabold text-white">{el ? "Επιλογή διαδρομής" : "Choose pathway"}</Link></section>}
    <PathwayHeader config={config} el={el} percent={percent} completed={completed} />
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
      <div className="space-y-5">
        <ContinueLearningCard module={next} el={el} mode={config.mode} />
        <section><div className="mb-4 flex items-center justify-between"><div><p className="text-sm font-extrabold text-grape">{el ? "Προτεινόμενη συνέχεια" : "Recommended next"}</p><h2 className="mt-1 text-2xl font-black">{el ? "Η διαδρομή μάθησής σου" : "Your learning pathway"}</h2></div><Target className="h-7 w-7 text-grape" /></div><div className="grid gap-3">{config.modules.map((item, index) => <RecommendedLessonCard key={item.lessonId} module={item} index={index} done={progress.completedLessons.includes(item.lessonId)} el={el} />)}</div></section>
        <section className="grid gap-4 sm:grid-cols-2"><PracticalActivityCard config={config} el={el} /><ReviewTopicsCard count={progress.exerciseMistakes.length} el={el} /></section>
        {config.sourceNote && <EducationalSourceNote el={el} />}
      </div>
      <aside className="space-y-4"><FinancialGoalCard el={el} adult={adult} goal={progress.savingsGoal} /><AchievementSummary el={el} adult={adult} count={completed} xp={progress.xp} coins={progress.wiseCoins} /><section className="rounded-[1.5rem] bg-[#fff7dd] p-5"><Clock3 className="h-6 w-6 text-coral" /><h2 className="mt-4 text-xl font-black">{el ? "Ρυθμός συνεδρίας" : "Session pace"}</h2><p className="mt-2 text-sm leading-6 text-ink/60">{profile.minutes} {el ? "λεπτά ανά συνεδρία" : "minutes per session"}</p></section></aside>
    </div>
  </div>;
}
