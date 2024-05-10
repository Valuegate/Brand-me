import React, { FC, useEffect } from "react";

export interface iProgressBarProps {
  value: number;
  valueColor: string;
  backgroundColor: string;
  hideText: boolean;
  text?: string;
  height?: string;
}

const ProgressBar: FC<iProgressBarProps> = ({
  value,
  valueColor,
  backgroundColor,
  hideText,
  text,
  height,
}) => {
  
  return (
    <div
      className={`my-5 ${
        height !== undefined ? `${height}` : "h-[45px] md:h-[35px]"
      } w-full ${backgroundColor} rounded-2xl relative`}
    >
      <div
        style={{
          width: `${value*100}%`
        }}
        className={`h-full ${valueColor} rounded-l-2xl ${
          value === 1
            ? "rounded-r-2xl"
            : "rounded-r-[22.5px] md:rounded-r-[17.5px]"
        } flex gap-5 justify-center items-center absolute`}
      />
      <p className={`absolute ${height !== undefined ? "top-5" : "top-2"} w-full flex gap-2 items-center justify-center text-white font-cocogoose text-[18px] md:text-[14px]`}>
        <span>{!hideText && (value * 100).toFixed(0) + "%"}</span>
        
        <span className="font-cocogoose-light font-bold">
          {!hideText && text !== undefined && text}
        </span>
      </p>
    </div>
  );
};

export default ProgressBar;
