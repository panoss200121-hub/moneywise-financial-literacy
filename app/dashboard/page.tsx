"use client";

import { AppShell } from "@/components/AppShell";
import { AdaptiveDashboard } from "@/components/learner/AdaptiveDashboard";

export default function DashboardPage() {
  return <AppShell showRightRail={false}><AdaptiveDashboard /></AppShell>;
}
