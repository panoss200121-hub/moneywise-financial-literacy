export const PATHWAY_IDS = [
  "ages-6-8",
  "ages-9-12",
  "ages-13-17",
  "ages-18-29",
  "ages-30-54",
  "ages-55-plus"
] as const;

export type PathwayId = (typeof PATHWAY_IDS)[number];
export type SupportedLanguage = "el" | "en";
export type LocalizedText = Readonly<Record<SupportedLanguage, string>>;
export const DEFAULT_PATHWAY_ID: PathwayId = "ages-9-12";

const LEGACY_PATHWAY_IDS: Readonly<Record<string, PathwayId>> = {
  "6-8": "ages-6-8",
  "9-12": "ages-9-12",
  "13-17": "ages-13-17",
  "18-29": "ages-18-29",
  "30-54": "ages-30-54",
  "55+": "ages-55-plus",
  children: "ages-9-12",
  teens: "ages-13-17",
  adults: "ages-30-54",
  seniors: "ages-55-plus"
};

export type PathwayMode = "child" | "teen" | "adult" | "accessible";
export type PathwayModule = {
  lessonId: string;
  title: LocalizedText;
  objective: LocalizedText;
  outcome: LocalizedText;
  minutes: number;
};
export type PathwayConfig = {
  id: PathwayId;
  ages: string;
  mode: PathwayMode;
  title: LocalizedText;
  subtitle: LocalizedText;
  focus: Readonly<Record<SupportedLanguage, string[]>>;
  practical: { title: LocalizedText; description: LocalizedText };
  modules: PathwayModule[];
  sourceNote?: boolean;
};

const pathwayModule = (lessonId: string, minutes: number, el: string, en: string, objectiveEl: string, objectiveEn: string, outcomeEl: string, outcomeEn: string): PathwayModule => ({
  lessonId, minutes, title: { el, en }, objective: { el: objectiveEl, en: objectiveEn }, outcome: { el: outcomeEl, en: outcomeEn }
});

