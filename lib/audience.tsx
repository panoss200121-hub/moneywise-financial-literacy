"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { AudienceId } from "@/data/platform";

type Profile = { path: AudienceId | null; goals: number[]; minutes: 5 | 10 | 15; onboarded: boolean };
type Value = { profile: Profile; saveProfile: (profile: Profile) => void; resetProfile: () => void };
const initial: Profile = { path: null, goals: [], minutes: 10, onboarded: false };
const Context = createContext<Value | null>(null);
const KEY = "moneywise-audience-v1";

export function AudienceProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState(initial);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setProfile({ ...initial, ...JSON.parse(saved) });
    } catch {}
  }, []);
  const value = useMemo(() => ({
    profile,
    saveProfile(next: Profile) { setProfile(next); localStorage.setItem(KEY, JSON.stringify(next)); },
    resetProfile() { setProfile(initial); localStorage.removeItem(KEY); }
  }), [profile]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAudience() {
  const value = useContext(Context);
  if (!value) throw new Error("useAudience must be used inside AudienceProvider");
  return value;
}

