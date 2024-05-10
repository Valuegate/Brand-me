import React from "react";

import { MdGroups } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa6";
import ProgressBar from "../resuable/ProgressBar";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-[65px]">
      <div className="flex justify-between w-full h-[340px]">
        <div className="flex flex-col bg-brand w-[25%] h-full rounded-[40px] p-10 gap-4">
          <h1 className="text-[35px] leading-[38px] font-cocogoose text-white">
            Total Registered Users
          </h1>
          <div className="w-full h-[150px] rounded-[40px] bg-gradient-to-b to-brand from-light-blue-50">
            <div className="flex w-full justify-between items-center h-full px-5">
              <MdGroups size={"80px"} className="text-white" />
              <h1 className="text-white font-cocogoose text-[64px] leading-[72px]">
                13 K
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-brand w-[40%] h-full rounded-[40px] p-10 justify-between">
          <h1 className="text-[35px] leading-[38px] font-cocogoose text-white">
            Daily/Monthly Active Users
          </h1>
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%] h-[150px] rounded-[40px] bg-gradient-to-b to-brand from-light-blue-50">
              <div className="flex w-full justify-between items-center h-full px-5">
                <FaCalendarDay size={"60px"} className="text-white" />
                <h1 className="text-white font-cocogoose text-[48px] leading-[60px]">
                  28%
                </h1>
              </div>
            </div>
            <div className="w-[45%] h-[150px] rounded-[40px] bg-gradient-to-b to-brand from-light-blue-50">
              <div className="flex w-full justify-between items-center h-full px-5">
                <FaCalendarAlt size={"60px"} className="text-white" />
                <h1 className="text-white font-cocogoose text-[48px] leading-[60px]">
                  40%
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-brand w-[25%] h-full rounded-[40px] p-10 gap-4">
          <h1 className="text-[35px] leading-[38px] font-cocogoose text-white">
            New Users Daily Registrations
          </h1>
          <div className="w-full h-[150px] rounded-[40px] bg-gradient-to-b to-brand from-light-blue-50">
            <div className="flex w-full justify-around items-center h-full px-5">
              <IoLogOut size={"80px"} className="text-white" />
              <h1 className="text-white font-cocogoose text-[64px] leading-[72px]">
                20
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full h-[420px]">
        <div className="w-[55%] h-full rounded-[40px] bg-light-blue-30 flex flex-col p-10 gap-4">
          <h2 className="text-brand text-[20px] font-cocogoose">
            Course Engagement Metrics
          </h2>
          <div className="flex gap-5 bg-brand rounded-[40px] py-4 px-6 text-white font-cocogoose-light text-[20px] font-bold w-fit">
            <span className="font-cocogoose">13</span> Available Courses
          </div>

          <ProgressBar
            backgroundColor="bg-brand-49"
            valueColor="bg-brand"
            hideText={false}
            value={0.07}
            text="Course Completion Rates"
            height="h-[60px]"
          />

          <ProgressBar
            backgroundColor="bg-brand-49"
            valueColor="bg-brand"
            hideText={false}
            value={0.8}
            text="Course Activation"
            height="h-[60px]"
          />
        </div>

        <div className="w-[40%] h-full rounded-[40px] bg-light-blue-30 flex flex-col p-10 gap-8">
          <h2 className="text-brand text-[20px] font-cocogoose">
            Most Viewed Courses
          </h2>
          <div className="flex justify-between w-full">
            <div className="flex flex-col rounded-[40px] bg-brand-49 px-5 py-8 w-[45%] h-[280px] justify-between">
              <h2 className="text-[20px] text-white font-cocogoose">
                Foundational Course
              </h2>
              <p className="font-cocogoose-light font-bold text-[18px] text-white">
                <span className="font-cocogoose">6</span> modules
              </p>
              <div className="w-full rounded-[40px] h-[100px] bg-brand text-white font-cocogoose flex justify-center items-center text-[24px] text-center">
                300 Views
              </div>
            </div>

            <div className="flex flex-col rounded-[40px] bg-brand-49 px-5 py-8 w-[45%] h-[280px] justify-between">
              <h2 className="text-[20px] text-white font-cocogoose">
                Foundational Course
              </h2>
              <p className="font-cocogoose-light font-bold text-[18px] text-white">
                <span className="font-cocogoose">6</span> modules
              </p>
              <div className="w-full rounded-[40px] h-[100px] bg-brand text-white font-cocogoose flex justify-center items-center text-[24px] text-center">
                300 Views
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[450px] rounded-[40px] bg-light-blue-30 flex flex-col p-10 justify-between">
        <h2 className="text-brand text-[20px] font-cocogoose">
          Performance Metrics
        </h2>

        <div className="h-[300px] w-full flex justify-between">
          <div className="flex flex-col px-6 py-5 w-[48%] h-full bg-brand-49 rounded-[40px] gap-1">
            <h2 className="text-[20px] text-white font-cocogoose">
              Foundational Course Quiz
            </h2>
            <ProgressBar
              backgroundColor="bg-brand-49"
              valueColor="bg-brand"
              hideText={false}
              value={0.07}
              text="Lowest Score"
              height="h-[60px]"
            />
            <ProgressBar
              backgroundColor="bg-brand-49"
              valueColor="bg-brand"
              hideText={false}
              value={0.65}
              text="Highest Score"
              height="h-[60px]"
            />
          </div>
          <div className="flex flex-col px-6 py-5 w-[48%] h-full bg-brand-49 rounded-[40px] gap-1">
            <h2 className="text-[20px] text-white font-cocogoose">
              Foundational Course Quiz
            </h2>
            <ProgressBar
              backgroundColor="bg-brand-49"
              valueColor="bg-brand"
              hideText={false}
              value={0.15}
              text="Lowest Score"
              height="h-[60px]"
            />
            <ProgressBar
              backgroundColor="bg-brand-49"
              valueColor="bg-brand"
              hideText={false}
              value={0.3}
              text="Highest Score"
              height="h-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
