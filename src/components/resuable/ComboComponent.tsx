"use client";

import React, { FC, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";

export interface iComboProps {
  label: string;
  value: string;
  options: string[];
  hint: string;
}

const ComboComponent: FC<iComboProps> = ({ label, value, hint, options }) => {
  return (
    <div className={`flex flex-col gap-3`}>
      <p className="font-cocogoose-light font-bold text-[16px] text-brand ">
        {label}
      </p>
      <div className="border-[3px] border-brand w-full rounded-lg h-[60px] bg-[#FFFFFF00] flex items-center justify-between px-4">
        <p className="text-brand font-cocogoose-light font-bold text-[18px]">
          {value.length === 0 ? hint : value}
        </p>
        <IoMdArrowDropdown fill="#1C274D" size={"22px"} />
      </div>
    </div>
  );
};

export default ComboComponent;
