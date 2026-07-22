"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Coins, RotateCcw, ShieldAlert, Sparkles, XCircle } from "lucide-react";
import type { Exercise, Lesson } from "@/data/curriculum";
import { allLessons } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

type AnswerState = {
  selected: string[];
  numberValue: string;
};

function isExerciseCorrect(exercise: Exercise, selected: string[], numberValue: string) {
  if (["numericInput", "receiptAnalysis", "savingsGoal", "compoundInterest"].includes(exercise.type)) {
    const answer = Number(numberValue);
    return typeof exercise.correctNumber === "number" && Math.abs(answer - exercise.correctNumber) <= (exercise.type === "compoundInterest" ? 1 : 0);
  }
  if (exercise.type === "orderTimeline" && exercise.correctOrder) {
    return selected.join("|") === exercise.correctOrder.join("|");
  }
  if (exercise.type === "shoppingBasket" || exercise.type === "budgetAllocation") {
    const total = exercise.options?.filter((item) => selected.includes(item.id)).reduce((sum, item) => sum + (item.value ?? 0), 0) ?? 0;
    const hasRequired = exercise.options?.filter((item) => item.correct).every((item) => selected.includes(item.id)) ?? false;
    return total <= (exercise.budget ?? Number.POSITIVE_INFINITY) && hasRequired;
  }
  if (exercise.type === "matchPairs" || exercise.type === "sortItems") {
    return exercise.options?.every((item) => item.correct && selected.includes(item.id)) ?? false;
  }
  if (exercise.type === "flashcard") return selected.includes("flipped");
  const correctIds = exercise.options?.filter((item) => item.correct).map((item) => item.id).sort() ?? [];
  return selected.slice().sort().join("|") === correctIds.join("|");
}

function typeLabel(type: Exercise["type"], lang: "el" | "en") {
  const labels: Record<Exercise["type"], { el: string; en: string }> = {
    singleChoice: { el: "Μία επιλογή", en: "Single choice" },
    multipleChoice: { el: "Πολλαπλή επιλογή", en: "Multiple choice" },
    trueFalse: { el: "Σωστό ή λάθος", en: "True or false" },
    matchPairs: { el: "Ταίριασμα", en: "Matching" },
    sortItems: { el: "Ταξινόμηση", en: "Sorting" },
    orderTimeline: { el: "Χρονογραμμή", en: "Timeline" },
    numericInput: { el: "Αριθμός", en: "Number" },
    budgetAllocation: { el: "Προϋπολογισμός", en: "Budget" },
    shoppingBasket: { el: "Καλάθι", en: "Basket" },
    scenarioDecision: { el: "Σενάριο", en: "Scenario" },
    receiptAnalysis: { el: "Απόδειξη", en: "Receipt" },
    savingsGoal: { el: "Στόχος", en: "Goal" },
    compoundInterest: { el: "Ανατοκισμός", en: "Compound interest" },
    scamSpotting: { el: "Απάτη;", en: "Scam spotting" },
    flashcard: { el: "Κάρτα", en: "Flashcard" }
  };
  return labels[type][lang];
}

function nextLessonHref(lessonId: string) {
  const index = allLessons.findIndex((lesson) => lesson.id === lessonId);
  return `/lesson/${allLessons[index + 1]?.id ?? allLessons[0].id}`;
}

