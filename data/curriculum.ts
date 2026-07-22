import type { Lang } from "@/lib/dictionary";

export type LocalizedText = Record<Lang, string>;

export type LessonType = "lesson" | "story" | "practice" | "miniGame" | "checkpoint";
export type Difficulty = "starter" | "explorer" | "builder" | "advanced";
export type NodeState = "completed" | "current" | "unlocked" | "locked";

export type ExerciseType =
  | "singleChoice"
  | "multipleChoice"
  | "trueFalse"
  | "matchPairs"
  | "sortItems"
  | "orderTimeline"
  | "numericInput"
  | "budgetAllocation"
  | "shoppingBasket"
  | "scenarioDecision"
  | "receiptAnalysis"
  | "savingsGoal"
  | "compoundInterest"
  | "scamSpotting"
  | "flashcard";

export type ExerciseOption = {
  id: string;
  text: LocalizedText;
  correct?: boolean;
  value?: number;
  pairId?: string;
};

export type Exercise = {
  id: string;
  type: ExerciseType;
  prompt: LocalizedText;
  explanation: LocalizedText;
  options?: ExerciseOption[];
  correctOrder?: string[];
  correctNumber?: number;
  budget?: number;
  tags: string[];
};

export type Lesson = {
  id: string;
  worldId: string;
  unitId: string;
  title: LocalizedText;
  objective: LocalizedText;
  estimatedMinutes: number;
  xpReward: number;
  coinReward: number;
  lessonType: LessonType;
  difficulty: Difficulty;
  exercises: Exercise[];
  completionMessage: LocalizedText;
  glossaryTerms: string[];
  reviewTags?: string[];
};

export type LearningUnit = {
  id: string;
  title: LocalizedText;
  lessons: Lesson[];
};

export type LearningWorld = {
  id: string;
  order: number;
  title: LocalizedText;
  objective: LocalizedText;
  theme: string;
  illustration: string;
  units: LearningUnit[];
};

export type LessonResult = {
  lessonId: string;
  accuracy: number;
  mistakes: string[];
  completedAt: string;
};

export type SavingsGoal = {
  name: string;
  cost: number;
  initialAmount: number;
  weeklyAmount: number;
};

export type BudgetScenario = {
  id: string;
  title: LocalizedText;
  income: number;
  fixedExpenses: number;
  variableExpenses: number;
};

export type Quest = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  target: number;
  rewardXp: number;
  rewardCoins: number;
  tag: string;
};

export type Achievement = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: string;
  unlockHint: LocalizedText;
};

export type GlossaryTerm = {
  id: string;
  term: LocalizedText;
  definition: LocalizedText;
  example: LocalizedText;
};

const tx = (el: string, en: string): LocalizedText => ({ el, en });

function ex(
  id: string,
  type: ExerciseType,
  promptEl: string,
  promptEn: string,
  explanationEl: string,
  explanationEn: string,
  tags: string[],
  options?: ExerciseOption[],
  extra?: Partial<Exercise>
): Exercise {
  return {
    id,
    type,
    prompt: tx(promptEl, promptEn),
    explanation: tx(explanationEl, explanationEn),
    tags,
    options,
    ...extra
  };
}

function option(id: string, el: string, en: string, correct = false, value?: number, pairId?: string): ExerciseOption {
  return { id, text: tx(el, en), correct, value, pairId };
}

function lesson(
  worldId: string,
  unitId: string,
  id: string,
  type: LessonType,
  difficulty: Difficulty,
  titleEl: string,
  titleEn: string,
  objectiveEl: string,
  objectiveEn: string,
  exercises: Exercise[],
  glossaryTerms: string[],
  xpReward = 25,
  coinReward = 12
): Lesson {
  return {
    id,
    worldId,
    unitId,
    title: tx(titleEl, titleEn),
    objective: tx(objectiveEl, objectiveEn),
    estimatedMinutes: type === "checkpoint" ? 10 : 7,
    xpReward,
    coinReward,
    lessonType: type,
    difficulty,
    exercises,
    completionMessage: tx("Μπράβο. Πρόσθεσες ακόμη ένα κομμάτι οικονομικής σκέψης.", "Nice work. You added one more piece of money thinking."),
    glossaryTerms,
    reviewTags: exercises.flatMap((item) => item.tags)
  };
}

