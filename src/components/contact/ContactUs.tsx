import React from "react";
import ContactForm from "./ContactForm";

import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Map from "./Map";

const ContactUs = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar index={4} />
      </div>
      <div className="h-20" />
      <div className="mt-40 px-[20%] flex flex-col gap-20">
        <ContactForm />
        <Map />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
