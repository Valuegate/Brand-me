import React, { useState, FC, useEffect } from "react";

import { iCourse } from "./types";
import useGetAllCourses from "@/hooks/queries/useGetAllCourses";

import { Loader } from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iCourseCardProp {
  course: iCourse;
  onStart: () => void;
}

const Courses = () => {
  const { data, isSuccess, isError, isLoading } = useGetAllCourses();
  const [courses, setCourses] = useState<iCourse[]>([]);

  

  useEffect(() => {
    if (!isLoading && isSuccess) {
      let courseArray: iCourse[] = data.map((val, i) => {
        return {
          id: val.id,
          image: val.banner_content,
          name: val.title,
          description: val.description,
          progress: 0.3,
          details: {
            videos: val.modules.map((md, index) => {
              return {
                id: md.id,
                name: md.title,
                description: md.text_content,
                duration: "8 min",
                complete: md.is_completed,
                video: md.video_content,
              };
            }),
            currentVideo: 0,
            quizDone: false,
          },
        };
      });
      setCourses(courseArray);
    }
  }, [isLoading, isSuccess, data]);

  if (isLoading) {
    return (
      <div className="flex flex-col w-full items-center justify-center h-[40vh]">
        <Loader />
      </div>
    );
  }

  if (!isLoading && isError) {
    toast.error("An error occurred. Please try again");

    return (
      <div className="flex flex-col w-full items-center justify-center h-40">
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
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-cocogoose text-[56px] md:text-[24px]">All Courses</h1>
      <div className="mt-20 md:mt-10 grid grid-cols-3 md:grid-cols-1 gap-10 md:gap-5 w-full">
        {courses.map((course, i) => {
          return (
            <CourseCard
              key={i}
              course={course}
              onStart={() => {
                window.location.assign("/platform/course/" + course.id);
              }}
            />
          );
        })}
      </div>
      {courses.length === 0 && (
        <div className="text-brand text-[24px] font-cocogoose">
          There are no courses created yet!
        </div>
      )}
    </div>
  );
};

const CourseCard: FC<iCourseCardProp> = ({ course, onStart }) => {
  return (
    <div className="w-full h-[480px] md:h-[400px] bg-light-blue-30 rounded-xl p-[5%] justify-around items-center flex flex-col transition-colors duration-200 ease-in-out hover:bg-light-blue-50">
      <img
        src={course.image}
        alt="course image"
        className="w-full h-[200px] md:h-[160px] rounded-3xl"
      />
      <h1 className="mt-5 font-cocogoose text-brand text-[32px] md:text-[24px] text-center">
        {course.name}
      </h1>
      <p className="font-cocogoose-light font-bold text-[18px] md:text-[16px] text-center text-brand">
        {course.description}
      </p>
      <button
        onClick={onStart}
        className="text-[18px] text-white bg-light-blue hover:bg-brand hover:text-light-blue font-cocogoose h-[45px] w-[200px] md:w-full rounded-lg transition-colors ease-in duration-200"
      >
        Proceed
      </button>
    </div>
  );
};

export default Courses;
