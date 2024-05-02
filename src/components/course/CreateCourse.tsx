"use client";

import React, { useRef, useEffect, useState } from "react";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import InputComponent from "../resuable/InputComponent";
import ComboComponent from "../resuable/ComboComponent";
import InputAreaComponent from "../resuable/InputAreaComponent";

import { FaLink } from "react-icons/fa6";

const CreateCourse = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [module, setModule] = useState<string>("");
  const [modules, setModules] = useState<string[]>([]);
  const [textContent, setTextContent] = useState<string>("");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setModules(["Module 1", "Module 2"]);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="mt-10 md:mt-0 flex md:flex-col justify-between w-full px-[10%] md:px-[5%] items-start">
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
            <InputComponent
              width="w-full"
              label="Course Description"
              type="text"
              value={description}
              placeholder=""
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <ComboComponent
              options={modules}
              hint=""
              label="Modules"
              onSelect={(index: number) => {
                setModule(modules[index]);
              }}
              value={module}
            />
            <InputAreaComponent
              label="Text Content"
              onChange={(e) => {
                setTextContent(e.target.value);
              }}
              placeholder=""
              value={textContent}
            />
            <div className="flex flex-col w-full gap-1">
              <p className="font-cocogoose-light font-bold text-[16px] text-brand ">
                Video URL
              </p>
              <div className="font-cocogoose border-[3px] line-clamp-1 w-full h-[60px] text-[18px] text-brand flex items-center pl-4 border-brand rounded-lg relative">
                {videoFile === null ? "" : videoFile.name}
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
                accept="image/*"
                onChange={(e) => {
                  let files: FileList | null = e.target.files;
                  if (files !== null) {
                    setVideoFile(files[0]);
                  }
                }}
              />
            </div>
          </div>
          <div className="flex w-full justify-center my-10">
            <button className="w-[400px] bg-brand rounded-lg h-[50px] text-white font-cocogoose">
              Create Course
            </button>
          </div>
        </div>
        );
      </div>
      <Footer />
    </>
  );
};

export default CreateCourse;
