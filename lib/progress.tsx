"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { achievements, allLessons, dailyQuests, getNextLessonId, type LessonResult, type SavingsGoal } from "@/data/curriculum";
import { useAudience } from "@/lib/audience";
import type { PathwayId } from "@/data/pathways";

export type PathwayProgress = {
  completedLessons: string[];
  currentLessonId: string;
  recentActivity: string[];
  reviewTopics: string[];
};

export type UserProgress = {
  completedLessons: string[];
  currentLessonId: string;
  xp: number;
  wiseCoins: number;
  streak: number;
  lastActiveDate: string | null;
  achievements: string[];
  questProgress: Record<string, number>;
  exerciseMistakes: string[];
  savingsGoal: SavingsGoal;
  languagePreference: "el" | "en";
  lessonResults: LessonResult[];
  perfectLessons: string[];
  pathwayProgress: Partial<Record<PathwayId, PathwayProgress>>;
};

type CompleteLessonInput = {
  lessonId: string;
  accuracy: number;
  mistakes: string[];
  xpReward: number;
  coinReward: number;
  tags: string[];
};

type ProgressContextValue = {
  progress: UserProgress;
  level: number;
  dailyProgress: number;
  mastery: number;
  completeLesson: (input: CompleteLessonInput) => void;
  updateSavingsGoal: (goal: SavingsGoal) => void;
  resetProgress: () => void;
};

const STORAGE_KEY = "moneywise-progress-v2";

