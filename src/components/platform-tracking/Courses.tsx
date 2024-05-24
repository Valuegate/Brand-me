import React, { useState, useEffect } from "react";
import { MdMoreVert } from "react-icons/md";
import { iCourse } from "./types";
import DropdownIcon from "@/icons/DropDownIcon";
import { Loader, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Courses = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [courses, setCourses] = useState<iCourse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setCourses(
      Array(15).fill({
        name: "Foundation Course",
        image: "",

        modules: 13,
        activation: "2,049,034",
        completion: "1,490,489",
        views: "9,209,490",
        active: true,
      })
    );
    setLoading(false);
  }, []);

  const viewCourse = (val: number) => {
    setSelected(val);
    open();
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-64 flex items-center justify-center">
          <Loader size={"36px"} />
        </div>
      ) : (
        <div className="w-full px-20">
          <div className="flex flex-col w-full shadow-custom bg-white">
            <div className="w-full flex justify-between items-center h-16 px-5">
              <h2 className="font-cocogoose text-[16px] text-black w-[5%]">
                S/N
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[20%]">
                Course Name
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[10%]">
                Modules
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[10%]">
                Activation
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[10%]">
                Completion
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[10%]">
                Views
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[10%]">
                Status
              </h2>
              <h2 className="font-cocogoose text-[16px] text-black w-[5%]">
                Actions
              </h2>
            </div>

            <div className="w-full flex flex-col md:hidden text-lg text-gray-10 px-5">
              {courses.map((course, i) => {
                return (
                  <div
                    key={i}
                    className={`flex justify-between w-full ${
                      i % 2 === 1
                    } h-[65px] items-center px-2`}
                  >
                    <h2 className="w-[5%] med-3 text-contrast-70">{i + 1}</h2>
                    <h2 className="w-[20%] med-3 text-contrast-70 line-clamp-1">
                      {course.name}
                    </h2>
                    <h2 className="w-[10%] med-3 text-contrast-70">
                      {course.modules}
                    </h2>
                    <h2 className="w-[10%] med-3 text-contrast-70">
                      {course.activation}
                    </h2>
                    <h2 className="w-[10%] med-3 text-contrast-70">
                      {course.completion}
                    </h2>
                    <h2 className="w-[10%] med-3 text-contrast-70">
                      {course.views}
                    </h2>
                    <h2 className={`w-[10%] med-3`}>
                      <div
                        className={`${
                          course.active ? "text-green-100" : "text-error"
                        } w-fit`}
                      >
                        {course.active ? "Active" : "Disabled"}
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
          </div>
        </div>
      )}
      <Modal.Root
        padding={"0px"}
        top={"0px"}
        centered
        opened={opened}
        onClose={close}
        size={"35vw"}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body>
            <div className="px-10 py-8 flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-brand text-[18px] font-cocogoose">
                  Foundation Course
                </h2>
                <div
                  className={`
                    ${
                      true
                        ? "bg-role-green-bg text-green-100"
                        : "bg-role-red-bg text-error"
                    }
                    px-3 py-1 rounded
                `}
                >
                  {true ? "Active" : "Disabled"}
                </div>
              </div>
              <div className="w-full h-[200px] bg-[#D9D9D9] rounded mt-5" />
              <div className="flex justify-between items-center w-full mt-5">
                <h2 className="text-brand text-[16px] font-cocogoose">
                  Introduction
                </h2>
                <div className="text-brand text-[14px] font-cocogoose-light font-bold">
                  2hrs 45mins
                </div>
              </div>
              <p className="mt-2 text-brand text-[14px] font-cocogoose-light font-bold">
                This class will give you all the insights for great and
                successful user research. You will learn the basics of UX
                research and come up with your own research plan.
              </p>
              <h2 className="text-brand text-[16px] font-cocogoose mt-2">
                Modules
              </h2>
              <div className="flex gap-5 w-full">
                {[1, 2, 3].map((nm, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-3 w-[30%]">
                      <div className="w-full h-[100px] bg-[#D9D9D9] rounded" />
                      <div className="flex justify-between items-center w-full">
                        <h2 className="text-brand text-[14px] font-cocogoose">
                          U{nm} 
                        </h2>
                        <div className="text-brand text-[12px] font-cocogoose-light font-bold">
                          2hrs 45mins
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default Courses;
