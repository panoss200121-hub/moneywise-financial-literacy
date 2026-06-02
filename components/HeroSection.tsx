"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeEuro,
  Banknote,
  BookOpenCheck,
  Building2,
  ChartNoAxesCombined,
  CreditCard,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Trophy,
  WalletCards
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

function Learner({
  className,
  hoodie,
  hair,
  skin
}: {
  className: string;
  hoodie: string;
  hair: string;
  skin: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className={`absolute left-1/2 top-0 h-20 w-24 -translate-x-1/2 rounded-t-[4rem] ${hair} shadow-soft`} />
      <div className={`absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full ${skin} shadow-soft`}>
        <span className="absolute left-6 top-9 h-3 w-3 rounded-full bg-ink" />
        <span className="absolute right-6 top-9 h-3 w-3 rounded-full bg-ink" />
        <span className="absolute left-1/2 top-14 h-2 w-7 -translate-x-1/2 rounded-full bg-coral/70" />
      </div>
      <div className={`absolute left-1/2 top-24 h-32 w-36 -translate-x-1/2 rounded-t-[3rem] ${hoodie} shadow-premium`}>
        <span className="absolute left-6 top-4 h-16 w-5 rounded-full bg-white/20 rotate-[-18deg]" />
        <span className="absolute right-6 top-4 h-16 w-5 rounded-full bg-white/20 rotate-[18deg]" />
      </div>
    </div>
  );
}

