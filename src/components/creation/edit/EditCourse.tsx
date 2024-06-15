"use client";

import React, { FC, useEffect, useState, ReactNode } from "react";

import NavBar from "../../resuable/NavBar/NavBar";
import Footer from "../../resuable/Footer/Footer";
import { globalKey } from "@/stores/globalStore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getCourseById from "@/hooks/queries/useGetCourseByID";
import { Loader } from "@mantine/core";
import EditModule from "./EditModule";
import EditQuiz from "./EditQuiz";
import { iMainCourse, useEditCourseStore } from "@/stores/editStore";

const EditCourse: FC<{ id: string }> = ({ id }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const tabs: string[] = ["Edit Module", "Edit Quiz"];
  const [loading, setLoading] = useState<boolean>(true);

  const children: ReactNode[] = [<EditModule key={0} />, <EditQuiz key={1} />];

  const getCourse = () => {
    let data = localStorage.getItem(globalKey);
    if (data === null) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    let token = JSON.parse(data).access_token;
    if (!token) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    getCourseById(
      id,
      token,
      (res: any) => {
        let c = res.data as iMainCourse;
        useEditCourseStore.setState(c);
        setLoading(false);
      },
      (e: any) => {
        setLoading(false);
        toast.error("An error occurred. Please try again");
      }
    );
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <>
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
                onClick={() => setCurrentTab(i)}
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
          {loading ? (
            <div className="flex w-full items-center justify-center h-[40vh]">
              <Loader />
            </div>
          ) : (
            children[currentTab]
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditCourse;
