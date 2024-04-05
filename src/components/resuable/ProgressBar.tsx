import React, { FC } from "react";

export interface iProgressBarProps {
  value: number;
  valueColor: string;
  backgroundColor: string;
  hideText: boolean;
}

const ProgressBar: FC<iProgressBarProps> = ({
  value,
  valueColor,
  backgroundColor,
  hideText,
}) => {
    const progress = "w-[" + (value * 100) + "%]";
    return (

    <div className={`my-5 h-[45px] md:h-[35px] w-full ${backgroundColor} rounded-2xl`}>
      <div
        className={`h-full ${progress} ${valueColor} rounded-l-2xl ${value === 1 ? "rounded-r-2xl" : "rounded-r-[22.5px] md:rounded-r-[17.5px]"} text-white font-cocogoose text-[18px] md:text-[14px] flex justify-center items-center`}
      >
        {!hideText &&  (value * 100 + "%")}
      </div>
    </div>
  );
};

export default ProgressBar;
