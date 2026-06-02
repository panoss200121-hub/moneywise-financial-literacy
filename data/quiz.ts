export type QuizQuestion = {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
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
];
