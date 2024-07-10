"use client";

import React, { useEffect, useState } from "react";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";

import { globalKey } from "@/stores/globalStore";

const HowToUse = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    let data = localStorage.getItem(globalKey);
    setLoggedIn(data !== null)
    },
    []
  )


  return (
    <>
      <NavBar index={loggedIn ? 3 : 4} />
      <div className="h-[45vh]"/>
      <Footer />
    </>
  );
};

export default HowToUse;
