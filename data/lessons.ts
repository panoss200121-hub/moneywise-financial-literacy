import {
  BadgeCent,
  Banknote,
  ChartNoAxesCombined,
  CreditCard,
  Landmark,
  PiggyBank,
  Scale,
  ShieldAlert
} from "lucide-react";

export type Difficulty = "Starter" | "Explorer" | "Builder" | "Advanced";

export type LessonLevel = {
  id: string;
  order: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  estimatedTime: string;
  locked: boolean;
  progress: number;
  badgeLabel: string;
  accent: string;
  icon: typeof Banknote;
};

export const lessonLevels: LessonLevel[] = [
  {
    id: "what-is-money",
    order: 1,
    title: "What is money?",
    description: "Discover why people use money, how value works, and how choices begin.",
    difficulty: "Starter",
    estimatedTime: "12 min",
    locked: false,
    progress: 100,
    badgeLabel: "Money Starter",
    accent: "from-mint to-aqua",
    icon: Banknote
  },
  {
    id: "needs-vs-wants",
    order: 2,
    title: "Needs vs Wants",
    description: "Learn to spot essentials, nice-to-haves, and trade-offs in everyday life.",
    difficulty: "Starter",
    estimatedTime: "15 min",
    locked: false,
    progress: 72,
    badgeLabel: "Choice Maker",
    accent: "from-sun to-coral",
    icon: Scale
  },
  {
    id: "saving-money",
    order: 3,
    title: "Saving money",
    description: "Set goals, delay spending, and build a habit that makes future plans easier.",
    difficulty: "Explorer",
    estimatedTime: "16 min",
    locked: false,
    progress: 34,
    badgeLabel: "Savings Spark",
    accent: "from-aqua to-grape",
    icon: PiggyBank
  },
  {
    id: "budgeting-basics",
    order: 4,
    title: "Budgeting basics",
    description: "Create a simple spending plan for pocket money, gifts, and small projects.",
    difficulty: "Explorer",
    estimatedTime: "18 min",
    locked: true,
    progress: 0,
    badgeLabel: "Budget Builder",
    accent: "from-coral to-sun",
    icon: BadgeCent
  },
  {
    id: "banks-cards-payments",
    order: 5,
    title: "Banks, cards and digital payments",
    description: "Understand accounts, cards, contactless payments, and digital money trails.",
    difficulty: "Builder",
    estimatedTime: "20 min",
    locked: true,
    progress: 0,
    badgeLabel: "Payment Pro",
    accent: "from-mint to-grape",
    icon: CreditCard
  },
  {
    id: "borrowing-debt",
    order: 6,
    title: "Borrowing and debt",
    description: "Explore loans, interest, responsibility, and why borrowing has consequences.",
    difficulty: "Builder",
    estimatedTime: "22 min",
    locked: true,
    progress: 0,
    badgeLabel: "Debt Detective",
    accent: "from-aqua to-mint",
    icon: Landmark
  },
  {
    id: "investing-basics",
    order: 7,
    title: "Investing basics",
    description: "Meet risk, reward, patience, and long-term thinking with simple examples.",
    difficulty: "Advanced",
    estimatedTime: "24 min",
    locked: true,
    progress: 0,
    badgeLabel: "Future Planner",
    accent: "from-grape to-coral",
    icon: ChartNoAxesCombined
  },
  {
    id: "online-safety-scams",
    order: 8,
    title: "Online safety and financial scams",
    description: "Practice safe money habits online and learn how to pause before sharing.",
    difficulty: "Advanced",
    estimatedTime: "20 min",
    locked: true,
    progress: 0,
    badgeLabel: "Safety Shield",
    accent: "from-sun to-mint",
    icon: ShieldAlert
  }
];

export const featuredLesson = {
  title: "The Birthday Budget",
  ageRange: "Ages 10-14",
  story:
    "Maya received 40 euros for her birthday. She wants a game, a gift for her sister, and to save for a bike light. Her challenge is to choose a plan before Saturday.",
  keyConcept:
    "A budget is a simple plan for money. It helps you decide what to spend now, what to save, and what to keep for surprises.",
  scenario:
    "Maya can spend 28 euros on a game today, buy a 9 euro gift, and save 3 euros. Or she can choose a smaller 18 euro game, buy the gift, and save 13 euros.",
  decisionPrompt: "What would you do with Maya's 40 euros?",
  options: [
    "Buy the bigger game and save what is left.",
    "Choose the smaller game, buy the gift, and save more.",
    "Save all the money and skip the party plan."
  ],
  bestChoice:
    "The balanced choice gives Maya joy today, kindness for her sister, and progress toward her bike light."
};
