"use client";

import React from "react";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";

import { useGlobalStore } from "@/stores/globalStore";
import { convertDateWithJustSlashes } from "@/functions/dateFunctions";

const Notification = () => {
  const notifications = useGlobalStore((state) => state.notifications);
  return (
    <>
      <NavBar index={-1} />
      <div className="w-full flex flex-col px-[5%]">
        <div className="flex justify-between items-center my-5">
          <h2 className="font-cocogoose text-black text-[18px]">
            Notifications
          </h2>
          <h2 className="text-light-blue text-[16px] font-cocogoose-light font-bold">
            Mark all as read
          </h2>
        </div>

        <div className="flex flex-col gap-5 py-5 overflow-y-scroll">
          {notifications.map((notification, i) => {
            return (
              <div
                key={i}
                className="flex justify-between items-start cursor-pointer"
              >
                <div className="flex gap-3 items-start">
                  <div className="size-[40px] rounded-full bg-brand" />
                  <div className="flex flex-col gap-1 w-[65%]">
                    <h3
                      className={`font-cocogoose line-clamp-1 text-[16px] ${
                        notification.read ? "text-[#00000075]" : "text-black"
                      }`}
                    >
                      {notification.title}
                    </h3>
                    <h4
                      className={`font-cocogoose-light line-clamp-1 font-bold text-[14px] ${
                        notification.read ? "text-[#00000075]" : "text-black"
                      }`}
                    >
                      {notification.content}
                    </h4>
                  </div>
                </div>
                <div className="flex gap-2 items-center w-[20%]">
                  
                  <h2
                    className={`font-cocogoose text-[12px] ${
                      notification.read ? "text-[#00000075]" : "text-black"
                    }`}
                  >
                    {convertDateWithJustSlashes(notification.date)}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notification;
