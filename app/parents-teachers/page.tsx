"use client";

import Link from "next/link";
import { BookOpenCheck, Home, MessageCircleQuestion, Printer, ShieldCheck, UsersRound } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { learningWorlds } from "@/data/curriculum";
import { useI18n } from "@/lib/i18n";
import { useProgress } from "@/lib/progress";

const prompts = {
  el: [
    "Ποια αγορά αυτή την εβδομάδα ήταν ανάγκη και ποια επιθυμία;",
    "Αν είχαμε 10 ευρώ για κοινό στόχο, πώς θα τα μοιράζαμε;",
    "Ποιο σημάδι κάνει ένα online μήνυμα να φαίνεται ύποπτο;",
    "Ποια μικρή συνήθεια αποταμίευσης θα μπορούσε να κρατήσει έναν μήνα;"
  ],
  en: [
    "Which purchase this week was a need and which was a want?",
    "If we had 10 euros for a shared goal, how would we split it?",
    "What sign makes an online message feel suspicious?",
    "Which small saving habit could last one month?"
  ]
};

const activities = {
  el: [
    "Σύγκρινε δύο ίδιες κατηγορίες προϊόντων στο supermarket και βρες την τιμή ανά μονάδα.",
    "Φτιάξε οικογενειακό βάζο στόχου με εβδομαδιαία συνεισφορά.",
    "Διάβασε μια απόδειξη και εντόπισε ποσότητα, τιμή και σύνολο.",
    "Κάνε παιχνίδι ρόλων: ύποπτο μήνυμα, ασφαλής αντίδραση, έλεγχος από ενήλικα."
  ],
  en: [
    "Compare two products in the same category and find the unit price.",
    "Create a family goal jar with a weekly contribution.",
    "Read a receipt and identify quantity, price and total.",
    "Role-play a suspicious message, safe response and adult check."
  ]
};

export default function ParentsTeachersPage() {
  const { lang } = useI18n();
  const { progress, mastery } = useProgress();

  return (
    <AppShell showRightRail={false}>
      <section className="rounded-[2rem] bg-gradient-to-br from-white via-[#e6fbf5] to-[#fff7dd] p-6 shadow-premium sm:p-8">
        <p className="font-black uppercase text-mint">{lang === "el" ? "Γονείς & Εκπαιδευτικοί" : "Parents & Teachers"}</p>
        <h1 className="mt-3 text-4xl font-black text-ink sm:text-6xl">{lang === "el" ? "Υποστήριξη για ασφαλείς οικονομικές συζητήσεις." : "Support for safe money conversations."}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/65">
          {lang === "el" ? "Το Moneywise παραμένει front-end MVP: mock δεδομένα, τοπική πρόοδος, χωρίς λογαριασμούς, πληρωμές, συνδρομές ή οικονομικές προτάσεις." : "Moneywise remains a front-end MVP: mock data, local progress, no accounts, payments, subscriptions or financial recommendations."}
        </p>
        <Link href="/dashboard" className="mt-6 inline-flex rounded-full bg-ink px-6 py-4 font-black text-white">
          {lang === "el" ? "Δες τη μαθησιακή διαδρομή" : "Review learning path"}
        </Link>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-[1.5rem] bg-white p-5 shadow-soft">
          <BookOpenCheck className="h-7 w-7 text-mint" />
          <p className="mt-4 text-3xl font-black text-ink">{learningWorlds.length}</p>
          <p className="text-sm font-bold text-ink/55">{lang === "el" ? "κόσμοι μάθησης" : "learning worlds"}</p>
        </article>
        <article className="rounded-[1.5rem] bg-white p-5 shadow-soft">
          <UsersRound className="h-7 w-7 text-grape" />
          <p className="mt-4 text-3xl font-black text-ink">{mastery}%</p>
          <p className="text-sm font-bold text-ink/55">{lang === "el" ? "mock πρόοδος παιδιού" : "mock child progress"}</p>
        </article>
        <article className="rounded-[1.5rem] bg-white p-5 shadow-soft">
          <ShieldCheck className="h-7 w-7 text-coral" />
          <p className="mt-4 text-3xl font-black text-ink">{progress.exerciseMistakes.length}</p>
          <p className="text-sm font-bold text-ink/55">{lang === "el" ? "θέματα για επανάληψη" : "topics to review"}</p>
        </article>
      </section>

      <section className="mt-6 rounded-[2rem] bg-white p-6 shadow-soft">
        <h2 className="text-3xl font-black text-ink">{lang === "el" ? "Πρόγραμμα ανά κόσμο" : "Curriculum by world"}</h2>
        <div className="mt-5 grid gap-3">
          {learningWorlds.map((world) => (
            <article key={world.id} className="rounded-2xl bg-cloud p-4">
              <p className="text-sm font-black text-ink/45">{lang === "el" ? `Κόσμος ${world.order}` : `World ${world.order}`}</p>
              <h3 className="mt-1 text-xl font-black text-ink">{world.title[lang]}</h3>
              <p className="mt-2 leading-7 text-ink/62">{world.objective[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="rounded-[2rem] bg-gradient-to-br from-[#fff7dd] to-white p-6 shadow-soft">
          <Printer className="h-8 w-8 text-sun" />
          <h2 className="mt-4 text-3xl font-black text-ink">{lang === "el" ? "Ερωτήσεις συζήτησης" : "Conversation prompts"}</h2>
          <ul className="mt-5 space-y-3">
            {prompts[lang].map((prompt) => (
              <li key={prompt} className="rounded-2xl bg-white p-4 font-bold leading-7 text-ink/68">{prompt}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[2rem] bg-gradient-to-br from-[#e8f8ff] to-white p-6 shadow-soft">
          <Home className="h-8 w-8 text-mint" />
          <h2 className="mt-4 text-3xl font-black text-ink">{lang === "el" ? "Πραγματικές δραστηριότητες" : "Real-world activities"}</h2>
          <ul className="mt-5 space-y-3">
            {activities[lang].map((activity) => (
              <li key={activity} className="rounded-2xl bg-white p-4 font-bold leading-7 text-ink/68">{activity}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-6 rounded-[2rem] bg-ink p-6 text-white shadow-premium">
        <MessageCircleQuestion className="h-8 w-8 text-mint" />
        <h2 className="mt-4 text-3xl font-black">{lang === "el" ? "Εκπαιδευτική σημείωση" : "Educational disclaimer"}</h2>
        <p className="mt-3 max-w-4xl leading-8 text-white/72">
          {lang === "el" ? "Το περιεχόμενο είναι πρωτότυπο, ηλικιακά κατάλληλο και βασίζεται σε γενικά αποδεκτές έννοιες οικονομικής παιδείας. Τα σενάρια, οι αποδόσεις και τα νομίσματα είναι φανταστικά όπου χρειάζεται και δεν αποτελούν προσωπική οικονομική ή επενδυτική συμβουλή." : "Content is original, age-appropriate and based on generally accepted financial literacy concepts. Scenarios, returns and currencies are fictional where needed and are not personal financial or investment advice."}
        </p>
      </section>
    </AppShell>
  );
}
