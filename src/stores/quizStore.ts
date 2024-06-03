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

export interface iModuleCreationData {}

export type tCourseCreationData = {
  title: string;
  description: string;
  instructor: string;
  banner: File | string;
  modules: TModule[];
  quiz: TQuiz;

  clear: () => void;
};

export type TModule = {
  title: string;
  duration: string;
  is_completed: boolean;
  text_content: string;
  video_content: File;
};

export type TQuiz = {
  title: string;
  description: string;
  questions: tQuestion[];
};

export type tQuestion = {
  text: string;
  choices: string[];
  is_correct: string;
};

export const useQuizCreateStore = create<tCourseCreationData>((set) => ({
  title: "",
  description: "",
  instructor: "",
  banner: "",
  modules: [],
  quiz: {
    title: "",
    description: "",
    questions: [],
  },
  clear: () => {
    set({
      title: "",
      description: "",
      instructor: "",
      banner: "",
      modules: [],
      quiz: {
        title: "",
        description: "",
        questions: [],
      },
    });
  },
}));
