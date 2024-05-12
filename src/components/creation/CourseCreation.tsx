"use client";

import React, { useRef, useEffect, useState } from "react";

import InputComponent from "../resuable/InputComponent";
import ComboComponent from "../resuable/ComboComponent";
import InputAreaComponent from "../resuable/InputAreaComponent";

import { FaLink } from "react-icons/fa6";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
  TCreateCoursePayload,
  createCourse,
  TModule,
} from "@/hooks/mutations/useCreateCourse";
import { globalKey } from "@/stores/globalStore";

const CourseCreation = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [instructor, setInstructor] = useState<string>("");
  const [modules, setModules] = useState<TModule[]>([]);
  const [opened, { open, close }] = useDisclosure(false);

  const [moduleTitle, setModuleTitle] = useState<string>("");
  const [moduleDescription, setModuleDescription] = useState<string>("");
  const [moduleVideo, setModuleVideo] = useState<File | null>(null);

  const fileRef = useRef<HTMLInputElement>(null);

  const [editIndex, setEditIndex] = useState<number>(-1);

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
  }

  return (
    <>
      <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col py-6 px-10 md:px-0 ">
        <h2 className="text-brand text-[20px] font-cocogoose">
          Course Creation
        </h2>

        <div className="mt-12 flex flex-col gap-6">
          <InputComponent
            width="w-full"
            label="Course Title"
            value={title}
            type="text"
            placeholder=""
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <InputAreaComponent
            label="Course Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder=""
            value={description}
          />
          <InputComponent
            width="w-full"
            label="Course Instructor"
            type="text"
            value={instructor}
            placeholder=""
            onChange={(e) => {
              setInstructor(e.target.value);
            }}
          />

          <p className="font-cocogoose-light font-bold text-[16px] text-brand ">
            Modules
          </p>

          <div className="w-full flex flex-wrap gap-5 items-center">
            {modules.map((md, i) => {
              return (
                <div
                  onClick={() => {
                    setModuleTitle(md.title);
                    setModuleDescription(md.text_content);
                    setModuleVideo(md.video_content);
                    setEditIndex(i);
                    open();
                  }}
                  key={i}
                  className="size-[200px] bg-white rounded flex flex-col justify-center shadow-md cursor-pointer"
                >
                  <h2 className="font-cocogoose text-[16px] text-brand text-center">
                    {md.title}
                  </h2>
                </div>
              );
            })}
            <div
              onClick={open}
              className="size-[200px] border-4 border-brand rounded flex flex-col justify-center text-center font-cocogoose text-[14px] text-brand cursor-pointer"
            >
              Click to add module
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center my-10">
          <button onClick={create} className="w-[400px] bg-brand rounded-lg h-[50px] text-white font-cocogoose">
            Create Course
          </button>
        </div>
      </div>
      <Modal opened={opened} onClose={reset} centered>
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
      </Modal>
    </>
  );
};

export default CourseCreation;
