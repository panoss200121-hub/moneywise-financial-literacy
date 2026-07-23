"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { audiencePaths, attribution, attributionShort, curriculumPillars, type AudiencePath } from "@/data/platform";
import { axiaUrl, instituteUrl } from "@/data/institute";
import { useI18n } from "@/lib/i18n";

export function AgePathCard({ path, selected, onSelect }: { path: AudiencePath; selected?: boolean; onSelect?: () => void }) {
  const { lang } = useI18n();
  const content = <><span className="text-sm font-black text-ink/50">{lang === "el" ? "Ηλικίες" : "Ages"} {path.ages}</span><h3 className="mt-2 text-xl font-black text-ink">{path.title[lang]}</h3><p className="mt-3 leading-7 text-ink/65">{path.description[lang]}</p></>;
  return onSelect ? <button onClick={onSelect} aria-pressed={selected} className={`min-h-48 rounded-[1.6rem] border p-5 text-left transition ${selected ? "border-ink bg-white shadow-premium" : "border-ink/10 bg-white/80 hover:-translate-y-1 hover:shadow-soft"}`}>{content}</button> : <article className={`rounded-[1.6rem] bg-gradient-to-br ${path.tone} p-5`}>{content}</article>;
}

export function PillarGrid() {
  const { lang } = useI18n();
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{curriculumPillars.map(([Icon, title, body], i) => <article key={title.el} className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-soft"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white"><Icon className="h-5 w-5" /></span><p className="mt-4 text-xs font-black uppercase tracking-wider text-mint">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-1 text-xl font-black">{title[lang]}</h3><p className="mt-2 leading-7 text-ink/60">{body[lang]}</p></article>)}</div>;
}

export function EducationalFoundation({ compact = false }: { compact?: boolean }) {
  const { lang } = useI18n();
  return <aside className="rounded-[1.75rem] border border-mint/25 bg-gradient-to-br from-emerald-50 to-white p-6">
    <div className="flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint text-white"><ShieldCheck /></span><div><p className="font-black text-ink">{attributionShort[lang]}</p>{!compact && <p className="mt-3 leading-7 text-ink/65">{attribution[lang]}</p>}<div className="mt-4 flex flex-wrap gap-2"><a className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-black text-white" href={instituteUrl} target="_blank" rel="noreferrer">gfli.gr <ExternalLink className="h-4 w-4" /></a><a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-ink shadow-soft" href={axiaUrl} target="_blank" rel="noreferrer">@ξία <ExternalLink className="h-4 w-4" /></a></div></div></div>
  </aside>;
}

export function PageHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <header className="rounded-[2rem] bg-ink p-7 text-white shadow-premium sm:p-10"><p className="font-black uppercase tracking-wider text-mint">{eyebrow}</p><h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-6xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">{body}</p></header>;
}

export function PathLessonCard({ path }: { path: AudiencePath }) {
  const { lang } = useI18n();
  return <article className="rounded-[1.5rem] bg-white p-6 shadow-soft"><p className="text-sm font-black text-grape">{lang === "el" ? `Εισαγωγικό μάθημα · ${path.ages}` : `Introductory lesson · ${path.ages}`}</p><h3 className="mt-2 text-2xl font-black">{path.lesson[lang]}</h3><p className="mt-3 leading-7 text-ink/65">{path.activity[lang]}</p><Link href={`/lesson/${path.lessonId}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-black text-white">{lang === "el" ? "Έναρξη μαθήματος" : "Start lesson"}<ArrowRight className="h-4 w-4" /></Link></article>;
}

export { audiencePaths };
