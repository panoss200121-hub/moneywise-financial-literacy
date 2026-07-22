"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { glossaryTerms } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";

export default function GlossaryPage() {
  const { lang } = useI18n();
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return glossaryTerms;
    return glossaryTerms.filter((item) =>
      [item.term.el, item.term.en, item.definition.el, item.definition.en].some((value) => value.toLowerCase().includes(normalized))
    );
  }, [query]);

  return (
    <AppShell showRightRail={false}>
      <section className="rounded-[2rem] bg-gradient-to-br from-[#e8f8ff] via-white to-[#fff7dd] p-6 shadow-premium sm:p-8">
        <p className="font-black uppercase text-mint">{lang === "el" ? "Λεξικό" : "Glossary"}</p>
        <h1 className="mt-3 text-4xl font-black text-ink sm:text-6xl">{lang === "el" ? "Οικονομικές λέξεις με απλά λόγια." : "Money words in simple language."}</h1>
        <label className="relative mt-6 block max-w-xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/35" />
          <span className="sr-only">{lang === "el" ? "Αναζήτηση όρου" : "Search term"}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-full border border-ink/10 bg-white py-4 pl-12 pr-5 font-bold text-ink outline-none shadow-soft focus:border-mint focus:ring-4 focus:ring-mint/15"
            placeholder={lang === "el" ? "Αναζήτησε π.χ. τόκος" : "Search e.g. interest"}
          />
        </label>
      </section>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((term) => (
          <article key={term.id} className="rounded-[1.5rem] bg-white p-5 shadow-soft">
            <p className="text-sm font-black uppercase text-ink/40">{term.term.en}</p>
            <h2 className="mt-2 text-2xl font-black text-ink">{term.term[lang]}</h2>
            <p className="mt-3 leading-7 text-ink/65">{term.definition[lang]}</p>
            <p className="mt-4 rounded-2xl bg-cloud p-4 text-sm font-bold leading-6 text-ink/60">{term.example[lang]}</p>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