const pathwayDefinitions = [
  {
    id: "ages-6-8", ages: "6–8", mode: "child",
    title: { el: "Τα πρώτα μου βήματα με τα χρήματα", en: "My first money steps" },
    subtitle: { el: "Μικρές ιστορίες, καθαρές επιλογές και ασφαλής εξάσκηση.", en: "Small stories, clear choices and safe practice." },
    focus: { el: ["Τι είναι τα χρήματα", "Ανάγκες και επιθυμίες", "Μικροί στόχοι"], en: ["What money is", "Needs and wants", "Small goals"] },
    practical: { title: { el: "Ο μικρός μου κουμπαράς", en: "My small savings jar" }, description: { el: "Δοκίμασε έναν απλό, φανταστικό στόχο αποταμίευσης.", en: "Try a simple fictional saving goal." } },
    modules: [
      pathwayModule("barter-timeline", 8, "Η ιστορία του χρήματος", "The story of money", "Ανακάλυψε γιατί χρησιμοποιούμε χρήματα.", "Discover why we use money.", "Θα αναγνωρίζεις βασικές μορφές χρήματος.", "Recognise basic forms of money."),
      pathwayModule("need-want-depends", 8, "Ανάγκη ή επιθυμία;", "Need or want?", "Ξεχώρισε όσα χρειαζόμαστε από όσα θέλουμε.", "Separate needs from wants.", "Θα κάνεις πιο καθαρές καθημερινές επιλογές.", "Make clearer everyday choices."),
      pathwayModule("goal-calculator", 9, "Ένας μικρός στόχος", "A small goal", "Δες πώς μεγαλώνει ένας κουμπαράς.", "See how a savings jar grows.", "Θα χωρίζεις έναν στόχο σε μικρά βήματα.", "Break a goal into small steps.")
    ]
  },
  {
    id: "ages-9-12", ages: "9–12", mode: "child",
    title: { el: "Έξυπνες επιλογές στην καθημερινότητα", en: "Smart everyday choices" },
    subtitle: { el: "Προϋπολογισμός, αποταμίευση και αγορές με απλά παραδείγματα.", en: "Budgeting, saving and shopping through simple examples." },
    focus: { el: ["Έξυπνες αγορές", "Αποταμίευση", "Απλός προϋπολογισμός"], en: ["Smart shopping", "Saving", "Simple budgeting"] },
    practical: { title: { el: "Σχεδίασε ένα καλάθι", en: "Plan a basket" }, description: { el: "Δούλεψε με εικονικό ποσό και σύγκρινε επιλογές.", en: "Use a fictional amount and compare choices." } },
    sourceNote: true,
    modules: [
      pathwayModule("supermarket-challenge", 10, "Η πρόκληση του σούπερ μάρκετ", "Supermarket challenge", "Φτιάξε ισορροπημένο καλάθι μέσα σε όριο.", "Build a balanced basket within a limit.", "Θα συγκρίνεις ανάγκες, τιμές και διαθέσιμο ποσό.", "Compare needs, prices and available money."),
      pathwayModule("offer-or-trap", 9, "Προσφορά ή παγίδα;", "Offer or trap?", "Έλεγξε την πραγματική αξία μιας προσφοράς.", "Check the real value of an offer.", "Θα συγκρίνεις τιμές πριν αποφασίσεις.", "Compare prices before deciding."),
      pathwayModule("allowance-budget", 10, "Το εβδομαδιαίο πλάνο", "The weekly plan", "Μοίρασε ένα φανταστικό ποσό με σχέδιο.", "Allocate a fictional amount with a plan.", "Θα ισορροπείς έξοδα και αποταμίευση.", "Balance spending and saving.")
    ]
  },
  {
    id: "ages-13-17", ages: "13–17", mode: "teen",
    title: { el: "Οι πρώτες ανεξάρτητες οικονομικές αποφάσεις", en: "First independent money decisions" },
    subtitle: { el: "Πρακτικές δεξιότητες για πληρωμές, προϋπολογισμό και ψηφιακή ασφάλεια.", en: "Practical skills for payments, budgeting and digital safety." },
    focus: { el: ["Πρώτος προϋπολογισμός", "Ψηφιακές πληρωμές", "Απάτες και ασφάλεια"], en: ["First budget", "Digital payments", "Scams and safety"] },
    practical: { title: { el: "Πλάνο πρώτου εισοδήματος", en: "First-income plan" }, description: { el: "Δοκίμασε πώς μοιράζεται ένα υποθετικό μηνιαίο ποσό.", en: "Try allocating a fictional monthly amount." } },
    modules: [
      pathwayModule("allowance-budget", 12, "Ο πρώτος μου προϋπολογισμός", "My first budget", "Οργάνωσε έσοδα, έξοδα και στόχους.", "Organise income, costs and goals.", "Θα καταρτίζεις ένα απλό οικονομικό πλάνο.", "Build a simple financial plan."),
      pathwayModule("payment-methods", 12, "Πληρωμές και λογαριασμοί", "Payments and accounts", "Σύγκρινε τρόπους πληρωμής και κινδύνους.", "Compare payment methods and risks.", "Θα επιλέγεις ασφαλέστερο τρόπο πληρωμής.", "Choose a safer payment method."),
      pathwayModule("interest-inflation-safety", 14, "Ασφάλεια στις ψηφιακές συναλλαγές", "Digital transaction safety", "Εντόπισε προειδοποιητικά σημάδια απάτης.", "Spot warning signs of scams.", "Θα προστατεύεις κωδικούς και προσωπικά στοιχεία.", "Protect passwords and personal details.")
    ]
  },
  {
    id: "ages-18-29", ages: "18–29", mode: "adult",
    title: { el: "Οικονομική αυτονομία", en: "Financial independence" },
    subtitle: { el: "Οργάνωσε εισόδημα, λογαριασμούς, αποταμίευση και πρώτες μεγάλες αποφάσεις.", en: "Organise income, bills, saving and first major decisions." },
    focus: { el: ["Μηνιαίος προϋπολογισμός", "Λογαριασμοί και πληρωμές", "Αποταμίευση ασφαλείας"], en: ["Monthly budget", "Bills and payments", "Emergency saving"] },
    practical: { title: { el: "Μηνιαίο πλάνο διαβίωσης", en: "Monthly living plan" }, description: { el: "Οργάνωσε ένα υποθετικό καθαρό εισόδημα και σταθερά έξοδα.", en: "Organise fictional net income and fixed costs." } },
    modules: [
      pathwayModule("allowance-budget", 12, "Οργάνωση πρώτου εισοδήματος", "Organising first income", "Χαρτογράφησε έσοδα, πάγια και μεταβλητά έξοδα.", "Map income, fixed and variable costs.", "Θα δημιουργείς λειτουργικό μηνιαίο πλάνο.", "Create a workable monthly plan."),
      pathwayModule("payment-methods", 12, "Τραπεζικές υπηρεσίες και πληρωμές", "Banking and payments", "Κατανόησε βασικές επιλογές λογαριασμού και κάρτας.", "Understand basic account and card choices.", "Θα συγκρίνεις μέσα πληρωμής με ασφάλεια.", "Compare payment methods safely."),
      pathwayModule("interest-inflation-safety", 15, "Τόκος, πληθωρισμός και κίνδυνος", "Interest, inflation and risk", "Δες πώς αλλάζει η αξία του χρήματος.", "See how money value changes.", "Θα ερμηνεύεις βασικούς οικονομικούς κινδύνους.", "Interpret basic financial risks.")
    ]
  },
  {
    id: "ages-30-54", ages: "30–54", mode: "adult",
    title: { el: "Οικογενειακός σχεδιασμός και ανθεκτικότητα", en: "Household planning and resilience" },
    subtitle: { el: "Δομημένη οργάνωση προϋπολογισμού, στόχων και προστασίας του νοικοκυριού.", en: "Structured household budgeting, goals and protection." },
    focus: { el: ["Οικογενειακός προϋπολογισμός", "Ταμείο ασφαλείας", "Μελλοντικός σχεδιασμός"], en: ["Household budget", "Emergency fund", "Future planning"] },
    practical: { title: { el: "Έλεγχος οικογενειακού πλάνου", en: "Household plan check" }, description: { el: "Δοκίμασε ένα εικονικό σενάριο εσόδων, υποχρεώσεων και στόχων.", en: "Try a fictional income, obligations and goals scenario." } },
    modules: [
      pathwayModule("allowance-budget", 12, "Δομή οικογενειακού προϋπολογισμού", "Household budget structure", "Οργάνωσε βασικές κατηγορίες εσόδων και δαπανών.", "Organise core income and spending categories.", "Θα εντοπίζεις πλεόνασμα και πίεση ρευστότητας.", "Identify surplus and cash-flow pressure."),
      pathwayModule("goal-calculator", 12, "Στόχοι και ταμείο ασφαλείας", "Goals and emergency fund", "Μετέτρεψε έναν στόχο σε τακτικές συνεισφορές.", "Turn a goal into regular contributions.", "Θα εκτιμάς χρόνο και ρυθμό αποταμίευσης.", "Estimate saving time and pace."),
      pathwayModule("interest-inflation-safety", 15, "Προστασία και μακροπρόθεσμος σχεδιασμός", "Protection and long-term planning", "Σύνδεσε πληθωρισμό, ρίσκο και οικονομική ασφάλεια.", "Connect inflation, risk and financial safety.", "Θα αξιολογείς αποφάσεις με πιο μακρύ ορίζοντα.", "Evaluate decisions over a longer horizon.")
    ]
  },
  {
    id: "ages-55-plus", ages: "55+", mode: "accessible",
    title: { el: "Οργάνωση και οικονομική προστασία", en: "Organisation and financial protection" },
    subtitle: { el: "Καθαρά βήματα για ασφάλεια συναλλαγών, λογαριασμούς και οικονομική οργάνωση.", en: "Clear steps for payment safety, accounts and financial organisation." },
    focus: { el: ["Ασφαλείς συναλλαγές", "Οργάνωση υποχρεώσεων", "Προστασία από απάτες"], en: ["Safe transactions", "Organising obligations", "Fraud protection"] },
    practical: { title: { el: "Λίστα οικονομικής οργάνωσης", en: "Financial organisation checklist" }, description: { el: "Έλεγξε ένα υποθετικό πλάνο πληρωμών χωρίς προσωπικά στοιχεία.", en: "Review a fictional payment plan without personal details." } },
    modules: [
      pathwayModule("payment-methods", 14, "Ασφαλείς καθημερινές πληρωμές", "Safe everyday payments", "Σύγκρινε μετρητά, κάρτα και ψηφιακή πληρωμή.", "Compare cash, card and digital payment.", "Θα επιλέγεις κατάλληλο τρόπο πληρωμής.", "Choose an appropriate payment method."),
      pathwayModule("interest-inflation-safety", 15, "Αναγνώριση οικονομικής απάτης", "Recognising financial fraud", "Εντόπισε ύποπτα μηνύματα και πιεστικές προτάσεις.", "Spot suspicious messages and pressure tactics.", "Θα γνωρίζεις πότε να σταματάς και να ζητάς έλεγχο.", "Know when to stop and seek verification."),
      pathwayModule("allowance-budget", 14, "Οργάνωση λογαριασμών και υποχρεώσεων", "Organising bills and obligations", "Βάλε τις τακτικές πληρωμές σε απλή σειρά.", "Put regular payments into a simple plan.", "Θα διατηρείς καθαρή εικόνα των υποχρεώσεων.", "Maintain a clear view of obligations.")
    ]
  }
 ] satisfies readonly PathwayConfig[];

