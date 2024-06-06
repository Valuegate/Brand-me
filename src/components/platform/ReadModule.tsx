"use client";

import React, { FC, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getCourseById from "@/hooks/queries/useGetCourseByID";
import { pdfjs, Document, Page } from "react-pdf";
import Footer from "../resuable/Footer/Footer";
import NavBar from "../resuable/NavBar/NavBar";
import { Loader } from "@mantine/core";
import { globalKey } from "@/stores/globalStore";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const Fallback = () => <div>Loading...</div>;

const ReadModule = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Content />
    </Suspense>
  );
};


const Content = () => {
  const [numPages, setNumPages] = useState<number>();
  const [success, setSuccess] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [expand, setExpand] = useState<boolean>(true);
  const [bookUrl, setBookUrl] = useState<string>("");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const moduleIndex = searchParams.get("index");

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setSuccess(true);
    setNumPages(numPages);
    setExpand(false);
  }

  const getBookUrl = () => {
    if (id === null || moduleIndex === null) {
      toast.error(
        "An error occurred. Please go back and read the module again"
      );
      setLoading(false);
      return;
    }

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

    let modIndex = Number.parseInt(moduleIndex!);

    getCourseById(
      id!,
      token,
      (res: any) => {
        setBookUrl(res.data.modules[modIndex].video_content);
        setLoading(false);
        setSuccess(true);
      },
      (e: any) => {
        setLoading(false);
        setSuccess(false);
        console.log(e);
        toast.error("An error occurred. Please try again");
      }
    );
  };

  useEffect(() => {
    getBookUrl();
  }, []);

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
      {loading && (
        <div className="flex flex-col w-full items-center justify-center h-[40vh]">
          <Loader size={"26px"} />
        </div>
      )}
      {!loading && success && (
        <>
          <div className={`w-full ${expand ? "h-[40vh]" : "h-auto"} flex justify-center`}>
            <Document
              file={bookUrl}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page width={800} height={500} pageNumber={pageNumber} />
            </Document>
          </div>
        </>
      )}
      {!loading && !success && (
        <div className="flex flex-col w-full text-brand font-cocogoose text-xl items-center justify-center h-[40vh]">
          An error occurred. Please try again
        </div>
      )}

      <Footer />
    </>
  );
};

export default ReadModule;
