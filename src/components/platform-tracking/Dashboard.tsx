import React, { useEffect, useState } from "react";

import { MdGroups } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa6";
import ProgressBar from "../resuable/ProgressBar";

import getStatistics from "@/hooks/queries/useGetStatistics";
import { globalKey } from "@/stores/globalStore";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "@mantine/core";

interface iStats {
  total_users: number;
  total_courses: number;
  most_viewed_courses: {
    id: number;
    title: string;
    description: string;
    banner_content: string;
    modules: any[];
    quizzes?: any[];
  }[];
  statistics: {
    daily_new_users: number;
    daily_active_users: number;
    monthly_active_users: number;
    total_users: number;
  };
}

const Dashboard = () => {
  const [loading, isLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [stats, setStats] = useState<iStats>({
    total_users: 0,
    total_courses: 0,
    most_viewed_courses: [],
    statistics: {
      daily_new_users: 0,
      daily_active_users: 0,
      monthly_active_users: 0,
      total_users: 0,
    },
  });

  function statistics() {
    let token = localStorage.getItem(globalKey)!;
    if (token === null) {
      isLoading(false);
      setError(true);
      toast.error("You need to login first");
      return;
    }

    token = JSON.parse(token).access_token;

    getStatistics(
      token,
      (res: any) => {
        isLoading(false);
        setError(false);
        setStats(res.data as iStats);
      },
      (err: any) => {
        toast.error("An error occurred. Please try again");
        isLoading(false);
        setError(true);
      }
    );
  }

  useEffect(() => {
    statistics();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[40vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!loading && error) {
    return (
      <div className="w-full h-[40vh] text-brand text-xl font-cocogoose flex justify-center items-center">
        An error occurred. Please try again.
      </div>
    );
  }

  return (
    <div className="bg-white">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full flex flex-col gap-[65px]">
        <div className="flex justify-between w-full h-[340px]">
          <div className="flex flex-col bg-brand w-[27%] h-full rounded-[40px] p-10 gap-4">
            <h1 className="text-[35px] leading-[38px] font-cocogoose text-white">
              Total Registered Users
            </h1>
            <div className="w-full h-[150px] rounded-[40px] bg-gradient-to-b to-brand from-light-blue-50">
              <div className="flex w-full justify-center gap-4 items-center h-full px-5">
                <MdGroups size={"60px"} className="text-white" />
                <h1 className="text-white font-cocogoose text-[36px] leading-[48px]">
                  {stats.total_users}
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
                <div className="flex w-full justify-center gap-4 items-center h-full px-5">
                  <FaCalendarDay size={"48px"} className="text-white" />
                  <h1 className="text-white font-cocogoose text-[36px] leading-[48px]">
                    {stats.statistics.daily_active_users}
                  </h1>
                </div>
              </div>
              <div className="w-[45%] h-[150px] rounded-[40px] bg-gradient-to-b to-brand from-light-blue-50">
                <div className="flex w-full justify-center gap-4 items-center h-full px-5">
                  <FaCalendarAlt size={"48px"} className="text-white" />
                  <h1 className="text-white font-cocogoose text-[36px] leading-[48px]">
                    {stats.statistics.monthly_active_users}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-brand w-[27%] h-full rounded-[40px] p-10 gap-4">
            <h1 className="text-[35px] leading-[38px] font-cocogoose text-white">
              New Users Daily Registrations
            </h1>
            <div className="w-full h-[150px] rounded-[40px] bg-gradient-to-b to-brand from-light-blue-50">
              <div className="flex w-full justify-center gap-4 items-center h-full px-5">
                <IoLogOut size={"60px"} className="text-white" />
                <h1 className="text-white font-cocogoose text-[36px] leading-[48px]">
                  {stats.statistics.daily_new_users}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full h-[420px]">
          <div className="w-full h-full rounded-[40px] bg-light-blue-30 flex justify-around p-10 gap-4">
            <div className="flex flex-col h-full w-fit gap-8">
              <h2 className="text-brand text-[20px] font-cocogoose">
                Course Metrics
              </h2>
              <div className="flex flex-col items-center justify-center gap-10 rounded-[40px] bg-brand px-5 py-8 w-full h-[280px]">
                <h2 className="text-[20px] text-white text-center font-cocogoose">
                  Total Courses
                </h2>
                <p className="font-cocogoose-light font-bold text-4xl text-white">
                  <span className="font-cocogoose">
                    {stats.total_courses}
                  </span>
                </p>
              </div>
            </div>
            <div className="w-fit h-full flex flex-col gap-8">
              <h2 className="text-brand text-[20px] font-cocogoose">
                Most Viewed Courses
              </h2>
              <div className="flex justify-between w-full">
                {stats.most_viewed_courses
                  .slice(0, 2)
                  .map((course, i: number) => {
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center gap-10 rounded-[40px] bg-brand px-5 py-8 w-[45%] h-[280px]"
                      >
                        <h2 className="text-[20px] text-white text-center font-cocogoose">
                          {course.title}
                        </h2>
                        <p className="font-cocogoose-light font-bold text-[18px] text-white">
                          <span className="font-cocogoose">
                            {course.modules.length}
                          </span>{" "}
                          module{course.modules.length > 1 ? "s" : ""}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full h-[450px] rounded-[40px] bg-light-blue-30 flex flex-col p-10 justify-between">
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
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
