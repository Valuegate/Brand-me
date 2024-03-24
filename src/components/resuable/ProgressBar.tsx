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

    <div className={`my-5 h-[50px] w-full ${backgroundColor} rounded-2xl`}>
      <div
        className={`h-full ${progress} ${valueColor} rounded-l-2xl rounded-r-[25px] text-white font-cocogoose text-[18px] flex justify-center items-center`}
      >
        {!hideText &&  (value * 100 + "%")}
      </div>
    </div>
  );
};

export default ProgressBar;
