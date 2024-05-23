"use client";

import React, { useRef, useEffect, useState } from "react";

import InputComponent from "../resuable/InputComponent";
import InputAreaComponent from "../resuable/InputAreaComponent";

import { MdUpload, MdAddCircleOutline } from "react-icons/md";

import { createCourse, TModule } from "@/hooks/mutations/useCreateCourse";
import { globalKey } from "@/stores/globalStore";

import { getBase64, getVideoCover } from "@/functions/fileFunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Loader } from "@mantine/core";
import { FaPlay } from "react-icons/fa6";

const CourseCreation = () => {
  const [banner, setBanner] = useState<File | null>(null);
  const [bannerData, setBannerData] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [instructor, setInstructor] = useState<string>("");
  const [modules, setModules] = useState<TModule[]>([]);

  const [moduleTitle, setModuleTitle] = useState<string>("");
  const [moduleDescription, setModuleDescription] = useState<string>("");
  const [moduleDuration, setModuleDuration] = useState<string>("");
  const [moduleVideo, setModuleVideo] = useState<File | null>(null);
  const [moduleVideoData, setModuleVideoData] = useState<string>("");
  const [loading, isLoading] = useState<boolean>(false);

  const bannerRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  const [editIndex, setEditIndex] = useState<number>(-1);

  const [page, setPage] = useState<number>(0);

  const resetModule = () => {
    setEditIndex(-1);
    setModuleTitle("");
    setModuleVideoData("");
    setModuleDescription("");
    setModuleDuration("");
    setModuleVideo(null);
  };

  // Modules content can be pptx, pdf or video
  // Google Translate
  // Nav bar absolute is overlapping on screen
  // Footer: Efektas logo is stretched

  const resetCourse = () => {
    setBannerData("");
    setBanner(null);
    setTitle("");
    setDescription("");
    setInstructor("");
    setModules([]);
  };

  const create = () => {
    let token = localStorage.getItem(globalKey)!;
    token = JSON.parse(token).access_token;

    isLoading(true);

    createCourse(
      {
        title: title,
        description: description,
        instructor: instructor,
        banner: banner!,
        modules: modules,
      },
      token,
      (res) => {
        isLoading(false);
        toast.success("Your course has been created. Thank You");
        resetCourse();
        resetModule();
        setPage(0);
      },
      (err) => {
        isLoading(false);
        toast.error("An error occurred. Please try again later");
      }
    );
  };

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
      <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col items-center p-10 md:px-0 ">
        {page === 0 ? (
          <>
            <div className="size-[80px] bg-brand rounded-full flex items-center justify-center text-white text-[40px] leading-[44px] font-semibold">
              1
              <span className="font-medium text-[26px] leading-[30px]">/2</span>
            </div>
            <h2 className="text-brand text-[30px] mt-10 font-cocogoose">
              Course Creation
            </h2>
            <div className="mt-10 w-[60%] flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="font-cocogoose text-[16px] text-brand">
                  Upload Banner
                </p>
                <div
                  onClick={() => {
                    bannerRef.current?.click();
                  }}
                  className={`w-full h-[180px] cursor-pointer rounded overflow-hidden ${
                    bannerData.length === 0 &&
                    "bg-brand-20 flex flex-col items-center justify-center gap-2"
                  }`}
                >
                  {bannerData.length === 0 && (
                    <>
                      <MdUpload size={"26px"} className="text-brand" />
                      <p className="text-brand font-cocogoose-light font-bold text-center text-[16px]">
                        Upload your banner in png or jpg format
                      </p>
                    </>
                  )}
                  {bannerData.length !== 0 && (
                    <Image
                      src={bannerData}
                      alt="banner image"
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  ref={bannerRef}
                  onChange={(e) => {
                    if (e.target.files !== null) {
                      let firstFile: File = e.target.files[0];
                      getBase64(firstFile)
                        .then((res) => {
                          setBannerData(res as string);
                          setBanner(firstFile);
                        })
                        .catch((err) => {
                          setBannerData("");
                          setBanner(null);
                        });
                    }
                  }}
                />
              </div>

              <InputComponent
                width="w-full"
                label="Course Title"
                value={title}
                type="text"
                placeholder="e.g Foundational Course"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <InputAreaComponent
                label="Course Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Type here..."
                value={description}
              />
              <InputComponent
                width="w-full"
                label="Course Instructor"
                type="text"
                value={instructor}
                placeholder="e.g John Doe"
                onChange={(e) => {
                  setInstructor(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  if (page === 0) {
                    setPage(1);
                  }
                }}
                className="w-full mt-10 bg-brand rounded-lg h-[50px] text-white font-cocogoose"
              >
                Proceed
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="size-[80px] bg-brand rounded-full flex items-center justify-center text-white text-[40px] leading-[44px] font-semibold">
              2
              <span className="font-medium text-[26px] leading-[30px]">/2</span>
            </div>
            <h2 className="text-brand text-[30px] mt-10 font-cocogoose">
              Course Creation
            </h2>
            <div className="mt-10 w-[60%] flex flex-col gap-5">
              <div className="flex flex-wrap gap-9 items-center">
                {modules.map((md, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-4 relative">
                      <Image
                        src={md.image}
                        alt="module image"
                        className="w-[250px] h-[160px] rounded-lg"
                        width={250}
                        height={160}
                      />
                      <div className="flex items-center justify-between">
                        <p className="text-[16px] font-cocogoose text-brand">
                          U{i + 1}
                        </p>
                        <p className="text-[16px] font-cocogoose text-brand">
                          {md.duration}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-cocogoose text-[16px] text-brand">
                  Upload Video
                </p>
                <div
                  onClick={() => {
                    videoRef.current?.click();
                  }}
                  className={`w-full h-[180px] cursor-pointer rounded overflow-hidden ${
                    moduleVideoData.length === 0 &&
                    "bg-brand-20 flex flex-col items-center justify-center gap-2"
                  }`}
                >
                  {moduleVideoData.length === 0 && (
                    <>
                      <MdUpload size={"26px"} className="text-brand" />
                      <p className="text-brand font-cocogoose-light text-center font-bold text-[16px]">
                        Upload your video with a 300MB maximum limit
                      </p>
                    </>
                  )}
                  {moduleVideoData.length !== 0 && (
                    <div className="w-full h-full relative flex justify-center items-center">
                      <Image
                        src={moduleVideoData}
                        alt="module video"
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                      />
                      <div className="bg-white-50 size-[60px] absolute rounded-full flex justify-center items-center">
                        <FaPlay fill="#FFFFFF" size={"26px"} />
                      </div>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="video/*"
                  ref={videoRef}
                  onChange={(e) => {
                    if (e.target.files !== null) {
                      let files: FileList | null = e.target.files;
                      if (files !== null) {
                        let firstFile = files[0];
                        getVideoCover(firstFile)
                          .then((res) => {
                            if (res !== null) {
                              var urlCreator = window.URL || window.webkitURL;
                              var imageUrl = urlCreator.createObjectURL(res);
                              setModuleVideoData(imageUrl);
                              setModuleVideo(firstFile);
                            }
                          })
                          .catch((err) => {
                            console.error(err);
                            setModuleVideoData("");
                            setModuleVideo(null);
                          });
                      }
                    }
                  }}
                />
              </div>

              <InputComponent
                width="w-full"
                label="Module Title"
                value={moduleTitle}
                type="text"
                placeholder="e.g Introduction"
                onChange={(e) => {
                  setModuleTitle(e.target.value);
                }}
              />
              <InputAreaComponent
                label="Module Content"
                onChange={(e) => {
                  setModuleDescription(e.target.value);
                }}
                placeholder="Type here..."
                value={moduleDescription}
              />
              <InputComponent
                width="w-full"
                label="Module Duration"
                type="text"
                value={moduleDuration}
                placeholder="e.g 8 mins"
                onChange={(e) => {
                  setModuleDuration(e.target.value);
                }}
              />
              {page === 1 && (
                <button
                  onClick={() => {
                    if (
                      moduleTitle.length !== 0 &&
                      moduleDescription.length !== 0 &&
                      moduleDuration.length !== 0 &&
                      moduleVideo !== null
                    ) {
                      if (moduleVideo === null) return;

                      let modl: TModule = {
                        title: moduleTitle,
                        is_completed: false,
                        image: moduleVideoData,
                        duration: moduleDuration,
                        text_content: moduleDescription,
                        video_content: moduleVideo!,
                      };

                      if (editIndex === -1) {
                        let m = modules;
                        m.push(modl);
                        setModules(m);
                      } else {
                        let newArray = modules.slice(0, editIndex);
                        newArray.push(modl);
                        let post = modules.slice(editIndex + 1);
                        for (let i = 0; i < post.length; ++i) {
                          newArray.push(post[i]);
                        }
                        setModules(newArray);
                      }

                      resetModule();
                    }
                  }}
                  className="w-full mt-10 bg-brand-30 flex justify-center items-center gap-2 rounded-lg h-[50px] text-brand font-cocogoose"
                >
                  <MdAddCircleOutline size={"26px"} />
                  Add Module
                </button>
              )}
              <button
                onClick={create}
                className={`w-full ${
                  page === 0 && "mt-10"
                } bg-brand rounded-lg h-[50px] text-white font-cocogoose`}
              >
                {loading && <Loader color="#fff" />}
                {!loading && (page === 0 ? "Proceed" : "Publish")}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CourseCreation;
