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
      <div className="fixed top-0 left-0 right-0 z-30">
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
          <h2 className="font-cocogoose text-brand text-xl underline">Other Settings</h2>
        <div className="flex w-full justify-between items-center">
          <button
            onClick={() => {
              setIndex( index === 0 ? 1 : index === 1 ? 2 : 0);
            }}
            className="bg-brand py-3 px-5 rounded-lg text-white font-cocogoose "
          >
            {
              index === 0 ? "Password" : index === 1 ? "Notification" : "Profile"
            }
          </button>
          <button
            onClick={() => {
              setIndex( index === 0 ? 2 : index === 1 ? 0 : 1);
            }}
            className="bg-brand py-3 px-5 rounded-lg text-white font-cocogoose"
          >
            {
              index === 0 ? "Notification" : index === 1 ? "Profile" : "Password"
            }
          </button>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
