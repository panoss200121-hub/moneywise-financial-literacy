"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { AudienceId } from "@/data/platform";
import { DEFAULT_PATHWAY_ID, normalizePathwayId, type PathwayId } from "@/data/pathways";
export type { PathwayId } from "@/data/pathways";

export type Profile = {
  path: PathwayId | null;
  goals: number[];
  primaryGoal: number | null;
  minutes: 5 | 10 | 15;
  onboarded: boolean;
};

type Value = {
  profile: Profile;
  saveProfile: (profile: Profile | (Omit<Profile, "path" | "primaryGoal"> & { path: AudienceId | PathwayId | null; primaryGoal?: number | null })) => void;
  setPathway: (path: PathwayId) => void;
  resetProfile: () => void;
};

const pathwayToLegacy: Readonly<Record<PathwayId, AudienceId>> = {
  "ages-6-8": "6-8",
  "ages-9-12": "9-12",
  "ages-13-17": "13-17",
  "ages-18-29": "18-29",
  "ages-30-54": "30-54",
  "ages-55-plus": "55+"
};
const initial: Profile = { path: DEFAULT_PATHWAY_ID, goals: [], primaryGoal: null, minutes: 10, onboarded: false };
const Context = createContext<Value | null>(null);
const KEY = "moneywise-audience-v2";
const LEGACY_KEY = "moneywise-audience-v1";

export function toPathwayId(value: unknown): PathwayId | null {
  if (value === null || value === undefined || value === "") return DEFAULT_PATHWAY_ID;
  return normalizePathwayId(value);
}

export function toAudienceId(value: PathwayId | null): AudienceId | null {
  return value ? pathwayToLegacy[value] : null;
}

function normalizeProfile(value: unknown): Profile {
  if (!value || typeof value !== "object") return initial;
  const candidate = value as Partial<Profile> & { path?: unknown };
  const goals = Array.isArray(candidate.goals) ? candidate.goals.filter((goal): goal is number => Number.isInteger(goal)) : [];
  const minutes = candidate.minutes === 5 || candidate.minutes === 15 ? candidate.minutes : 10;
  return {
    path: normalizePathwayId(candidate.path),
    goals,
    primaryGoal: Number.isInteger(candidate.primaryGoal) ? candidate.primaryGoal as number : goals[0] ?? null,
    minutes,
    onboarded: candidate.onboarded === true
  };
}

export function AudienceProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState(initial);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY) ?? localStorage.getItem(LEGACY_KEY);
      if (saved) {
        const migrated = normalizeProfile(JSON.parse(saved));
        setProfile(migrated);
        localStorage.setItem(KEY, JSON.stringify(migrated));
      } else {
        localStorage.setItem(KEY, JSON.stringify(initial));
      }
    } catch {
      setProfile(initial);
      localStorage.setItem(KEY, JSON.stringify(initial));
    }
  }, []);
  const value = useMemo<Value>(() => ({
    profile,
    saveProfile(next) {
      const normalized = normalizeProfile(next);
      setProfile(normalized);
      localStorage.setItem(KEY, JSON.stringify(normalized));
    },
    setPathway(path) {
      setProfile((current) => {
        const next = { ...current, path, onboarded: true };
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
    },
    resetProfile() {
      setProfile(initial);
      localStorage.removeItem(KEY);
      localStorage.removeItem(LEGACY_KEY);
    }
  }), [profile]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAudience() {
  const value = useContext(Context);
  if (!value) throw new Error("useAudience must be used inside AudienceProvider");
  return value;
}
