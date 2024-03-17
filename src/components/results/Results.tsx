"use client";
import NavBar from "@/components/resuable/NavBar/NavBar";
import React from "react";
import Banner from "./Banner";
import Report from "./Report";

const Results = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={2} />
      </div>
      <div className="h-32" />
      <div className="px-32 flex flex-col">
        <Banner />
        <Report />
      </div>
    </>
  );
};

export default Results;
