"use client";

import Link from "next/link";
import { BookMarked, Home, LockKeyhole, School, ShieldCheck, UsersRound } from "lucide-react";
import { ParentTeacherSection } from "@/components/ParentTeacherSection";
import { useI18n } from "@/lib/i18n";

const icons = [BookMarked, UsersRound, ShieldCheck, LockKeyhole, School, Home];

export default function ParentsTeachersPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f0fbf7_55%,#fff7dd_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <p className="font-black uppercase tracking-normal text-mint">{t.parents.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-black text-ink sm:text-6xl">{t.parents.title}</h1>
            <p className="mt-6 text-lg leading-8 text-ink/65">{t.parents.body}</p>
            <Link href="/learning-path" className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 font-black text-white shadow-soft">
              {t.parents.cta}
            </Link>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-premium">
            <div className="grid gap-4 sm:grid-cols-2">
              {t.parents.chips.map((item) => (
                <div key={item} className="rounded-[1.5rem] bg-cloud p-6">
                  <p className="text-3xl font-black text-ink">✓</p>
                  <h3 className="mt-4 text-xl font-black text-ink">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {t.parents.sections.map((section, index) => (
          <ParentTeacherSection key={section[0]} icon={icons[index]} title={section[0]} body={section[1]} />
        ))}
      </section>
    </main>
  );
}
