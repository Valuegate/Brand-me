import React, { FC } from "react";

import { ReportFlex, iFlexProp } from "./types";

const FlexComponent: FC<iFlexProp> = ({
  reports,
  arrangeRight,
  description,
  title,
  trailing,
}) => {
  return (
    <div className="w-full flex flex-col gap-10 py-10">
      <div className="w-full flex md:flex-col justify-around items-center">
        {arrangeRight && (
          <div className="w-[400px] md:w-full bg-brand rounded-3xl h-[650px] md:h-[450px] md:hidden" />
        )}
        <div className="flex flex-col w-[620px] md:w-full">
          <h1 className="text-3xl md:text-xl font-cocogoose">{title}</h1>
          <p className="mt-10 md:mt-5 font-cocogoose-light font-bold">{description}</p>
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
          <div className="w-[400px] md:w-full bg-brand rounded-3xl h-[650px] md:h-[450px] md:mt-10" />
        )}
        {arrangeRight && (
          <div className="w-[400px] md:w-full bg-brand rounded-3xl h-[650px] md:h-[450px] hidden md:block md:mt-10" />
        )}
      </div>
      <p className="font-cocogoose-light font-bold">{trailing}</p>
    </div>
  );
};

export default FlexComponent;
