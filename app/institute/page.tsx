"use client";

import Link from "next/link";
import { ArrowRight, BookOpenCheck, ExternalLink, GraduationCap, Landmark, LibraryBig, ShieldCheck, UsersRound } from "lucide-react";
import { EducationalSources } from "@/components/EducationalSources";
import { axiaSummary, axiaUrl, independentNote, instituteAttribution, instituteSummary, instituteUrl } from "@/data/institute";
import { learningWorlds } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";

const childBenefits = {
  el: [
    "βοηθά τα παιδιά να ξεχωρίζουν ανάγκες και επιθυμίες",
    "καλλιεργεί υπεύθυνες αγοραστικές συνήθειες",
    "δίνει γλώσσα για αποταμίευση, προϋπολογισμό και ασφάλεια",
    "ενισχύει τη συζήτηση στο σπίτι και στην τάξη"
  ],
  en: [
    "helps children separate needs and wants",
    "builds responsible shopping habits",
    "gives language for saving, budgeting and safety",
    "supports conversations at home and in class"
  ]
};

const themes = {
  el: ["ιστορία και λειτουργίες χρήματος", "ανάγκες και επιθυμίες", "έξυπνες αγορές", "αποταμίευση και στόχοι", "προϋπολογισμός", "τράπεζες και πληρωμές", "τόκος και επιτόκια", "λεξιλόγιο", "φιλανθρωπία", "εθελοντισμός", "περιβαλλοντική ευθύνη", "υπεύθυνη κατανάλωση"],
  en: ["history and functions of money", "needs and wants", "smart shopping", "saving and goals", "budgeting", "banks and payments", "interest and rates", "vocabulary", "philanthropy", "volunteering", "environmental responsibility", "responsible consumption"]
};

export default function InstitutePage() {
  const { lang } = useI18n();

  return (
    <main className="bg-cloud">
      <section className="bg-gradient-to-br from-white via-[#e6fbf5] to-[#fff7dd]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="font-black uppercase text-mint">{lang === "el" ? "Ινστιτούτο" : "Institute"}</p>
            <h1 className="mt-3 text-5xl font-black text-ink sm:text-6xl">
              {lang === "el" ? "Η εκπαιδευτική βάση του Moneywise." : "The educational foundation of Moneywise."}
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/65">{instituteAttribution[lang]}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={instituteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white">
                {lang === "el" ? "Επίσημη ιστοσελίδα" : "Official website"}
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href={axiaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-black text-ink shadow-soft">
                {lang === "el" ? "Πρόγραμμα @ξία" : "@ξία Programme"}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-premium">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Landmark, lang === "el" ? "Ινστιτούτο" : "Institute", instituteSummary[lang]],
                [GraduationCap, lang === "el" ? "@ξία" : "@ξία", axiaSummary[lang]],
                [BookOpenCheck, lang === "el" ? "Παιδιά" : "Children", lang === "el" ? "Η πλατφόρμα μετατρέπει έννοιες σε σύντομες αποστολές για ηλικίες 10-12." : "The platform turns concepts into short missions for ages 10-12."],
                [ShieldCheck, lang === "el" ? "Διάκριση ρόλων" : "Clear roles", independentNote[lang]]
              ].map(([Icon, title, body]) => (
                <article key={String(title)} className="rounded-[1.5rem] bg-cloud p-5">
                  <Icon className="h-7 w-7 text-mint" />
                  <h2 className="mt-4 text-xl font-black text-ink">{String(title)}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{String(body)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 lg:grid-cols-3 lg:px-8">
        <article className="rounded-[2rem] bg-white p-6 shadow-soft">
          <LibraryBig className="h-8 w-8 text-grape" />
          <h2 className="mt-4 text-3xl font-black text-ink">{lang === "el" ? "Τι είναι χρηματοοικονομικός αλφαβητισμός;" : "What is financial literacy?"}</h2>
          <p className="mt-4 leading-8 text-ink/65">
            {lang === "el" ? "Είναι ο συνδυασμός γνώσεων, στάσεων και δεξιοτήτων που βοηθά έναν άνθρωπο να παίρνει πιο υπεύθυνες οικονομικές αποφάσεις στην καθημερινή ζωή." : "It is the combination of knowledge, attitudes and skills that helps a person make more responsible financial decisions in everyday life."}
          </p>
        </article>
        <article className="rounded-[2rem] bg-white p-6 shadow-soft">
          <UsersRound className="h-8 w-8 text-mint" />
          <h2 className="mt-4 text-3xl font-black text-ink">{lang === "el" ? "Γιατί είναι σημαντικό για παιδιά;" : "Why does it matter for children?"}</h2>
          <ul className="mt-4 space-y-3">
            {childBenefits[lang].map((item) => (
              <li key={item} className="rounded-2xl bg-cloud p-3 font-bold leading-6 text-ink/65">{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[2rem] bg-ink p-6 text-white shadow-premium">
          <ShieldCheck className="h-8 w-8 text-mint" />
          <h2 className="mt-4 text-3xl font-black">{lang === "el" ? "Σημαντική διευκρίνιση" : "Important clarification"}</h2>
          <p className="mt-4 leading-8 text-white/72">
            {lang === "el" ? "Το Moneywise δεν δηλώνει επίσημη συνεργασία, έγκριση ή ιδιοκτησία από το Ινστιτούτο. Η πλατφόρμα παρουσιάζει πρωτότυπη ψηφιακή προσαρμογή εκπαιδευτικών θεματικών." : "Moneywise does not claim official partnership, endorsement or ownership by the Institute. The platform presents an original digital adaptation of educational themes."}
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft">
          <h2 className="text-3xl font-black text-ink">{lang === "el" ? "Θεματικές που αξιοποιεί το Moneywise" : "Educational themes used by Moneywise"}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {themes[lang].map((theme) => (
              <span key={theme} className="rounded-full bg-cloud px-4 py-2 text-sm font-black text-ink/65">{theme}</span>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {learningWorlds.map((world) => (
              <article key={world.id} className="rounded-2xl border border-ink/10 p-4">
                <p className="text-sm font-black text-ink/40">{lang === "el" ? `Κόσμος ${world.order}` : `World ${world.order}`}</p>
                <h3 className="mt-1 text-xl font-black text-ink">{world.title[lang]}</h3>
                <p className="mt-2 leading-7 text-ink/62">{world.objective[lang]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <EducationalSources />
        <div className="mt-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white">
            {lang === "el" ? "Συνέχεια στη μάθηση" : "Continue learning"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
