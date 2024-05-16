"use client";

import React, { useRef, useEffect, useState } from "react";

import InputComponent from "../resuable/InputComponent";
import InputAreaComponent from "../resuable/InputAreaComponent";

import { MdUpload, MdAddCircleOutline } from "react-icons/md";

import { createCourse, TModule } from "@/hooks/mutations/useCreateCourse";
import { globalKey } from "@/stores/globalStore";

import { getBase64, getVideoCover } from "@/functions/fileFunction";
import Image from "next/image";

const CourseCreation = () => {
  const [banner, setBanner] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [instructor, setInstructor] = useState<string>("");
  const [modules, setModules] = useState<TModule[]>([]);

  const [moduleTitle, setModuleTitle] = useState<string>("");
  const [moduleDescription, setModuleDescription] = useState<string>("");
  const [moduleDuration, setModuleDuration] = useState<string>("");
  const [moduleVideo, setModuleVideo] = useState<File | null>(null);
  const [moduleVideoData, setModuleVideoData] = useState<string>("");

  const bannerRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  const [editIndex, setEditIndex] = useState<number>(-1);

  const [page, setPage] = useState<number>(0);

  const reset = () => {
    setEditIndex(-1);
    setModuleTitle("");
    setModuleVideoData("");
    setModuleDescription("");
    setModuleDuration("");
    setModuleVideo(null);
  };

  const create = () => {
    let token = localStorage.getItem(globalKey)!;
    token = JSON.parse(token).access_token;

    createCourse(
      {
        title: title,
        description: description,
        instructor: instructor,
        modules: modules,
      },
      token,
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <>
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
                    banner.length === 0 &&
                    "bg-brand-20 flex flex-col items-center justify-center gap-2"
                  }`}
                >
                  {banner.length === 0 && (
                    <>
                      <MdUpload size={"26px"} className="text-brand" />
                      <p className="text-brand font-cocogoose-light font-bold text-center text-[16px]">
                        Upload your banner in png or jpg format
                      </p>
                    </>
                  )}
                  {banner.length !== 0 && (
                    <Image
                      src={banner}
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
                      getBase64(e.target.files[0])
                        .then((res) => setBanner(res as string))
                        .catch((err) => setBanner(""));
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
                    <Image
                      src={moduleVideoData}
                      alt="module video"
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                    />
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
                        getVideoCover(e.target.files[0])
                          .then((res) => {
                            // setModuleVideoData(res as string);
                            setModuleVideo(files[0]);
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
                        contents: [
                          {
                            title: moduleTitle,
                            text_content: moduleDescription,
                            video_content: moduleVideo!,
                          },
                        ],
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

                      reset();
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
                {page === 0 ? "Proceed" : "Publish"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CourseCreation;
