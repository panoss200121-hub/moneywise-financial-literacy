"use client";

import { Award, Flame, HeartHandshake, Lock, Medal, PiggyBank, ShieldCheck, ShoppingBasket, Sparkles, Star, WalletCards } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { achievements } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

const iconMap = {
  spark: Sparkles,
  basket: ShoppingBasket,
  piggy: PiggyBank,
  ledger: WalletCards,
  bank: Award,
  shield: ShieldCheck,
  flame: Flame,
  star: Star,
  heart: HeartHandshake
};

export default function AchievementsPage() {
  const { lang } = useI18n();
  const { progress } = useProgress();

  return (
    <AppShell>
      <section className="rounded-[2rem] bg-white p-6 shadow-premium sm:p-8">
        <p className="font-black uppercase text-sun">{lang === "el" ? "Σήματα" : "Achievements"}</p>
        <h1 className="mt-3 text-4xl font-black text-ink sm:text-6xl">{lang === "el" ? "Γιόρτασε κάθε σοφό βήμα." : "Celebrate every wise step."}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/65">{lang === "el" ? "Τα κλειδωμένα σήματα δείχνουν τι μπορείς να κυνηγήσεις στη συνέχεια." : "Locked badges show what you can chase next."}</p>
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {achievements.map((achievement) => {
          const unlocked = progress.achievements.includes(achievement.id);
          const Icon = iconMap[achievement.icon as keyof typeof iconMap] ?? Medal;
          return (
            <article key={achievement.id} className={`rounded-[1.5rem] border p-5 shadow-soft ${unlocked ? "border-sun/40 bg-gradient-to-br from-white to-[#fff7dd]" : "border-ink/10 bg-white opacity-70"}`}>
              <div className={`grid h-16 w-16 place-items-center rounded-[1.25rem] shadow-soft ${unlocked ? "bg-gradient-to-br from-sun to-coral text-white" : "bg-cloud text-ink/35"}`}>
                {unlocked ? <Icon className="h-8 w-8" /> : <Lock className="h-7 w-7" />}
              </div>
              <h2 className="mt-4 text-2xl font-black text-ink">{achievement.title[lang]}</h2>
              <p className="mt-2 leading-7 text-ink/60">{unlocked ? achievement.description[lang] : achievement.unlockHint[lang]}</p>
              <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-black ${unlocked ? "bg-mint/15 text-ink" : "bg-cloud text-ink/45"}`}>
                {unlocked ? (lang === "el" ? "Ξεκλειδώθηκε" : "Unlocked") : (lang === "el" ? "Κλειδωμένο" : "Locked")}
              </span>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
