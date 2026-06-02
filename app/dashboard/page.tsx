"use client";

import Link from "next/link";
import { BadgeCheck, BookOpenCheck, CalendarCheck2, Flame, PiggyBank, Star, Trophy } from "lucide-react";
import { BadgeCard } from "@/components/BadgeCard";
import { DashboardStat } from "@/components/DashboardStat";
import { ProgressCard } from "@/components/ProgressCard";
import { useI18n } from "@/lib/i18n";

const streak = [
  { done: true },
  { done: true },
  { done: true },
  { done: false },
  { done: true },
  { done: true },
  { done: false }
];

const badgeIcons = [PiggyBank, Trophy, Star, CalendarCheck2];

export default function DashboardPage() {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <section className="rounded-[2rem] bg-gradient-to-br from-ink to-[#29416f] p-8 text-white shadow-premium md:p-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-black text-white/55">{t.dashboard.eyebrow}</p>
            <h1 className="mt-2 text-5xl font-black">{t.dashboard.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">{t.dashboard.body}</p>
          </div>
          <Link href="/lesson" className="inline-flex w-fit rounded-full bg-white px-6 py-4 font-black text-ink">
            {t.common.continueLearning}
          </Link>
        </div>
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <ProgressCard label={t.common.totalProgress} value="38%" progress={38} helper={t.dashboard.totalProgressHelper} />
        <div className="grid gap-5 sm:grid-cols-3">
          <DashboardStat icon={BookOpenCheck} label={t.common.completedLessons} value="9" />
          <DashboardStat icon={BadgeCheck} label={t.common.badgesEarned} value="4" />
          <DashboardStat icon={Flame} label={t.common.learningStreak} value="5" />
        </div>
      </div>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-white p-7 shadow-soft">
          <h2 className="text-3xl font-black text-ink">{t.dashboard.badgesTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.dashboard.badges.map((badge, index) => (
              <BadgeCard key={badge[0]} icon={badgeIcons[index]} title={badge[0]} caption={badge[1]} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-7 shadow-soft">
          <h2 className="text-3xl font-black text-ink">{t.dashboard.weeklyStreak}</h2>
          <div className="mt-6 grid grid-cols-7 gap-2">
            {streak.map((item, index) => (
              <div key={t.dashboard.days[index]} className="text-center">
                <div className={`grid aspect-square place-items-center rounded-2xl font-black ${item.done ? "bg-mint text-white" : "bg-cloud text-ink/35"}`}>
                  {item.done ? "✓" : ""}
                </div>
                <p className="mt-2 text-xs font-black text-ink/50">{t.dashboard.days[index]}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] bg-cloud p-5">
            <p className="text-sm font-black text-ink/45">{t.dashboard.recommended}</p>
            <h3 className="mt-2 text-xl font-black text-ink">{t.dashboard.recommendedTitle}</h3>
            <p className="mt-2 leading-7 text-ink/60">{t.dashboard.recommendedBody}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