export const learningWorlds: LearningWorld[] = [
  {
    id: "money-explorer",
    order: 1,
    title: tx("Εξερευνητής Χρήματος", "Money Explorer"),
    objective: tx("Ανακάλυψε γιατί οι άνθρωποι χρησιμοποιούν χρήματα και τι κάνει κάτι χρήσιμο ως μέσο ανταλλαγής.", "Discover why people use money and what makes something useful as a medium of exchange."),
    theme: "from-[#e6fbf5] via-[#f7fffd] to-[#fff5d6]",
    illustration: "coins",
    units: [
      {
        id: "money-basics",
        title: tx("Από την ανταλλαγή στο νόμισμα", "From barter to money"),
        lessons: [
          lesson(
            "money-explorer",
            "money-basics",
            "barter-timeline",
            "lesson",
            "starter",
            "Η ιστορία του χρήματος",
            "The story of money",
            "Βάλε στη σειρά βασικούς σταθμούς από την ανταλλαγή μέχρι το ψηφιακό χρήμα.",
            "Put key steps from barter to digital money in order.",
            [
              ex("timeline", "orderTimeline", "Βάλε τα γεγονότα στη σωστή σειρά.", "Put the events in the correct order.", "Οι άνθρωποι πέρασαν από ανταλλαγές σε νομίσματα, χαρτονομίσματα και ψηφιακές πληρωμές.", "People moved from barter to coins, notes and digital payments.", ["money-history"], [
                option("barter", "Ανταλλαγή αγαθών", "Barter"),
                option("coins", "Μεταλλικά νομίσματα", "Metal coins"),
                option("notes", "Χαρτονομίσματα", "Paper notes"),
                option("digital", "Ψηφιακές πληρωμές", "Digital payments")
              ], { correctOrder: ["barter", "coins", "notes", "digital"] }),
              ex("functions", "multipleChoice", "Ποια χαρακτηριστικά βοηθούν κάτι να λειτουργεί ως χρήμα;", "Which traits help something work as money?", "Το χρήμα χρειάζεται αποδοχή, ευκολία στη μεταφορά, ανθεκτικότητα και δυνατότητα διαίρεσης.", "Money needs acceptance, portability, durability and divisibility.", ["money-functions"], [
                option("accepted", "Το δέχονται πολλοί", "Many people accept it", true),
                option("portable", "Μεταφέρεται εύκολα", "It is easy to carry", true),
                option("spoils", "Χαλάει γρήγορα", "It spoils quickly"),
                option("divisible", "Μοιράζεται σε μικρότερες αξίες", "It divides into smaller values", true)
              ])
            ],
            ["currency", "cash", "price"]
          ),
          lesson(
            "money-explorer",
            "money-basics",
            "currency-match",
            "practice",
            "starter",
            "Νομίσματα στον κόσμο",
            "Currencies around the world",
            "Ταίριαξε νομίσματα με περιοχές και ξεχώρισε μετρητά από ψηφιακό χρήμα.",
            "Match currencies with regions and compare cash with digital money.",
            [
              ex("pairs", "matchPairs", "Ταίριαξε κάθε νόμισμα με την περιοχή του.", "Match each currency with its region.", "Τα νομίσματα έχουν ονόματα και σύμβολα που συνδέονται με χώρες ή ομάδες χωρών.", "Currencies have names and symbols linked to countries or groups of countries.", ["currency"], [
                option("eur", "Ευρώ", "Euro", true, undefined, "eu"),
                option("eu", "Ευρωζώνη", "Euro area", true, undefined, "eur"),
                option("usd", "Δολάριο ΗΠΑ", "US dollar", true, undefined, "usa"),
                option("usa", "Ηνωμένες Πολιτείες", "United States", true, undefined, "usd")
              ]),
              ex("digital-cash", "scenarioDecision", "Η Λίνα αγοράζει παγωτό σε μικρό περίπτερο. Ποια πληρωμή είναι πιο πρακτική;", "Lina buys ice cream at a small kiosk. Which payment is most practical?", "Μικρές αγορές μπορούν να γίνουν με μετρητά ή κάρτα, ανάλογα με το τι δέχεται το κατάστημα.", "Small purchases can use cash or card depending on what the shop accepts.", ["cash-digital"], [
                option("cash", "Μετρητά, αν τα δέχεται το περίπτερο", "Cash, if the kiosk accepts it", true),
                option("loan", "Δάνειο", "A loan"),
                option("password", "Να δώσει τον κωδικό της", "Give away her password")
              ])
            ],
            ["currency", "cash", "bank"]
          )
        ]
      }
    ]
  },
  {
    id: "smart-shopper",
    order: 2,
    title: tx("Έξυπνος Αγοραστής", "Smart Shopper"),
    objective: tx("Σύγκρινε τιμές, μονάδες, προσφορές και διαφημιστικά μηνύματα πριν αγοράσεις.", "Compare prices, unit prices, offers and advertising before buying."),
    theme: "from-[#fff5de] via-[#ffffff] to-[#e8f8ff]",
    illustration: "basket",
    units: [
      {
        id: "shopping-decisions",
        title: tx("Καλάθι με σχέδιο", "A planned basket"),
        lessons: [
          lesson(
            "smart-shopper",
            "shopping-decisions",
            "supermarket-challenge",
            "miniGame",
            "starter",
            "Supermarket Challenge",
            "Supermarket Challenge",
            "Φτιάξε ισορροπημένο καλάθι χωρίς να ξεπεράσεις τον εικονικό προϋπολογισμό.",
            "Build a balanced basket without exceeding the virtual budget.",
            [
              ex("basket", "shoppingBasket", "Έχεις 12 WiseCoins. Διάλεξε έξυπνο καλάθι.", "You have 12 WiseCoins. Choose a smart basket.", "Έξυπνη αγορά σημαίνει ότι κοιτάμε ανάγκες, τιμές και ισορροπία, όχι μόνο προσφορές.", "Smart shopping means checking needs, prices and balance, not only offers.", ["shopping", "budget"], [
                option("bread", "Ψωμί - 2", "Bread - 2", true, 2),
                option("fruit", "Φρούτα - 4", "Fruit - 4", true, 4),
                option("milk", "Γάλα - 3", "Milk - 3", true, 3),
                option("candy", "Μεγάλη σακούλα γλυκά - 8", "Large candy bag - 8", false, 8),
                option("water", "Νερό - 1", "Water - 1", true, 1)
              ], { budget: 12 }),
              ex("receipt", "receiptAnalysis", "Η απόδειξη γράφει 2 τεμάχια x 3 ευρώ. Πόσο πληρώθηκε;", "The receipt says 2 items x 3 euros. How much was paid?", "Η απόδειξη δείχνει ποσότητα και τιμή. 2 x 3 = 6.", "A receipt shows quantity and price. 2 x 3 = 6.", ["receipt"], undefined, { correctNumber: 6 })
            ],
            ["budget", "price", "expense"],
            30,
            18
          ),
          lesson(
            "smart-shopper",
            "shopping-decisions",
            "offer-or-trap",
            "lesson",
            "starter",
            "Προσφορά ή παγίδα;",
            "Offer or trap?",
            "Δες πότε μια προσφορά βοηθά και πότε απλώς σε σπρώχνει να ξοδέψεις.",
            "See when an offer helps and when it simply pushes you to spend.",
            [
              ex("unit-price", "singleChoice", "Ποια αγορά έχει χαμηλότερη τιμή ανά τεμάχιο;", "Which purchase has the lower price per item?", "Η σύγκριση ανά μονάδα βοηθά να δεις την πραγματική αξία.", "Unit pricing helps reveal the real value.", ["unit-price"], [
                option("a", "2 τεμάχια με 4 ευρώ", "2 items for 4 euros", true),
                option("b", "3 τεμάχια με 9 ευρώ", "3 items for 9 euros")
              ]),
              ex("ads", "trueFalse", "Η διαφήμιση πάντα δείχνει την καλύτερη επιλογή για εσένα.", "Advertising always shows the best choice for you.", "Η διαφήμιση προσπαθεί να πείσει. Εσύ συγκρίνεις πριν αποφασίσεις.", "Advertising tries to persuade. You compare before deciding.", ["advertising"], [
                option("false", "Λάθος", "False", true),
                option("true", "Σωστό", "True")
              ])
            ],
            ["price", "expense"]
          )
        ]
      }
    ]
  },
  {
    id: "needs-wants",
    order: 3,
    title: tx("Ανάγκες ή Επιθυμίες;", "Needs or Wants?"),
    objective: tx("Ξεχώρισε ανάγκες, επιθυμίες και επιλογές που εξαρτώνται από το πλαίσιο.", "Separate needs, wants and choices that depend on context."),
    theme: "from-[#f0ecff] via-[#ffffff] to-[#e7fbf6]",
    illustration: "compass",
    units: [
      {
        id: "priorities",
        title: tx("Προτεραιότητες", "Priorities"),
        lessons: [
          lesson(
            "needs-wants",
            "priorities",
            "need-want-depends",
            "lesson",
            "explorer",
            "Ανάγκη, επιθυμία ή εξαρτάται;",
            "Need, want or depends?",
            "Κατάταξε επιλογές και εξήγησε γιατί το πλαίσιο αλλάζει την απάντηση.",
            "Sort choices and explain why context can change the answer.",
            [
              ex("sort", "sortItems", "Ταξινόμησε: φάρμακο, συλλεκτικό παιχνίδι, ταξί.", "Sort: medicine, collectible toy, taxi.", "Κάποιες επιλογές είναι ανάγκες, άλλες επιθυμίες, και κάποιες εξαρτώνται από την περίπτωση.", "Some choices are needs, some wants, and some depend on the situation.", ["needs-wants"], [
                option("medicine", "Φάρμακο: ανάγκη", "Medicine: need", true),
                option("toy", "Συλλεκτικό παιχνίδι: επιθυμία", "Collectible toy: want", true),
                option("taxi", "Ταξί: εξαρτάται", "Taxi: depends", true)
              ]),
              ex("pressure", "scenarioDecision", "Οι φίλοι αγοράζουν ακριβό αξεσουάρ. Τι βοηθά πριν αποφασίσεις;", "Friends buy an expensive accessory. What helps before deciding?", "Η πίεση από συνομηλίκους είναι πραγματική. Παίρνουμε ανάσα, κοιτάμε στόχους και προϋπολογισμό.", "Peer pressure is real. Pause, check goals and budget.", ["peer-pressure"], [
                option("pause", "Σκέφτομαι τον στόχο και τον προϋπολογισμό μου", "Check my goal and budget", true),
                option("copy", "Αγοράζω αμέσως για να μη μείνω απ' έξω", "Buy immediately to fit in")
              ])
            ],
            ["need", "want"]
          )
        ]
      }
    ]
  },
  {
    id: "saving-quest",
    order: 4,
    title: tx("Αποστολή Αποταμίευσης", "Saving Quest"),
    objective: tx("Θέσε στόχους, υπολόγισε χρόνο και δες πώς η συνέπεια χτίζει αποτέλεσμα.", "Set goals, calculate time and see how consistency builds results."),
    theme: "from-[#e6fbf5] via-[#ffffff] to-[#fff1f0]",
    illustration: "piggy",
    units: [
      {
        id: "saving-goals",
        title: tx("Στόχοι και υπομονή", "Goals and patience"),
        lessons: [
          lesson(
            "saving-quest",
            "saving-goals",
            "goal-calculator",
            "practice",
            "explorer",
            "Υπολογιστής στόχου",
            "Goal calculator",
            "Διάλεξε κόστος, αρχικό ποσό και εβδομαδιαία αποταμίευση.",
            "Choose cost, starting amount and weekly saving.",
            [
              ex("savings", "savingsGoal", "Στόχος 60 ευρώ, έχεις 15 και βάζεις 5 την εβδομάδα. Πόσες εβδομάδες χρειάζονται;", "Goal 60 euros, you have 15 and save 5 weekly. How many weeks are needed?", "Μένουν 45 ευρώ. Με 5 ευρώ την εβδομάδα χρειάζονται 9 εβδομάδες.", "45 euros remain. At 5 euros per week, it takes 9 weeks.", ["saving"], undefined, { correctNumber: 9 }),
              ex("delay", "singleChoice", "Τι σημαίνει καθυστερημένη ικανοποίηση;", "What does delayed gratification mean?", "Περιμένω λίγο για κάτι που έχει μεγαλύτερη αξία για εμένα.", "Waiting a little for something more valuable to me.", ["delayed-gratification"], [
                option("wait", "Περιμένω για σημαντικότερο στόχο", "Wait for a more important goal", true),
                option("now", "Αγοράζω πάντα αμέσως", "Always buy immediately")
              ])
            ],
            ["saving", "budget"]
          )
        ]
      }
    ]
  },
  {
    id: "budget-builder",
    order: 5,
    title: tx("Χτίζω Προϋπολογισμό", "Budget Builder"),
    objective: tx("Μάθε έσοδα, έξοδα, πλεόνασμα, έλλειμμα και απλές επιχειρηματικές αποφάσεις.", "Learn income, expenses, surplus, deficit and simple business choices."),
    theme: "from-[#fff7dd] via-[#ffffff] to-[#f0ecff]",
    illustration: "ledger",
    units: [
      {
        id: "budgeting",
        title: tx("Ισορροπία χρημάτων", "Money balance"),
        lessons: [
          lesson(
            "budget-builder",
            "budgeting",
            "allowance-budget",
            "lesson",
            "builder",
            "Το εβδομαδιαίο πλάνο",
            "The weekly plan",
            "Μοίρασε χαρτζιλίκι σε ανάγκες, επιθυμίες και αποταμίευση.",
            "Allocate allowance to needs, wants and saving.",
            [
              ex("allocation", "budgetAllocation", "Έχεις 20 ευρώ. Κράτησε τουλάχιστον 5 για αποταμίευση και μην ξεπεράσεις τα 20.", "You have 20 euros. Keep at least 5 for saving and do not exceed 20.", "Ο καλός προϋπολογισμός σέβεται το όριο και αφήνει χώρο για στόχους.", "A good budget respects the limit and leaves room for goals.", ["budget"], [
                option("needs", "Ανάγκες", "Needs", true, 8),
                option("wants", "Επιθυμίες", "Wants", true, 7),
                option("save", "Αποταμίευση", "Saving", true, 5)
              ], { budget: 20 }),
              ex("profit", "numericInput", "Χυμοί: έσοδα 30, κόστος 18. Ποιο είναι το κέρδος;", "Juice stand: revenue 30, cost 18. What is profit?", "Κέρδος = έσοδα - κόστος, άρα 12.", "Profit = revenue - cost, so 12.", ["profit"], undefined, { correctNumber: 12 })
            ],
            ["income", "expense", "budget"]
          )
        ]
      }
    ]
  },
  {
    id: "banking-world",
    order: 6,
    title: tx("Τραπεζικός Κόσμος", "Banking World"),
    objective: tx("Κατανόησε λογαριασμούς, κάρτες και πώς προστατεύεις PIN και στοιχεία πληρωμής.", "Understand accounts, cards and how to protect PINs and payment details."),
    theme: "from-[#e8f8ff] via-[#ffffff] to-[#e6fbf5]",
    illustration: "bank",
    units: [
      {
        id: "payments",
        title: tx("Ασφαλείς πληρωμές", "Safe payments"),
        lessons: [
          lesson(
            "banking-world",
            "payments",
            "payment-methods",
            "story",
            "builder",
            "Ποια πληρωμή ταιριάζει;",
            "Which payment fits?",
            "Διάλεξε τρόπο πληρωμής και δες τη συνέπεια κάθε επιλογής.",
            "Choose a payment method and see the consequence.",
            [
              ex("method", "scenarioDecision", "Η Νίκη αγοράζει βιβλίο online με γονέα δίπλα της. Ποια επιλογή είναι ασφαλέστερη;", "Niki buys a book online with a parent nearby. Which choice is safest?", "Για online αγορές, ένας έμπιστος ενήλικας βοηθά να ελεγχθεί το κατάστημα και η πληρωμή.", "For online purchases, a trusted adult helps check the store and payment.", ["payments"], [
                option("adult", "Ζητά βοήθεια από γονέα πριν πληρώσει", "Ask a parent before paying", true),
                option("pin", "Στέλνει PIN σε μήνυμα", "Send PIN in a message"),
                option("borrow", "Χρησιμοποιεί πιστωτική χωρίς να καταλαβαίνει", "Use credit without understanding")
              ]),
              ex("card-difference", "singleChoice", "Ποια κάρτα συνδέεται συνήθως με χρήματα που ήδη υπάρχουν στον λογαριασμό;", "Which card usually uses money already in the account?", "Η χρεωστική κάρτα ξοδεύει χρήματα που υπάρχουν. Η πιστωτική είναι μορφή δανεισμού.", "A debit card spends money you have. A credit card is a form of borrowing.", ["cards"], [
                option("debit", "Χρεωστική κάρτα", "Debit card", true),
                option("credit", "Πιστωτική κάρτα", "Credit card")
              ])
            ],
            ["bank", "bank-account", "debit-card", "credit-card"]
          )
        ]
      }
    ]
  },
  {
    id: "grow-protect",
    order: 7,
    title: tx("Ανάπτυξη & Προστασία", "Grow and Protect"),
    objective: tx("Δες τόκο, πληθωρισμό, ρίσκο και απάτες με φανταστικά εκπαιδευτικά σενάρια.", "Explore interest, inflation, risk and scams with fictional educational scenarios."),
    theme: "from-[#f0ecff] via-[#ffffff] to-[#fff5de]",
    illustration: "shield",
    units: [
      {
        id: "interest-safety",
        title: tx("Αύξηση και ασφάλεια", "Growth and safety"),
        lessons: [
          lesson(
            "grow-protect",
            "interest-safety",
            "interest-inflation-safety",
            "checkpoint",
            "advanced",
            "Τόκος, πληθωρισμός και απάτες",
            "Interest, inflation and scams",
            "Χρησιμοποίησε φανταστικούς αριθμούς για να δεις πώς αλλάζει η αξία και πώς προστατεύεσαι.",
            "Use fictional numbers to see how value changes and how to stay safe.",
            [
              ex("compound", "compoundInterest", "Φανταστικός τόκος 5% για 100 WiseCoins για 2 χρόνια. Περίπου πόσα γίνονται με ετήσιο ανατοκισμό;", "Fictional 5% interest on 100 WiseCoins for 2 years. About how much with yearly compounding?", "100 x 1.05 x 1.05 = 110.25. Δεν είναι υπόσχεση απόδοσης, μόνο εκπαιδευτικό παράδειγμα.", "100 x 1.05 x 1.05 = 110.25. This is not a return promise, only an educational example.", ["interest"], undefined, { correctNumber: 110 }),
              ex("scam", "scamSpotting", "Μήνυμα: «Κέρδισες βραβείο, γράψε τώρα τον κωδικό κάρτας». Τι κάνεις;", "Message: 'You won a prize, enter your card code now.' What do you do?", "Υπόσχεση βραβείου και πίεση για προσωπικά στοιχεία είναι κόκκινες σημαίες.", "Prize promises and pressure for personal details are red flags.", ["scams"], [
                option("stop", "Σταματώ και ρωτώ έμπιστο ενήλικα", "Stop and ask a trusted adult", true),
                option("send", "Στέλνω τα στοιχεία για να μη χάσω το βραβείο", "Send details to keep the prize")
              ]),
              ex("inflation", "singleChoice", "Αν οι τιμές ανεβαίνουν, τι συμβαίνει συνήθως στην αγοραστική δύναμη των ίδιων χρημάτων;", "If prices rise, what usually happens to the purchasing power of the same money?", "Με πληθωρισμό, τα ίδια χρήματα αγοράζουν λιγότερα από πριν.", "With inflation, the same money buys less than before.", ["inflation"], [
                option("less", "Αγοράζουν λιγότερα", "They buy less", true),
                option("more", "Αγοράζουν πάντα περισσότερα", "They always buy more")
              ])
            ],
            ["interest", "interest-rate", "inflation", "investment", "risk"],
            35,
            20
          )
        ]
      }
    ]
  },
  {
    id: "money-society",
    order: 8,
    title: tx("Χρήμα & Κοινωνία", "Money and Society"),
    objective: tx("Δες πώς χρήματα, χρόνος και επιλογές μπορούν να στηρίξουν την κοινότητα.", "See how money, time and choices can support a community."),
    theme: "from-[#fff1f0] via-[#ffffff] to-[#e6fbf5]",
    illustration: "community",
    units: [
      {
        id: "community-impact",
        title: tx("Αντίκτυπος", "Impact"),
        lessons: [
          lesson(
            "money-society",
            "community-impact",
            "community-mission",
            "miniGame",
            "advanced",
            "Αποστολή κοινότητας",
            "Community mission",
            "Μοίρασε περιορισμένα χρήματα και χρόνο σε κοινωνικούς σκοπούς.",
            "Allocate limited money and volunteer time across community causes.",
            [
              ex("impact", "budgetAllocation", "Έχεις 10 WiseCoins και 4 ώρες. Στήριξε καθαρισμό πάρκου, τράπεζα τροφίμων ή ανακύκλωση.", "You have 10 WiseCoins and 4 hours. Support park cleanup, food bank or recycling.", "Η κοινωνική προσφορά μπορεί να γίνει με χρήματα, χρόνο ή υπεύθυνες καθημερινές επιλογές.", "Community support can use money, time or responsible daily choices.", ["community"], [
                option("park", "Καθαρισμός πάρκου - 3", "Park cleanup - 3", true, 3),
                option("food", "Τράπεζα τροφίμων - 5", "Food bank - 5", true, 5),
                option("recycle", "Ανακύκλωση - 2", "Recycling - 2", true, 2)
              ], { budget: 10 }),
              ex("flash", "flashcard", "Κάρτα: Τι είναι εθελοντισμός;", "Card: What is volunteering?", "Εθελοντισμός είναι να προσφέρεις χρόνο και βοήθεια χωρίς να περιμένεις πληρωμή.", "Volunteering means giving time and help without expecting payment.", ["volunteering"])
            ],
            ["donation", "volunteering"],
            30,
            18
          )
        ]
      }
    ]
  }
];

