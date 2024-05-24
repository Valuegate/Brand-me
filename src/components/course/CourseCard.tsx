
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

export type iCourseCard = {
  image: StaticImageData;
  text: string;
};

const CourseCard: FC<iCourseCard> = ({ image, text }) => {
  return (
    <>
      <div className="bg-light-blue-30 text-black py-4 px-8 md:px-4 rounded-3xl md:w-full">
        <div className="flex items-center gap-4">
          <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center md:hidden">
            <Image
              src={image}
              alt=""
              className="w-[40px] h-[40px]"
            />
          </div>
          <div>
            <p className="text-base text-black font-bold font-cocogoose-light w-[30rem] md:w-full">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