function ObjectTile({
  className,
  children,
  tone
}: {
  className: string;
  children: React.ReactNode;
  tone: string;
}) {
  return (
    <div className={`absolute grid place-items-center rounded-[1.4rem] shadow-premium ${tone} ${className}`}>
      {children}
    </div>
  );
}

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_22%,#e3fbf3_0,transparent_26%),radial-gradient(circle_at_78%_18%,#ece8ff_0,transparent_28%),linear-gradient(135deg,#ffffff_0%,#f6fbff_55%,#fff8e8_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cloud to-transparent" />
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-5 py-12 lg:min-h-[710px] lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-extrabold text-[#2777c9] shadow-soft backdrop-blur">
            <Sparkles className="h-4 w-4 text-sun" />
            {t.home.eyebrow}
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-normal text-ink sm:text-6xl lg:text-[4.4rem]">
            {t.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            {t.home.heroSubheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/learning-path" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-extrabold text-white shadow-premium transition hover:-translate-y-0.5">
              {t.common.startLearning}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/lesson" className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-7 py-4 text-base font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5">
              {t.common.exploreLessons}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[520px] lg:min-h-[610px]">
          <div className="absolute inset-x-[6%] bottom-10 h-32 rounded-[50%] bg-aqua/16 blur-3xl pulse-glow" />
          <div className="absolute left-[8%] right-[3%] top-9 h-[420px] rounded-[2.5rem] bg-gradient-to-br from-[#dff4ff] via-[#e8fff6] to-[#fff2cf] shadow-premium" />
          <div className="absolute left-[17%] right-[10%] top-28 h-36 rounded-[50%] bg-gradient-to-r from-mint/55 via-aqua/45 to-sun/55 blur-sm" />

          <Learner className="left-[19%] top-[145px] h-64 w-44 z-20" hoodie="bg-gradient-to-br from-[#715cff] to-[#415ee8]" hair="bg-gradient-to-br from-[#9a5a39] to-[#5f2e24]" skin="bg-gradient-to-br from-[#ffd2b8] to-[#ffad8e]" />
          <Learner className="right-[16%] top-[158px] h-64 w-44 z-20" hoodie="bg-gradient-to-br from-mint to-[#10a98a]" hair="bg-gradient-to-br from-[#6a3b2d] to-[#2f1f1b]" skin="bg-gradient-to-br from-[#f6bd92] to-[#dd8d62]" />

          <div className="absolute left-[32%] top-[295px] z-30 h-24 w-36 rotate-[-7deg] rounded-2xl bg-gradient-to-br from-white to-[#dff4ff] p-4 shadow-premium">
            <BookOpenCheck className="h-7 w-7 text-[#4361ee]" />
            <div className="mt-3 h-2 w-20 rounded-full bg-ink/15" />
            <div className="mt-2 h-2 w-14 rounded-full bg-mint" />
          </div>

          <div className="absolute bottom-[76px] right-[22%] z-30 grid h-36 w-40 place-items-center rounded-[4rem] bg-gradient-to-br from-[#ff9ea6] to-[#ff758f] text-white shadow-premium">
            <PiggyBank className="h-24 w-24" />
          </div>

          <ObjectTile className="left-[8%] top-[56px] h-24 w-32 rotate-[-10deg] float-soft" tone="bg-gradient-to-br from-[#725cff] to-[#4b7cff] text-white" >
            <CreditCard className="h-12 w-12" />
          </ObjectTile>
          <ObjectTile className="right-[25%] top-[48px] h-16 w-16 float-soft-delay" tone="bg-gradient-to-br from-sun to-[#ffad33] text-white">
            <BadgeEuro className="h-9 w-9" />
          </ObjectTile>
          <ObjectTile className="right-[3%] top-[126px] h-28 w-28 rotate-[8deg] float-soft" tone="bg-gradient-to-br from-white to-[#ddd5ff] text-grape">
            <Building2 className="h-14 w-14" />
          </ObjectTile>
          <ObjectTile className="right-[1%] top-[285px] h-28 w-28 float-soft-delay" tone="bg-gradient-to-br from-mint to-aqua text-white">
            <ChartNoAxesCombined className="h-14 w-14" />
          </ObjectTile>
          <ObjectTile className="left-[3%] top-[306px] h-24 w-24 rotate-[-8deg] float-soft-delay" tone="bg-gradient-to-br from-mint to-[#4fe0ba] text-white">
            <ShieldCheck className="h-12 w-12" />
          </ObjectTile>
          <ObjectTile className="right-[28%] bottom-[18px] h-20 w-20 rotate-[10deg] float-soft" tone="bg-gradient-to-br from-sun to-coral text-white">
            <Trophy className="h-10 w-10" />
          </ObjectTile>

          <div className="absolute bottom-[2px] left-[7%] right-[3%] z-40 rounded-[2rem] border border-white/80 bg-white/90 p-4 shadow-premium backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-4">
              <div>
                <p className="text-xs font-black text-ink/45">{t.home.heroStats.level}</p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-lg font-black text-white">4</span>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-ink/10">
                    <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-mint to-aqua" />
                  </div>
                </div>
                <p className="mt-2 text-xs font-bold text-ink/55">{t.home.heroStats.next}</p>
              </div>
              <div className="border-ink/10 sm:border-l sm:pl-4">
                <p className="text-xs font-black text-ink/45">{t.home.heroStats.progress}</p>
                <p className="mt-2 text-3xl font-black text-ink">72%</p>
              </div>
              <div className="border-ink/10 sm:border-l sm:pl-4">
                <p className="text-xs font-black text-ink/45">{t.home.heroStats.badge}</p>
                <p className="mt-3 flex items-center gap-2 font-black text-ink">
                  <Trophy className="h-5 w-5 text-sun" />
                  {t.home.heroStats.badgeName}
                </p>
              </div>
              <div className="border-ink/10 sm:border-l sm:pl-4">
                <p className="text-xs font-black text-ink/45">{t.home.spendGameTitle}</p>
                <div className="mt-3 flex gap-1">
                  {t.home.spendGameLabels.map((label) => (
                    <span key={label} className="rounded-xl bg-cloud px-2 py-1 text-[0.68rem] font-black text-ink">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[9%] bottom-[116px] z-40 hidden w-48 rounded-[1.5rem] border border-white/80 bg-white/88 p-4 shadow-premium backdrop-blur sm:block">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-black text-ink">{t.home.spendGameTitle}</p>
              <WalletCards className="h-5 w-5 text-grape" />
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-cloud p-3">
              <Banknote className="h-5 w-5 text-mint" />
              <span className="text-xs font-black text-ink">{t.home.spendGameLabels[2]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
