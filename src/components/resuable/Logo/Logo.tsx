import React from "react";
import Image from "next/image";
import logo from "@/assets/brand-me-logo.png";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt={"logo"}
      onClick={() => {
        window.location.assign("/");
      }}
      className="w-[150px] md:w-[120px] h-auto cursor-pointer"
    />
  );
};

export default Logo;
