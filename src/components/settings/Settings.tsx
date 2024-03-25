"use client";

import React, { ReactNode, useState } from "react";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Profile from "./Profile";
import Password from "./Password";
import Notification from "./Notification";

const Settings = () => {
  const [index, setIndex] = useState<number>(0);
  const tabs: string[] = ["Profile", "Password", "Notifications"];
  const children: ReactNode[] = [<Profile />, <Password />, <Notification />];

  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="mt-10 flex justify-between w-full px-[10%] items-start">
        <div className="flex flex-col gap-2 w-[300px]">
          {tabs.map((tab, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                    setIndex(i);
                }}
                className={`text-brand ${i === index && "bg-light-blue-30"} font-cocogoose text-[24px] w-full rounded-lg hover:bg-light-blue-30 cursor-pointer py-2 pl-4`}
              >
                {tab}
              </div>
            );
          })}
        </div>
        <div className="w-[800px]">{children[index]}</div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
