"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, Flame, Lock, Sparkles, WalletCards } from "lucide-react";
import { appNavItems } from "@/components/AppHeader";
import { dailyQuests, weeklyMission } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

export function AppShell({ children, showRightRail = true }: { children: React.ReactNode; showRightRail?: boolean }) {
  const pathname = usePathname();
  const { lang } = useI18n();
  const { progress, level, dailyProgress } = useProgress();

  return (
    <main className="min-h-screen bg-cloud pb-24 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 lg:grid-cols-[220px_minmax(0,1fr)_280px] lg:px-8">
        <aside className="sticky top-24 hidden h-fit rounded-[1.75rem] border border-ink/10 bg-white p-3 shadow-soft lg:block">
          <nav className="grid gap-1" aria-label="Learning areas">
            {appNavItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black transition ${active ? "bg-ink text-white" : "text-ink/65 hover:bg-cloud hover:text-ink"}`}>
                  <item.icon className="h-4 w-4" />
                  {lang === "el" ? item.el : item.en}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#e6fbf5] to-[#fff7dd] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-ink">{lang === "el" ? "Επίπεδο" : "Level"} {level}</p>
              <Sparkles className="h-4 w-4 text-sun" />
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-gradient-to-r from-mint to-aqua" style={{ width: `${Math.min(100, progress.xp % 100)}%` }} />
            </div>
            <p className="mt-2 text-xs font-bold text-ink/55">{progress.xp % 100}/100 XP</p>
          </div>
        </aside>

        <section className="min-w-0">{children}</section>

        {showRightRail ? (
          <aside className="sticky top-24 hidden h-fit space-y-4 lg:block">
            <section className="rounded-[1.75rem] bg-ink p-5 text-white shadow-premium">
              <p className="text-sm font-black text-white/55">{lang === "el" ? "Σήμερα" : "Today"}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-3">
                  <Flame className="h-5 w-5 text-coral" />
                  <p className="mt-2 text-2xl font-black">{progress.streak}</p>
                  <p className="text-xs font-bold text-white/60">{lang === "el" ? "σερί" : "streak"}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <WalletCards className="h-5 w-5 text-sun" />
                  <p className="mt-2 text-2xl font-black">{progress.wiseCoins}</p>
                  <p className="text-xs font-bold text-white/60">WiseCoins</p>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full bg-gradient-to-r from-mint to-sun" style={{ width: `${dailyProgress}%` }} />
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
              <h2 className="text-xl font-black text-ink">{lang === "el" ? "Καθημερινές αποστολές" : "Daily quests"}</h2>
              <div className="mt-4 grid gap-3">
                {dailyQuests.slice(0, 3).map((quest) => {
                  const value = Math.min(quest.target, progress.questProgress[quest.id] ?? 0);
                  const done = value >= quest.target;
                  return (
                    <div key={quest.id} className="rounded-2xl bg-cloud p-3">
                      <div className="flex items-start gap-2">
                        {done ? <CheckCircle2 className="mt-0.5 h-4 w-4 text-mint" /> : <Lock className="mt-0.5 h-4 w-4 text-ink/35" />}
                        <div>
                          <p className="text-sm font-black text-ink">{quest.title[lang]}</p>
                          <p className="mt-1 text-xs font-bold text-ink/50">{value}/{quest.target} · +{quest.rewardCoins} WiseCoins</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[1.75rem] bg-gradient-to-br from-[#fff7dd] to-[#e8f8ff] p-5 shadow-soft">
              <p className="text-sm font-black uppercase text-ink/45">{lang === "el" ? "Εβδομαδιαία" : "Weekly"}</p>
              <h2 className="mt-2 text-xl font-black text-ink">{weeklyMission.title[lang]}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/60">{weeklyMission.description[lang]}</p>
            </section>
          </aside>
        ) : null}
      </div>

      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-6 rounded-[1.4rem] border border-ink/10 bg-white/95 p-1 shadow-premium backdrop-blur lg:hidden" aria-label="Mobile navigation">
        {appNavItems.slice(0, 6).map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={`grid min-h-12 place-items-center rounded-2xl ${active ? "bg-ink text-white" : "text-ink/55"}`}>
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{lang === "el" ? item.el : item.en}</span>
            </Link>
          );
        })}
      </nav>
    </main>
  );
}
