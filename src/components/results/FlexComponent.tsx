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
      <div className="w-full flex justify-around items-center">
        {arrangeRight && (
          <div className="w-[400px] bg-brand rounded-3xl h-[650px]" />
        )}
        <div className="flex flex-col w-[620px]">
          <h1 className="text-3xl font-cocogoose">{title}</h1>
          <p className="mt-10 font-cocogoose-light">{description}</p>
          <div className="mt-10 flex flex-col gap-5 w-full">
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
          <div className="w-[400px] bg-brand rounded-3xl h-[650px]" />
        )}
      </div>
      <p className="font-cocogoose-light">{trailing}</p>
    </div>
  );
};

export default FlexComponent;
