"use client";
import React, { ReactNode, useState, useEffect } from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Courses from "./Courses";
import Footer from "../resuable/Footer/Footer";
import Community from "./Community";
import { useTranslation } from 'next-i18next';
import { globalKey } from "@/stores/globalStore";

const Platform = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabs: string[] = [t("classroom"), t("community")]

  const children: ReactNode[] = [
    <Courses key={"courses key"} />,
    <Community key={"community key"} />,
  ];

  return (
    <div className="bg-white">
      <div className="fixed top-0 left-0 right-0 z-10">
        <NavBar index={0} />
      </div>
      <div className="h-32" />
      <div className="px-20 md:px-[5%] flex flex-col">
        <div className="flex items-center justify-center gap-16 md:gap-4">
          {tabs.map((tab, i) => {
            return (
              <h2
                key={i}
                onClick={() => {
                  setCurrentTab(i);
                }}
                className={`leading-[52px] ${
                  currentTab === i
                    ? "font-cocogoose underline text-[40px] md:text-[20px]"
                    : "font-cocogoose-light font-bold text-[36px] md:text-[16px]"
                } cursor-pointer text-black`}
              >
                {tab}
              </h2>
            );
          })}
        </div>

        <div className="mt-32 md:mt-16 mb-20 md:mb-0">{children[currentTab]}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Platform;
