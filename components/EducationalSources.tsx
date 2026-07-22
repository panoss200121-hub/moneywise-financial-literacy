"use client";

import { ExternalLink, LibraryBig } from "lucide-react";
import { axiaUrl, instituteUrl, sourceAdaptationNote } from "@/data/institute";
import { useI18n } from "@/lib/i18n";

export function EducationalSources({ compact = false }: { compact?: boolean }) {
  const { lang } = useI18n();

  return (
    <section className={`rounded-[1.5rem] border border-ink/10 bg-white shadow-soft ${compact ? "p-4" : "p-5 sm:p-6"}`} aria-labelledby="educational-sources-title">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint/15 text-mint">
          <LibraryBig className="h-5 w-5" />
        </span>
        <div>
          <h2 id="educational-sources-title" className="text-xl font-black text-ink">
            {lang === "el" ? "Εκπαιδευτικές πηγές" : "Educational Sources"}
          </h2>
          <p className="mt-2 leading-7 text-ink/62">{sourceAdaptationNote[lang]}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={instituteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-black text-white">
              {lang === "el" ? "Ινστιτούτο Χρηματοοικονομικού Αλφαβητισμού" : "Institute of Financial Literacy"}
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href={axiaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cloud px-4 py-2 text-sm font-black text-ink">
              {lang === "el" ? "Πρόγραμμα @ξία" : "@ξία Programme"}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