const defaultProgress: UserProgress = {
  completedLessons: [],
  currentLessonId: allLessons[0]?.id ?? "barter-timeline",
  xp: 0,
  wiseCoins: 0,
  streak: 0,
  lastActiveDate: null,
  achievements: [],
  questProgress: {},
  exerciseMistakes: [],
  savingsGoal: {
    name: "Ποδηλατικό φως",
    cost: 60,
    initialAmount: 15,
    weeklyAmount: 5
  },
  languagePreference: "el",
  lessonResults: [],
  perfectLessons: [],
  pathwayProgress: {}
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

function safeParseProgress(raw: string | null): UserProgress {
  if (!raw) return defaultProgress;
  try {
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    return {
      ...defaultProgress,
      ...parsed,
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons.filter(Boolean) : [],
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements.filter(Boolean) : [],
      exerciseMistakes: Array.isArray(parsed.exerciseMistakes) ? parsed.exerciseMistakes.filter(Boolean) : [],
      lessonResults: Array.isArray(parsed.lessonResults) ? parsed.lessonResults : [],
      perfectLessons: Array.isArray(parsed.perfectLessons) ? parsed.perfectLessons.filter(Boolean) : [],
      questProgress: parsed.questProgress && typeof parsed.questProgress === "object" ? parsed.questProgress : {},
      pathwayProgress: parsed.pathwayProgress && typeof parsed.pathwayProgress === "object" ? parsed.pathwayProgress : {},
      savingsGoal: {
        ...defaultProgress.savingsGoal,
        ...(parsed.savingsGoal && typeof parsed.savingsGoal === "object" ? parsed.savingsGoal : {})
      },
      languagePreference: parsed.languagePreference === "en" ? "en" : "el"
    };
  } catch {
    return defaultProgress;
  }
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(previous: string, current: string) {
  const previousTime = new Date(`${previous}T00:00:00`).getTime();
  const currentTime = new Date(`${current}T00:00:00`).getTime();
  return Math.round((currentTime - previousTime) / 86400000);
}

function deriveAchievements(next: UserProgress) {
  const unlocked = new Set(next.achievements);
  if (next.completedLessons.length > 0) unlocked.add("first-wise-step");
  if (next.completedLessons.includes("supermarket-challenge")) unlocked.add("smart-shopper");
  if (next.completedLessons.includes("goal-calculator")) unlocked.add("savings-starter");
  if (next.completedLessons.includes("allowance-budget")) unlocked.add("budget-builder");
  if (next.completedLessons.includes("payment-methods")) unlocked.add("banking-explorer");
  if (next.completedLessons.includes("interest-inflation-safety")) unlocked.add("scam-spotter");
  if (next.streak >= 7) unlocked.add("seven-day-streak");
  if (next.perfectLessons.length > 0) unlocked.add("perfect-lesson");
  if (next.completedLessons.includes("community-mission")) unlocked.add("community-champion");
  return achievements.filter((item) => unlocked.has(item.id)).map((item) => item.id);
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { profile } = useAudience();
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loaded = safeParseProgress(window.localStorage.getItem(STORAGE_KEY));
    const language = window.localStorage.getItem("moneywise-language");
    setProgress({ ...loaded, languagePreference: language === "en" ? "en" : "el" });
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [isReady, progress]);

  const value = useMemo<ProgressContextValue>(() => {
    const level = Math.max(1, Math.floor(progress.xp / 100) + 1);
    const dailyProgress = Math.min(100, Math.round(((progress.questProgress["complete-one"] ?? 0) / 1) * 100));
    const mastery = allLessons.length ? Math.round((progress.completedLessons.length / allLessons.length) * 100) : 0;

    function completeLesson(input: CompleteLessonInput) {
      setProgress((current) => {
        const today = todayKey();
        const wasCompleted = current.completedLessons.includes(input.lessonId);
        const dayGap = current.lastActiveDate ? daysBetween(current.lastActiveDate, today) : 0;
        const nextStreak = current.lastActiveDate === today ? current.streak : dayGap === 1 ? current.streak + 1 : 1;
        const completedLessons = wasCompleted ? current.completedLessons : [...current.completedLessons, input.lessonId];
        const perfectLessons = input.accuracy === 100 && !current.perfectLessons.includes(input.lessonId) ? [...current.perfectLessons, input.lessonId] : current.perfectLessons;
        const questProgress = {
          ...current.questProgress,
          "complete-one": Math.min(1, (current.questProgress["complete-one"] ?? 0) + (wasCompleted ? 0 : 1)),
          "earn-xp": Math.min(30, (current.questProgress["earn-xp"] ?? 0) + input.xpReward),
          "correct-streak": Math.max(current.questProgress["correct-streak"] ?? 0, Math.round((input.accuracy / 100) * input.tags.length)),
          "budget-activity": input.tags.includes("budget") ? 1 : current.questProgress["budget-activity"] ?? 0,
          "review-three": Math.min(3, current.exerciseMistakes.length)
        };
        const next: UserProgress = {
          ...current,
          completedLessons,
          currentLessonId: getNextLessonId(completedLessons),
          xp: current.xp + (wasCompleted ? Math.round(input.xpReward / 4) : input.xpReward) + (input.accuracy === 100 ? 10 : 0),
          wiseCoins: current.wiseCoins + (wasCompleted ? 2 : input.coinReward) + (input.accuracy === 100 ? 5 : 0),
          streak: nextStreak,
          lastActiveDate: today,
          questProgress,
          exerciseMistakes: Array.from(new Set([...current.exerciseMistakes.filter((id) => !input.mistakes.includes(id)), ...input.mistakes])),
          lessonResults: [
            ...current.lessonResults.filter((result) => result.lessonId !== input.lessonId),
            { lessonId: input.lessonId, accuracy: input.accuracy, mistakes: input.mistakes, completedAt: new Date().toISOString() }
          ],
          perfectLessons,
          pathwayProgress: profile.path ? {
            ...current.pathwayProgress,
            [profile.path]: {
              completedLessons: Array.from(new Set([...(current.pathwayProgress[profile.path]?.completedLessons ?? []), input.lessonId])),
              currentLessonId: getNextLessonId(completedLessons),
              recentActivity: [input.lessonId, ...(current.pathwayProgress[profile.path]?.recentActivity ?? []).filter((id) => id !== input.lessonId)].slice(0, 6),
              reviewTopics: Array.from(new Set(input.mistakes))
            }
          } : current.pathwayProgress
        };
        return { ...next, achievements: deriveAchievements(next) };
      });
    }

    function updateSavingsGoal(goal: SavingsGoal) {
      setProgress((current) => ({ ...current, savingsGoal: goal }));
    }

    function resetProgress() {
      setProgress(defaultProgress);
      window.localStorage.removeItem(STORAGE_KEY);
    }

    return { progress, level, dailyProgress, mastery, completeLesson, updateSavingsGoal, resetProgress };
  }, [profile.path, progress]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used inside ProgressProvider");
  }
  return context;
}
