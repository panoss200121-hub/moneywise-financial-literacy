"use client";

import Link from "next/link";
import { ArrowRight, BookOpenCheck, Brain, CheckCircle2, Gamepad2, GraduationCap, ShieldCheck, Sparkles, Trophy, UsersRound } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";
import { lessonLevels } from "@/data/lessons";
import { useI18n } from "@/lib/i18n";

const featureIcons = [BookOpenCheck, Gamepad2, Trophy, ShieldCheck, UsersRound];

function localizedLevels(lessonsText: readonly (readonly string[])[]) {
  return lessonLevels.map((lesson, index) => ({
    ...lesson,
    title: lessonsText[index][0],
    description: lessonsText[index][1],
    difficulty: lessonsText[index][2],
    badgeLabel: lessonsText[index][3]
  }));
}

export default function HomePage() {
  const { t } = useI18n();
  const levels = localizedLevels(t.lessons);

  return (
    <main>
      <HeroSection />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-black uppercase tracking-normal text-mint">{t.home.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black text-ink sm:text-5xl">{t.home.featuresTitle}</h2>
          </div>
          <Link href="/lesson" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 font-black text-ink shadow-soft">
            {t.common.exploreLessons}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {t.home.features.map((feature, index) => (
            <FeatureCard
              key={feature[0]}
              title={feature[0]}
              description={feature[1]}
              icon={featureIcons[index]}
              tone={index === 0 ? "bg-grape/15 text-grape" : index === 1 ? "bg-aqua/15 text-[#2777c9]" : index === 2 ? "bg-sun/25 text-ink" : index === 3 ? "bg-mint/15 text-mint" : "bg-coral/15 text-coral"}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-8">
        <div>
          <p className="font-black uppercase tracking-normal text-grape">{t.home.whyEyebrow}</p>
          <h2 className="mt-3 text-4xl font-black text-ink sm:text-5xl">{t.home.whyTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-ink/65">{t.home.whyBody}</p>
          <Link href="/parents-teachers" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white shadow-soft">
            {t.parents.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.home.whyCards.map((card, index) => (
            <article key={card[0]} className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft">
              <div className={`grid h-40 place-items-center bg-gradient-to-br ${index === 0 ? "from-[#ffd6cb] to-[#fff2e0]" : index === 1 ? "from-[#ffe0a3] to-[#fff7dd]" : index === 2 ? "from-[#bff4e5] to-[#dff4ff]" : "from-[#cfe5ff] to-[#e7e2ff]"}`}>
                {index === 0 ? <Brain className="h-20 w-20 text-ink/70" /> : index === 1 ? <Sparkles className="h-20 w-20 text-sun" /> : index === 2 ? <ShieldCheck className="h-20 w-20 text-mint" /> : <GraduationCap className="h-20 w-20 text-grape" />}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-ink">{card[0]}</h3>
                <p className="mt-2 leading-7 text-ink/60">{card[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-black uppercase tracking-normal text-mint">{t.nav.learningPath}</p>
              <h2 className="mt-3 text-4xl font-black text-ink sm:text-5xl">{t.home.levelsTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-ink/65">{t.home.levelsBody}</p>
            </div>
            <Link href="/learning-path" className="inline-flex w-fit rounded-full bg-ink px-6 py-4 font-black text-white shadow-soft">
              {t.nav.learningPath}
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {levels.slice(0, 8).map((level) => (
              <div key={level.id} className="rounded-[1.5rem] border border-ink/10 bg-cloud p-5">
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${level.accent} text-white`}>
                  <level.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-black text-ink/45">{t.common.level} {level.order}</p>
                <h3 className="mt-2 text-xl font-black text-ink">{level.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] bg-ink p-8 text-white shadow-premium">
          <p className="font-black uppercase tracking-normal text-mint">{t.nav.quiz}</p>
          <h2 className="mt-3 text-4xl font-black">{t.home.quizPreviewTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">{t.home.quizPreviewBody}</p>
          <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5">
            <p className="text-lg font-black">{t.home.quizPreviewQuestion}</p>
            <div className="mt-4 grid gap-3">
              {t.home.quizPreviewAnswers.map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-white p-4 font-black text-ink">
                  {item}
                  {index === 0 ? <CheckCircle2 className="h-5 w-5 text-mint" /> : <span className="h-5 w-5 rounded-full border border-ink/20" />}
                </div>
              ))}
            </div>
          </div>
          <Link href="/quiz" className="mt-8 inline-flex rounded-full bg-white px-6 py-4 font-black text-ink">
            {t.nav.quiz}
          </Link>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-[#eefaff] to-[#f4efff] p-8 shadow-premium">
          <p className="font-black uppercase tracking-normal text-grape">{t.nav.dashboard}</p>
          <h2 className="mt-3 text-4xl font-black text-ink">{t.home.dashboardPreviewTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-ink/65">{t.home.dashboardPreviewBody}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[["72%", t.common.totalProgress], ["4", t.common.badgesEarned], ["7", t.common.learningStreak]].map((stat) => (
              <div key={stat[1]} className="rounded-[1.5rem] bg-white p-5 shadow-soft">
                <p className="text-3xl font-black text-ink">{stat[0]}</p>
                <p className="mt-1 text-sm font-bold text-ink/55">{stat[1]}</p>
              </div>
            ))}
          </div>
          <Link href="/dashboard" className="mt-8 inline-flex rounded-full bg-ink px-6 py-4 font-black text-white">
            {t.common.viewDashboard}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-premium lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="grid h-44 w-44 place-items-center rounded-[2rem] bg-gradient-to-br from-mint to-aqua text-white shadow-premium">
            <UsersRound className="h-20 w-20" />
          </div>
          <div>
            <p className="font-black uppercase tracking-normal text-mint">{t.nav.parentsTeachers}</p>
            <h2 className="mt-3 text-4xl font-black text-ink sm:text-5xl">{t.home.parentsTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-ink/65">{t.home.parentsBody}</p>
            <Link href="/parents-teachers" className="mt-8 inline-flex rounded-full bg-ink px-6 py-4 font-black text-white">
              {t.nav.parentsTeachers}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] bg-gradient-to-br from-ink via-[#243a68] to-[#4b3fa8] p-10 text-center text-white shadow-premium">
          <h2 className="mx-auto max-w-3xl text-4xl font-black sm:text-5xl">{t.home.finalCtaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">{t.home.finalCtaBody}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/learning-path" className="rounded-full bg-white px-7 py-4 font-black text-ink">
              {t.common.startLearning}
            </Link>
            <Link href="/lesson" className="rounded-full border border-white/20 px-7 py-4 font-black text-white">
              {t.common.exploreLessons}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
