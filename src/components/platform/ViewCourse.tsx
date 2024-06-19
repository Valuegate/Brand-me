"use client";

// ADD BACK BUTTON ON READ MODUKE PAGE. MAKE THE PAGE READABLE FROM THE CONTAINER

import React, { FC, useEffect, useState } from "react";
import { iCourse, iVideoData } from "./types";

import { MdDone } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { HiPlay } from "react-icons/hi2";
import { BiTimeFive } from "react-icons/bi";
import ProgressBar from "../resuable/ProgressBar";

import getUserProgress from "@/hooks/queries/useGetUserProgress";
import getCourseById from "@/hooks/queries/useGetCourseByID";
import enrollCourse from "@/hooks/mutations/useEnrolCourse";
import completeModule from "@/hooks/mutations/useCompleteModule";
import { globalKey } from "@/stores/globalStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "@mantine/core";
import Footer from "../resuable/Footer/Footer";
import NavBar from "../resuable/NavBar/NavBar";

import { HiBookOpen } from "react-icons/hi";
import Link from "next/link";
import { BsHandIndexThumbFill } from "react-icons/bs";

import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

export interface iViewCourseProp {
  course: iCourse;
}

const ViewCourse: FC<{ id: string }> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [numPages, setNumPages] = useState<number>(0);

  const [reading, setReading] = useState<boolean>(false);

  const [currentVideo, setCurrentVideo] = useState<iVideoData>({
    complete: false,
    description: "",
    duration: "",
    id: "",
    name: "",
    video: "",
  });
  const [nextVideoIndex, setNextVideoIndex] = useState<number>(0);

  const [course, setCourse] = useState<iCourse>({
    id: "",
    image: "",
    name: "",
    description: "",
    progress: 0,
    details: {
      videos: [],
      currentVideo: 0,
      quizDone: false,
    },
  });

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function complete(id: number | string) {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    let token = JSON.parse(data).access_token;
    if (!token) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    setLoading(true);

    completeModule(
      id,
      token,
      (res: any) => {
        toast.success(
          "Congratulations. You have successfully completed this module."
        );

        setTimeout(() => {
          window.location.reload();

          //TODO: This is just a temporary fix pending Paul fix the is completed field reflecting for real
          //   let next = course.details.currentVideo + 1;
          //   let pg = next / course.details.videos.length;

          //   if (next <= course.details.videos.length) {
          //     let videos = course.details.videos;
          //     videos[course.details.currentVideo].complete = true;

          //     setCourse({
          //       ...course,
          //       progress: pg,
          //       details: {
          //         ...course.details,
          //         currentVideo: next,
          //         videos: videos,
          //       },
          //     });
          //     setCurrentVideo(course.details.videos[next]);
          //   }

          //   setNextVideoIndex(next);
        }, 500);
      },
      (err: any) => {
        toast.error("Unable to mark the module as completed. Please try again");
        setLoading(false);
      }
    );
  }

  const startCourse = () => {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    let token = JSON.parse(data).access_token;
    if (!token) {
      setLoading(false);
      toast.error("Please login again");
      return;
    }

    enrollCourse(
      id,
      token,
      (res: any) => {
        getCourseById(
          id,
          token,
          (r: any) => {
            let co = {
              id: r.data.id,
              image: r.data.banner_content,
              name: r.data.title,
              description: r.data.description,
              progress: 0,
              details: {
                videos: r.data.modules.map((md: any, index: number) => {
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

            let courseTitle = co.name;
            let total = co.details.videos.length;

            getUserProgress(
              token,
              (result: any) => {
                let totalDoneInCourse = 0;
                let completedModules: any[] = [];

                let data = result.data;

                data.map((d: any, i: number) => {
                  if (d.course_title === courseTitle) {
                    totalDoneInCourse += 1;
                    completedModules.push(d.module);
                  }
                });

                let pg = totalDoneInCourse / total;
                co.progress = pg;
                co.details.videos.map((vd: any, i: number) => {
                  for (let i = 0; i < completedModules.length; i++) {
                    if (completedModules[i] === vd.id) {
                      vd.complete = true;
                      break;
                    }
                  }
                });
                co.details.currentVideo = totalDoneInCourse;

                setCourse(co);
                setCurrentVideo(co.details.videos[co.details.currentVideo]);
                setNextVideoIndex(co.details.currentVideo + 1);
                setLoading(false);
              },
              (error: any) => {
                setCourse({
                  id: "",
                  image: "",
                  name: "",
                  description: "",
                  progress: 0,
                  details: {
                    videos: [],
                    currentVideo: 0,
                    quizDone: false,
                  },
                });
                setCurrentVideo(course.details.videos[0]);
                setNextVideoIndex(0);
                setLoading(false);
                console.log("Error 3", error);
              }
            );
          },
          (e: any) => {
            setLoading(false);
            toast.error("An error occurred. Please try again");
            console.log("Error 2");
          }
        );
      },
      (err: any) => {
        setLoading(false);
        toast.error("An error occurred. Please try again");
        console.log("Error 1");
      }
    );
  };

  useEffect(() => {
    startCourse();
  }, []);

  const selectModule = (index: number) => {
    if (index === course.details.videos.length && course.progress < 0.98)
      return;

    if (index < course.details.videos.length) {
      setCurrentVideo(course.details.videos[index]);
    }

    setNextVideoIndex(index + 1);
    setCourse({
      ...course,
      details: {
        ...course.details,
        currentVideo: index,
      },
    });
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
      <div className="fixed top-0 left-0 right-0 z-10">
        <NavBar index={0} />
      </div>
      <div className="h-32" />
      {loading ? (
        <div className="flex flex-col w-full items-center justify-center h-[40vh]">
          <Loader />
        </div>
      ) : !loading && course.id !== "" ? (
        <div className="flex flex-col items-center w-full px-20 md:px-5">
          <h1 className="font-cocogoose text-[56px] md:text-[24px]">
            {course.name}
          </h1>
          <div className="flex md:flex-col md:gap-16 justify-between mt-20 md:mt-5 w-full">
            <div className="w-[350px] md:w-full flex flex-col gap-10 md:gap-5 items-center">
              <ProgressBar
                backgroundColor="bg-brand-49"
                valueColor="bg-brand"
                hideText={false}
                value={course.progress}
              />

              <div className="flex flex-col w-full gap-5">
                {course.details.videos.map((video, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => selectModule(i)}
                      className="flex items-center w-full justify-between cursor-pointer  "
                    >
                      <div className="bg-brand w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]">
                        U{i + 1}
                      </div>
                      <p className="font-cocogoose-light w-[calc(100%-100px)] line-clamp-1 text-center font-bold text-brand text-[18px]">
                        {video.name}
                      </p>

                      <div
                        className={`${
                          video.complete ? "bg-brand" : "border border-brand"
                        } w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]`}
                      >
                        {video.complete && <MdDone size={"24px"} />}
                      </div>
                    </div>
                  );
                })}
                <div
                  className="flex items-center w-full justify-between cursor-pointer"
                  onClick={() => selectModule(course.details.videos.length)}
                >
                  <div className="bg-brand w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]">
                    U{course.details.videos.length + 1}
                  </div>
                  <p className="font-cocogoose-light w-[calc(100%-64px)] text-center font-bold text-brand text-[18px]">
                    Quiz
                  </p>
                  <div
                    className={`${
                      course.details.quizDone && "bg-brand"
                    } w-[32px] h-[32px] rounded-lg flex justify-center items-center `}
                  >
                    {!course.details.quizDone && (
                      <AiFillLock size={"32px"} fill="#1C274D" />
                    )}
                  </div>
                </div>
              </div>

              {course.details.currentVideo <
                course.details.videos.length - 1 && (
                <div className="flex flex-col w-full md:hidden">
                  <h2 className="font-cocogoose text-[20px] text-brand">
                    Next Module
                  </h2>
                  <div className="bg-light-blue-30 w-[350px] p-5 rounded-3xl">
                    <div className="w-full h-[200px] rounded-3xl text-brand text-xl font-cocogoose bg-brand-30 flex justify-center items-center">
                      Module File
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="bg-brand w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]">
                        U{nextVideoIndex + 1}
                      </div>
                      <p className="font-bold text-brand text-[18px] font-cocogoose-light">
                        {course.details.videos[nextVideoIndex].name}
                      </p>
                      <div className="text-brand font-cocogoose-light font-bold gap-2 flex items-center">
                        <BiTimeFive size={"26px"} />
                        {currentVideo.duration}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[800px] md:w-full h-fit py-5 px-10 md:px-5 rounded-[30px] bg-light-blue-30">
              {course.details.currentVideo < course.details.videos.length ? (
                <div className="flex flex-col w-full">
                  <div className="flex gap-10 items-center md:justify-center w-full">
                    <h2 className="font-cocogoose text-brand text-[20px]">
                      {course.name}
                    </h2>
                    <div className="text-brand font-cocogoose-light font-bold gap-2 flex items-center">
                      <BiTimeFive size={"26px"} />
                      {currentVideo.duration}
                    </div>
                  </div>
                  <div className={`w-full h-[400px] md:h-[200px] mt-5 rounded-3xl bg-brand-30 flex flex-col gap-4 justify-center items-center ${reading && "overflow-y-scroll"}`}>
                    {!reading ? (
                      <>
                        <h2 className="text-brand text-xl font-cocogoose">
                          Read Module Document
                        </h2>
                        <div
                          onClick={() => setReading(true)}
                          className="p-4 rounded-full bg-brand-49 cursor-pointer"
                        >
                          <HiBookOpen size={"42px"} fill="#1C274D" />
                        </div>
                      </>
                    ) : (
                      <>
                        <Document
                          file={currentVideo.video}
                          onLoadSuccess={onDocumentLoadSuccess}
                          loading={<Loader />}
                        >
                          {Array(numPages)
                            .fill(0)
                            .map((n, i) => {
                              return (
                                <Page
                                  renderTextLayer={false}
                                  renderAnnotationLayer={false}
                                  width={700}
                                  pageNumber={i + 1}
                                  className={`bg-error`}
                                  loading={""}
                                />
                              );
                            })}
                        </Document>
                      </>
                    )}
                  </div>
                  {reading && (
                    <Link
                      href={`/platform/course/read?id=${id}&index=${course.details.currentVideo}`}
                      className="text-end text-brand text-md font-cocogoose my-2"
                    >
                      Expand PDF
                    </Link>
                  )}
                  <div className="my-16 md:my-8 gap-3 flex flex-col w-full">
                    <h2 className="font-cocogoose text-[22px] md:text-[18px] md:text-center text-brand">
                      {currentVideo.name}
                    </h2>
                    <p className="font-cocogoose-light font-bold md:text-center text-[18px] md:text-[14px] text-brand">
                      {currentVideo.description}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      complete(currentVideo.id);
                    }}
                    className="mb-6 bg-brand text-white text-[18px] font-cocogoose flex gap-1 items-center justify-center w-[270px] md:w-full h-[45px] rounded-lg"
                  >
                    Mark As Complete
                    <MdDone size={"26px"} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col w-full md:items-center">
                  <h2 className="font-cocogoose text-brand text-[20px]">
                    Instruction
                  </h2>
                  <p className="mt-5 text-[16px] text-brand font-cocogoose-light md:text-center font-bold">
                    {course.description}
                  </p>
                  <button
                    onClick={() => {
                      window.location.assign(
                        "/platform/course/quiz/" + course.id
                      );
                    }}
                    className="mt-10 mb-6 bg-brand text-white text-[18px] font-cocogoose flex gap-1 items-center justify-center w-[200px] md:w-full h-[45px] rounded-lg"
                  >
                    Start Quiz
                  </button>
                </div>
              )}
            </div>

            {course.details.currentVideo < course.details.videos.length - 1 && (
              <div className="md:flex flex-col w-full hidden">
                <h2 className="font-cocogoose text-[20px] text-brand">
                  Continue Watching
                </h2>
                <div className="bg-light-blue-30 w-[350px] p-5 rounded-3xl">
                  <div className="w-full h-[200px] rounded-3xl bg-gradient-to-b from-light-blue-0 to-brand-30 flex justify-center items-center">
                    <div className="p-4 rounded-full bg-brand-49">
                      <HiPlay size={"48px"} fill="#1C274D" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="bg-brand w-[32px] h-[32px] rounded-lg flex justify-center items-center font-cocogoose-light text-white text-[18px]">
                      U{nextVideoIndex + 1}
                    </div>
                    <p className="font-bold text-brand text-[18px] font-cocogoose-light">
                      {course.details.videos[nextVideoIndex].name}
                    </p>
                    <div className="text-brand font-cocogoose-light font-bold gap-2 flex items-center">
                      <BiTimeFive size={"26px"} />
                      {currentVideo.duration}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full text-brand font-cocogoose text-xl items-center justify-center h-[40vh]">
          An error occurred. Please try again
        </div>
      )}
      <Footer />
    </>
  );
};

export default ViewCourse;
