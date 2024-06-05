"use client";

import React, { FC, useState } from "react";

import InputComponent from "../resuable/InputComponent";
import InputAreaComponent from "../resuable/InputAreaComponent";

import { MdAddCircleOutline, MdAddCircle } from "react-icons/md";

import { globalKey } from "@/stores/globalStore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdDelete } from "react-icons/md";

import { SingleQuizComponent } from "../quiz/types";
import { tQuestion, useQuizCreateStore } from "@/stores/quizStore";
import { Loader } from "@mantine/core";
import { createCourse } from "@/hooks/mutations/useCreateCourse";

const QuizCreation: FC<{ resetPage: () => void }> = ({ resetPage }) => {
  const [title, setTitle] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [questions, setQuestions] = useState<tQuestion[]>([]);
  const [correctOption, setCorrectOption] = useState<number>(-1);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);

  const [editIndex, setEditIndex] = useState<number>(-1);
  const [viewAll, setViewAll] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);

  const [loading, isLoading] = useState<boolean>(false);

  const resetQuestion = () => {
    setEditIndex(-1);
    setCorrectOption(-1);
    setQuestion("");
    setAnswers([]);
  };

  const resetQuiz = () => {
    setTitle("");
    setInstructions("");
    setQuestions([]);
  };

  const checkFields = () => {
    if (title.length === 0) {
      toast.error("Please provide a quiz title");
      return false;
    }

    if (instructions.length === 0) {
      toast.error("Please provide a quiz instruction");
      return false;
    }

    return true;
  };

  const validate = () => {
    if (!checkFields()) return;

    if (questions.length === 0) {
      toast.error("Please provide at least one question for your quiz");
      return;
    }

    useQuizCreateStore.setState({
      quiz: {
        description: instructions,
        title: title,
        questions: questions,
      },
    });

    create();
  };

  const create = () => {
    let token = localStorage.getItem(globalKey)!;
    if (token === null) return;

    token = JSON.parse(token).access_token;

    isLoading(true);

    createCourse(
      useQuizCreateStore.getState(),
      token,
      (res) => {
        toast.success("Your course has been created. Thank You");
        isLoading(false);
        setTimeout(() => {
          setPage(0);
          useQuizCreateStore.getState().clear();
          resetQuiz();
          resetPage();
        }, 2000);
      },
      (err) => {
        isLoading(false);
        toast.error("An error occurred. Please try again later");
      }
    );
  };
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
      <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col items-center p-10 md:px-0 ">
        {page === 0 ? (
          <>
            <div className="size-[80px] bg-brand rounded-full flex items-center justify-center text-white text-[40px] leading-[44px] font-semibold">
              1
              <span className="font-medium text-[26px] leading-[30px]">/2</span>
            </div>
            <h2 className="text-brand text-[30px] mt-10 font-cocogoose">
              Quiz Overview
            </h2>
            <div className="mt-10 w-[60%] flex flex-col gap-5">
              <InputComponent
                width="w-full"
                label="Quiz Title"
                type="text"
                value={title}
                placeholder="e.g Foundational Course Quiz"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <InputAreaComponent
                label="Quiz Instructions"
                value={instructions}
                placeholder="Type here"
                onChange={(e) => {
                  setInstructions(e.target.value);
                }}
              />

              <button
                onClick={() => {
                  if (page === 0 && checkFields()) {
                    setPage(1);
                  }
                }}
                className="w-full mt-10 bg-brand rounded-lg h-[50px] text-white font-cocogoose"
              >
                Proceed
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="size-[80px] bg-brand rounded-full flex items-center justify-center text-white text-[40px] leading-[44px] font-semibold">
              2
              <span className="font-medium text-[26px] leading-[30px]">/2</span>
            </div>
            <h2 className="text-brand text-[30px] mt-10 font-cocogoose">
              Quiz Questions
            </h2>
            <div className="mt-10 w-[60%] flex flex-col gap-5">
              <div className="flex flex-wrap gap-9 items-center">
                {questions.map((q, i) => {
                  return (
                    (viewAll || (!viewAll && i === 0)) && (
                      <div
                        key={i}
                        className="flex flex-col gap-4 relative w-full"
                      >
                        <SingleQuizComponent
                          index={i}
                          question={q.text}
                          answers={q.choices}
                        />
                        <div
                          onClick={() => {
                            let pre = questions.slice(0, i);
                            let post = questions.slice(i + 1);
                            for (let index = 0; i < post.length; ++index) {
                              pre.push(post[index]);
                            }

                            setQuestions(pre);
                          }}
                          className="absolute cursor-pointer flex justify-center items-center -top-2 -right-2 size-7 rounded-full bg-white"
                        >
                          <MdDelete size={"22px"} fill="#FF0000" />
                        </div>
                      </div>
                    )
                  );
                })}
              </div>

              {questions.length > 0 && (
                <h3
                  onClick={() => {
                    setViewAll(!viewAll);
                  }}
                  className="text-[16px] text-light-blue font-cocogoose-light font-bold text-center cursor-pointer"
                >
                  {viewAll ? "View Less" : "View All"}
                </h3>
              )}

              <InputAreaComponent
                label="Question"
                value={question}
                placeholder="Type here"
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />

              <div className={`w-full flex flex-col gap-1`}>
                <p className="font-cocogoose text-[16px] text-brand ">
                  Answers
                </p>
                <div className={`relative w-full`}>
                  <input
                    type="type"
                    value={answer}
                    placeholder={"Type here"}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                    }}
                    className={`w-full focus:outline-none bg-[#FFFFFF00] font-cocogoose border-[3px] pl-4 pr-12 text-[18px] border-brand rounded-lg h-[60px] placeholder:text-brand-49 text-brand`}
                  />
                  <MdAddCircle
                    size={"48px"}
                    onClick={() => {
                      let ans = answers;
                      ans.push(answer);
                      setAnswers(ans);
                      setAnswer("");
                    }}
                    className="absolute inset-y-1 right-2 flex items-center px-2 cursor-pointer"
                  />
                </div>
              </div>

              {answers.length > 0 && (
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-brand font-cocogoose-light font-bold text-[16px]">
                    Click on any of the answers to select as the correct answer
                  </p>
                  {answers.map((ans, i) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-between items-center w-full"
                      >
                        <div className="w-[calc(100%-28px)]">
                          <p
                            style={{
                              wordWrap: "break-word",
                              width: "inherit",
                            }}
                            onClick={() => {
                              setCorrectOption(i);
                            }}
                            className={`${
                              correctOption === i
                                ? "font-cocogoose"
                                : "font-cocogoose-light font-bold"
                            }  text-brand text-[16px] cursor-pointer`}
                          >
                            {ans}
                            {correctOption === i && " (correct option)"}
                          </p>
                        </div>

                        <MdDelete
                          onClick={() => {
                            let pre = answers.slice(0, i);
                            let post = answers.slice(i + 1);
                            for (let index = 0; i < post.length; ++index) {
                              pre.push(post[index]);
                            }
                            setAnswers(pre);
                          }}
                          size={"20px"}
                          fill="#FF0000"
                          className="cursor-pointer"
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {page === 1 && (
                <button
                  onClick={() => {
                    if (question.length === 0) {
                      toast.error("Please provide a quiz question");
                      return;
                    }

                    if (answers.length < 2) {
                      toast.error("Please provide at least 2 answers");
                      return;
                    }

                    if (correctOption === -1) {
                      toast.error(
                        "Please choose a correct answer from the ones provided"
                      );
                      return;
                    }

                    let que: tQuestion = {
                      text: question,
                      choices: answers,
                      is_correct: answers[correctOption],
                    };

                    if (editIndex === -1) {
                      let m = questions;
                      m.push(que);
                      setQuestions(m);
                    } else {
                      let newArray = questions.slice(0, editIndex);
                      newArray.push(que);
                      let post = questions.slice(editIndex + 1);
                      for (let i = 0; i < post.length; ++i) {
                        newArray.push(post[i]);
                      }
                      setQuestions(newArray);
                    }

                    resetQuestion();
                  }}
                  className="w-full mt-10 bg-brand-30 flex justify-center items-center gap-2 rounded-lg h-[50px] text-brand font-cocogoose"
                >
                  <MdAddCircleOutline size={"26px"} />
                  Add Question
                </button>
              )}
              <button
                onClick={validate}
                className={`w-full ${
                  page === 0 && "mt-10"
                } bg-brand rounded-lg h-[50px] text-white font-cocogoose`}
              >
                {loading && <Loader color="#fff" />}
                {!loading && (page === 0 ? "Proceed" : "Launch")}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default QuizCreation;
