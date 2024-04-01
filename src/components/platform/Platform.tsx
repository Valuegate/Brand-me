"use client";

import React, { ReactNode, useState } from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Courses from "./Courses";
import Footer from "../resuable/Footer/Footer";
import Community from './Community';
import Members from './Members';

const Platform = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabs: string[] = ["Classroom", "Community", "Members"];

  const children: ReactNode[] = [<Courses key={"courses key"}/>, <Community key={"Community key"}/>, <Members key={"Members Key"}/> ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={0} />
      </div>
      <div className="h-32" />
      <div className="px-20 flex flex-col">
        <div className="flex items-center justify-center gap-16">
          {tabs.map((tab, i) => {
            return (
              <h2
              key={i}
                onClick={() => {
                  setCurrentTab(i);
                }}
                className={`leading-[52px] ${
                  currentTab === i
                    ? "font-cocogoose underline text-[40px]"
                    : "font-cocogoose-light font-bold text-[36px]"
                } cursor-pointer`}
              >
                {tab}
              </h2>
            );
          })}
        </div>

        <div className="mt-32 mb-20">{children[currentTab]}</div>
      </div>
      <Footer />
    </>
  );
};

export default Platform;
