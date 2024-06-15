import { create } from "zustand";

export interface iMainCourse {
  id: string | number;
  banner_content: string | File;
  title: string;
  description: string;
  modules: {
    id?: string | number;
    title: string;
    is_completed: boolean;
    text_content: string;
    video_content: string | File;
  }[];
  quizzes: {
    id: string | number;
    title: string;
    description: string;
    questions: {
      id: number | string;
      text: string;
      choices: {
        id: string | number;
        text: string;
        is_correct: boolean;
      }[];
    }[];
  }[];
}



export const useEditCourseStore = create<iMainCourse>((set) => ({
  id: "",
  banner_content: "",
  title: "",
  description: "",
  modules: [],
  quizzes: [],
}));