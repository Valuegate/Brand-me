"use client";

import React, { useRef, useEffect, useState } from "react";

import InputComponent from "../resuable/InputComponent";
import ComboComponent from "../resuable/ComboComponent";
import InputAreaComponent from "../resuable/InputAreaComponent";

import { FaLink } from "react-icons/fa6";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { MdUpload } from "react-icons/md";

import {
  TCreateCoursePayload,
  createCourse,
  TModule,
} from "@/hooks/mutations/useCreateCourse";
import { globalKey } from "@/stores/globalStore";

import { getBase64 } from "@/functions/fileFunction";
import Image from "next/image";

const CourseCreation = () => {
  const [banner, setBanner] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [instructor, setInstructor] = useState<string>("");
  const [modules, setModules] = useState<TModule[]>([]);
  const [opened, { open, close }] = useDisclosure(false);

  const [moduleTitle, setModuleTitle] = useState<string>("");
  const [moduleDescription, setModuleDescription] = useState<string>("");
  const [moduleVideo, setModuleVideo] = useState<File | null>(null);

  const bannerRef = useRef<HTMLInputElement>(null);

  const [editIndex, setEditIndex] = useState<number>(-1);

  const [page, setPage] = useState<number>(0);

  const reset = () => {
    setEditIndex(-1);
    setModuleTitle("");
    setModuleDescription("");
    setModuleVideo(null);
    close();
  };

  const create = () => {
    let token = localStorage.getItem(globalKey)!;
    token = JSON.parse(token).access_token;

    createCourse(
      {
        description: description,
        instructor: instructor,
        title: title,
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
                      <p className="text-brand font-cocogoose-light font-bold text-[16px]">
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
                      <p className="text-brand font-cocogoose-light font-bold text-[16px]">
                        Upload your video with a 300MB maximum limit
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
        )}
      </div>
      {/* <Modal opened={opened} onClose={reset} centered>
        <div className="flex flex-col w-full">
          <h2 className="text-brand text-[20px] font-cocogoose">
            {editIndex === -1 ? "New" : "Edit"} Module
          </h2>
          <div className="mt-5 flex flex-col gap-5">
            <InputComponent
              width="w-full"
              label="Module Title"
              value={moduleTitle}
              type="text"
              placeholder=""
              onChange={(e) => {
                setModuleTitle(e.target.value);
              }}
            />
            <InputAreaComponent
              label="Module Description"
              value={moduleDescription}
              placeholder=""
              onChange={(e) => {
                setModuleDescription(e.target.value);
              }}
            />
            <div className="flex flex-col w-full gap-1">
              <p className="font-cocogoose-light font-bold text-[16px] text-brand ">
                Video URL
              </p>
              <div className="font-cocogoose border-[3px] line-clamp-1 w-full h-[60px] text-[18px] text-brand flex items-center pl-4 pr-10 border-brand rounded-lg relative">
                {moduleVideo === null ? "" : moduleVideo.name}
                <div
                  onClick={() => {
                    fileRef.current?.click();
                  }}
                  className="bg-brand-30 p-2 cursor-pointer flex rounded absolute right-2 top-2.5"
                >
                  <FaLink className="text-brand" size={"22px"} />
                </div>
              </div>
              <input
                type="file"
                style={{ display: "none" }}
                multiple={false}
                ref={fileRef}
                accept="video/*"
                onChange={(e) => {
                  let files: FileList | null = e.target.files;
                  if (files !== null) {
                    setModuleVideo(files[0]);
                  }
                }}
              />
            </div>

            <button
              onClick={() => {
                if (moduleVideo === null) return;

                let modl: TModule = {
                  text_content: moduleDescription,
                  title: moduleTitle,
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

                reset();
              }}
              className="w-full bg-brand rounded-lg h-[50px] text-white font-cocogoose"
            >
              {editIndex === -1 ? "Add" : "Edit"}
            </button>
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default CourseCreation;
