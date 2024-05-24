"use client";

import React, { useRef, useEffect, useState } from "react";

import InputComponent from "../resuable/InputComponent";
import InputAreaComponent from "../resuable/InputAreaComponent";

import { MdAddCircleOutline, MdAddCircle } from "react-icons/md";

import { globalKey } from "@/stores/globalStore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdDelete } from "react-icons/md";
import ComboComponent from "../resuable/ComboComponent";

import { SingleQuizComponent } from "../quiz/types";

type tQuestion = {
  question: string;
  type: string;
  answers: string[];
  point: string;
};

const QuizCreation = () => {
  const [instructions, setInstructions] = useState<string>("");
  const [points, setPoints] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const [questions, setQuestions] = useState<tQuestion[]>([]);

  const [question, setQuestion] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [point, setPoint] = useState<string>("");

  const [editIndex, setEditIndex] = useState<number>(-1);
  const [viewAll, setViewAll] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);

  const resetQuestion = () => {
    setEditIndex(-1);
    setQuestion("");
    setType("");
    setAnswers([]);
    setPoint("");
  };

  const resetQuiz = () => {
    setInstructions("");
    setPoints("");
    setDuration("");
    setQuestions([]);
  };

  const create = () => {
    let token = localStorage.getItem(globalKey)!;
    token = JSON.parse(token).access_token;
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
              <InputAreaComponent
                label="Quiz Instructions"
                value={instructions}
                placeholder="Type here"
                onChange={(e) => {
                  setInstructions(e.target.value);
                }}
              />

              <InputComponent
                width="w-full"
                label="Quiz Total Points"
                type="text"
                value={points}
                placeholder="e.g 100"
                onChange={(e) => {
                  setPoints(e.target.value);
                }}
              />
              <InputComponent
                width="w-full"
                label="Quiz Duration (mins)"
                type="text"
                value={duration}
                placeholder="e.g 180"
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  if (page === 0) {
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
                          question={q.question}
                          answers={q.answers}
                          point={q.point}
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
              <ComboComponent
                label="Answer Type"
                hint="Select"
                onSelect={(val: number) => {
                  setType(
                    val === 0
                      ? "Single Selected Option"
                      : "Multiple Selected Options"
                  );
                }}
                options={[
                  "Single Selected Option",
                  "Multiple Selected Options",
                ]}
                value={type}
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
                            className="font-cocogoose-light font-bold text-brand text-[16px]"
                          >
                            {ans}
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
              <InputComponent
                width="w-full"
                label="Point"
                type="text"
                value={point}
                placeholder="e.g 1"
                onChange={(e) => {
                  setPoint(e.target.value);
                }}
              />

              {page === 1 && (
                <button
                  onClick={() => {
                    if (
                      question.length !== 0 &&
                      type.length !== 0 &&
                      answers.length !== 0 &&
                      point.length !== 0
                    ) {
                      let que: tQuestion = {
                        question: question,
                        answers: answers,
                        point: point,
                        type: type,
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
                    }
                  }}
                  className="w-full mt-10 bg-brand-30 flex justify-center items-center gap-2 rounded-lg h-[50px] text-brand font-cocogoose"
                >
                  <MdAddCircleOutline size={"26px"} />
                  Add Question
                </button>
              )}
              <button
                onClick={create}
                className={`w-full ${
                  page === 0 && "mt-10"
                } bg-brand rounded-lg h-[50px] text-white font-cocogoose`}
              >
                {/* {loading && <Loader color="#fff" />} */}
                {/* {!loading && (page === 0 ? "Proceed" : "Launch")} */}
                Launch
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default QuizCreation;
