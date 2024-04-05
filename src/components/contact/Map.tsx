import React from "react";
import Image from "next/image";
import MapImage from "@/assets/contact/map.svg";

import { Tooltip } from "@mantine/core";

const Map = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 mb-20">
      <div className="flex flex-col w-full items-center gap-3">
        <h1 className="text-black font-cocogoose text-4xl md:text-2xl">Project Partners</h1>
        <h3 className="text-black font-cocogoose-light font-bold text-2xl md:text-xl">
          Click To Message
        </h3>
      </div>

      <div className="w-full relative">
        <Image src={MapImage} alt="partners-map" className="w-full h-auto z-0"/>
        <div className="bg-light-blue size-[20px] md:size-[14px] rounded-full border-2 border-white absolute top-[41%] right-[32%] cursor-pointer"/>
        <div className="bg-light-blue size-[20px] md:size-[14px] rounded-full border-2 border-white absolute top-[67%] right-[25%] cursor-pointer"/>
        <div className="bg-light-blue size-[20px] md:size-[14px] rounded-full border-2 border-white absolute top-[65%] right-[45%] cursor-pointer"/>
        <div className="bg-light-blue size-[20px] md:size-[14px] rounded-full border-2 border-white absolute top-[80%] right-[49%] cursor-pointer"/>
        <div className="bg-light-blue size-[20px] md:size-[14px] rounded-full border-2 border-white absolute top-[83%] left-[2%] cursor-pointer"/>
        <div className="bg-light-blue size-[20px] md:size-[14px] rounded-full border-2 border-white absolute top-[85%] left-[10%] cursor-pointer"/>

      </div>
    </div>
  );
};

export default Map;
