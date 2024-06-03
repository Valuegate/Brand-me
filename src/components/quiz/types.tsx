import React, { FC, useEffect, useState } from "react";

import QuizNavBar from "../resuable/QuizNavBar";
import { useQuizStore, QuizData } from "@/stores/quizStore";

import { MdDone } from "react-icons/md";
import Footer from "../resuable/Footer/Footer";

import { Loader } from "@mantine/core";

export interface QuizComponentProp {
  index: number;
  quiz: QuizData;
  pickedAnswers: string[];
  onSelect: (val: number, picked: boolean) => void;
}

export const QuizComponent: FC<QuizComponentProp> = ({
  quiz,
  index,
  onSelect,
  pickedAnswers,
}) => {
  return (
    <div className="flex md:flex-col justify-between items-start ">
      <h1 className="font-cocogoose text-brand text-[24px] md:text-[18px]">
        {index + 1}.
      </h1>
      <div className="flex flex-col w-[80%] md:w-full md:mt-2">
        <p className="text-brand font-cocogoose-light font-bold text-[18px] md:text-[16px]">
          {quiz.question}
          <br />
          <span className="font-cocogoose">
            {quiz.point} point{quiz.point === 1 ? "" : "s"}
          </span>
        </p>
        <div className="mt-5 flex flex-col gap-3">
          {quiz.answers.map((ans, i) => {
            let picked =
              pickedAnswers.find((ele) => {
                ele === ans;
              }) !== undefined;
            return (
              <div
                key={i}
                className="font-cocogoose-light font-bold text-brand text-[16px] flex items-center gap-3"
              >
                <div
                  onClick={() => {
                    onSelect(i, !picked);
                  }}
                  className={`${
                    picked ? "bg-light-blue" : "border border-brand"
                  } cursor-pointer w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]`}
                >
                  {picked && <MdDone size={"24px"} />}
                </div>
                <p className="w-[calc(100%-32px)]">{ans}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-brand font-cocogoose bg-brand-49 px-3 py-2 rounded-lg md:hidden">
        {quiz.point} point{quiz.point === 1 ? "" : "s"}
      </div>
    </div>
  );
};

export const SingleQuizComponent: FC<{
  question: string;
  answers: string[];
  index: number;
}> = ({ question, answers, index }) => {
  return (
    <div className="flex flex-col rounded-lg gap-5 px-5 py-3 justify-between items-start bg-brand-30 w-full">
      <p
        style={{
          wordWrap: "break-word",
          width: "inherit",
        }}
        className="text-brand font-cocogoose-light font-bold text-[18px] md:text-[16px] word-break-break-word"
      >
        <span className="font-cocogoose text-brand text-[16px]">
          {index + 1}.
        </span>{" "}
        {question}
      </p>
      <div className=" flex flex-col gap-3 w-full">
        {answers.map((ans, i) => {
          return (
            <div
              key={i}
              className="font-cocogoose-light font-bold text-brand text-[16px] flex items-center gap-3 w-full"
            >
              <div
                className={`${"border-2 border-brand"} cursor-pointer size-5 rounded-full flex justify-center items-center font-cocogoose-light text-white text-[18px]`}
              />
              <div className="w-[calc(100%-32px)]">
                <p
                  style={{
                    wordWrap: "break-word",
                    width: "inherit",
                  }}
                >
                  {ans}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
