import type { QuizQuestion } from "@/data/quiz";

export type Lang = "el" | "en";

export const dictionary = {
  el: {
    languageName: "Ελληνικά",
    nav: {
      tagline: "Έξυπνα χρήματα, φωτεινό μέλλον.",
      learningPath: "Μάθηση",
      lessons: "Μαθήματα",
      quiz: "Κουίζ",
      dashboard: "Πρόοδος",
      parentsTeachers: "Γονείς & Εκπαιδευτικοί",
      start: "Έναρξη",
      language: "Γλώσσα"
    },
    common: {
      startLearning: "Ξεκίνα τώρα",
      exploreLessons: "Δες μαθήματα",
      openLesson: "Άνοιγμα μαθήματος",
      previousLevel: "Ολοκλήρωσε το προηγούμενο",
      unlocked: "Ξεκλείδωτο",
      locked: "Κλειδωμένο",
      level: "Επίπεδο",
      totalProgress: "Συνολική πρόοδος",
      score: "Σκορ",
      question: "Ερώτηση",
      of: "από",
      nextQuestion: "Επόμενη ερώτηση",
      seeResult: "Δες αποτέλεσμα",
      correct: "Σωστή επιλογή.",
      wrong: "Όχι ακόμα.",
      tryAgain: "Ξανά",
      viewDashboard: "Δες την πρόοδο",
      continueLearning: "Συνέχισε",
      nextLesson: "Επόμενο μάθημα",
      takeQuiz: "Πλήρες κουίζ",
      completedLessons: "Ολοκληρωμένα μαθήματα",
      badgesEarned: "Σήματα",
      learningStreak: "Σερί μάθησης"
    },
    home: {
      eyebrow: "Πλατφόρμα χρηματοοικονομικής εκπαίδευσης",
      heroTitle: "Οικονομική σκέψη μέσα από μικρές αποστολές.",
      heroSubheadline:
        "Το Moneywise βοηθά παιδιά 10-12 ετών να κατανοήσουν χρήματα, ανάγκες, αποταμίευση, προϋπολογισμό και ψηφιακή ασφάλεια μέσα από παιχνίδια, ιστορίες και σύντομα κουίζ.",
      heroStats: {
        level: "Επίπεδο",
        next: "Επόμενο: 65%",
        progress: "Συνολική πρόοδος",
        badge: "Νέο σήμα",
        badgeName: "Έξυπνος Αποταμιευτής",
        streak: "Σερί",
        streakValue: "7 ημέρες"
      },
      featuresTitle: "Διαδραστικά μαθήματα, αποστολές και ασφαλής πρόοδος.",
      features: [
        ["Μικρά μαθήματα", "Σύντομες κάρτες, άμεση εξάσκηση και ξεκάθαρα παραδείγματα."],
        ["Παιχνίδια & αποστολές", "XP, WiseCoins, καθημερινές αποστολές και φιλική επιβράβευση."],
        ["Κουίζ & προκλήσεις", "Άμεση ανατροφοδότηση και επανάληψη στα σημεία που χρειάζονται δουλειά."],
        ["Ασφαλές περιβάλλον", "Χωρίς πραγματικά χρήματα, λογαριασμούς, αγορές ή τραπεζικές συνδέσεις."],
        ["Για ενήλικες", "Υλικό για ήρεμες συζητήσεις στο σπίτι και στην τάξη."]
      ],
      whyTitle: "Γιατί αξίζει να μαθαίνουν τα παιδιά για τα χρήματα;",
      whyBody: "Η οικονομική παιδεία χτίζει αυτοπεποίθηση, υπομονή και καλύτερες καθημερινές αποφάσεις.",
      whyEyebrow: "Οικονομική αυτοπεποίθηση",
      whyCards: [
        ["Καλύτερες επιλογές", "Σκέφτονται πριν ξοδέψουν και συγκρίνουν επιλογές."],
        ["Στόχοι αποταμίευσης", "Συνδέουν μικρές συνήθειες με μεγαλύτερα σχέδια."],
        ["Προστασία", "Αναγνωρίζουν ύποπτα μηνύματα και οικονομικές παγίδες."],
        ["Υπευθυνότητα", "Μαθαίνουν ότι κάθε επιλογή έχει αποτέλεσμα."]
      ],
      levelsTitle: "Οκτώ κόσμοι μάθησης.",
      levelsBody: "Από την ιστορία του χρήματος μέχρι την κοινωνική προσφορά και την ψηφιακή ασφάλεια.",
      educationalFoundationEyebrow: "Επιστημονική και Εκπαιδευτική Βάση",
      educationalFoundationTitle: "Εκπαιδευτική βάση για υπεύθυνη οικονομική σκέψη.",
      quizPreviewTitle: "Γρήγορη εξάσκηση",
      quizPreviewBody: "Απαντήσεις, εξηγήσεις και σκορ που κρατούν τη μάθηση ζωντανή.",
      quizPreviewQuestion: "Ανάγκες ή επιθυμίες;",
      quizPreviewAnswers: ["Καθαρό νερό", "Νέα θήκη κινητού", "Εισιτήριο συναυλίας"],
      dashboardPreviewTitle: "Πίνακας προόδου",
      dashboardPreviewBody: "Σερί, XP, WiseCoins, σήματα και προτεινόμενο επόμενο βήμα.",
      parentsTitle: "Υποστήριξη για γονείς και εκπαιδευτικούς",
      parentsBody: "Πρακτικές δραστηριότητες και ασφαλείς συζητήσεις χωρίς πραγματικά οικονομικά δεδομένα.",
      finalCtaTitle: "Μικρά μαθήματα σήμερα. Πιο δυνατές επιλογές αύριο.",
      finalCtaBody: "Ξεκίνησε τη μαθησιακή διαδρομή του Moneywise.",
      spendGameTitle: "Έξυπνη δαπάνη",
      spendGameLabels: ["Ανάγκη", "Επιθυμία", "Αποταμίευση"]
    },
    lessons: [
      ["Εξερευνητής Χρήματος", "Ανταλλαγές, ιστορία χρήματος, νομίσματα, μετρητά και ψηφιακές πληρωμές.", "Αρχικό", "Money Explorer"],
      ["Έξυπνος Αγοραστής", "Σύγκριση τιμών, προσφορές, διαφήμιση και προσεκτικές αγορές.", "Αρχικό", "Smart Shopper"],
      ["Ανάγκες ή Επιθυμίες;", "Προτεραιότητες, αγαθά, υπηρεσίες και υπεύθυνη κατανάλωση.", "Εξερεύνηση", "Choice Maker"],
      ["Αποστολή Αποταμίευσης", "Στόχοι, συνέπεια, υπομονή και ταμείο ανάγκης.", "Εξερεύνηση", "Savings Starter"],
      ["Χτίζω Προϋπολογισμό", "Έσοδα, έξοδα, πλεόνασμα, έλλειμμα και μικρή επιχειρηματικότητα.", "Χτίσιμο", "Budget Builder"],
      ["Τραπεζικός Κόσμος", "Λογαριασμοί, κάρτες, ATM, PIN και ασφαλείς ψηφιακές πληρωμές.", "Χτίσιμο", "Banking Explorer"],
      ["Ανάπτυξη & Προστασία", "Τόκος, πληθωρισμός, ρίσκο, απάτες και προστασία δεδομένων.", "Προχωρημένο", "Scam Spotter"],
      ["Χρήμα & Κοινωνία", "Προσφορά, εθελοντισμός, βιωσιμότητα και κοινωνικός αντίκτυπος.", "Προχωρημένο", "Community Champion"]
    ] satisfies string[][],
    learningPath: {
      eyebrow: "Μαθησιακή διαδρομή",
      title: "Μια κάθετη πορεία με αποστολές, παιχνίδια και checkpoints.",
      body: "Ολοκλήρωσε μαθήματα, κέρδισε XP και γύρνα σε έννοιες που χρειάζονται εξάσκηση.",
      progressHelper: "Η πρόοδος αποθηκεύεται τοπικά στη συσκευή για το demo."
    },
    lesson: {
      eyebrow: "Ηλικίες 10-12",
      title: "Ο προϋπολογισμός των γενεθλίων",
      intro: "Ένα σύντομο μάθημα για επιλογές, χαρά σήμερα και στόχους για αργότερα.",
      storyTitle: "Κάρτα ιστορίας",
      story: "Η Μάγια έχει 40 ευρώ για τα γενέθλιά της και θέλει παιχνίδι, δώρο για την αδελφή της και αποταμίευση.",
      conceptTitle: "Βασική έννοια",
      concept: "Ο προϋπολογισμός είναι σχέδιο για τα χρήματα. Σε βοηθά να αποφασίσεις τι ξοδεύεις, τι αποταμιεύεις και τι κρατάς για απρόοπτα.",
      scenarioTitle: "Σενάριο",
      scenario: "Μπορεί να αγοράσει μεγάλο παιχνίδι και να αποταμιεύσει λίγο ή μικρότερο παιχνίδι και να αποταμιεύσει περισσότερο.",
      decisionTitle: "Τι θα έκανες;",
      decisionPrompt: "Πώς θα μοίραζες τα 40 ευρώ;",
      options: ["Μεγαλύτερο παιχνίδι και ό,τι περισσέψει.", "Μικρότερο παιχνίδι, δώρο και περισσότερη αποταμίευση.", "Τα αποταμιεύω όλα."],
      bestChoice: "Η ισορροπημένη επιλογή δίνει χαρά σήμερα και πρόοδο στον στόχο.",
      miniQuiz: "Μικρό κουίζ",
      miniAnswers: ["Ο προϋπολογισμός είναι σχέδιο για τα χρήματα.", "Ο προϋπολογισμός απαγορεύει κάθε διασκέδαση.", "Ο προϋπολογισμός είναι μόνο για ενήλικες."]
    },
    quiz: {
      eyebrow: "Κουίζ",
      title: "Δοκίμασε σημερινές οικονομικές αποφάσεις.",
      body: "Διάλεξε απάντηση, δες ανατροφοδότηση και ολοκλήρωσε με σκορ.",
      complete: "Το κουίζ ολοκληρώθηκε",
      result: "Πέτυχες {score} από {total}."
    },
    quizQuestions: [
      {
        id: "q1",
        question: "Ποιο είναι ανάγκη;",
        answers: ["Εισιτήριο συναυλίας", "Καθαρό πόσιμο νερό", "Νέα θήκη κινητού", "Αυτοκόλλητα"],
        correctAnswer: "Καθαρό πόσιμο νερό",
        explanation: "Οι ανάγκες συνδέονται με υγεία και ασφάλεια. Οι επιθυμίες μπαίνουν μετά."
      },
      {
        id: "q2",
        question: "Ποια είναι η βασική δουλειά ενός προϋπολογισμού;",
        answers: ["Να σταματά κάθε δαπάνη", "Να φτιάχνει σχέδιο για τα χρήματα", "Να κρύβει χρήματα", "Να μαντεύει τιμές"],
        correctAnswer: "Να φτιάχνει σχέδιο για τα χρήματα",
        explanation: "Ο προϋπολογισμός βοηθά να αποφασίζεις τι ξοδεύεις και τι αποταμιεύεις."
      },
      {
        id: "q3",
        question: "Αν αποταμιεύεις 5 ευρώ την εβδομάδα, πόσα έχεις σε τέσσερις εβδομάδες;",
        answers: ["10 ευρώ", "15 ευρώ", "20 ευρώ", "40 ευρώ"],
        correctAnswer: "20 ευρώ",
        explanation: "5 ευρώ επί 4 εβδομάδες κάνουν 20 ευρώ."
      },
      {
        id: "q4",
        question: "Τι κάνεις αν μια ιστοσελίδα ζητά στοιχεία κάρτας και φαίνεται ύποπτη;",
        answers: ["Τα γράφω γρήγορα", "Ρωτώ έναν έμπιστο ενήλικα", "Τα στέλνω σε φίλους", "Δοκιμάζω τυχαίους αριθμούς"],
        correctAnswer: "Ρωτώ έναν έμπιστο ενήλικα",
        explanation: "Σταματώ, ελέγχω και ζητώ βοήθεια πριν μοιραστώ οικονομικά στοιχεία."
      }
    ] satisfies QuizQuestion[],
    dashboard: {
      eyebrow: "Προφίλ μαθητή",
      name: "Άλεξ",
      body: "Συνέχισε από το ενεργό μάθημα και κέρδισε WiseCoins με καθημερινές αποστολές.",
      totalProgressHelper: "Η πρόοδος ενημερώνεται μετά από κάθε μάθημα.",
      badgesTitle: "Σήματα",
      weeklyStreak: "Εβδομαδιαίο σερί",
      days: ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"],
      recommended: "Προτεινόμενο βήμα",
      recommendedTitle: "Συνέχισε τη διαδρομή",
      recommendedBody: "Ολοκλήρωσε το ενεργό μάθημα για να ξεκλειδώσεις περισσότερες αποστολές.",
      badges: [
        ["First Wise Step", "Ολοκλήρωσε το πρώτο μάθημα"],
        ["Choice Maker", "Ξεχώρισε ανάγκες και επιθυμίες"],
        ["Perfect Lesson", "Πέτυχε άριστη επίδοση"],
        ["Steady Learner", "Κράτησε σερί μάθησης"]
      ]
    },
    parents: {
      eyebrow: "Γονείς & Εκπαιδευτικοί",
      title: "Οικονομική εκπαίδευση που εμπνέει εμπιστοσύνη.",
      body: "Το Moneywise είναι ένα ασφαλές front-end demo με mock πρόοδο και πρωτότυπο εκπαιδευτικό περιεχόμενο.",
      cta: "Δες τη διαδρομή",
      chips: ["Χωρίς πραγματικά χρήματα", "Τοπική mock πρόοδος", "Μάθηση με σενάρια", "Σύντομη ανατροφοδότηση"],
      sections: [
        ["Τι μαθαίνουν τα παιδιά", "Ανάγκες, επιθυμίες, αποταμίευση, προϋπολογισμό, τράπεζες, απάτες και κοινωνική προσφορά."],
        ["Στόχοι ανά κόσμο", "Κάθε κόσμος έχει σαφή μαθησιακό στόχο, μικρές δραστηριότητες και checkpoint."],
        ["Ασφαλές περιβάλλον", "Δεν υπάρχουν τραπεζικές συνδέσεις, αγορές, διαφημίσεις ή πραγματικές πληρωμές."],
        ["Συζητήσεις στο σπίτι", "Οι ενήλικες μπορούν να συνδέσουν τα μαθήματα με χαρτζιλίκι, αγορές και στόχους."],
        ["Χρήση στην τάξη", "Οι εκπαιδευτικοί μπορούν να ξεκινήσουν συζήτηση, αποστολή ή σύντομη πρακτική άσκηση."],
        ["Σημείωση", "Οι προσομοιώσεις είναι εκπαιδευτικές και δεν αποτελούν οικονομική συμβουλή."]
      ]
    }
  },
  en: {
    languageName: "English",
    nav: {
      tagline: "Smart money, bright future.",
      learningPath: "Learn",
      lessons: "Lessons",
      quiz: "Quiz",
      dashboard: "Progress",
      parentsTeachers: "Parents & Teachers",
      start: "Start",
      language: "Language"
    },
    common: {
      startLearning: "Start learning",
      exploreLessons: "Explore lessons",
      openLesson: "Open lesson",
      previousLevel: "Complete previous level",
      unlocked: "Unlocked",
      locked: "Locked",
      level: "Level",
      totalProgress: "Total progress",
      score: "Score",
      question: "Question",
      of: "of",
      nextQuestion: "Next question",
      seeResult: "See result",
      correct: "Correct choice.",
      wrong: "Not quite yet.",
      tryAgain: "Try again",
      viewDashboard: "View progress",
      continueLearning: "Continue",
      nextLesson: "Next lesson",
      takeQuiz: "Full quiz",
      completedLessons: "Completed lessons",
      badgesEarned: "Badges",
      learningStreak: "Learning streak"
    },
    home: {
      eyebrow: "Financial literacy learning platform",
      heroTitle: "Money confidence through small missions.",
      heroSubheadline:
        "Moneywise helps children ages 10-12 understand money, needs, saving, budgeting and digital safety through games, stories and short quizzes.",
      heroStats: {
        level: "Level",
        next: "Next: 65%",
        progress: "Total progress",
        badge: "New badge",
        badgeName: "Smart Saver",
        streak: "Streak",
        streakValue: "7 days"
      },
      featuresTitle: "Interactive lessons, missions and safe progress.",
      features: [
        ["Short lessons", "Clear cards, instant practice and age-appropriate examples."],
        ["Games & quests", "XP, WiseCoins, daily quests and friendly celebration."],
        ["Quizzes & review", "Immediate feedback and practice for weaker concepts."],
        ["Safe environment", "No real money, accounts, purchases or bank connections."],
        ["For adults", "Support calmer money conversations at home and in class."]
      ],
      whyTitle: "Why money learning matters",
      whyBody: "Financial literacy builds confidence, patience and better everyday decisions.",
      whyEyebrow: "Money confidence",
      whyCards: [
        ["Better choices", "Learners pause, compare and decide."],
        ["Saving goals", "Small habits connect with bigger plans."],
        ["Protection", "Children spot suspicious messages and money traps."],
        ["Responsibility", "They learn every choice has a consequence."]
      ],
      levelsTitle: "Eight learning worlds.",
      levelsBody: "From the history of money to community impact and digital safety.",
      educationalFoundationEyebrow: "Educational Foundation",
      educationalFoundationTitle: "An educational foundation for responsible money thinking.",
      quizPreviewTitle: "Quick practice",
      quizPreviewBody: "Answers, explanations and scores keep learning active.",
      quizPreviewQuestion: "Needs or wants?",
      quizPreviewAnswers: ["Clean water", "New phone case", "Concert ticket"],
      dashboardPreviewTitle: "Progress dashboard",
      dashboardPreviewBody: "Streaks, XP, WiseCoins, badges and a recommended next step.",
      parentsTitle: "Support for parents and teachers",
      parentsBody: "Practical activities and safe conversations without real financial data.",
      finalCtaTitle: "Small lessons today. Stronger choices tomorrow.",
      finalCtaBody: "Start the Moneywise learning path.",
      spendGameTitle: "Smart Spend",
      spendGameLabels: ["Need", "Want", "Save"]
    },
    lessons: [
      ["Money Explorer", "Barter, money history, currencies, cash and digital payments.", "Starter", "Money Explorer"],
      ["Smart Shopper", "Price comparison, offers, advertising and careful purchases.", "Starter", "Smart Shopper"],
      ["Needs or Wants?", "Priorities, goods, services and responsible consumption.", "Explorer", "Choice Maker"],
      ["Saving Quest", "Goals, consistency, patience and emergency savings.", "Explorer", "Savings Starter"],
      ["Budget Builder", "Income, expenses, surplus, deficit and small business thinking.", "Builder", "Budget Builder"],
      ["Banking World", "Accounts, cards, ATMs, PINs and safe digital payments.", "Builder", "Banking Explorer"],
      ["Grow and Protect", "Interest, inflation, risk, scams and personal data protection.", "Advanced", "Scam Spotter"],
      ["Money and Society", "Giving, volunteering, sustainability and social impact.", "Advanced", "Community Champion"]
    ] satisfies string[][],
    learningPath: {
      eyebrow: "Learning path",
      title: "A vertical path with missions, games and checkpoints.",
      body: "Complete lessons, earn XP and return to concepts that need more practice.",
      progressHelper: "Progress is saved locally on this device for the demo."
    },
    lesson: {
      eyebrow: "Ages 10-12",
      title: "The Birthday Budget",
      intro: "A short lesson about choices, joy today and goals for later.",
      storyTitle: "Story card",
      story: "Maya has 40 euros for her birthday and wants a game, a gift for her sister and savings.",
      conceptTitle: "Key concept",
      concept: "A budget is a plan for money. It helps you decide what to spend, save and keep for surprises.",
      scenarioTitle: "Scenario",
      scenario: "She can buy the bigger game and save little, or choose a smaller game and save more.",
      decisionTitle: "What would you do?",
      decisionPrompt: "How would you split the 40 euros?",
      options: ["Bigger game and whatever is left.", "Smaller game, gift and more savings.", "Save it all."],
      bestChoice: "The balanced choice gives joy today and progress toward the goal.",
      miniQuiz: "Mini quiz",
      miniAnswers: ["A budget is a plan for money.", "A budget bans all fun.", "A budget is only for adults."]
    },
    quiz: {
      eyebrow: "Quiz",
      title: "Test today's money decisions.",
      body: "Choose an answer, see feedback and finish with a score.",
      complete: "Quiz complete",
      result: "You scored {score} out of {total}."
    },
    quizQuestions: [
      {
        id: "q1",
        question: "Which choice is a need?",
        answers: ["A concert ticket", "Clean drinking water", "A new phone case", "Stickers"],
        correctAnswer: "Clean drinking water",
        explanation: "Needs support health and safety. Wants come after needs."
      },
      {
        id: "q2",
        question: "What is the main job of a budget?",
        answers: ["Stop all spending", "Make a money plan", "Hide money", "Guess prices"],
        correctAnswer: "Make a money plan",
        explanation: "A budget helps you decide what to spend and save."
      },
      {
        id: "q3",
        question: "If you save 5 euros each week, how much do you have after four weeks?",
        answers: ["10 euros", "15 euros", "20 euros", "40 euros"],
        correctAnswer: "20 euros",
        explanation: "5 euros times 4 weeks equals 20 euros."
      },
      {
        id: "q4",
        question: "What should you do if a website asks for card details and feels suspicious?",
        answers: ["Enter them quickly", "Ask a trusted adult", "Share with friends", "Try random numbers"],
        correctAnswer: "Ask a trusted adult",
        explanation: "Pause, check and ask for help before sharing payment information."
      }
    ] satisfies QuizQuestion[],
    dashboard: {
      eyebrow: "Learner profile",
      name: "Alex",
      body: "Continue from the active lesson and earn WiseCoins with daily quests.",
      totalProgressHelper: "Progress updates after every lesson.",
      badgesTitle: "Badges",
      weeklyStreak: "Weekly streak",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      recommended: "Recommended next step",
      recommendedTitle: "Continue the path",
      recommendedBody: "Finish the active lesson to unlock more missions.",
      badges: [
        ["First Wise Step", "Completed the first lesson"],
        ["Choice Maker", "Sorted needs and wants"],
        ["Perfect Lesson", "Scored a perfect lesson"],
        ["Steady Learner", "Kept a learning streak"]
      ]
    },
    parents: {
      eyebrow: "Parents & Teachers",
      title: "Financial education adults can trust.",
      body: "Moneywise is a safe front-end demo with mock progress and original educational content.",
      cta: "Review learning path",
      chips: ["No real money", "Local mock progress", "Scenario learning", "Short feedback"],
      sections: [
        ["What children learn", "Needs, wants, saving, budgeting, banks, scams and community impact."],
        ["Objectives by world", "Every world has a clear learning goal, short activities and a checkpoint."],
        ["Safe environment", "No bank connections, purchases, ads or real payments."],
        ["Home conversations", "Adults can connect lessons with allowance, shopping and goals."],
        ["Classroom use", "Teachers can launch a discussion, mission or short practice activity."],
        ["Disclaimer", "Simulations are educational and are not financial advice."]
      ]
    }
  }
} as const;

export type Dictionary = (typeof dictionary)[Lang];
