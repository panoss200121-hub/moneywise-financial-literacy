"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

export default function LessonPage() {
  const router = useRouter();
  const { lang } = useI18n();
  const { progress } = useProgress();

  useEffect(() => {
    router.replace(`/lesson/${progress.currentLessonId}`);
  }, [progress.currentLessonId, router]);

  return (
    <AppShell showRightRail={false}>
      <section className="rounded-[2rem] bg-white p-8 text-center shadow-premium">
        <p className="text-xl font-black text-ink">{lang === "el" ? "Άνοιγμα ενεργού μαθήματος..." : "Opening active lesson..."}</p>
      </section>
    </AppShell>
  );
}
