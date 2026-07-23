"use client";

import Link from "next/link";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/Logo";
import { attribution } from "@/data/platform";
import { instituteUrl } from "@/data/institute";
import { useI18n } from "@/lib/i18n";

const groups = [
  { el: "Μάθηση", en: "Learning", links: [["/onboarding","Διαδρομές μάθησης","Learning paths"],["/curriculum","Πρόγραμμα","Programme"],["/glossary","Οικονομικό λεξικό","Glossary"],["/tools","Πρακτικά εργαλεία","Practical tools"]] },
  { el: "Για κάθε κοινό", en: "For every audience", links: [["/adults","Ενήλικες","Adults"],["/families","Οικογένειες","Families"],["/educators","Εκπαιδευτικοί και σχολεία","Educators and schools"]] },
  { el: "Πληροφόρηση", en: "Information", links: [["/methodology","Μεθοδολογία","Methodology"],["/institute","Εκπαιδευτική βάση","Educational foundation"],["/about","Σχετικά με το Moneywise","About Moneywise"],["/faq","Συχνές ερωτήσεις","FAQ"]] }
];

export function PublicFooter(){
  const {lang,t}=useI18n(); const el=lang==="el";
  return <footer className="border-t border-ink/10 bg-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
      <div><Logo tagline={t.nav.tagline}/><p className="mt-5 max-w-sm leading-7 text-ink/65">{el?"Μια σύγχρονη ελληνική πλατφόρμα χρηματοοικονομικής παιδείας για παιδιά, εφήβους, ενήλικες, οικογένειες και εκπαιδευτικούς.":"A modern Greek financial-literacy platform for children, teenagers, adults, families and educators."}</p><a href={instituteUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-ink">gfli.gr <ExternalLink className="h-4 w-4"/></a></div>
      {groups.map(group=><nav key={group.el} aria-label={group[lang]}><h2 className="font-black">{group[lang]}</h2><div className="mt-4 grid gap-3">{group.links.map(link=><Link key={link[0]} href={link[0]} className="text-sm font-semibold text-ink/60 hover:text-ink">{link[el?1:2]}</Link>)}</div></nav>)}
    </div>
    <div className="border-t border-ink/10"><div className="mx-auto max-w-7xl px-5 py-7 lg:px-8"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-mint"/><p className="max-w-5xl text-sm leading-6 text-ink/60">{attribution[lang]}</p></div><div className="mt-5 flex flex-col justify-between gap-3 border-t border-ink/10 pt-5 text-xs leading-5 text-ink/50 sm:flex-row"><p>{el?"Δεν απαιτούνται πραγματικά οικονομικά ή τραπεζικά στοιχεία. Το Moneywise παρέχει εκπαιδευτικό περιεχόμενο και όχι εξατομικευμένη οικονομική συμβουλή.":"Real financial or banking details are not required. Moneywise provides education, not personalised financial advice."}</p><p className="shrink-0">© Moneywise</p></div></div></div>
  </footer>
}

