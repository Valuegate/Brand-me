"use client";

import React from "react";
import ContactForm from "./ContactForm";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Map from "./Map";

import { useGlobalStore } from "@/stores/globalStore";

const ContactUs = () => {

  const loggedIn = useGlobalStore((state) => state.loggedIn);
  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={loggedIn ? 2 : 4} />
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
