import React from "react";

import { useGlobalStore } from "@/stores/globalStore";
import { convertDate } from "@/functions/dateFunctions";
import { IoCalendar } from "react-icons/io5";

const Notifications = () => {
  const notifications = useGlobalStore((state) => state.notifications);

  return (
    <div className="w-[900px] h-[70vh] bg-white shadow-custom top-[70px] -left-[40vw] rounded-lg mt-0  absolute flex flex-col z-10">
      <div className="flex justify-between items-center border-b-[1.5px] border-[#CDCDCD] px-10 h-[160px]">
        <h2 className="font-cocogoose text-black text-[22px]">Notifications</h2>
        <h2 className="text-light-blue text-[20px] font-cocogoose">
          Mark all as read
        </h2>
      </div>

      <div className="flex flex-col gap-5 py-5 px-5 overflow-y-scroll">
        {notifications.map((notification, i) => {
          return (
            <div
              key={i}
              className="flex justify-between items-start cursor-pointer"
            >
              <div className="flex gap-3 items-center">
                <div className="w-[70px] h-[70px] rounded-full bg-brand" />
                <div className="flex flex-col gap-1">
                  <h3
                    className={`font-cocogoose text-[16px] ${
                      notification.read ? "text-[#00000075]" : "text-black"
                    }`}
                  >
                    {notification.title}
                  </h3>
                  <h4
                    className={`font-cocogoose-light font-bold text-[14px] ${
                      notification.read ? "text-[#00000075]" : "text-black"
                    }`}
                  >
                    {notification.content}
                  </h4>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <IoCalendar
                  size={"18px"}
                  fill={notification.read ? "#00000075" : "#000000"}
                />
                <h2
                  className={`font-cocogoose text-[14px] ${
                    notification.read ? "text-[#00000075]" : "text-black"
                  }`}
                >
                  {convertDate(notification.date)}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
