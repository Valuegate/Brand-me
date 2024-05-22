"use client";

import React, { useRef, useState, useEffect, FC } from "react";

const DropdownIcon: FC<{
  icon: any;
  child: React.ReactNode;
  custom: string;
}> = ({ icon, child, custom }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <div className="relative" ref={dropdownRef}>
      <div
        className="cursor-pointer"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {icon}
      </div>
      {isOpen && <div className={custom}>{child}</div>}
    </div>
  );
};

export default DropdownIcon;
