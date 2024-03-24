"use client";

import React from "react";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";

import { useGlobalStore } from "@/stores/globalStore";

const HowToUse = () => {
  const loggedIn = useGlobalStore((state) => state.loggedIn);


  return (
    <>
      <NavBar index={loggedIn ? 3 : 5} />
      <div className="h-[45vh]"/>
      <Footer />
    </>
  );
};

export default HowToUse;