export const pathwayById: Readonly<Record<PathwayId, PathwayConfig>> = Object.freeze(
  Object.fromEntries(pathwayDefinitions.map((pathway) => [pathway.id, pathway])) as Record<PathwayId, PathwayConfig>
);

const defaultPathway = pathwayDefinitions.find((pathway) => pathway.id === DEFAULT_PATHWAY_ID);
if (!defaultPathway) {
  throw new Error(`Missing default pathway definition: ${DEFAULT_PATHWAY_ID}`);
}

for (const id of PATHWAY_IDS) {
  const pathway = pathwayById[id];
  if (!pathway) throw new Error(`Missing pathway definition: ${id}`);
  for (const language of ["el", "en"] as const) {
    if (!pathway.title[language] || !pathway.subtitle[language] || !pathway.focus[language]?.length) {
      throw new Error(`Incomplete ${language} locale for pathway: ${id}`);
    }
  }
}

export const pathways: readonly PathwayConfig[] = PATHWAY_IDS.map((id) => pathwayById[id]);

export function normalizePathwayId(value: unknown): PathwayId {
  if (typeof value !== "string") return DEFAULT_PATHWAY_ID;
  if ((PATHWAY_IDS as readonly string[]).includes(value)) return value as PathwayId;
  return LEGACY_PATHWAY_IDS[value.trim().toLowerCase()] ?? DEFAULT_PATHWAY_ID;
}

export function getPathwayById(value: unknown): PathwayConfig {
  const resolvedId = normalizePathwayId(value);
  return pathwayById[resolvedId] || defaultPathway;
}

export function getLocalizedText(value: LocalizedText, language: unknown): string {
  const locale: SupportedLanguage = language === "en" ? "en" : "el";
  return value[locale] || value.el || value.en;
}
