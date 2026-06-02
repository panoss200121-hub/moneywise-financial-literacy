import type { QuizQuestion } from "@/data/quiz";

export type Lang = "el" | "en";

export type LocalizedLesson = {
  title: string;
  description: string;
  difficulty: string;
  badgeLabel: string;
};

export const dictionary = {
  el: {
    languageName: "Ελληνικά",
    nav: {
      tagline: "Έξυπνα χρήματα, φωτεινό μέλλον.",
      learningPath: "Μαθησιακή διαδρομή",
      lessons: "Μαθήματα",
      quiz: "Κουίζ",
      dashboard: "Πρόοδος",
      parentsTeachers: "Γονείς & Εκπαιδευτικοί",
      start: "Έναρξη",
      language: "Γλώσσα"
    },
    common: {
      startLearning: "Ξεκίνα τώρα",
      exploreLessons: "Εξερεύνησε μαθήματα",
      openLesson: "Άνοιγμα μαθήματος",
      previousLevel: "Ολοκλήρωσε το προηγούμενο επίπεδο",
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
      badgesEarned: "Διακρίσεις",
      learningStreak: "Σειρά μάθησης"
    },
    home: {
      eyebrow: "Πλατφόρμα χρηματοοικονομικής εκπαίδευσης",
      heroTitle: "Χρηματοοικονομικός αλφαβητισμός με απλό, διασκεδαστικό και διαδραστικό τρόπο.",
      heroSubheadline:
        "Μια εκπαιδευτική πλατφόρμα που βοηθά παιδιά και εφήβους να κατανοήσουν τα χρήματα, την αποταμίευση, τον προϋπολογισμό και τις έξυπνες οικονομικές αποφάσεις μέσα από παιχνίδια, ιστορίες και κουίζ.",
      heroStats: {
        level: "Επίπεδο",
        next: "Επόμενο: 65%",
        progress: "Συνολική πρόοδος",
        badge: "Νέα διάκριση",
        badgeName: "Έξυπνος Αποταμιευτής",
        streak: "Σερί",
        streakValue: "7 ημέρες"
      },
      featuresTitle: "Διαδραστικά μαθήματα, παιχνίδια και αποστολές για υπεύθυνες αποφάσεις.",
      features: [
        ["Διαδραστικά μαθήματα", "Μάθε πώς λειτουργούν τα χρήματα μέσα από ιστορίες και πρακτικά παραδείγματα."],
        ["Παιχνίδια & αποστολές", "Εξασκήσου στην αποταμίευση, τον προϋπολογισμό και τις έξυπνες επιλογές."],
        ["Κουίζ & προκλήσεις", "Δοκίμασε τις γνώσεις σου και αναγνώρισε οικονομικούς κινδύνους."],
        ["Ασφαλές περιβάλλον", "Χωρίς πραγματικά χρήματα. 100% ασφαλές για παιδιά."],
        ["Γονείς & Εκπαιδευτικοί", "Υποστηρίξτε τη μάθηση στο σπίτι και στην τάξη."]
      ],
      whyTitle: "Γιατί είναι σημαντικός ο χρηματοοικονομικός αλφαβητισμός;",
      whyBody: "Ο χρηματοοικονομικός αλφαβητισμός είναι απαραίτητη δεξιότητα ζωής. Όταν τα παιδιά μαθαίνουν νωρίς πώς λειτουργούν τα χρήματα, προστατεύονται από μελλοντικά λάθη και χτίζουν πιο υπεύθυνες συνήθειες.",
      whyEyebrow: "Χρηματοοικονομική αυτοπεποίθηση",
      whyCards: [
        ["Καλύτερες αποφάσεις", "Μαθαίνουν να σκέφτονται πριν ξοδέψουν και να αξιολογούν επιλογές."],
        ["Αποταμίευση & στόχοι", "Συνδέουν μικρές συνήθειες με μεγάλους στόχους."],
        ["Προστασία από κινδύνους", "Αναγνωρίζουν απάτες, online κινδύνους και ύποπτες οικονομικές παγίδες."],
        ["Υπεύθυνοι πολίτες", "Αποκτούν αυτοπεποίθηση για να γίνουν ενημερωμένοι και υπεύθυνοι μελλοντικοί πολίτες."]
      ],
      levelsTitle: "Μαθησιακή διαδρομή με 8 επίπεδα.",
      levelsBody: "Από τις βασικές έννοιες του χρήματος μέχρι την ασφάλεια στο διαδίκτυο.",
      quizPreviewTitle: "Προεπισκόπηση διαδραστικού κουίζ",
      quizPreviewBody: "Άμεση ανατροφοδότηση, σκορ και προκλήσεις που κρατούν τη μάθηση ζωντανή.",
      quizPreviewQuestion: "Ανάγκες και επιθυμίες",
      quizPreviewAnswers: ["Καθαρό νερό", "Skin σε παιχνίδι", "Εισιτήριο συναυλίας"],
      dashboardPreviewTitle: "Πίνακας προόδου μαθητή",
      dashboardPreviewBody: "Πρόοδος, διακρίσεις, ολοκληρωμένα μαθήματα και προτεινόμενο επόμενο βήμα.",
      parentsTitle: "Υποστήριξη για γονείς και εκπαιδευτικούς",
      parentsBody: "Η πλατφόρμα υποστηρίζει γονείς και εκπαιδευτικούς με ασφαλές, εκπαιδευτικό περιεχόμενο χωρίς πραγματικά χρήματα ή τραπεζικές συνδέσεις.",
      finalCtaTitle: "Ξεκινήστε μια πιο έξυπνη σχέση με τα χρήματα.",
      finalCtaBody: "Μικρά μαθήματα σήμερα. Πιο δυνατές επιλογές αύριο.",
      spendGameTitle: "Έξυπνη δαπάνη",
      spendGameLabels: ["Ανάγκη", "Επιθυμία", "Αποταμίευση"]
    },
    lessons: [
      ["Τι είναι τα χρήματα;", "Ανακάλυψε γιατί χρησιμοποιούμε χρήματα, πώς λειτουργεί η αξία και πώς ξεκινούν οι επιλογές.", "Αρχικό", "Money Starter"],
      ["Ανάγκες και επιθυμίες", "Μάθε να ξεχωρίζεις τα απαραίτητα, τις επιθυμίες και τους συμβιβασμούς της καθημερινότητας.", "Αρχικό", "Choice Maker"],
      ["Αποταμίευση και στόχοι", "Θέσε στόχους, καθυστέρησε την κατανάλωση και χτίσε μια συνήθεια για το μέλλον.", "Εξερεύνηση", "Savings Spark"],
      ["Βασικός προϋπολογισμός", "Δημιούργησε ένα απλό πλάνο για χαρτζιλίκι, δώρα και μικρά projects.", "Εξερεύνηση", "Budget Builder"],
      ["Τράπεζες, κάρτες και ψηφιακές πληρωμές", "Κατανόησε λογαριασμούς, κάρτες, ανέπαφες πληρωμές και ψηφιακά ίχνη.", "Χτίσιμο", "Payment Pro"],
      ["Δανεισμός και υπευθυνότητα", "Εξερεύνησε δάνεια, τόκους, υπευθυνότητα και συνέπειες.", "Χτίσιμο", "Debt Detective"],
      ["Εισαγωγή στις επενδύσεις", "Γνώρισε το ρίσκο, την απόδοση, την υπομονή και τη μακροπρόθεσμη σκέψη.", "Προχωρημένο", "Future Planner"],
      ["Προστασία από απάτες και online κινδύνους", "Εξάσκησε ασφαλείς online συνήθειες και μάθε να σταματάς πριν μοιραστείς στοιχεία.", "Προχωρημένο", "Safety Shield"]
    ] satisfies string[][],
    learningPath: {
      eyebrow: "Μαθησιακή διαδρομή",
      title: "Οκτώ επίπεδα για έξυπνες οικονομικές αποφάσεις.",
      body: "Μια καθαρή πορεία χρηματοοικονομικής εκπαίδευσης, από την έννοια των χρημάτων μέχρι τις ψηφιακές πληρωμές, τους κινδύνους και την online ασφάλεια.",
      progressHelper: "Τρία επίπεδα είναι ανοιχτά. Ολοκλήρωσε το ενεργό μάθημα για να ξεκλειδώσεις τον βασικό προϋπολογισμό."
    },
    lesson: {
      eyebrow: "Ηλικίες 10-14",
      title: "Ο προϋπολογισμός των γενεθλίων",
      intro: "Ένα διαδραστικό μάθημα για την ισορροπία ανάμεσα στη χαρά του σήμερα και τους στόχους του αύριο.",
      storyTitle: "Κάρτα ιστορίας",
      story: "Η Μάγια πήρε 40 ευρώ για τα γενέθλιά της. Θέλει ένα παιχνίδι, ένα δώρο για την αδελφή της και να αποταμιεύσει για ένα φως ποδηλάτου.",
      conceptTitle: "Βασική έννοια",
      concept: "Ο προϋπολογισμός είναι ένα απλό πλάνο για τα χρήματα. Σε βοηθά να αποφασίσεις τι ξοδεύεις τώρα, τι αποταμιεύεις και τι κρατάς για απρόοπτα.",
      scenarioTitle: "Παράδειγμα σεναρίου",
      scenario: "Η Μάγια μπορεί να ξοδέψει 28 ευρώ για ένα παιχνίδι, 9 ευρώ για δώρο και να αποταμιεύσει 3 ευρώ. Ή να διαλέξει μικρότερο παιχνίδι με 18 ευρώ, να πάρει το δώρο και να αποταμιεύσει 13 ευρώ.",
      decisionTitle: "Τι θα έκανες;",
      decisionPrompt: "Πώς θα χρησιμοποιούσες τα 40 ευρώ της Μάγιας;",
      options: ["Θα αγόραζα το μεγαλύτερο παιχνίδι.", "Θα διάλεγα μικρότερο παιχνίδι, δώρο και περισσότερη αποταμίευση.", "Θα αποταμίευα όλα τα χρήματα."],
      bestChoice: "Η ισορροπημένη επιλογή δίνει χαρά σήμερα, φροντίδα για την αδελφή της και πρόοδο προς τον στόχο.",
      miniQuiz: "Μίνι κουίζ",
      miniAnswers: ["Ο προϋπολογισμός είναι πλάνο για τα χρήματα.", "Ο προϋπολογισμός σημαίνει ότι δεν αγοράζω ποτέ κάτι διασκεδαστικό.", "Ο προϋπολογισμός είναι μόνο για ενήλικες."]
    },
    quiz: {
      eyebrow: "Κουίζ & προκλήσεις",
      title: "Δοκίμασε τις οικονομικές σου αποφάσεις.",
      body: "Επίλεξε απάντηση, δες άμεση ανατροφοδότηση και ολοκλήρωσε με κάρτα αποτελέσματος.",
      complete: "Το κουίζ ολοκληρώθηκε",
      result: "Σκόραρες {score} από {total}."
    },
    quizQuestions: [
      {
        id: "q1",
        question: "Ποια επιλογή είναι ανάγκη;",
        answers: ["Εισιτήριο για συναυλία", "Καθαρό πόσιμο νερό", "Νέο skin σε παιχνίδι", "Έξτρα αυτοκόλλητα"],
        correctAnswer: "Καθαρό πόσιμο νερό",
        explanation: "Οι ανάγκες είναι πράγματα απαραίτητα για υγεία και ασφάλεια. Οι επιθυμίες μπορεί να είναι ευχάριστες, αλλά έρχονται μετά."
      },
      {
        id: "q2",
        question: "Ποιος είναι ο βασικός ρόλος ενός προϋπολογισμού;",
        answers: ["Να σταματά κάθε έξοδο", "Να φτιάχνει πλάνο για τα χρήματα", "Να κρύβει χρήματα", "Να μαντεύει τιμές"],
        correctAnswer: "Να φτιάχνει πλάνο για τα χρήματα",
        explanation: "Ο προϋπολογισμός βοηθά να αποφασίζεις πόσα θα ξοδέψεις, θα αποταμιεύσεις και θα κρατήσεις διαθέσιμα."
      },
      {
        id: "q3",
        question: "Αν αποταμιεύεις 5 ευρώ την εβδομάδα, τι έχεις μετά από τέσσερις εβδομάδες;",
        answers: ["10 ευρώ", "15 ευρώ", "20 ευρώ", "40 ευρώ"],
        correctAnswer: "20 ευρώ",
        explanation: "Πέντε ευρώ κάθε εβδομάδα για τέσσερις εβδομάδες ισούνται με 20 ευρώ."
      },
      {
        id: "q4",
        question: "Τι κάνεις αν μια ιστοσελίδα ζητά στοιχεία κάρτας και σου φαίνεται ύποπτη;",
        answers: ["Τα γράφω γρήγορα", "Ρωτάω έναν έμπιστο ενήλικα", "Το μοιράζομαι με φίλους", "Δοκιμάζω τυχαίους αριθμούς"],
        correctAnswer: "Ρωτάω έναν έμπιστο ενήλικα",
        explanation: "Το να σταματήσεις και να ρωτήσεις έναν έμπιστο ενήλικα είναι πολύ δυνατή συνήθεια ασφάλειας."
      }
    ] satisfies QuizQuestion[],
    dashboard: {
      eyebrow: "Προφίλ μαθητή",
      name: "Άλεξ Καρτέρ",
      body: "Τρέχον επίπεδο: Ανάγκες και επιθυμίες. Προτεινόμενο επόμενο βήμα: ολοκλήρωσε το επίπεδο Αποταμίευση και στόχοι και ξεκλείδωσε τον Βασικό προϋπολογισμό.",
      totalProgressHelper: "9 μαθήματα ολοκληρώθηκαν σε 3 ανοιχτά επίπεδα.",
      badgesTitle: "Διακρίσεις που κερδήθηκαν",
      weeklyStreak: "Εβδομαδιαίο σερί",
      days: ["Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ", "Κυρ"],
      recommended: "Προτεινόμενο επόμενο βήμα",
      recommendedTitle: "Ολοκλήρωσε τον προϋπολογισμό των γενεθλίων",
      recommendedBody: "Αυτό το μάθημα προετοιμάζει τον Άλεξ για το επίπεδο Βασικός προϋπολογισμός.",
      badges: [
        ["Savings Spark", "Έφτιαξε πρώτο πλάνο αποταμίευσης"],
        ["Choice Maker", "Ξεχώρισε ανάγκες και επιθυμίες"],
        ["Quiz Climber", "Πέτυχε σκορ 80% ή περισσότερο"],
        ["Steady Learner", "Κράτησε εβδομαδιαίο σερί"]
      ]
    },
    parents: {
      eyebrow: "Γονείς & Εκπαιδευτικοί",
      title: "Χρηματοοικονομική εκπαίδευση που εμπνέει εμπιστοσύνη.",
      body: "Η πλατφόρμα υποστηρίζει γονείς και εκπαιδευτικούς με ασφαλές, εκπαιδευτικό περιεχόμενο χωρίς πραγματικά χρήματα ή τραπεζικές συνδέσεις.",
      cta: "Δες τη μαθησιακή διαδρομή",
      chips: ["Χωρίς πραγματικά χρήματα", "Mock πρόοδος", "Μάθηση με σενάρια", "Ανατροφοδότηση κουίζ"],
      sections: [
        ["Τι μαθαίνουν τα παιδιά", "Εξασκούνται σε ανάγκες και επιθυμίες, αποταμίευση, προϋπολογισμό, ψηφιακές πληρωμές, δανεισμό, επενδύσεις και online ασφάλεια."],
        ["Υποστήριξη χρηματοοικονομικής εκπαίδευσης", "Τα μαθήματα μετατρέπουν αφηρημένες έννοιες σε ιστορίες, επιλογές και σύντομα κουίζ για σπίτι ή τάξη."],
        ["Ασφαλές περιβάλλον", "Το MVP χρησιμοποιεί μόνο mock data. Δεν υπάρχουν τραπεζικές συνδέσεις, αγορές, διαφημίσεις ή χρηματοοικονομικές προτάσεις."],
        ["Χωρίς πραγματικά χρήματα", "Όλα τα σενάρια είναι προσομοιώσεις, ώστε τα παιδιά να μαθαίνουν συνέπειες χωρίς πραγματικές πληρωμές."],
        ["Χρήση στην τάξη", "Οι εκπαιδευτικοί μπορούν να ξεκινήσουν επίπεδα, να συζητήσουν σενάρια και να αναθέσουν κουίζ."],
        ["Χρήση στην οικογένεια", "Οι γονείς μπορούν να χρησιμοποιούν τα μαθήματα πριν από χαρτζιλίκι, γενέθλια, online αγορές ή πρώτες κάρτες."]
      ]
    }
  },
  en: {
    languageName: "English",
    nav: {
      tagline: "Smart money, bright future.",
      learningPath: "Learning path",
      lessons: "Lessons",
      quiz: "Quiz",
      dashboard: "Dashboard",
      parentsTeachers: "Parents & Teachers",
      start: "Start",
      language: "Language"
    },
    common: {
      startLearning: "Start Learning",
      exploreLessons: "Explore Lessons",
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
      viewDashboard: "View dashboard",
      continueLearning: "Continue learning",
      nextLesson: "Next lesson",
      takeQuiz: "Take full quiz",
      completedLessons: "Completed lessons",
      badgesEarned: "Badges earned",
      learningStreak: "Learning streak"
    },
    home: {
      eyebrow: "Financial literacy education platform",
      heroTitle: "Financial literacy made simple, fun and interactive.",
      heroSubheadline:
        "A learning platform that helps young people understand money, saving, budgeting and smart financial decisions through games, stories and quizzes.",
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
        ["Interactive lessons", "Learn through stories, video-style cards and practical examples."],
        ["Games & missions", "Earn points, complete missions and level up."],
        ["Quizzes & challenges", "Test your knowledge and unlock unique badges."],
        ["Safe environment", "No real money involved. 100% safe for children."],
        ["Parents & teachers", "Support learning at home and in the classroom."]
      ],
      whyTitle: "Why financial literacy matters",
      whyBody: "Children who understand money today build a safer and more independent tomorrow.",
      whyEyebrow: "Money confidence",
      whyCards: [
        ["Better decisions", "They learn to think before they spend."],
        ["Saving & goals", "They connect small habits with bigger plans."],
        ["Risk protection", "They recognize suspicious money traps."],
        ["A brighter future", "They build confidence for adult life."]
      ],
      levelsTitle: "An 8-level learning path.",
      levelsBody: "From money basics to online safety and smart financial choices.",
      quizPreviewTitle: "Interactive quiz preview",
      quizPreviewBody: "Instant feedback, scores and challenges keep learning active.",
      quizPreviewQuestion: "Needs vs Wants",
      quizPreviewAnswers: ["Clean water", "Game skin", "Concert ticket"],
      dashboardPreviewTitle: "Student dashboard preview",
      dashboardPreviewBody: "Progress, badges, completed lessons and a recommended next step.",
      parentsTitle: "Support for parents and teachers",
      parentsBody: "Use the platform at home or in class for calm, practical money conversations.",
      finalCtaTitle: "Start a smarter relationship with money.",
      finalCtaBody: "Small lessons today. Stronger choices tomorrow.",
      spendGameTitle: "Smart Spend",
      spendGameLabels: ["Need", "Want", "Save"]
    },
    lessons: [
      ["What is money?", "Discover why people use money, how value works, and how choices begin.", "Starter", "Money Starter"],
      ["Needs vs Wants", "Learn to spot essentials, nice-to-haves, and trade-offs in everyday life.", "Starter", "Choice Maker"],
      ["Saving money", "Set goals, delay spending, and build a habit that makes future plans easier.", "Explorer", "Savings Spark"],
      ["Budgeting basics", "Create a simple spending plan for pocket money, gifts, and small projects.", "Explorer", "Budget Builder"],
      ["Banks, cards and digital payments", "Understand accounts, cards, contactless payments, and digital money trails.", "Builder", "Payment Pro"],
      ["Borrowing and debt", "Explore loans, interest, responsibility, and why borrowing has consequences.", "Builder", "Debt Detective"],
      ["Investing basics", "Meet risk, reward, patience, and long-term thinking with simple examples.", "Advanced", "Future Planner"],
      ["Online safety and financial scams", "Practice safe money habits online and learn how to pause before sharing.", "Advanced", "Safety Shield"]
    ] satisfies string[][],
    learningPath: {
      eyebrow: "Learning path",
      title: "Eight levels for smarter money decisions.",
      body: "A clear sequence for building confidence, from the meaning of money to safe digital habits.",
      progressHelper: "Three levels are open. Complete the active lesson to unlock budgeting basics."
    },
    lesson: {
      eyebrow: "Ages 10-14",
      title: "The Birthday Budget",
      intro: "An interactive lesson about balancing joy now with goals for later.",
      storyTitle: "Story card",
      story: "Maya received 40 euros for her birthday. She wants a game, a gift for her sister, and to save for a bike light.",
      conceptTitle: "Key concept",
      concept: "A budget is a simple plan for money. It helps you decide what to spend now, what to save, and what to keep for surprises.",
      scenarioTitle: "Example scenario",
      scenario: "Maya can spend 28 euros on a game today, buy a 9 euro gift, and save 3 euros. Or she can choose a smaller 18 euro game, buy the gift, and save 13 euros.",
      decisionTitle: "What would you do?",
      decisionPrompt: "What would you do with Maya's 40 euros?",
      options: ["Buy the bigger game and save what is left.", "Choose the smaller game, buy the gift, and save more.", "Save all the money and skip the party plan."],
      bestChoice: "The balanced choice gives Maya joy today, kindness for her sister, and progress toward her bike light.",
      miniQuiz: "Mini quiz",
      miniAnswers: ["A budget is a plan for money.", "A budget means never buying anything fun.", "A budget only works for adults."]
    },
    quiz: {
      eyebrow: "Quizzes & challenges",
      title: "Test today's money decisions.",
      body: "Choose an answer, see instant feedback, and finish with a score card.",
      complete: "Quiz complete",
      result: "You scored {score} out of {total}."
    },
    quizQuestions: [
      {
        id: "q1",
        question: "Which choice is a need?",
        answers: ["A concert ticket", "Clean drinking water", "A new game skin", "Extra stickers"],
        correctAnswer: "Clean drinking water",
        explanation: "Needs are things people require for health and safety. Wants can still be fun, but they come after needs."
      },
      {
        id: "q2",
        question: "What is the main job of a budget?",
        answers: ["To stop all spending", "To make a money plan", "To hide money", "To guess prices"],
        correctAnswer: "To make a money plan",
        explanation: "A budget helps you decide how much to spend, save, and keep available."
      },
      {
        id: "q3",
        question: "If you save 5 euros each week, what happens after four weeks?",
        answers: ["You have 10 euros", "You have 15 euros", "You have 20 euros", "You have 40 euros"],
        correctAnswer: "You have 20 euros",
        explanation: "Five euros per week for four weeks equals 20 euros."
      },
      {
        id: "q4",
        question: "What should you do if a website asks for card details and feels suspicious?",
        answers: ["Enter them quickly", "Ask a trusted adult", "Share it with friends", "Try random numbers"],
        correctAnswer: "Ask a trusted adult",
        explanation: "Pausing and asking a trusted adult is a strong safety habit online."
      }
    ] satisfies QuizQuestion[],
    dashboard: {
      eyebrow: "Student profile",
      name: "Alex Carter",
      body: "Current level: Needs vs Wants. Recommended next step: finish Saving money and unlock Budgeting basics.",
      totalProgressHelper: "9 lessons completed across 3 open levels.",
      badgesTitle: "Badges earned",
      weeklyStreak: "Weekly streak",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      recommended: "Recommended next step",
      recommendedTitle: "Complete The Birthday Budget",
      recommendedBody: "This lesson prepares Alex for the Budgeting basics level.",
      badges: [
        ["Savings Spark", "Built a first saving plan"],
        ["Choice Maker", "Sorted needs and wants"],
        ["Quiz Climber", "Scored 80% or higher"],
        ["Steady Learner", "Kept a weekly streak"]
      ]
    },
    parents: {
      eyebrow: "Parents & Teachers",
      title: "Financial education adults can trust.",
      body: "Moneywise is designed to make money conversations calmer, safer and more practical for children, teenagers, families and classrooms.",
      cta: "Review learning path",
      chips: ["No real money", "Mock progress", "Scenario learning", "Quiz feedback"],
      sections: [
        ["What children learn", "Learners practice needs versus wants, saving goals, budgeting, digital payments, borrowing, investing basics and online scam awareness."],
        ["Support for financial education", "Lessons translate abstract money ideas into stories, choices and short quizzes that can support home conversations or classroom discussion."],
        ["Safe learning environment", "The MVP uses mock data only. There are no bank connections, real purchases, real accounts, ads, or financial product recommendations."],
        ["No real money involved", "All scenarios are simulated. Children learn consequences and responsibility without handling live money or payment credentials."],
        ["Classroom use cases", "Teachers can introduce a level, run a scenario discussion, assign the quiz, and use badges as a light reflection tool."],
        ["Family use cases", "Parents can use lessons before allowance, birthdays, online shopping, saving goals, or first card conversations."]
      ]
    }
  }
} as const;

export type Dictionary = (typeof dictionary)[Lang];
