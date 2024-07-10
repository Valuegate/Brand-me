"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Map from "./Map";

import { globalKey } from "@/stores/globalStore";

const ContactUs = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    let data = localStorage.getItem(globalKey);
    setLoggedIn(data !== null)
    },
    []
  )
  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={loggedIn ? 2 : 3 } />
      </div>
      <div className="h-20" />
      <div className="mt-40 md:mt-16 px-[20%] md:px-[5%] flex flex-col gap-20">
        <ContactForm />
        <Map />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
