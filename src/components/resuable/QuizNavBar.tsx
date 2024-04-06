"use client";

import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useQuizStore } from "@/stores/quizStore";
import Link from 'next/link';

const QuizNavBar = () => {
  const score = useQuizStore((state) => state.score);

  return (
    <div className="w-full h-[10vh] bg-brand flex items-center justify-between justify-items-center px-12 md:px-[5%] border-none rounded-b-[40px] md:rounded-b-[25px]">
      <Link
        className="flex items-center gap-2 text-white font-cocogoose-light font-bold text-[18px] cursor-pointer" href={'/platform'}      >
        <IoIosArrowRoundBack size={"26px"} />
        <p>Back</p>
      </Link>

      <h2 className="font-cocogoose text-white text-[20px]">50:00:00</h2>
    </div>
  );
};

export default QuizNavBar;
