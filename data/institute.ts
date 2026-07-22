import type { LocalizedText } from "@/data/curriculum";

const tx = (el: string, en: string): LocalizedText => ({ el, en });

export const instituteUrl = "https://www.gfli.gr/";
export const axiaUrl = "https://www.gfli.gr/programma-axia/";

export const instituteAttribution = tx(
  "Το Moneywise αξιοποιεί θεματικές, επιστημονικές αρχές και δημόσιο εκπαιδευτικό υλικό του Ινστιτούτου Χρηματοοικονομικού Αλφαβητισμού και του Προγράμματος @ξία. Η ψηφιακή εμπειρία, η διαδραστική προσαρμογή και οι δραστηριότητες της πλατφόρμας αποτελούν πρωτότυπη ανάπτυξη του Moneywise.",
  "Moneywise draws on themes, educational principles and publicly available educational material from the Institute of Financial Literacy and the @ξία Programme. The digital experience, interactive adaptation and activities of the platform are original Moneywise developments."
);

export const footerAttribution = tx(
  "Εκπαιδευτικές θεματικές και δημόσιο υλικό αναφοράς από το Ινστιτούτο Χρηματοοικονομικού Αλφαβητισμού και το Πρόγραμμα @ξία.",
  "Educational themes and public reference material from the Institute of Financial Literacy and the @ξία Programme."
);

export const independentNote = tx(
  "Το Moneywise αποτελεί ανεξάρτητη ψηφιακή εκπαιδευτική εφαρμογή.",
  "Moneywise is an independent digital educational application."
);

export const sourceAdaptationNote = tx(
  "Το μάθημα είναι πρωτότυπη ψηφιακή προσαρμογή του Moneywise και δεν αναπαράγει το υλικό πηγής.",
  "This lesson is an original Moneywise digital adaptation and does not reproduce the source material."
);

export const instituteSummary = tx(
  "Το Ινστιτούτο Χρηματοοικονομικού Αλφαβητισμού προωθεί τη διάχυση της χρηματοοικονομικής γνώσης, με ιδιαίτερη έμφαση σε παιδιά, νέους και ευάλωτες ομάδες.",
  "The Institute of Financial Literacy promotes the spread of financial knowledge, with particular emphasis on children, young people and vulnerable groups."
);

export const axiaSummary = tx(
  "Το Πρόγραμμα @ξία παρουσιάζει θεματικές χρηματοοικονομικού αλφαβητισμού για παιδιά, όπως χρήμα, έξυπνες αγορές, ανάγκες, αποταμίευση, προϋπολογισμό, λεξιλόγιο και ασκήσεις.",
  "The @ξία Programme presents financial-literacy themes for children, including money, smart shopping, needs, saving, budgeting, vocabulary and activities."
);
