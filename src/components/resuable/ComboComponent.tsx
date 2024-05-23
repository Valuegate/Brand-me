"use client";

import React, { FC, useState, useEffect, useRef } from "react";

import { IoMdArrowDropdown } from "react-icons/io";

export interface iComboProps {
  label: string;
  value: string;
  options: string[];
  hint: string;
  onSelect: (val: number) => void;
}

const ComboComponent: FC<iComboProps> = ({ label, value, hint, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`flex flex-col gap-1 relative`}
      ref={dropdownRef}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <p className="font-cocogoose text-[16px] text-brand ">
        {label}
      </p>
      <div className="cursor-pointer border-[3px] border-brand w-full rounded-lg h-[60px] bg-[#FFFFFF00] flex items-center justify-between px-4">
        <p className="text-brand font-cocogoose font-bold text-[18px]">
          {value.length === 0 ? hint : value}
        </p>
        <IoMdArrowDropdown fill="#1C274D" size={"22px"} />
      </div>
      {isOpen && (
        <div className="absolute z-10 gap-2 py-2 mt-[100px] w-full text-[20px] flex flex-col bg-white font-cocogoose rounded shadow-lg p-[5px]">
          {options.map((option, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  onSelect(i);
                }}
                className="font-cocogoose cursor-pointer hover:bg-light-blue-30 pl-4 text-[18px] text-brand"
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ComboComponent;
