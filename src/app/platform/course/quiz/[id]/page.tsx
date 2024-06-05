import Quiz from "@/components/quiz/Quiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
};

export default function QuizPage({ params }: any) {
  const { id } = params;
  return <Quiz id={id} />;
}
