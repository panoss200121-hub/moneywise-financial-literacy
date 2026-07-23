"use client";

import Link from "next/link";
import { Award, BookOpen, Check, ChevronDown, Flame, Gauge, Languages, Library, Medal, Route, Settings, Target, UsersRound, WalletCards, Wrench } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";
import type { Lang } from "@/lib/dictionary";
import { PublicHeader } from "@/components/PublicHeader";
import { useAudience } from "@/lib/audience";
import { getLocalizedText, getPathwayById } from "@/data/pathways";

export const appNavItems = [
  { href: "/dashboard", key: "learn", el: "Μάθηση", en: "Learning", icon: Route },
  { href: "/learning-path", key: "path", el: "Διαδρομή", en: "Pathway", icon: BookOpen },
  { href: "/practice", key: "practice", el: "Πρακτική", en: "Practice", icon: Target },
  { href: "/tools", key: "tools", el: "Εργαλεία", en: "Tools", icon: Wrench },
  { href: "/achievements", key: "achievements", el: "Πρόοδος", en: "Progress", icon: Medal },
  { href: "/glossary", key: "glossary", el: "Λεξικό", en: "Glossary", icon: Library },
  { href: "/families", key: "parents", el: "Οικογένειες", en: "Families", icon: UsersRound }
];

export function AppHeader() {
  const pathname = usePathname();
  const { lang, setLang, t } = useI18n();
  const { progress, level, dailyProgress, resetProgress } = useProgress();
  const { profile } = useAudience();
  const pathway = getPathwayById(profile.path);
  const adultMode = pathway.mode === "adult" || pathway.mode === "accessible";
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const languages: Array<{ value: Lang; label: string }> = [
    { value: "el", label: "Ελληνικά" },
    { value: "en", label: "English" }
  ];
  const lessonMode = pathname.startsWith("/lesson/");
  const publicMode = ["/", "/onboarding", "/curriculum", "/tools", "/families", "/educators", "/adults", "/methodology", "/institute", "/about", "/faq", "/glossary"].some((route) => pathname === route);
  if (lessonMode) return null;
  if (publicMode) return <PublicHeader />;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/92 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-8">
        <Logo tagline={t.nav.tagline} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {(publicMode ? [
            { href: "/onboarding", el: "Διαδρομές", en: "Learning paths", icon: Route },
            { href: "/curriculum", el: "Πρόγραμμα", en: "Programme", icon: BookOpen },
            { href: "/tools", el: "Εργαλεία", en: "Tools", icon: Wrench },
            { href: "/families", el: "Οικογένειες", en: "Families", icon: UsersRound },
            { href: "/educators", el: "Εκπαιδευτικοί", en: "Educators", icon: Library },
            { href: "/institute", el: "Εκπαιδευτική βάση", en: "Foundation", icon: Award }
          ] : appNavItems).map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-bold text-ink/70 transition hover:bg-white hover:text-ink">
              {lang === "el" ? item.el : item.en}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {!publicMode && !adultMode && <div className="hidden items-center gap-2 rounded-full bg-[#fff7dd] px-3 py-2 text-sm font-black text-ink sm:flex">
            <Flame className="h-4 w-4 text-coral" />
            {progress.streak}
          </div>}
          {!publicMode && <div className="hidden items-center gap-2 rounded-full bg-mint/12 px-3 py-2 text-sm font-black text-ink md:flex">
            <Award className="h-4 w-4 text-mint" />
            {progress.xp} XP
          </div>}
          {!publicMode && !adultMode && <div className="hidden items-center gap-2 rounded-full bg-sun/25 px-3 py-2 text-sm font-black text-ink md:flex">
            <WalletCards className="h-4 w-4 text-[#9c6b00]" />
            {progress.wiseCoins}
          </div>}
          {!publicMode && <div className="hidden items-center gap-2 rounded-full bg-grape/12 px-3 py-2 text-sm font-black text-ink xl:flex">
            <Gauge className="h-4 w-4 text-grape" />
            {adultMode ? `${pathway.ages} · ${progress.completedLessons.length} ${lang === "el" ? "ενότητες" : "modules"}` : `${lang === "el" ? "Επίπεδο" : "Level"} ${level} · ${dailyProgress}%`}
          </div>}
          <div className="relative">
            <button onClick={() => setIsLanguageOpen((value) => !value)} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-3 text-sm font-extrabold text-ink shadow-soft" aria-label={t.nav.language} aria-expanded={isLanguageOpen}>
              <Languages className="h-4 w-4 text-[#2777c9]" />
              <span className="hidden sm:inline">{languages.find((item) => item.value === lang)?.label}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className={`absolute right-0 top-[calc(100%+10px)] w-48 rounded-3xl border border-ink/10 bg-white p-2 shadow-premium transition ${isLanguageOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"}`}>
              {languages.map((item) => (
                <button key={item.value} onClick={() => { setLang(item.value); setIsLanguageOpen(false); }} className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-extrabold text-ink transition hover:bg-cloud">
                  {item.label}
                  {lang === item.value ? <Check className="h-4 w-4 text-mint" /> : null}
                </button>
              ))}
            </div>
          </div>
          {!publicMode && <div className="relative">
            <button onClick={() => setIsSettingsOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-soft" aria-label={lang === "el" ? "Ρυθμίσεις" : "Settings"} aria-expanded={isSettingsOpen}>
              <Settings className="h-4 w-4" />
            </button>
            <div className={`absolute right-0 top-[calc(100%+10px)] w-64 rounded-3xl border border-ink/10 bg-white p-3 shadow-premium transition ${isSettingsOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"}`}>
              <p className="px-3 py-2 text-sm font-black text-ink">{lang === "el" ? "Ρυθμίσεις μάθησης" : "Learning settings"}</p>
              <p className="px-3 pb-3 text-xs font-bold text-ink/55">{pathway.ages} · {getLocalizedText(pathway.title, lang)}</p>
              <button onClick={() => { resetProgress(); setIsSettingsOpen(false); }} className="w-full rounded-2xl bg-coral/12 px-4 py-3 text-left text-sm font-black text-ink hover:bg-coral/18">
                {lang === "el" ? "Επαναφορά προόδου" : "Reset progress"}
              </button>
              <Link href="/learning-path" onClick={() => setIsSettingsOpen(false)} className="mt-2 block w-full rounded-2xl bg-cloud px-4 py-3 text-sm font-black text-ink">
                {lang === "el" ? "Αλλαγή μαθησιακής διαδρομής" : "Change learning path"}
              </Link>
            </div>
          </div>}
          <Link href={`/lesson/${progress.currentLessonId}`} className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-premium sm:inline-flex">
            <BookOpen className="h-4 w-4" />
            {publicMode ? (lang === "el" ? "Έναρξη μάθησης" : "Start learning") : t.nav.start}
          </Link>
        </div>
      </div>
    </header>
  );
}
