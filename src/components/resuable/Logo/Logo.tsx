import React from "react";
import Image from "next/image";
import logo from "@/assets/brand-me-logo.png";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} alt={"logo"} className="w-[150px] md:w-[120px] h-auto"/>
    </Link>
  );
};

export default Logo;
