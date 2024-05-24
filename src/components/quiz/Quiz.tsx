"use client";

import React, { FC, useEffect, useState } from "react";

import QuizNavBar from "../resuable/QuizNavBar";
import { useQuizStore, QuizData } from "@/stores/quizStore";
import Footer from "../resuable/Footer/Footer";
import { Loader } from "@mantine/core";

import { QuizComponent, QuizComponentProp } from "./types";

function setQuiz() {
  useQuizStore.setState({
    quiz: [
      {
        question:
          "You are walking your client through the initial phases of the design process. You explain that in the empathy phase, you get to know the users. You create personas and from there, you create user stories. Your client is not sure what you mean by user stories. How should you explain this? Select all that apply.",
        point: 1,
        answers: [
          "A user story identifies the obstacle that is at issue.",
          "A user story introduces the user.",
          "A user story provides the background information of all of the users who took part in the empathy interviews.",
          "A user story states the ultimate goal and how the obstacle will be overcome.",
        ],
        singleSelection: false,
      },
      {
        question:
          "A junior UX designer has participated in their first empathy interviews and has now helped with creating personas. As the next step, you have asked them to create user stories. They ask what constitutes a good user story. How should you respond?",
        point: 1,
        answers: [
          "A good user story provides the team with memorable moments from the empathy interviews and offers insight into the target users’ personalities.",
          "A good user story informs the UX design team about the user preferences for style, including colors, images, and iconography.",
          "A good user story will help the client understand the target users for the product that is being designed.",
          "A good user story can inspire empathetic design decisions by making the design approach user-centered.",
        ],
        singleSelection: false,
      },
      {
        question:
          "You are walking your client through the initial phases of the design process. You explain that in the empathy phase, you get to know the users. You create personas and from there, you create user stories. Your client is not sure what you mean by user stories. How should you explain this? Select all that apply.",
        point: 1,
        answers: [
          "A user story identifies the obstacle that is at issue.",
          "A user story introduces the user.",
          "A user story provides the background information of all of the users who took part in the empathy interviews.",
          "A user story states the ultimate goal and how the obstacle will be overcome.",
        ],
        singleSelection: false,
      },
      {
        question:
          "A junior UX designer has participated in their first empathy interviews and has now helped with creating personas. As the next step, you have asked them to create user stories. They ask what constitutes a good user story. How should you respond?",
        point: 1,
        answers: [
          "A good user story provides the team with memorable moments from the empathy interviews and offers insight into the target users’ personalities.",
          "A good user story informs the UX design team about the user preferences for style, including colors, images, and iconography.",
          "A good user story will help the client understand the target users for the product that is being designed.",
          "A good user story can inspire empathetic design decisions by making the design approach user-centered.",
        ],
        singleSelection: false,
      },
    ],
    pickedAnswers: Array(4).fill([]),
  });
}

const Quiz = () => {
  const quiz = useQuizStore((state) => state.quiz);
  const pickedAnswers = useQuizStore((state) => state.pickedAnswers);

  useEffect(() => {
    setQuiz();
  }, []);

  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <QuizNavBar />
      </div>
      <div className="h-32" />
      {quiz.length !== 0 && (
        <div className="px-32 md:px-[5%] pb-20 md:pb-0">
          <div className="bg-light-blue-30 rounded-[30px] md:rounded-[25px] w-full h-fit p-8 md:p-5 flex flex-col gap-10">
            {quiz.map((q, i) => {
              return (
                <QuizComponent
                  key={i}
                  index={i}
                  quiz={q}
                  onSelect={(val, picked) => {
                    let p_answers = pickedAnswers[i];
                    let answers = q.answers;
                    if (picked) {
                      p_answers.push(answers[val]);
                    } else {
                      //p_answers.sl
                    }
                  }}
                  pickedAnswers={pickedAnswers[i]}
                />
              );
            })}
          </div>
        </div>
      )}
      {quiz.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full h-[40vh]">
          <Loader size={"32px"} color="primary" />
        </div>
      )}
      <Footer />
    </>
  );
};


export default Quiz;
