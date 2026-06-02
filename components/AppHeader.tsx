"use client";

import Link from "next/link";
import { BookOpen, ChevronDown, Check, Gauge, Languages, Rocket, Route, UsersRound } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/lib/i18n";
import type { Lang } from "@/lib/dictionary";

export function AppHeader() {
  const { lang, setLang, t } = useI18n();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const navItems = [
    { href: "/learning-path", label: t.nav.learningPath, icon: Route },
    { href: "/lesson", label: t.nav.lessons, icon: BookOpen },
    { href: "/quiz", label: t.nav.quiz, icon: Gauge },
    { href: "/dashboard", label: t.nav.dashboard, icon: Gauge },
    { href: "/parents-teachers", label: t.nav.parentsTeachers, icon: UsersRound }
  ];
  const languages: Array<{ value: Lang; label: string; flag: string }> = [
    { value: "el", label: "Ελληνικά", flag: "🇬🇷" },
    { value: "en", label: "English", flag: "🇬🇧" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Logo tagline={t.nav.tagline} />
        <nav className="hidden items-center gap-1 rounded-full bg-white p-1 shadow-soft lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-ink/70 transition hover:bg-cloud hover:text-ink">
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="group relative">
            <button onClick={() => setIsLanguageOpen((value) => !value)} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-extrabold text-ink shadow-soft" aria-label={t.nav.language} aria-expanded={isLanguageOpen}>
              <Languages className="h-4 w-4 text-[#4361ee]" />
              <span className="hidden sm:inline">{languages.find((item) => item.value === lang)?.label}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className={`absolute right-0 top-[calc(100%+10px)] w-52 rounded-3xl border border-ink/10 bg-white p-2 shadow-premium transition ${isLanguageOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"}`}>
              {languages.map((item) => (
                <button key={item.value} onClick={() => { setLang(item.value); setIsLanguageOpen(false); }} className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-extrabold text-ink transition hover:bg-cloud">
                  <span className="inline-flex items-center gap-3">
                    <span>{item.flag}</span>
                    {item.label}
                  </span>
                  {lang === item.value ? <Check className="h-4 w-4 text-[#4361ee]" /> : null}
                </button>
              ))}
            </div>
          </div>
          <Link href="/learning-path" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-premium">
            <Rocket className="h-4 w-4" />
            <span className="hidden sm:inline">{t.nav.start}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
