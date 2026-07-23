"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Circle, Clock3, Route } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { getPathwayById, pathways, type PathwayId } from "@/data/pathways";
import { useAudience } from "@/lib/audience";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

export default function LearningPathPage() {
  const { lang } = useI18n();
  const { profile, setPathway } = useAudience();
  const { progress } = useProgress();
  const el = lang === "el";
  const config = getPathwayById(profile.path);
  const accessible = config.mode === "accessible";
  return <AppShell showRightRail={false}><div className={`space-y-5 ${accessible ? "text-[1.06rem]" : ""}`}>
    <header className="rounded-[1.6rem] border border-ink/10 bg-white p-5 sm:p-7">
      <div className="flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e7f7f2]"><Route className="h-6 w-6 text-mint" /></span><div><p className="text-sm font-black text-mint">{el ? "Μαθησιακή διαδρομή" : "Learning pathway"} · {config.ages}</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">{config.title[lang]}</h1><p className="mt-3 max-w-3xl leading-7 text-ink/62">{config.subtitle[lang]}</p></div></div>
      <label className="mt-6 block max-w-md text-sm font-black" htmlFor="pathway-select">{el ? "Αλλαγή ηλικιακής διαδρομής" : "Change age pathway"}</label>
      <select id="pathway-select" value={config.id} onChange={(event) => setPathway(event.target.value as PathwayId)} className="mt-2 min-h-12 w-full max-w-md rounded-xl border border-ink/20 bg-white px-4 font-bold focus:outline-none focus:ring-4 focus:ring-mint/25">
        {pathways.map((pathway) => <option key={pathway.id} value={pathway.id}>{pathway.ages} · {pathway.title[lang]}</option>)}
      </select>
      <p className="mt-3 text-sm text-ink/55">{el ? "Η αλλαγή διαδρομής δεν διαγράφει την υπάρχουσα πρόοδό σου." : "Changing pathways does not delete your existing progress."}</p>
    </header>
    <section className={`grid gap-4 ${config.mode === "child" ? "md:grid-cols-3" : ""}`}>
      {config.modules.map((item, index) => {
        const done = progress.completedLessons.includes(item.lessonId);
        const current = !done && config.modules.slice(0, index).every((previous) => progress.completedLessons.includes(previous.lessonId));
        return <article key={item.lessonId} className={`rounded-[1.5rem] border bg-white p-5 ${current ? "border-mint shadow-soft" : "border-ink/10"} ${config.mode === "adult" || accessible ? "md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-5" : ""}`}>
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full font-black ${done ? "bg-mint text-white" : current ? "bg-[#fff4cf] text-ink" : "bg-cloud text-ink/60"}`}>{done ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-5 w-5" />}</span>
          <div className="mt-4 md:mt-0"><p className="text-xs font-black uppercase tracking-wide text-ink/45">{done ? (el ? "Ολοκληρώθηκε" : "Completed") : current ? (el ? "Συνέχισε εδώ" : "Continue here") : (el ? "Επόμενη ενότητα" : "Upcoming module")}</p><h2 className="mt-2 text-xl font-black sm:text-2xl">{item.title[lang]}</h2><p className="mt-2 leading-7 text-ink/60">{item.objective[lang]}</p><p className="mt-3 text-sm font-bold text-ink/55"><Clock3 className="mr-1 inline h-4 w-4" />{item.minutes} {el ? "λεπτά" : "minutes"} · {item.outcome[lang]}</p></div>
          <Link href={`/lesson/${item.lessonId}`} className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-xl bg-ink px-5 font-black text-white md:mt-0">{done ? (el ? "Επανάληψη" : "Review") : (el ? "Έναρξη" : "Start")}<ArrowRight className="h-4 w-4" /></Link>
        </article>;
      })}
    </section>
  </div></AppShell>;
}
