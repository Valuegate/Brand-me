import { create } from "zustand";

type QuizDetails = {
  score: number;
  quiz: QuizData[];
  pickedAnswers: string[][];
};

export type QuizData = {
  question: string;
  point: number;
  answers: string[];
  singleSelection: boolean;
};

export const useQuizStore = create<QuizDetails>((set) => ({
  score: 0,
  quiz: [],
  pickedAnswers: [],
}));
