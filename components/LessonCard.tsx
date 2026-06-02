import Link from "next/link";
import { Lock, Timer, Unlock } from "lucide-react";
import type { LessonLevel } from "@/data/lessons";

type DisplayLesson = Omit<LessonLevel, "difficulty" | "badgeLabel" | "title" | "description"> & {
  title: string;
  description: string;
  difficulty: string;
  badgeLabel: string;
};

export function LessonCard({
  lesson,
  labels
}: {
  lesson: DisplayLesson;
  labels: { locked: string; unlocked: string; openLesson: string; previousLevel: string; level: string };
}) {
  const Icon = lesson.icon;

  return (
    <article className="group rounded-[1.85rem] border border-white/80 bg-gradient-to-br from-white to-cloud/70 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="flex items-start justify-between gap-4">
        <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${lesson.accent} text-white shadow-soft`}>
          <Icon className="h-7 w-7" />
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-black ${lesson.locked ? "bg-ink/8 text-ink/50" : "bg-mint/15 text-ink"}`}>
          {lesson.locked ? <Lock className="h-3.5 w-3.5" /> : <Unlock className="h-3.5 w-3.5" />}
          {lesson.locked ? labels.locked : labels.unlocked}
        </span>
      </div>
      <p className="mt-6 text-sm font-black uppercase tracking-normal text-ink/40">{labels.level} {lesson.order}</p>
      <h3 className="mt-2 text-2xl font-black text-ink">{lesson.title}</h3>
      <p className="mt-3 min-h-20 leading-7 text-ink/65">{lesson.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold text-ink/55">
        <span>{lesson.difficulty}</span>
        <span className="inline-flex items-center gap-1">
          <Timer className="h-4 w-4" />
          {lesson.estimatedTime}
        </span>
      </div>
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs font-black text-ink/50">
          <span>{lesson.badgeLabel}</span>
          <span>{lesson.progress}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-ink/10">
          <div className={`h-full rounded-full bg-gradient-to-r ${lesson.accent}`} style={{ width: `${lesson.progress}%` }} />
        </div>
      </div>
      <Link href="/lesson" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-black ${lesson.locked ? "bg-cloud text-ink/40" : "bg-ink text-white"}`}>
        {lesson.locked ? labels.previousLevel : labels.openLesson}
      </Link>
    </article>
  );
}
