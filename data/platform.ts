import {
  Banknote, BriefcaseBusiness, HeartHandshake, PiggyBank, ReceiptText,
  ShieldCheck, ShoppingBasket, Target, TrendingUp, Umbrella, WalletCards, Waypoints
} from "lucide-react";

export type Lang = "el" | "en";
export type LocalText = { el: string; en: string };
export type AudienceId = "6-8" | "9-12" | "13-17" | "18-29" | "30-54" | "55+";
export type AudiencePath = {
  id: AudienceId;
  ages: string;
  title: LocalText;
  description: LocalText;
  lessonId: string;
  lesson: LocalText;
  activity: LocalText;
  tone: string;
};

const tx = (el: string, en: string): LocalText => ({ el, en });

export const audiencePaths: AudiencePath[] = [
  { id: "6-8", ages: "6–8", title: tx("Ανακαλύπτω τα χρήματα", "Discovering money"), description: tx("Κέρματα, ανάγκες, επιλογές και ένας μικρός στόχος αποταμίευσης.", "Coins, needs, choices and a small saving goal."), lessonId: "what-is-money", lesson: tx("Το πορτοφόλι της Άννας", "Anna’s wallet"), activity: tx("Ταίριαξε κέρματα με αξίες και διάλεξε μία ανάγκη.", "Match coins to values and choose one need."), tone: "from-amber-200 to-orange-100" },
  { id: "9-12", ages: "9–12", title: tx("Χτίζω έξυπνες συνήθειες", "Building smart habits"), description: tx("Ανάγκες, αγορές, αποταμίευση, προϋπολογισμός και υπεύθυνη κατανάλωση.", "Needs, shopping, saving, budgeting and responsible consumption."), lessonId: "supermarket-challenge", lesson: tx("Η έξυπνη αγορά", "The smart purchase"), activity: tx("Σύγκρινε δύο προσφορές μέσα σε συγκεκριμένο όριο.", "Compare two offers within a fixed limit."), tone: "from-emerald-200 to-cyan-100" },
  { id: "13-17", ages: "13–17", title: tx("Προετοιμάζομαι για τις πρώτες μου αποφάσεις", "Preparing for my first decisions"), description: tx("Μικρό εισόδημα, συνδρομές, ψηφιακές αγορές και προστασία από απάτες.", "Small income, subscriptions, online purchases and fraud protection."), lessonId: "interest-inflation-safety", lesson: tx("Πριν πατήσεις τον σύνδεσμο", "Before you tap the link"), activity: tx("Εντόπισε τα σημάδια ηλεκτρονικού ψαρέματος.", "Spot the signs of a phishing message."), tone: "from-sky-200 to-indigo-100" },
  { id: "18-29", ages: "18–29", title: tx("Οργανώνω την οικονομική μου ανεξαρτησία", "Organising financial independence"), description: tx("Πρώτος μισθός, ενοίκιο, λογαριασμοί, αποθεματικό και υπεύθυνη πίστωση.", "First salary, rent, bills, emergency savings and responsible credit."), lessonId: "allowance-budget", lesson: tx("Ο πρώτος μηνιαίος προϋπολογισμός", "Your first monthly budget"), activity: tx("Οργάνωσε έναν υποθετικό πρώτο μισθό.", "Organise a fictional first salary."), tone: "from-violet-200 to-fuchsia-100" },
  { id: "30-54", ages: "30–54", title: tx("Διαχειρίζομαι το νοικοκυριό και σχεδιάζω", "Managing a household and planning"), description: tx("Ταμειακές ροές, οικογενειακές προτεραιότητες, χρέος, ασφάλιση και μακροπρόθεσμοι στόχοι.", "Cash flow, family priorities, debt, insurance and long-term goals."), lessonId: "allowance-budget", lesson: tx("Ισορροπία στον οικογενειακό προϋπολογισμό", "Balancing the household budget"), activity: tx("Αντιμετώπισε ένα απρόβλεπτο έξοδο χωρίς να χαθεί ο στόχος.", "Handle an unexpected expense without losing the goal."), tone: "from-rose-200 to-amber-100" },
  { id: "55+", ages: "55+", title: tx("Προστατεύω και οργανώνω τους πόρους μου", "Protecting and organising my resources"), description: tx("Ασφαλείς πληρωμές, ψηφιακή τραπεζική, επαναλαμβανόμενες δαπάνες και πρόληψη απάτης.", "Safe payments, digital banking, recurring expenses and fraud prevention."), lessonId: "payment-methods", lesson: tx("Ασφαλής ψηφιακή πληρωμή", "A safe digital payment"), activity: tx("Έλεγξε ένα ύποπτο μήνυμα πριν ενεργήσεις.", "Check a suspicious message before acting."), tone: "from-teal-200 to-slate-100" }
];

