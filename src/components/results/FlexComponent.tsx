import React, { FC } from "react";
import Image from "next/image";
import { ReportFlex, iFlexProp } from "./types";

const FlexComponent: FC<iFlexProp> = ({
  reports,
  arrangeRight,
  description,
  title,
  trailing,
  image,
}) => {
  return (
    <div className="w-full flex flex-col gap-10 py-10">
      <div className="w-full flex md:flex-col justify-around items-center">
        {arrangeRight && (
          <div className="overflow-hidden relative rounded-3xl">
            <Image
              src={image}
              alt="image"
              className="w-[400px] md:w-full h-[650px] md:h-[450px] object-cover"
            />
            <div className="bg-gradient-to-b absolute top-0 left-0 z-5 from-light-blue-66 to-dark-blue h-full w-full" />
          </div>
        )}
        <div className="flex flex-col w-[620px] md:w-full">
          <h1 className="text-3xl md:text-xl text-black font-cocogoose">
            {title}
          </h1>
          <p className="mt-10 text-black md:mt-5 font-cocogoose-light font-bold">
            {description}
          </p>
          <div className="mt-10 md:mt-5 flex flex-col gap-5 w-full">
            {reports.map((detail, i) => {
              return (
                <div key={i}>
                  <ReportFlex
                    text={detail.text}
                    image={detail.image}
                    boldText={detail.boldText}
                    preBold={detail.preBold}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {!arrangeRight && (
          <div className="overflow-hidden relative rounded-3xl">
            <Image
              src={image}
              alt="image"
              className="w-[400px] md:w-full h-[650px] md:h-[450px] object-cover"
            />
            <div className="bg-gradient-to-b absolute top-0 left-0 z-5 from-light-blue-66 to-dark-blue h-full w-full" />
          </div>
        )}
        {/* {arrangeRight && (
          <div className="overflow-hidden relative rounded-3xl">
            <Image
              src={image}
              alt="image"
              className="w-[400px] md:w-full h-[650px] md:h-[450px] object-cover"
            />
            <div className="bg-gradient-to-b absolute top-0 left-0 z-5 from-light-blue-66 to-dark-blue h-full w-full" />
          </div>
        )} */}
      </div>
      <p className="font-cocogoose-light font-bold text-black">{trailing}</p>
    </div>
  );
};

export default FlexComponent;
