"use client";

import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, Clock3, Compass, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { EducationalFoundation, audiencePaths } from "@/components/PlatformCards";
import { ClusterVisual, LifeStagesVisual, ToolPreviewVisual } from "@/components/MoneywiseVisuals";
import { curriculumPillars } from "@/data/platform";
import { useI18n } from "@/lib/i18n";

const clusters = [
  { type: "everyday" as const, title: { el: "Χρήμα και καθημερινές αποφάσεις", en: "Money and everyday decisions" }, indexes: [0,1,2,5] },
  { type: "planning" as const, title: { el: "Σχεδιασμός και οικονομική οργάνωση", en: "Planning and financial organisation" }, indexes: [3,4,6] },
  { type: "protection" as const, title: { el: "Προστασία και υπευθυνότητα", en: "Protection and responsibility" }, indexes: [7,9,10] },
  { type: "future" as const, title: { el: "Ανάπτυξη και μελλοντικός σχεδιασμός", en: "Growth and future planning" }, indexes: [8,11] }
];

export default function HomePage() {
  const { lang } = useI18n(); const el = lang === "el";
  return <main>
    <section className="bg-[#fbfcfa]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-extrabold text-mint">{el ? "Μάθηση για πραγματικές αποφάσεις" : "Learning for real decisions"}</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.06] tracking-[-.035em] text-ink sm:text-7xl">{el ? "Χρηματοοικονομική παιδεία για κάθε ηλικία." : "Financial literacy for every stage of life."}</h1>
          <p className="mt-6 max-w-2xl text-xl font-normal leading-9 text-ink/70">{el ? "Σύντομα μαθήματα, πρακτικά σενάρια και απλές εξηγήσεις που σε βοηθούν να οργανώνεις καλύτερα τις οικονομικές σου επιλογές." : "Short lessons, practical scenarios and plain explanations that help you organise financial choices."}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/onboarding" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-ink px-7 font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-premium">{el ? "Βρες τη διαδρομή σου" : "Find your path"}<ArrowRight className="h-5 w-5"/></Link><Link href="/curriculum" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-ink/15 bg-white px-7 font-extrabold text-ink">{el ? "Δες το πρόγραμμα" : "View programme"}</Link></div>
          <div className="mt-6 flex max-w-xl items-start gap-3 border-t border-ink/10 pt-5 text-sm leading-6 text-ink/60"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-mint"/><p>{el ? "Χωρίς λογαριασμό ή πραγματικά τραπεζικά στοιχεία. Η πρόοδός σου αποθηκεύεται μόνο σε αυτή τη συσκευή." : "No account or real banking details. Progress is stored only on this device."}</p></div>
        </div>
        <LifeStagesVisual/>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="max-w-3xl"><p className="text-sm font-extrabold text-grape">{el ? "Έξι διαδρομές, μία κοινή βάση" : "Six paths, one shared foundation"}</p><h2 className="mt-3 text-4xl font-black tracking-[-.025em] sm:text-5xl">{el ? "Μάθηση που εξελίσσεται μαζί σου" : "Learning that grows with you"}</h2><p className="mt-4 text-lg leading-8 text-ink/65">{el ? "Η ίδια οικονομική έννοια παρουσιάζεται με το κατάλληλο βάθος, παράδειγμα και οπτικό τόνο για κάθε στάδιο." : "The same concept uses the right depth, example and visual tone for every stage."}</p></div>
      <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {audiencePaths.map((path,index) => {
          const Icon=[PigIcon,Compass,SmartIcon,BriefIcon,HomeIcon,ShieldCheck][index];
          const topics = path.description[lang].split(",").slice(0,3);
          return <article key={path.id} className="group flex min-h-72 flex-col rounded-[1.5rem] border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-premium"><div className="flex items-center justify-between"><span className="rounded-full bg-cloud px-3 py-1 text-sm font-extrabold">{el ? "Ηλικίες" : "Ages"} {path.ages}</span><span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${path.tone}`}><Icon className="h-6 w-6"/></span></div><h3 className="mt-5 text-2xl font-black leading-8">{path.title[lang]}</h3><div className="mt-4 flex flex-wrap gap-2">{topics.map(topic=><span key={topic} className="rounded-full bg-cloud px-3 py-1 text-xs font-bold text-ink/60">{topic.trim()}</span>)}</div><Link href="/onboarding" className="mt-auto inline-flex items-center gap-2 pt-6 font-extrabold text-ink">{el ? "Επίλεξε διαδρομή" : "Choose path"}<ArrowRight className="h-4 w-4"/></Link></article>
        })}
      </div>
    </section>

    <section className="bg-white py-16"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="max-w-3xl"><p className="text-sm font-extrabold text-mint">{el ? "Ο οικονομικός κύκλος" : "The financial life cycle"}</p><h2 className="mt-3 text-4xl font-black tracking-[-.025em] sm:text-5xl">{el ? "Δώδεκα πυλώνες σε τέσσερις καθαρές ενότητες" : "Twelve pillars in four clear groups"}</h2></div>
      <div className="mt-9 grid gap-5 md:grid-cols-2">{clusters.map(cluster=><details key={cluster.type} className="group rounded-[1.6rem] border border-ink/10 bg-[#fbfcfa] p-5 open:shadow-soft"><summary className="cursor-pointer list-none"><ClusterVisual type={cluster.type}/><div className="mt-5 flex items-center justify-between gap-4"><h3 className="text-xl font-black">{cluster.title[lang]}</h3><span className="grid h-9 w-9 place-items-center rounded-full bg-white text-xl font-black group-open:rotate-45">+</span></div></summary><ul className="mt-5 grid gap-2 border-t border-ink/10 pt-4">{cluster.indexes.map(i=><li key={i} className="flex items-center gap-3 rounded-xl bg-white p-3"><CheckCircle2 className="h-5 w-5 text-mint"/><span className="font-bold">{curriculumPillars[i][1][lang]}</span></li>)}</ul></details>)}</div>
    </div></section>

    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><h2 className="text-4xl font-black tracking-[-.025em] sm:text-5xl">{el ? "Πώς λειτουργεί" : "How it works"}</h2><ol className="mt-9 grid gap-5 md:grid-cols-4">{[[Compass,"1",el?"Διάλεξε διαδρομή":"Choose your path"],[BookOpenCheck,"2",el?"Μάθε σε μικρά βήματα":"Learn in short steps"],[Sparkles,"3",el?"Εξασκήσου σε σενάρια":"Practise with scenarios"],[Clock3,"4",el?"Παρακολούθησε την πρόοδο":"Track your progress"]].map(([Icon,n,title])=><li key={String(n)} className="relative border-t-2 border-ink/12 pt-5"><span className="text-sm font-black text-mint">0{String(n)}</span><Icon className="mt-5 h-8 w-8 text-ink"/><h3 className="mt-4 text-xl font-black">{String(title)}</h3></li>)}</ol></section>

    <section className="bg-[#f3f7f7] py-16"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold text-coral">{el ? "Δοκίμασε πριν ξεκινήσεις" : "Try before you start"}</p><h2 className="mt-3 text-4xl font-black tracking-[-.025em] sm:text-5xl">{el ? "Πρακτική εμπειρία, όχι απλή θεωρία" : "Practical experience, not theory alone"}</h2></div><div className="mt-9 grid gap-5 lg:grid-cols-3">{[["budget",el?"Οργάνωσε έναν μήνα":"Organise a month",el?"Μοίρασε υποθετικό εισόδημα σε ανάγκες, στόχους και επιλογές.":"Allocate fictional income to needs, goals and choices."],["shopping",el?"Σύγκρινε έξυπνα":"Compare wisely",el?"Δες την τιμή, την ποσότητα και τη χρησιμότητα πριν επιλέξεις.":"Check price, quantity and usefulness before choosing."],["scam",el?"Σταμάτα την απάτη":"Stop the scam",el?"Αναγνώρισε πίεση, ύποπτους συνδέσμους και αιτήματα για κωδικούς.":"Spot urgency, suspicious links and password requests."]].map(([type,title,body])=><article key={type} className="rounded-[1.6rem] bg-white p-5 shadow-soft"><ToolPreviewVisual type={type as "budget"|"shopping"|"scam"}/><h3 className="mt-5 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-ink/65">{body}</p><Link href="/tools" className="mt-5 inline-flex items-center gap-2 font-extrabold">{el?"Άνοιξε το εργαλείο":"Open tool"}<ArrowRight className="h-4 w-4"/></Link></article>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><EducationalFoundation/></section>
    <section className="px-5 pb-20 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2rem] bg-ink px-7 py-12 text-center text-white sm:px-12"><h2 className="mx-auto max-w-3xl text-4xl font-black tracking-[-.025em] sm:text-5xl">{el?"Ξεκίνα από αυτό που χρειάζεσαι σήμερα.":"Start with what you need today."}</h2><Link href="/onboarding" className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-xl bg-white px-7 font-extrabold text-ink">{el?"Βρες τη διαδρομή σου":"Find your path"}<ArrowRight className="h-5 w-5"/></Link></div></section>
  </main>;
}

function PigIcon(props:{className?:string}){return <span className={props.className}>€</span>}
function SmartIcon(props:{className?:string}){return <span className={props.className}>↗</span>}
function BriefIcon(props:{className?:string}){return <span className={props.className}>✓</span>}
function HomeIcon(props:{className?:string}){return <span className={props.className}>⌂</span>}
