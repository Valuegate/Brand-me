import React from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-[55vh]" />
      <Footer />
    </>
  );
};

export default Home;
