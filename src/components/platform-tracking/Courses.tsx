import React, { useState, useEffect } from "react";
import { MdMoreVert } from "react-icons/md";
import { iCourse } from "../platform/types";
import DropdownIcon from "@/icons/DropDownIcon";
import { Loader, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useGetAllCourses from "@/hooks/queries/useGetAllCourses";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

import { useDeleteCourse } from "@/hooks/mutations/useDeleteCourse";
import { globalKey } from "@/stores/globalStore";
import Link from "next/link";

const Courses = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [courses, setCourses] = useState<iCourse[]>([]);
  const { data, isSuccess, isError, isLoading } = useGetAllCourses();
  const [opened, { open, close }] = useDisclosure(false);

  const [isDeleting, setIsDeleting] = useState<boolean>(false);

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

  if (isLoading || isDeleting) {
    return (
      <div className="flex flex-col w-full items-center justify-center h-40">
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
        An error occurred. Please try again
      </div>
    );
  }

  const viewCourse = (val: number) => {
    setSelected(val);
    open();
  };

  const deleteCourse = (id: string | number) => {
    let token = localStorage.getItem(globalKey);
    if (token === null) {
      toast.error("You need to login first");
      return;
    }

    token = JSON.parse(token).access_token;

    setIsDeleting(true);

    useDeleteCourse(
      id,
      token!,
      (res: any) => {
        toast.success("You have successfully deleted the course");

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      },
      (err: any) => {
        toast.error("An error occurred while deleting the course");
        setIsDeleting(false);
      }
    );
  };

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
      <div className="w-full px-20">
        <div className="flex flex-col w-full shadow-custom bg-white">
          <div className="w-full flex justify-between items-center h-16 px-5">
            <h2 className="font-cocogoose text-[16px] text-black w-[10%]">
              S/N
            </h2>
            <h2 className="font-cocogoose text-[16px] text-black w-[50%]">
              Course Name
            </h2>
            <h2 className="font-cocogoose text-[16px] text-black w-[10%]">
              Modules
            </h2>

            <h2 className="font-cocogoose text-end text-[16px] text-black w-[10%]">
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
                  <h2 className="w-[10%] med-3 text-contrast-70">{i + 1}</h2>
                  <h2 className="w-[50%] med-3 text-contrast-70 line-clamp-1">
                    {course.name}
                  </h2>
                  <h2 className="w-[10%] med-3 text-contrast-70 text-center">
                    {course.details.videos.length}
                  </h2>

                  <div className="w-[10%] med-3 text-contrast-70 flex justify-end cursor-pointer">
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
                          {/* <Link href={`/creation/edit/${course.id}`} className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300">
                            Edit Course
                          </Link> */}
                          <p
                            onClick={() => deleteCourse(course.id)}
                            className="text-contrast-base cursor-pointer med-3 leading-[32px] hover:bg-brand hover:text-white hover:rounded flex items-center px-4 h-10 transition-all ease-in duration-300"
                          >
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
      {selected >= 0 && (
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
                    {courses[selected].name}
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
                <Image
                  src={courses[selected].image}
                  alt="course image"
                  width={200}
                  height={200}
                  className="w-full h-[200px] rounded mt-5"
                />
                <div className="flex justify-between items-center w-full mt-5">
                  <h2 className="text-brand text-[16px] font-cocogoose">
                    Introduction
                  </h2>
                </div>
                <p className="mt-2 text-brand text-[14px] font-cocogoose-light font-bold">
                  {courses[selected].description}
                </p>
                <h2 className="text-brand text-[16px] font-cocogoose mt-2">
                  Modules
                </h2>
                <div className="flex gap-5 w-full">
                  {courses[selected].details.videos.map((video, i) => {
                    return (
                      <div key={i} className="flex flex-col gap-3 w-[30%]">
                        <Image
                          src={video.video}
                          alt="module image"
                          width={200}
                          height={100}
                          className="w-full h-[100px] rounded"
                        />
                        <div className="flex justify-between items-center w-full">
                          <h2 className="text-brand text-[14px] font-cocogoose">
                            U{i + 1}
                          </h2>
                          <div className="text-brand text-[12px] font-cocogoose-light font-bold">
                            {video.duration}
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
      )}
    </div>
  );
};

export default Courses;