export function LessonEngine({ lesson }: { lesson: Lesson }) {
  const { lang } = useI18n();
  const { completeLesson } = useProgress();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>(() => ({ selected: [], numberValue: "" }));
  const [checked, setChecked] = useState(false);
  const [mistakes, setMistakes] = useState<string[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const exercise = lesson.exercises[index];
  const progress = Math.round(((index + (checked ? 1 : 0)) / lesson.exercises.length) * 100);
  const selectedTotal = useMemo(() => exercise.options?.filter((item) => answers.selected.includes(item.id)).reduce((sum, item) => sum + (item.value ?? 0), 0) ?? 0, [answers.selected, exercise.options]);
  const correct = checked ? isExerciseCorrect(exercise, answers.selected, answers.numberValue) : false;

  function toggleOption(id: string) {
    if (checked) return;
    if (exercise.type === "singleChoice" || exercise.type === "trueFalse" || exercise.type === "scenarioDecision" || exercise.type === "scamSpotting") {
      setAnswers({ selected: [id], numberValue: "" });
      return;
    }
    if (exercise.type === "orderTimeline") {
      setAnswers((current) => ({ ...current, selected: current.selected.includes(id) ? current.selected.filter((item) => item !== id) : [...current.selected, id] }));
      return;
    }
    setAnswers((current) => ({
      ...current,
      selected: current.selected.includes(id) ? current.selected.filter((item) => item !== id) : [...current.selected, id]
    }));
  }

  function check() {
    const isCorrect = isExerciseCorrect(exercise, answers.selected, answers.numberValue);
    setChecked(true);
    if (isCorrect) {
      setCorrectCount((value) => value + 1);
    } else {
      setMistakes((value) => [...value, exercise.id]);
    }
  }

  function continueLesson() {
    if (index === lesson.exercises.length - 1) {
      const finalCorrect = correctCount;
      const accuracy = Math.round((finalCorrect / lesson.exercises.length) * 100);
      completeLesson({
        lessonId: lesson.id,
        accuracy,
        mistakes,
        xpReward: lesson.xpReward,
        coinReward: lesson.coinReward,
        tags: lesson.reviewTags ?? []
      });
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setAnswers({ selected: [], numberValue: "" });
    setChecked(false);
  }

  function restart() {
    setIndex(0);
    setAnswers({ selected: [], numberValue: "" });
    setChecked(false);
    setMistakes([]);
    setCorrectCount(0);
    setDone(false);
  }

  if (done) {
    const accuracy = Math.round((correctCount / lesson.exercises.length) * 100);
    return (
      <section className="overflow-hidden rounded-[2rem] bg-white shadow-premium">
        <div className="bg-gradient-to-br from-[#e6fbf5] via-[#fff7dd] to-[#e8f8ff] p-8 text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-[1.75rem] bg-white text-mint shadow-soft">
            <Sparkles className="h-12 w-12" />
          </div>
          <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-black text-ink sm:text-5xl">{lesson.completionMessage[lang]}</h1>
          <p className="mt-3 text-lg font-bold text-ink/60">{accuracy}% · +{lesson.xpReward} XP · +{lesson.coinReward} WiseCoins</p>
        </div>
        <div className="grid gap-3 p-6 sm:grid-cols-3">
          <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white">
            {lang === "el" ? "Συνέχεια στη διαδρομή" : "Continue Path"}
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link href="/practice" className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-4 font-black text-ink">
            {lang === "el" ? "Επανάληψη λαθών" : "Review Mistakes"}
          </Link>
          <button onClick={restart} className="inline-flex items-center justify-center gap-2 rounded-full bg-cloud px-6 py-4 font-black text-ink">
            <RotateCcw className="h-5 w-5" />
            {lang === "el" ? "Ξανά" : "Replay"}
          </button>
        </div>
      </section>
    );
  }

  const needsNumber = ["numericInput", "receiptAnalysis", "savingsGoal", "compoundInterest"].includes(exercise.type);
  const canCheck = needsNumber ? answers.numberValue.trim().length > 0 : answers.selected.length > 0 || exercise.type === "flashcard";

  return (
    <section className="rounded-[2rem] border border-ink/10 bg-white p-5 shadow-premium sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-cloud px-4 py-2 text-sm font-black text-ink/60">
          {index + 1}/{lesson.exercises.length} · {typeLabel(exercise.type, lang)}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-sun/25 px-4 py-2 text-sm font-black text-ink">
          <Coins className="h-4 w-4" />
          +{lesson.coinReward}
        </span>
      </div>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-ink/10">
        <div className="h-full rounded-full bg-gradient-to-r from-mint to-aqua transition-all" style={{ width: `${progress}%` }} />
      </div>
      <h2 className="mt-7 text-3xl font-black text-ink sm:text-4xl">{exercise.prompt[lang]}</h2>

      {exercise.type === "compoundInterest" ? (
        <p className="mt-4 rounded-2xl bg-coral/12 p-4 text-sm font-bold leading-6 text-ink/70">
          {lang === "el" ? "Οι αριθμοί είναι φανταστικοί και εκπαιδευτικοί. Δεν αποτελούν πρόβλεψη ή οικονομική συμβουλή." : "Numbers are fictional and educational. They are not a forecast or financial advice."}
        </p>
      ) : null}

      {exercise.type === "flashcard" ? (
        <button onClick={() => setAnswers({ selected: ["flipped"], numberValue: "" })} className={`mt-7 w-full rounded-[1.5rem] border p-8 text-left transition ${answers.selected.includes("flipped") ? "border-mint bg-mint/12" : "border-ink/10 bg-cloud hover:bg-white"}`}>
          <p className="text-sm font-black uppercase text-ink/45">{answers.selected.includes("flipped") ? (lang === "el" ? "Πίσω πλευρά" : "Back") : (lang === "el" ? "Πάτησε για αναστροφή" : "Tap to flip")}</p>
          <p className="mt-3 text-2xl font-black text-ink">{answers.selected.includes("flipped") ? exercise.explanation[lang] : exercise.prompt[lang]}</p>
        </button>
      ) : null}

      {needsNumber ? (
        <label className="mt-7 block">
          <span className="text-sm font-black text-ink/60">{lang === "el" ? "Απάντηση" : "Answer"}</span>
          <input
            value={answers.numberValue}
            onChange={(event) => setAnswers({ selected: [], numberValue: event.target.value })}
            disabled={checked}
            inputMode="numeric"
            className="mt-2 w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-2xl font-black text-ink outline-none focus:border-mint focus:ring-4 focus:ring-mint/15"
            placeholder="0"
          />
        </label>
      ) : null}

      {exercise.options && exercise.type !== "flashcard" ? (
        <div className="mt-7 grid gap-3">
          {exercise.options.map((item, optionIndex) => {
            const selected = answers.selected.includes(item.id);
            const optionCorrect = Boolean(item.correct);
            const state = checked
              ? optionCorrect
                ? "border-mint bg-mint/12"
                : selected
                  ? "border-coral bg-coral/12"
                  : "border-ink/10 bg-cloud text-ink/45"
              : selected
                ? "border-ink bg-ink text-white"
                : "border-ink/10 bg-white hover:border-aqua hover:bg-aqua/8";
            return (
              <button key={item.id} onClick={() => toggleOption(item.id)} className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left font-extrabold transition ${state}`}>
                <span>
                  {exercise.type === "orderTimeline" && selected ? `${answers.selected.indexOf(item.id) + 1}. ` : null}
                  {item.text[lang]}
                </span>
                {checked && optionCorrect ? <CheckCircle2 className="h-5 w-5 text-mint" /> : null}
                {checked && selected && !optionCorrect ? <XCircle className="h-5 w-5 text-coral" /> : null}
                {!checked && exercise.type === "orderTimeline" && !selected ? <span className="text-xs font-black text-ink/35">{optionIndex + 1}</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {(exercise.type === "shoppingBasket" || exercise.type === "budgetAllocation") && exercise.budget ? (
        <div className="mt-4 rounded-2xl bg-cloud p-4">
          <div className="flex justify-between text-sm font-black text-ink">
            <span>{lang === "el" ? "Σύνολο" : "Total"} {selectedTotal}</span>
            <span>{lang === "el" ? "Όριο" : "Limit"} {exercise.budget}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
            <div className={`h-full rounded-full ${selectedTotal > exercise.budget ? "bg-coral" : "bg-mint"}`} style={{ width: `${Math.min(100, (selectedTotal / exercise.budget) * 100)}%` }} />
          </div>
        </div>
      ) : null}

      {checked ? (
        <div className={`mt-6 rounded-2xl p-5 ${correct ? "bg-mint/12" : "bg-coral/12"}`} role="status">
          <p className="flex items-center gap-2 font-black text-ink">
            {correct ? <CheckCircle2 className="h-5 w-5 text-mint" /> : <ShieldAlert className="h-5 w-5 text-coral" />}
            {correct ? (lang === "el" ? "Σωστά!" : "Correct!") : (lang === "el" ? "Καλή προσπάθεια." : "Good try.")}
          </p>
          <p className="mt-2 leading-7 text-ink/65">{exercise.explanation[lang]}</p>
          <button onClick={continueLesson} className="mt-5 rounded-full bg-ink px-6 py-3 font-black text-white">
            {index === lesson.exercises.length - 1 ? (lang === "el" ? "Ολοκλήρωση" : "Finish") : (lang === "el" ? "Συνέχεια" : "Continue")}
          </button>
        </div>
      ) : (
        <button disabled={!canCheck} onClick={check} className="mt-7 rounded-full bg-ink px-7 py-4 font-black text-white shadow-soft transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-ink/25">
          {lang === "el" ? "Έλεγχος" : "Check"}
        </button>
      )}

      <Link href={nextLessonHref(lesson.id)} className="sr-only">
        {lang === "el" ? "Επόμενο μάθημα" : "Next lesson"}
      </Link>
    </section>
  );
}
