"use client";

import Link from "next/link";
import { ExternalLink, GraduationCap } from "lucide-react";
import { footerAttribution, independentNote, instituteUrl } from "@/data/institute";
import { useI18n } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export function AppFooter() {
  const { lang } = useI18n();
  const pathname = usePathname();
  if (pathname.startsWith("/lesson/")) return null;

  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1fr_auto] lg:px-8">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-mint to-aqua text-white shadow-soft">
            <GraduationCap className="h-6 w-6" />
          </span>
          <div>
            <p className="text-lg font-black text-ink">Moneywise</p>
            <p className="mt-2 max-w-3xl leading-7 text-ink/62">{footerAttribution[lang]}</p>
            <p className="mt-1 max-w-3xl leading-7 text-ink/62">{independentNote[lang]}</p>
          </div>
        </div>
        <nav className="flex max-w-lg flex-wrap items-center gap-2 lg:justify-end" aria-label="Footer">
          {[["/curriculum","Πρόγραμμα","Curriculum"],["/adults","Ενήλικες","Adults"],["/families","Οικογένειες","Families"],["/educators","Εκπαιδευτικοί","Educators"],["/methodology","Μεθοδολογία","Methodology"],["/about","Σχετικά","About"],["/faq","Συχνές ερωτήσεις","FAQ"]].map(item => <Link key={item[0]} href={item[0]} className="rounded-full bg-cloud px-4 py-2 text-sm font-black text-ink">{lang === "el" ? item[1] : item[2]}</Link>)}
          <Link href="/institute" className="rounded-full bg-cloud px-4 py-2 text-sm font-black text-ink">
            {lang === "el" ? "Ινστιτούτο" : "Institute"}
          </Link>
          <a href={instituteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-black text-white">
            gfli.gr
            <ExternalLink className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
