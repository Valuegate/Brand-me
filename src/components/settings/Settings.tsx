"use client";

import React, { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Profile from "./Profile";
import Password from "./Password";
import Notification from "./Notification";

const Settings = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState<number>(0);
  const tabs: string[] = [t("Profile"), t("Password")];
  const children: ReactNode[] = [<Profile />, <Password />];

  return (
    <div className="bg-white">
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="mt-10 md:mt-0 flex md:flex-col justify-between w-full px-[10%] md:px-[5%] items-start">
        <div className="flex flex-col gap-2 w-[300px] md:hidden">
          {tabs.map((tab, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setIndex(i);
                }}
                className={`text-brand ${
                  i === index && "bg-light-blue-30"
                } font-cocogoose text-[24px] w-full rounded-lg hover:bg-light-blue-30 cursor-pointer py-2 pl-4`}
              >
                {tab}
              </div>
            );
          })}
        </div>
        <div className="w-[800px] md:w-full">{children[index]}</div>
        <div className="hidden md:flex flex-col md:w-full justify-between items-center gap-5 mt-0">
          <h2 className="font-cocogoose text-brand text-xl underline">
            {t("Other Settings")}
          </h2>
          <div className="flex w-full justify-between items-center">
            <button
              onClick={() => {
                setIndex(0);
              }}
              className="bg-brand py-3 px-5 rounded-lg text-white font-cocogoose "
            >
              {t("Profile")}
            </button>
            <button
              onClick={() => {
                setIndex(1);
              }}
              className="bg-brand py-3 px-5 rounded-lg text-white font-cocogoose"
            >
              {t("Password")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
