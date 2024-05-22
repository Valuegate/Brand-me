import React, { useState } from "react";
import { MdMoreVert } from 'react-icons/md';
import { iCourse } from "./types";
import DropdownIcon from '@/icons/DropDownIcon';
const Courses = () => {
    const [selected, setSelected] = useState<number>(-1);

    const courses: iCourse[] = [
        {
            sn: "01",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Active",
        },
        {
            sn: "02",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Disabled",
        },
        {
            sn: "03",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Active",
        },
        {
            sn: "04",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Disabled",
        },
        {
            sn: "05",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Active",
        },
        {
            sn: "06",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Disabled",
        },
        {
            sn: "07",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Active",
        },
        {
            sn: "08",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Disabled",
        },
        {
            sn: "09",
            name: " Foundation Course",
            modules: 13,
            activation: "2,049,034",
            completion: "1,490,489",
            views: "9,209,490",
            status: "Active",
        },
    ];

    const viewCourse = (val: number) => {
        setSelected(val);
        open();
      };


    return (
        <>
        <div className="flex items-center justify-between">
            <div className="flex gap-12 text-black font-cocogoose text-lg">
                <h2>S/N</h2>
                <h2>Course Name</h2>
            </div>
            <div className="flex gap-14 text-black font-cocogoose text-lg">
                <h2>Modules</h2>
                <h2>Activation</h2>
                <h2>Completion</h2>
                <h2>Views</h2>
                <h2>Status</h2>
                <h2>Actions</h2>
            </div>
        </div>
        <div className="w-full flex flex-col md:hidden text-lg text-gray-10">
            {courses.map((course, i) => {
            return (
              <div
                key={i}
                className={`flex w-full ${
                  i % 2 === 1 
                } h-[65px] items-center px-2`}
              >
                <h2 className="w-[8%] med-3 text-contrast-70">
                  {course.sn}
                </h2>
                <h2 className="w-[40%] med-3 text-contrast-70 line-clamp-1">
                  {course.name}
                </h2>
                <h2 className="w-[15%] med-3 text-contrast-70">
                  {course.modules}
                </h2>
                <h2 className="w-[18%] med-3 text-contrast-70">
                  {course.activation}
                </h2>
                <h2 className="w-[18%] med-3 text-contrast-70">
                  {course.completion}
                </h2>
                <h2 className="w-[15%] med-3 text-contrast-70">
                  {course.views}
                </h2>
                <h2 className={`w-[15%] med-3`}>
                  <div
                    className={`${
                      course.status === "Active"
                        ? "text-green-100"
                        : course.status === "Disabled"
                        ? "text-error"
                        : "text-error"
                    } w-fit`}
                  >
                    {course.status}
                  </div>
                </h2>
                <div className="w-[5%] med-3 text-contrast-70 flex justify-end cursor-pointer">
                  <DropdownIcon
                    icon={<MdMoreVert size={"24px"} fill="#000000" />}
                    child={
                      <div className="flex flex-col shadow-custom bg-white rounded w-[180px] px-2 py-3">
                        <p
                          onClick={() => {
                            viewCourse(i);
                          }}
                          className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300"
                        >
                          View Course
                        </p>
                        <p className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300">
                          Edit Course
                        </p>
                        <p className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300">
                          Disable
                        </p>
                        <p className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300">
                          Delete Course
                        </p>
                      </div>
                    }
                    custom={`absolute ${
                      i + 2 >= courses.length ? "-top-8" : "top-8"
                    } -right-2 z-10`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        </>
    )
}

export default Courses;
