"use client";

import { QuizCard } from "@/components/QuizCard";
import { useI18n } from "@/lib/i18n";

export default function QuizPage() {
  const { t } = useI18n();

  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
      <section>
        <p className="font-black uppercase tracking-normal text-coral">{t.quiz.eyebrow}</p>
        <h1 className="mt-3 text-5xl font-black text-ink sm:text-6xl">{t.quiz.title}</h1>
        <p className="mt-5 text-lg leading-8 text-ink/65">{t.quiz.body}</p>
      </section>
      <QuizCard
        questions={t.quizQuestions}
        labels={{
          question: t.common.question,
          of: t.common.of,
          score: t.common.score,
          correct: t.common.correct,
          wrong: t.common.wrong,
          nextQuestion: t.common.nextQuestion,
          seeResult: t.common.seeResult,
          complete: t.quiz.complete,
          result: (score, total) => t.quiz.result.replace("{score}", String(score)).replace("{total}", String(total)),
          tryAgain: t.common.tryAgain,
          viewDashboard: t.common.viewDashboard
        }}
      />
    </main>
  );
}
