"use client";

import React, { useState, ReactNode } from "react";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";

import CourseCreation from "./CourseCreation";
import QuizCreation from "./QuizCreation";

const Creation = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabs: string[] = ["Module Creation", "Quiz Creation"];

  const children: ReactNode[] = [
    <CourseCreation
      key={"course creation key"}
      proceed={() => {
        setCurrentTab(1);
      }}
    />,
    <QuizCreation
      key={"quiz creation key"}
      resetPage={() => {
        setCurrentTab(0);
      }}
    />,
  ];

  return (
    <div className="bg-white">
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={2} />
      </div>
      <div className="h-32" />
      <div className="px-20 md:px-[5%] flex flex-col">
        <div className="flex items-center justify-center gap-16 md:gap-4">
          {tabs.map((tab, i) => {
            return (
              <h2
                key={i}
                className={`leading-[52px] ${
                  currentTab === i
                    ? "font-cocogoose underline text-[40px] md:text-[20px]"
                    : "font-cocogoose-light font-bold text-[36px] md:text-[16px]"
                } cursor-pointer`}
              >
                {tab}
              </h2>
            );
          })}
        </div>

        <div className="mt-32 md:mt-16 mb-20 md:mb-0 px-32 md:px-0">
          {children[currentTab]}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Creation;
