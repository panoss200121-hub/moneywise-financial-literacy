"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/data/quiz";

export function QuizCard({
  questions,
  labels
}: {
  questions: QuizQuestion[];
  labels: {
    question: string;
    of: string;
    score: string;
    correct: string;
    wrong: string;
    nextQuestion: string;
    seeResult: string;
    complete: string;
    result: (score: number, total: number) => string;
    tryAgain: string;
    viewDashboard: string;
  };
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentIndex];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = useMemo(() => Math.round(((currentIndex + (selectedAnswer ? 1 : 0)) / questions.length) * 100), [currentIndex, questions.length, selectedAnswer]);

  function chooseAnswer(answer: string) {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    if (answer === question.correctAnswer) {
      setScore((value) => value + 1);
    }
  }

  function nextQuestion() {
    if (currentIndex === questions.length - 1) {
      setIsFinished(true);
      return;
    }
    setCurrentIndex((value) => value + 1);
    setSelectedAnswer(null);
  }

  function restart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  }

  if (isFinished) {
    return (
      <section className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-premium">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-[1.75rem] bg-mint/15 text-mint">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="mt-6 text-center text-4xl font-black text-ink">{labels.complete}</h1>
        <p className="mt-3 text-center text-lg font-bold text-ink/60">
          {labels.result(score, questions.length)}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button onClick={restart} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-4 font-black text-ink">
            <RotateCcw className="h-5 w-5" />
            {labels.tryAgain}
          </button>
          <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 font-black text-white">
            {labels.viewDashboard}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-premium sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-cloud px-4 py-2 text-sm font-black text-ink/60">
          {labels.question} {currentIndex + 1} {labels.of} {questions.length}
        </span>
        <span className="rounded-full bg-sun/20 px-4 py-2 text-sm font-black text-ink">
          {labels.score} {score}
        </span>
      </div>
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-ink/10">
        <div className="h-full rounded-full bg-gradient-to-r from-mint to-aqua" style={{ width: `${progress}%` }} />
      </div>
      <h1 className="mt-8 text-3xl font-black text-ink sm:text-4xl">{question.question}</h1>
      <div className="mt-8 grid gap-3">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswer === answer;
          const answerIsCorrect = answer === question.correctAnswer;
          const stateClass = selectedAnswer
            ? answerIsCorrect
              ? "border-mint bg-mint/12 text-ink"
              : isSelected
                ? "border-coral bg-coral/12 text-ink"
                : "border-ink/10 bg-cloud text-ink/45"
            : "border-ink/10 bg-white text-ink hover:border-aqua hover:bg-aqua/8";

          return (
            <button key={answer} onClick={() => chooseAnswer(answer)} className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left font-extrabold transition ${stateClass}`}>
              <span>{answer}</span>
              {selectedAnswer && answerIsCorrect ? <CheckCircle2 className="h-5 w-5 text-mint" /> : null}
              {selectedAnswer && isSelected && !answerIsCorrect ? <XCircle className="h-5 w-5 text-coral" /> : null}
            </button>
          );
        })}
      </div>
      {selectedAnswer ? (
        <div className={`mt-6 rounded-2xl p-5 ${isCorrect ? "bg-mint/12" : "bg-coral/12"}`}>
          <p className="font-black text-ink">{isCorrect ? labels.correct : labels.wrong}</p>
          <p className="mt-2 leading-7 text-ink/65">{question.explanation}</p>
          <button onClick={nextQuestion} className="mt-5 rounded-full bg-ink px-6 py-3 font-black text-white">
            {currentIndex === questions.length - 1 ? labels.seeResult : labels.nextQuestion}
          </button>
        </div>
      ) : null}
    </section>
  );
}