export const allLessons = learningWorlds.flatMap((world) => world.units.flatMap((unit) => unit.lessons));

export const dailyQuests: Quest[] = [
  {
    id: "complete-one",
    title: tx("Ολοκλήρωσε ένα μάθημα", "Complete one lesson"),
    description: tx("Κέρδισε πρόοδο στη σημερινή διαδρομή.", "Make progress on today's path."),
    target: 1,
    rewardXp: 10,
    rewardCoins: 5,
    tag: "lesson"
  },
  {
    id: "earn-xp",
    title: tx("Κέρδισε 30 XP", "Earn 30 XP"),
    description: tx("Μάζεψε XP από μάθημα ή εξάσκηση.", "Collect XP from a lesson or practice."),
    target: 30,
    rewardXp: 5,
    rewardCoins: 8,
    tag: "xp"
  },
  {
    id: "correct-streak",
    title: tx("Πέντε σωστά στη σειρά", "Five correct in a row"),
    description: tx("Απάντησε προσεκτικά για σερί σωστών απαντήσεων.", "Answer carefully for a correct-answer streak."),
    target: 5,
    rewardXp: 15,
    rewardCoins: 10,
    tag: "accuracy"
  },
  {
    id: "budget-activity",
    title: tx("Κάνε μία άσκηση προϋπολογισμού", "Complete one budget activity"),
    description: tx("Δούλεψε με όρια, έσοδα ή έξοδα.", "Practice limits, income or expenses."),
    target: 1,
    rewardXp: 10,
    rewardCoins: 6,
    tag: "budget"
  },
  {
    id: "review-three",
    title: tx("Επανάλαβε τρεις αδύναμες έννοιες", "Review three weak concepts"),
    description: tx("Γύρνα στα λάθη και κάνε τα δυνατό σημείο.", "Turn mistakes into strengths."),
    target: 3,
    rewardXp: 12,
    rewardCoins: 6,
    tag: "review"
  }
];