export const learningGoals = [
  tx("Καθημερινή διαχείριση χρημάτων", "Everyday money management"),
  tx("Αποταμίευση", "Saving"), tx("Προϋπολογισμός", "Budgeting"),
  tx("Τραπεζικές υπηρεσίες", "Banking"), tx("Ψηφιακή ασφάλεια", "Digital safety"),
  tx("Δανεισμός", "Borrowing"), tx("Ασφάλιση", "Insurance"),
  tx("Επενδυτικές έννοιες", "Investment concepts"),
  tx("Οικογενειακά οικονομικά", "Family finances"), tx("Οικονομική οργάνωση", "Financial organisation")
];

export const curriculumPillars = [
  [Banknote, tx("Κατανοώ το χρήμα", "Understand money"), tx("Αξία, μορφές και λειτουργίες του χρήματος.", "Value, forms and functions of money.")],
  [BriefcaseBusiness, tx("Κερδίζω", "Earn"), tx("Εισόδημα, εργασία και υπεύθυνες επιλογές.", "Income, work and responsible choices.")],
  [ShoppingBasket, tx("Καταναλώνω", "Spend"), tx("Ανάγκες, επιθυμίες και έξυπνες αγορές.", "Needs, wants and smart purchases.")],
  [PiggyBank, tx("Αποταμιεύω", "Save"), tx("Στόχοι, υπομονή και αποθεματικό.", "Goals, patience and emergency savings.")],
  [ReceiptText, tx("Προϋπολογίζω", "Budget"), tx("Έσοδα, δαπάνες, πλεόνασμα και έλλειμμα.", "Income, expenses, surplus and deficit.")],
  [WalletCards, tx("Συναλλάσσομαι", "Transact"), tx("Μετρητά, κάρτες και ψηφιακές πληρωμές.", "Cash, cards and digital payments.")],
  [Waypoints, tx("Δανείζομαι", "Borrow"), tx("Τόκος, δόσεις, κόστος και ευθύνη.", "Interest, instalments, cost and responsibility.")],
  [Umbrella, tx("Ασφαλίζομαι", "Insure"), tx("Κίνδυνος, κάλυψη και οικονομική ανθεκτικότητα.", "Risk, cover and financial resilience.")],
  [TrendingUp, tx("Επενδύω", "Invest"), tx("Κίνδυνος, απόδοση, χρόνος και διασπορά.", "Risk, return, time and diversification.")],
  [ShieldCheck, tx("Προστατεύομαι", "Protect"), tx("Απάτες, προσωπικά δεδομένα και ασφαλείς συνήθειες.", "Fraud, personal data and safe habits.")],
  [HeartHandshake, tx("Προσφέρω", "Give"), tx("Δωρεά, εθελοντισμός και κοινότητα.", "Donation, volunteering and community.")],
  [Target, tx("Σχεδιάζω το μέλλον", "Plan ahead"), tx("Προτεραιότητες και βραχυπρόθεσμοι ή μακροπρόθεσμοι στόχοι.", "Priorities and short- or long-term goals.")]
] as const;

export const attribution = tx(
  "Το Moneywise αξιοποιεί θεματικές, επιστημονικές αρχές και δημόσιο εκπαιδευτικό υλικό του Ινστιτούτου Χρηματοοικονομικού Αλφαβητισμού και του Προγράμματος @ξία. Η ψηφιακή εμπειρία, η διαδραστική προσαρμογή και οι δραστηριότητες της πλατφόρμας αποτελούν πρωτότυπη ανάπτυξη του Moneywise.",
  "Moneywise draws on themes, educational principles and publicly available educational material from the Institute of Financial Literacy and the @ξία Programme. The digital experience, interactive adaptation and activities of the platform are original Moneywise developments."
);
export const attributionShort = tx("Εκπαιδευτική βάση: Ινστιτούτο Χρηματοοικονομικού Αλφαβητισμού και Πρόγραμμα @ξία", "Educational foundation: Institute of Financial Literacy and the @ξία Programme");

