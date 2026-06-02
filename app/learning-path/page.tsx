"use client";

import { LessonCard } from "@/components/LessonCard";
import { ProgressCard } from "@/components/ProgressCard";
import { lessonLevels } from "@/data/lessons";
import { useI18n } from "@/lib/i18n";

export default function LearningPathPage() {
  const { t } = useI18n();
  const levels = lessonLevels.map((lesson, index) => ({
    ...lesson,
    title: t.lessons[index][0],
    description: t.lessons[index][1],
    difficulty: t.lessons[index][2],
    badgeLabel: t.lessons[index][3]
  }));

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div>
          <p className="font-black uppercase tracking-normal text-mint">{t.learningPath.eyebrow}</p>
          <h1 className="mt-3 text-5xl font-black text-ink sm:text-6xl">{t.learningPath.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/65">{t.learningPath.body}</p>
        </div>
        <ProgressCard label={t.common.totalProgress} value="38%" progress={38} helper={t.learningPath.progressHelper} />
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {levels.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            labels={{
              locked: t.common.locked,
              unlocked: t.common.unlocked,
              openLesson: t.common.openLesson,
              previousLevel: t.common.previousLevel,
              level: t.common.level
            }}
          />
        ))}
      </div>
    </main>
  );
}
