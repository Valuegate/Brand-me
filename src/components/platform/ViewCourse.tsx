import React, { FC } from "react";
import { iCourse, iVideoData } from "./types";

import { MdDone } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { HiPlay } from "react-icons/hi2";
import { BiTimeFive } from "react-icons/bi";
import ProgressBar from "../resuable/ProgressBar";

export interface iViewCourseProp {
  course: iCourse;
}

const ViewCourse: FC<iViewCourseProp> = ({ course }) => {
  let currentVideo: iVideoData =
    course.details.videos[course.details.currentVideo];

  let nextVideoIndex = course.details.currentVideo + 1;

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-cocogoose text-[56px]">{course.name}</h1>
      <div className="flex justify-between mt-20 w-full">
        <div className="w-[350px] flex flex-col gap-10 items-center">
          <ProgressBar
            backgroundColor="bg-brand-49"
            valueColor="bg-brand"
            hideText={false}
            value={course.progress}
          />

          <div className="flex flex-col w-full gap-5">
            {course.details.videos.map((video, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center w-full justify-between"
                >
                  <div className="bg-brand w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]">
                    U{i + 1}
                  </div>
                  <p className="font-cocogoose-light w-[calc(100%-64px)] text-center font-bold text-brand text-[18px]">
                    {video.name} <span className="font-cocogoose">(</span>
                    <span className="font-cocogoose">{video.duration}</span>
                    <span className="font-cocogoose">)</span>
                  </p>

                  <div
                    className={`${
                      video.complete ? "bg-brand" : "border border-brand"
                    } w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]`}
                  >
                    {video.complete && <MdDone size={"24px"} />}
                  </div>
                </div>
              );
            })}
            <div className="flex items-center w-full justify-between">
              <div className="bg-brand w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]">
                U{course.details.videos.length + 1}
              </div>
              <p className="font-cocogoose-light w-[calc(100%-64px)] text-center font-bold text-brand text-[18px]">
                Quiz
              </p>
              <div
                className={`${
                  course.details.quizDone && "bg-brand"
                } w-[32px] h-[32px] rounded-lg flex justify-center items-center `}
              >
                {!course.details.quizDone && (
                  <AiFillLock size={"32px"} fill="#1C274D" />
                )}
              </div>
            </div>
          </div>

          {course.details.currentVideo < course.details.videos.length - 1 && (
            <div className="flex flex-col w-full">
              <h2 className="font-cocogoose text-[20px] text-brand">
                Continue Watching
              </h2>
              <div className="bg-light-blue-30 w-[350px] p-5 rounded-3xl">
                <div className="w-full h-[200px] rounded-3xl bg-gradient-to-b from-light-blue-0 to-brand-30 flex justify-center items-center">
                  <div className="p-4 rounded-full bg-brand-49">
                    <HiPlay size={"48px"} fill="#1C274D" />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="bg-brand w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]">
                    U{nextVideoIndex + 1}
                  </div>
                  <p className="font-bold text-brand text-[18px] font-cocogoose-light">
                    {course.details.videos[nextVideoIndex].name}
                  </p>
                  <div className="text-brand font-cocogoose-light font-bold gap-2 flex items-center">
                    <BiTimeFive size={"26px"} />
                    {currentVideo.duration}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-[800px] h-fit py-5 px-10 rounded-[30px] bg-light-blue-30">
          {course.details.currentVideo < course.details.videos.length ? (
            <div className="flex flex-col w-full">
              <div className="flex gap-10 items-center w-full">
                <h2 className="font-cocogoose text-brand text-[20px]">
                  Course {course.details.currentVideo + 1}
                </h2>
                <div className="text-brand font-cocogoose-light font-bold gap-2 flex items-center">
                  <BiTimeFive size={"26px"} />
                  {currentVideo.duration}
                </div>
              </div>
              <div className="w-full h-[400px] rounded-3xl bg-gradient-to-b from-light-blue-0 to-brand-30 flex justify-center items-center">
                <div className="p-4 rounded-full bg-brand-49">
                  <HiPlay size={"48px"} fill="#1C274D" />
                </div>
              </div>
              <div className="my-16 gap-3 flex flex-col w-full">
                <h2 className="font-cocogoose text-[22px] text-brand">
                  {currentVideo.name}
                </h2>
                <p className="font-cocogoose-light font-bold text-[18px] text-brand">
                  {currentVideo.description}
                </p>
              </div>
              <button className="mb-6 bg-brand text-white text-[18px] font-cocogoose flex gap-1 items-center justify-center w-[270px] h-[45px] rounded-lg">
                Mark As Complete
                <MdDone size={"26px"} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <h2 className="font-cocogoose text-brand text-[20px]">
                Instruction
              </h2>
              <p className="mt-5 text-[16px] text-brand font-cocogoose-light font-bold">
                {course.description}
              </p>
              <button
                onClick={() => {
                  window.location.assign("/quiz/id");
                }}
                className="mt-10 mb-6 bg-brand text-white text-[18px] font-cocogoose flex gap-1 items-center justify-center w-[200px] h-[45px] rounded-lg"
              >
                Start Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
