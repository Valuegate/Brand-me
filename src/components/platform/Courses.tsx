import React, { useState, FC } from "react";

import { iCourse } from "./types";
import ViewCourse from "./ViewCourse";

interface iCourseCardProp {
  course: iCourse;
  onStart: () => void;
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<number>(-1);

  const courses: iCourse[] = Array(15).fill({
    image: "",
    name: "Foundation",
    description: "Create an accurate and relevant survey form",
    progress: 0.3,
    details: {
      videos: Array(5).fill({
        name: "Introduction",
        description:
          "This class will give you all the insights for great and successful user research. You will learn the basics of UX research and come up with your own research plan.",

        duration: "8 min",
        complete: false,
        video: "",
      }),
      currentVideo: 0,
      quizDone: false,
    },
  });

  return selectedCourse === -1 ? (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-cocogoose text-[56px]">All Courses</h1>
      <div className="mt-20 grid grid-cols-3 gap-10 w-full">
        {courses.map((course, i) => {
          return (
            <CourseCard
              key={i}
              course={course}
              onStart={() => {
                setSelectedCourse(i);
              }}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <ViewCourse course={courses[selectedCourse]} />
  );
};

const CourseCard: FC<iCourseCardProp> = ({ course, onStart }) => {
  let progress = "w-[" + course.progress * 100 + "%]";

  return (
    <div className="w-full h-[500px] bg-light-blue-30 rounded-xl p-[5%] flex flex-col transition-colors duration-200 ease-in-out hover:bg-light-blue-50">
      <div className="w-full h-[200px] rounded-3xl bg-gradient-to-b from-light-blue-0 to-light-blue-30" />
      <h1 className="mt-5 font-cocogoose text-brand text-[32px]">
        {course.name}
      </h1>
      <p className="font-cocogoose-light font-bold text-[20px] text-brand">
        {course.description}
      </p>
      <div className="my-5 h-[50px] w-full bg-light-blue-30 rounded-2xl">
        <div
          className={`h-full w-[30%] bg-light-blue rounded-l-2xl rounded-r-[25px]`}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="text-[18px] text-white bg-light-blue hover:bg-brand hover:text-light-blue font-cocogoose h-[45px] w-[200px] rounded-lg transition-colors ease-in duration-200"
        >
          {course.progress > 0 ? "Continue" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Courses;