export const weeklyMission: Quest = {
  id: "weekly-wise-path",
  title: tx("Εβδομαδιαία αποστολή: Σταθερός εξερευνητής", "Weekly mission: Steady explorer"),
  description: tx("Ολοκλήρωσε τρία μαθήματα και μία εξάσκηση μέσα στην εβδομάδα.", "Complete three lessons and one practice session this week."),
  target: 4,
  rewardXp: 50,
  rewardCoins: 35,
  tag: "weekly"
};

export const achievements: Achievement[] = [
  { id: "first-wise-step", title: tx("Πρώτο Σοφό Βήμα", "First Wise Step"), description: tx("Ολοκλήρωσες το πρώτο μάθημα.", "Completed the first lesson."), icon: "spark", unlockHint: tx("Ολοκλήρωσε οποιοδήποτε μάθημα.", "Complete any lesson.") },
  { id: "smart-shopper", title: tx("Έξυπνος Αγοραστής", "Smart Shopper"), description: tx("Πέρασες την πρόκληση του supermarket.", "Completed the supermarket challenge."), icon: "basket", unlockHint: tx("Ολοκλήρωσε το Supermarket Challenge.", "Complete the Supermarket Challenge.") },
  { id: "savings-starter", title: tx("Αρχάριος Αποταμίευσης", "Savings Starter"), description: tx("Έφτιαξες στόχο αποταμίευσης.", "Built a saving goal."), icon: "piggy", unlockHint: tx("Ολοκλήρωσε τον υπολογιστή στόχου.", "Complete the goal calculator.") },
  { id: "budget-builder", title: tx("Χτίστης Προϋπολογισμού", "Budget Builder"), description: tx("Ισορρόπησες έσοδα και έξοδα.", "Balanced income and expenses."), icon: "ledger", unlockHint: tx("Ολοκλήρωσε μάθημα προϋπολογισμού.", "Complete a budgeting lesson.") },
  { id: "banking-explorer", title: tx("Εξερευνητής Τράπεζας", "Banking Explorer"), description: tx("Διάλεξες ασφαλή τρόπο πληρωμής.", "Chose a safe payment method."), icon: "bank", unlockHint: tx("Ολοκλήρωσε τον Τραπεζικό Κόσμο.", "Complete Banking World.") },
  { id: "scam-spotter", title: tx("Ανιχνευτής Απάτης", "Scam Spotter"), description: tx("Εντόπισες ύποπτο οικονομικό μήνυμα.", "Spotted a suspicious money message."), icon: "shield", unlockHint: tx("Πέρασε το scam-spotting παιχνίδι.", "Pass the scam-spotting game.") },
  { id: "seven-day-streak", title: tx("Σερί 7 Ημερών", "Seven-Day Streak"), description: tx("Κράτησες εβδομαδιαίο σερί.", "Kept a weekly streak."), icon: "flame", unlockHint: tx("Μάθε για 7 ημέρες.", "Learn for 7 days.") },
  { id: "perfect-lesson", title: tx("Άριστο Μάθημα", "Perfect Lesson"), description: tx("Πέτυχες 100% σε μάθημα.", "Scored 100% in a lesson."), icon: "star", unlockHint: tx("Απάντησε σωστά σε όλα.", "Answer everything correctly.") },
  { id: "community-champion", title: tx("Πρωταθλητής Κοινότητας", "Community Champion"), description: tx("Στήριξες κοινωνικό σκοπό.", "Supported a community cause."), icon: "heart", unlockHint: tx("Ολοκλήρωσε την αποστολή κοινότητας.", "Complete the community mission.") }
];

