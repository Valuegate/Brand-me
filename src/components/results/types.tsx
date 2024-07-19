import { FC } from "react";
import Image, { StaticImageData } from "next/image";

export type iReportDetail = {
  image: StaticImageData;
  text: string;
  preBold?: string;
  boldText?: string;
};

export type iFlexProp = {
  reports: iReportDetail[];
  title: string;
  description: string;
  trailing: string;
  arrangeRight: boolean;
  image: StaticImageData;
}

export const ReportFlex: FC<iReportDetail> = ({ image, text, preBold, boldText }) => {
  return (
    <div className="flex gap-5 items-center w-full">
      <div className="bg-light-blue rounded-xl w-[60px] h-[60px] flex justify-center items-center">
        <Image src={image} alt="detail image" className="w-[40px] h-[40px]" />
      </div>
      <p className="w-[500px] md:w-[75%] font-cocogoose-light text-black font-bold">
        <span>{preBold && preBold}</span>{" "}
        <span className="font-cocogoose">{boldText && boldText}</span> {text}{" "}
      </p>
    </div>
  );
};

