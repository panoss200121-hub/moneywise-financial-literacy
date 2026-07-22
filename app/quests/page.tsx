"use client";

import { CheckCircle2, Clock, Coins, Target } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { dailyQuests, weeklyMission } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

export default function QuestsPage() {
  const { lang } = useI18n();
  const { progress } = useProgress();

  return (
    <AppShell>
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff7dd] via-white to-[#e6fbf5] p-6 shadow-premium sm:p-8">
        <p className="font-black uppercase text-coral">{lang === "el" ? "Αποστολές" : "Quests"}</p>
        <h1 className="mt-3 text-4xl font-black text-ink sm:text-6xl">{lang === "el" ? "Μικροί στόχοι, καθαρή πρόοδος." : "Small goals, visible progress."}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/65">{lang === "el" ? "Οι αποστολές δίνουν κίνητρο χωρίς να σταματούν τη μάθηση." : "Quests motivate learning without blocking progress."}</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {dailyQuests.map((quest) => {
          const value = Math.min(quest.target, progress.questProgress[quest.id] ?? 0);
          const done = value >= quest.target;
          return (
            <article key={quest.id} className={`rounded-[1.5rem] border p-5 shadow-soft ${done ? "border-mint bg-mint/12" : "border-white bg-white"}`}>
              <div className="flex items-start justify-between gap-4">
                <Target className={`h-7 w-7 ${done ? "text-mint" : "text-grape"}`} />
                {done ? <CheckCircle2 className="h-6 w-6 text-mint" /> : <Clock className="h-6 w-6 text-ink/35" />}
              </div>
              <h2 className="mt-4 text-2xl font-black text-ink">{quest.title[lang]}</h2>
              <p className="mt-2 leading-7 text-ink/60">{quest.description[lang]}</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink/10">
                <div className="h-full rounded-full bg-gradient-to-r from-mint to-aqua" style={{ width: `${(value / quest.target) * 100}%` }} />
              </div>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-black text-ink/60">
                <Coins className="h-4 w-4 text-sun" />
                {value}/{quest.target} · +{quest.rewardXp} XP · +{quest.rewardCoins} WiseCoins
              </p>
            </article>
          );
        })}
      </section>

      <section className="mt-6 rounded-[2rem] bg-ink p-6 text-white shadow-premium">
        <p className="font-black uppercase text-mint">{lang === "el" ? "Εβδομαδιαία αποστολή" : "Weekly mission"}</p>
        <h2 className="mt-3 text-3xl font-black">{weeklyMission.title[lang]}</h2>
        <p className="mt-3 max-w-2xl leading-7 text-white/70">{weeklyMission.description[lang]}</p>
        <p className="mt-5 rounded-full bg-white/10 px-5 py-3 text-sm font-black w-fit">+{weeklyMission.rewardXp} XP · +{weeklyMission.rewardCoins} WiseCoins</p>
      </section>
    </AppShell>
  );
}