export const glossaryTerms: GlossaryTerm[] = [
  { id: "need", term: tx("ανάγκη", "need"), definition: tx("Κάτι σημαντικό για υγεία, ασφάλεια ή βασική καθημερινή ζωή.", "Something important for health, safety or basic daily life."), example: tx("Το καθαρό νερό είναι ανάγκη.", "Clean water is a need.") },
  { id: "want", term: tx("επιθυμία", "want"), definition: tx("Κάτι που θα θέλαμε, αλλά δεν είναι απαραίτητο.", "Something we would like but do not strictly need."), example: tx("Ένα επιπλέον παιχνίδι είναι συχνά επιθυμία.", "An extra game is often a want.") },
  { id: "income", term: tx("έσοδο", "income"), definition: tx("Χρήματα που μπαίνουν στο ταμείο ή στο πορτοφόλι.", "Money that comes into a wallet or budget."), example: tx("Το χαρτζιλίκι είναι έσοδο.", "Allowance is income.") },
  { id: "expense", term: tx("έξοδο", "expense"), definition: tx("Χρήματα που φεύγουν για αγορά ή πληρωμή.", "Money spent on a purchase or payment."), example: tx("Το εισιτήριο είναι έξοδο.", "A ticket is an expense.") },
  { id: "saving", term: tx("αποταμίευση", "saving"), definition: tx("Κρατάμε χρήματα για μελλοντικό στόχο ή ανάγκη.", "Keeping money for a future goal or need."), example: tx("Βάζω 3 ευρώ την εβδομάδα στον κουμπαρά.", "I put 3 euros a week in a money jar.") },
  { id: "budget", term: tx("προϋπολογισμός", "budget"), definition: tx("Σχέδιο για το πώς θα χρησιμοποιηθούν τα χρήματα.", "A plan for how money will be used."), example: tx("Χωρίζω 20 ευρώ σε έξοδα και αποταμίευση.", "I split 20 euros between spending and saving.") },
  { id: "price", term: tx("τιμή", "price"), definition: tx("Πόσα χρήματα ζητούνται για ένα αγαθό ή υπηρεσία.", "How much money is asked for a good or service."), example: tx("Η τιμή του βιβλίου είναι 8 ευρώ.", "The book price is 8 euros.") },
  { id: "currency", term: tx("νόμισμα", "currency"), definition: tx("Το επίσημο χρήμα που χρησιμοποιείται σε μια χώρα ή περιοχή.", "The official money used in a country or region."), example: tx("Στην Ελλάδα χρησιμοποιείται το ευρώ.", "Greece uses the euro.") },
  { id: "cash", term: tx("μετρητά", "cash"), definition: tx("Χρήματα σε κέρματα ή χαρτονομίσματα.", "Money in coins or notes."), example: tx("Πλήρωσα με μετρητά στο περίπτερο.", "I paid cash at the kiosk.") },
  { id: "bank", term: tx("τράπεζα", "bank"), definition: tx("Οργανισμός που κρατά χρήματα, κάνει πληρωμές και δίνει δάνεια.", "An organization that stores money, processes payments and lends."), example: tx("Η τράπεζα κρατά χρήματα σε λογαριασμό.", "A bank keeps money in an account.") },
  { id: "bank-account", term: tx("τραπεζικός λογαριασμός", "bank account"), definition: tx("Χώρος στην τράπεζα όπου καταγράφονται χρήματα και κινήσεις.", "A bank record where money and transactions are tracked."), example: tx("Η κατάθεση μπαίνει στον λογαριασμό.", "A deposit goes into the account.") },
  { id: "debit-card", term: tx("χρεωστική κάρτα", "debit card"), definition: tx("Κάρτα που συνήθως χρησιμοποιεί χρήματα που υπάρχουν στον λογαριασμό.", "A card that usually uses money already in the account."), example: tx("Πληρώνω με χρεωστική για μικρή αγορά.", "I pay with debit for a small purchase.") },
  { id: "credit-card", term: tx("πιστωτική κάρτα", "credit card"), definition: tx("Κάρτα που επιτρέπει αγορά με χρήματα που θα πληρωθούν αργότερα.", "A card that lets someone buy now and pay later."), example: tx("Η πιστωτική χρειάζεται προσοχή γιατί δημιουργεί χρέος.", "Credit needs care because it creates debt.") },
  { id: "interest", term: tx("τόκος", "interest"), definition: tx("Επιπλέον ποσό που προστίθεται σε αποταμίευση ή δάνειο.", "Extra money added to savings or a loan."), example: tx("Ο τόκος στο demo είναι φανταστικός.", "The demo interest is fictional.") },
  { id: "interest-rate", term: tx("επιτόκιο", "interest rate"), definition: tx("Ποσοστό που δείχνει πόσος τόκος υπολογίζεται.", "The percentage used to calculate interest."), example: tx("Επιτόκιο 5% στο μάθημα σημαίνει 5 στα 100.", "A 5% lesson rate means 5 per 100.") },
  { id: "loan", term: tx("δάνειο", "loan"), definition: tx("Χρήματα που παίρνει κάποιος και πρέπει να επιστρέψει.", "Money someone receives and must repay."), example: tx("Ένα δάνειο έχει κανόνες και συνέπειες.", "A loan has rules and consequences.") },
  { id: "inflation", term: tx("πληθωρισμός", "inflation"), definition: tx("Όταν οι τιμές ανεβαίνουν γενικά και τα ίδια χρήματα αγοράζουν λιγότερα.", "When prices rise generally and the same money buys less."), example: tx("Με πληθωρισμό, 10 ευρώ μπορεί να αγοράζουν λιγότερα.", "With inflation, 10 euros may buy less.") },
  { id: "investment", term: tx("επένδυση", "investment"), definition: tx("Χρήματα που μπαίνουν σε κάτι με ελπίδα μελλοντικής αξίας, αλλά με ρίσκο.", "Money put into something hoping for future value, with risk."), example: tx("Καμία απόδοση δεν είναι εγγυημένη.", "No return is guaranteed.") },
  { id: "risk", term: tx("ρίσκο", "risk"), definition: tx("Η πιθανότητα να μη συμβεί αυτό που περιμένουμε ή να χάσουμε κάτι.", "The chance that things do not go as expected or something is lost."), example: tx("Υψηλό ρίσκο θέλει μεγάλη προσοχή.", "High risk needs great care.") },
  { id: "donation", term: tx("δωρεά", "donation"), definition: tx("Προσφορά χρημάτων ή πραγμάτων για να βοηθηθεί κάποιος σκοπός.", "Giving money or items to support a cause."), example: tx("Δωρίζω βιβλία σε βιβλιοθήκη.", "I donate books to a library.") },
  { id: "volunteering", term: tx("εθελοντισμός", "volunteering"), definition: tx("Προσφορά χρόνου και βοήθειας χωρίς πληρωμή.", "Giving time and help without payment."), example: tx("Βοηθώ στον καθαρισμό της γειτονιάς.", "I help clean the neighborhood.") }
];

export const practiceHubs = [
  { id: "mistakes", title: tx("Επανάληψη λαθών", "Mistakes Review"), tag: "review" },
  { id: "quick", title: tx("Γρήγορη πρακτική", "Quick Practice"), tag: "quick" },
  { id: "vocabulary", title: tx("Λεξιλόγιο", "Vocabulary Review"), tag: "vocabulary" },
  { id: "budget", title: tx("Πρακτική προϋπολογισμού", "Budget Practice"), tag: "budget" },
  { id: "shopping", title: tx("Έξυπνες αγορές", "Smart Shopping Practice"), tag: "shopping" },
  { id: "safety", title: tx("Πρακτική ασφάλειας", "Safety Practice"), tag: "scams" }
];

export function getLessonById(id: string) {
  return allLessons.find((lessonItem) => lessonItem.id === id) ?? allLessons[0];
}

export function getNextLessonId(completedLessons: string[]) {
  return allLessons.find((lessonItem) => !completedLessons.includes(lessonItem.id))?.id ?? allLessons[0].id;
}
