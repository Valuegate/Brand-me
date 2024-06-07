"use client";

import React, { FC, useEffect, useState } from "react";

import QuizNavBar from "../resuable/QuizNavBar";
import { useQuizStore, QuizData } from "@/stores/quizStore";
import Footer from "../resuable/Footer/Footer";
import { Loader } from "@mantine/core";

import { QuizComponent, QuizComponentProp } from "./types";
import getCourseById from "@/hooks/queries/useGetCourseByID";
import submitQuiz from "@/hooks/mutations/useSubmitQuiz";
import { globalKey } from "@/stores/globalStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz: FC<{ id: string }> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [quiz, setQuiz] = useState<QuizData[]>([]);
  const [pickedAnswers, setPickedAnswers] = useState<string[]>([]);
  const [quizID, setQuizID] = useState<string | number>("");

  const startQuiz = () => {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    let token = JSON.parse(data).access_token;
    if (!token) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    getCourseById(
      id,
      token,
      (res: any) => {
        let quizzes = res.data.quizzes[0];
        let data: QuizData[] = quizzes.questions.map((que: any, i: number) => {
          let ans = que.choices.map((an: any, index: number) => {
            return an.text;
          });

          return {
            question: que.text,
            point: 0,
            answers: ans,
            singleSelection: true,
          };
        });
        setQuizID(quizzes.id);
        setPickedAnswers(Array(data.length).fill(""));
        setQuiz(data);
        setLoading(false);
      },
      (e: any) => {
        setLoading(false);
        toast.error("An error occurred. Please try again");
      }
    );
  };

  function submit() {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    let token = JSON.parse(data).access_token;
    if (!token) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    setLoading(true);

    submitQuiz(
      {
        quiz: quizID,
        answers: [
          
        ]

      },
      token,
      (res: any) => {

        toast.success("Congrats, your quiz has been submitted");
        window.location.replace("/platform");
      },
      (err: any) => {
        toast.error("An error occurred. Please try again"); 
        setLoading(false);
      }
    );
  }

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="fixed z-10 top-0 left-0 right-0">
        <QuizNavBar />
      </div>
      <div className="h-32" />
      {!loading && quiz.length !== 0 && (
        <div className="px-32 md:px-[5%] pb-20 md:pb-0">
          <div className="bg-light-blue-30 rounded-[30px] md:rounded-[25px] w-full h-fit p-8 md:p-5 flex flex-col gap-10">
            {quiz.map((q, i) => {
              return (
                <QuizComponent
                  key={i}
                  index={i}
                  quiz={q}
                  onSelect={(val: number) => {
                    pickedAnswers[i] = q.answers[val];
                    console.log(pickedAnswers);
                    setPickedAnswers(pickedAnswers);
                  }}
                  pickedAnswer={pickedAnswers[i]}
                />
              );
            })}

            <button
              onClick={submit}
              className={`w-[200px] ${"mt-10"} bg-brand rounded-lg h-[50px] text-white font-cocogoose`}
            >
              {loading && <Loader color="#fff" />}
              {!loading && "Submit"}
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center w-full h-[40vh]">
          <Loader size={"32px"} />
        </div>
      )}

      {!loading && quiz.length === 0 && (
        <div className="flex flex-col w-full text-brand font-cocogoose text-xl items-center justify-center h-[40vh]">
          An error occurred. Please try again
        </div>
      )}
      <Footer />
    </>
  );
};

export default Quiz;
