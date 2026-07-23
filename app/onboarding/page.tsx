"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AgePathCard, PageHeader, audiencePaths } from "@/components/PlatformCards";
import { learningGoals, type AudienceId } from "@/data/platform";
import { toAudienceId, useAudience } from "@/lib/audience";
import { useI18n } from "@/lib/i18n";

export default function OnboardingPage() {
  const { lang } = useI18n(); const { profile, saveProfile } = useAudience(); const router = useRouter();
  const [step, setStep] = useState(1); const [path, setPath] = useState<AudienceId | null>(toAudienceId(profile.path)); const [goals, setGoals] = useState<number[]>(profile.goals); const [minutes, setMinutes] = useState<5|10|15>(profile.minutes);
  const el = lang === "el";
  function finish() { if (!path) return; saveProfile({ path, goals, minutes, onboarded: true }); router.push("/dashboard"); }
  return <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8"><PageHeader eyebrow={`${el ? "Βήμα" : "Step"} ${step} / 3`} title={step === 1 ? (el ? "Ποια μαθησιακή διαδρομή σε ενδιαφέρει;" : "Which learning path interests you?") : step === 2 ? (el ? "Τι θέλεις περισσότερο να μάθεις;" : "What would you most like to learn?") : (el ? "Πόσο χρόνο θέλεις να αφιερώνεις;" : "How much time would you like to spend?")} body={el ? "Δεν ζητάμε ημερομηνία γέννησης ή προσωπικά οικονομικά στοιχεία. Μπορείς να αλλάξεις επιλογή αργότερα." : "We do not ask for a birth date or personal financial information. You can change your choice later."} />
    <div className="mt-6 h-2 overflow-hidden rounded-full bg-ink/10"><div className="h-full bg-mint transition-all" style={{width:`${step*33.333}%`}} /></div>
    {step === 1 && <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{audiencePaths.map(item => <AgePathCard key={item.id} path={item} selected={path === item.id} onSelect={() => setPath(item.id)} />)}</div>}
    {step === 2 && <div className="mt-8 grid gap-3 sm:grid-cols-2">{learningGoals.map((goal, i) => <button key={goal.el} onClick={() => setGoals(current => current.includes(i) ? current.filter(x => x !== i) : [...current, i])} aria-pressed={goals.includes(i)} className={`min-h-16 rounded-2xl border p-4 text-left font-black ${goals.includes(i) ? "border-ink bg-ink text-white" : "border-ink/10 bg-white"}`}>{goal[lang]}</button>)}</div>}
    {step === 3 && <div className="mt-8 grid gap-4 sm:grid-cols-3">{([5,10,15] as const).map(value => <button key={value} onClick={() => setMinutes(value)} className={`rounded-[1.75rem] border p-8 text-center ${minutes === value ? "border-ink bg-ink text-white" : "border-ink/10 bg-white"}`}><strong className="text-4xl">{value}</strong><span className="mt-2 block font-bold">{el ? "λεπτά ανά φορά" : "minutes per session"}</span></button>)}</div>}
    <div className="mt-8 flex justify-between gap-3"><button disabled={step === 1} onClick={() => setStep(s => Math.max(1,s-1))} className="rounded-full bg-white px-6 py-4 font-black disabled:opacity-30">{el ? "Πίσω" : "Back"}</button>{step < 3 ? <button disabled={(step === 1 && !path) || (step === 2 && goals.length === 0)} onClick={() => setStep(s => s+1)} className="rounded-full bg-ink px-7 py-4 font-black text-white disabled:opacity-30">{el ? "Συνέχεια" : "Continue"}</button> : <button onClick={finish} className="rounded-full bg-mint px-7 py-4 font-black text-white">{el ? "Δημιουργία διαδρομής" : "Create my path"}</button>}</div>
  </main>;
}
