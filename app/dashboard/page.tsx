"use client";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, Clock3, RefreshCcw, ShieldCheck, Target, Wrench } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { allLessons } from "@/data/curriculum";
import { audiencePaths } from "@/data/platform";
import { useAudience } from "@/lib/audience";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

export default function DashboardPage(){
  const {lang}=useI18n(); const {profile}=useAudience(); const {progress,mastery}=useProgress(); const el=lang==="el";
  const path=audiencePaths.find(x=>x.id===profile.path); const next=allLessons.find(x=>!progress.completedLessons.includes(x.id))??allLessons[0];
  const adult=profile.path==="18-29"||profile.path==="30-54"||profile.path==="55+";
  const reviewCount=progress.exerciseMistakes.length;
  return <AppShell showRightRail={false}>
    {!profile.onboarded&&<section className="mb-5 rounded-[1.4rem] border border-sun/50 bg-[#fff8df] p-5"><h1 className="text-xl font-black">{el?"Πρώτα, διάλεξε τη μαθησιακή σου διαδρομή.":"First, choose your learning path."}</h1><Link href="/onboarding" className="mt-4 inline-flex min-h-12 items-center rounded-xl bg-ink px-5 font-extrabold text-white">{el?"Ρύθμιση διαδρομής":"Set up path"}</Link></section>}
    <header className="flex flex-col justify-between gap-5 rounded-[1.6rem] border border-ink/10 bg-white p-6 sm:flex-row sm:items-center">
      <div><p className="text-sm font-extrabold text-mint">{path?`${el?"Διαδρομή":"Path"} · ${path.ages}`:(el?"Πίνακας μάθησης":"Learning home")}</p><h1 className="mt-2 text-3xl font-black tracking-[-.02em] sm:text-4xl">{path?path.title[lang]:(el?"Η μάθησή σου, οργανωμένη":"Your learning, organised")}</h1><p className="mt-2 text-ink/60">{el?`Στόχος συνεδρίας: ${profile.minutes} λεπτά`:`Session target: ${profile.minutes} minutes`}</p></div>
      <div className="flex items-center gap-4"><div className="relative grid h-24 w-24 place-items-center rounded-full" style={{background:`conic-gradient(#2a9d8f ${mastery*3.6}deg,#e9efef 0)`}}><span className="grid h-20 w-20 place-items-center rounded-full bg-white text-xl font-black">{mastery}%</span></div><div><p className="font-black">{el?"Συνολική πρόοδος":"Overall progress"}</p><p className="mt-1 text-sm text-ink/55">{progress.completedLessons.length}/{allLessons.length} {el?"μαθήματα":"lessons"}</p></div></div>
    </header>

    <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
      <div className="space-y-5">
        <section className="overflow-hidden rounded-[1.6rem] bg-ink text-white shadow-premium"><div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="text-sm font-extrabold text-mint">{el?"Συνέχισε από εδώ":"Continue here"}</p><h2 className="mt-2 text-3xl font-black">{path?.lesson[lang]??next.title[lang]}</h2><p className="mt-3 max-w-xl leading-7 text-white/68">{path?.activity[lang]??next.objective[lang]}</p><Link href={`/lesson/${path?.lessonId??next.id}`} className="mt-6 inline-flex min-h-13 items-center gap-2 rounded-xl bg-white px-6 font-extrabold text-ink">{el?"Συνέχισε τη μάθηση":"Continue learning"}<ArrowRight className="h-5 w-5"/></Link></div><BookOpenCheck className="hidden h-24 w-24 text-white/15 sm:block"/></div></section>

        <section className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-[1.5rem] border border-ink/10 bg-white p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff0cf]"><Wrench className="h-5 w-5"/></span><p className="text-sm font-extrabold text-ink/50">{el?"Πρακτική δραστηριότητα":"Practical activity"}</p></div><h2 className="mt-5 text-2xl font-black">{el?"Δούλεψε με ένα υποθετικό ποσό":"Work with a fictional amount"}</h2><p className="mt-3 leading-7 text-ink/60">{el?"Δοκίμασε τον προϋπολογισμό ή τον στόχο αποταμίευσης χωρίς πραγματικά στοιχεία.":"Try budgeting or a saving goal without real details."}</p><Link href="/tools" className="mt-5 inline-flex items-center gap-2 font-extrabold">{el?"Άνοιξε τα εργαλεία":"Open tools"}<ArrowRight className="h-4 w-4"/></Link></article>
          <article className="rounded-[1.5rem] border border-ink/10 bg-white p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf6f7]"><RefreshCcw className="h-5 w-5"/></span><p className="text-sm font-extrabold text-ink/50">{el?"Για επανάληψη":"For review"}</p></div><h2 className="mt-5 text-2xl font-black">{reviewCount?`${reviewCount} ${el?"έννοιες χρειάζονται επανάληψη":"concepts need review"}`:(el?"Δεν υπάρχουν εκκρεμότητες":"Nothing pending")}</h2><p className="mt-3 leading-7 text-ink/60">{el?"Η επανάληψη εξηγεί ξανά την έννοια χωρίς ποινή ή χρονική πίεση.":"Review explains the concept again without penalties or time pressure."}</p><Link href="/practice" className="mt-5 inline-flex items-center gap-2 font-extrabold">{el?"Έναρξη επανάληψης":"Start review"}<ArrowRight className="h-4 w-4"/></Link></article>
        </section>

        <section className="rounded-[1.5rem] border border-ink/10 bg-white p-6"><div className="flex items-center justify-between"><div><p className="text-sm font-extrabold text-grape">{el?"Επόμενα μαθήματα":"Next lessons"}</p><h2 className="mt-2 text-2xl font-black">{el?"Η προτεινόμενη σειρά σου":"Your recommended sequence"}</h2></div><Target className="h-8 w-8 text-grape"/></div><div className="mt-5 divide-y divide-ink/10">{allLessons.slice(0,4).map((lesson,i)=>{const done=progress.completedLessons.includes(lesson.id);return <Link key={lesson.id} href={`/lesson/${lesson.id}`} className="flex items-center gap-4 py-4"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${done?"bg-mint text-white":"bg-cloud text-ink"}`}>{done?<CheckCircle2 className="h-5 w-5"/>:i+1}</span><div className="min-w-0 flex-1"><p className="font-black">{lesson.title[lang]}</p><p className="mt-1 text-sm text-ink/50">{lesson.estimatedMinutes} min</p></div><ArrowRight className="h-4 w-4"/></Link>})}</div></section>
      </div>
      <aside className="space-y-4">
        <section className="rounded-[1.5rem] bg-[#edf7f8] p-5"><ShieldCheck className="h-6 w-6 text-mint"/><h2 className="mt-4 text-xl font-black">{el?"Ο στόχος σου":"Your goal"}</h2><p className="mt-2 text-sm leading-6 text-ink/60">{progress.savingsGoal.name}</p><div className="mt-4 h-3 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-mint" style={{width:`${Math.min(100,(progress.savingsGoal.initialAmount/progress.savingsGoal.cost)*100)}%`}}/></div><p className="mt-2 text-sm font-bold">{progress.savingsGoal.initialAmount} € / {progress.savingsGoal.cost} €</p></section>
        <section className="rounded-[1.5rem] border border-ink/10 bg-white p-5"><Clock3 className="h-6 w-6 text-coral"/><h2 className="mt-4 text-xl font-black">{el?"Αυτή την εβδομάδα":"This week"}</h2><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-cloud p-3"><p className="text-2xl font-black">{progress.streak}</p><p className="text-xs text-ink/55">{el?"ημέρες":"days"}</p></div><div className="rounded-xl bg-cloud p-3"><p className="text-2xl font-black">{progress.xp}</p><p className="text-xs text-ink/55">XP</p></div></div>{!adult&&<p className="mt-4 text-sm font-bold text-ink/55">{progress.achievements.length} {el?"επιτεύγματα":"achievements"} · {progress.wiseCoins} WiseCoins</p>}</section>
      </aside>
    </div>
  </AppShell>
}
