"use client";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

const BackButton = () => {
  const [pop, set] = useState<boolean>(false);
  const router = useRouter();
  const goBack = () => {
    set(true);
  };

  useEffect(() => {
    if (pop) {
      router.back();
    }
  }, [pop, router]);

  return (
    <div
      className="flex gap-2 items-center w-fit cursor-pointer"
      onClick={goBack}
    >
      <GoArrowLeft size={"26px"} fill={"#FFFFFF"} />
      <p className={`text-white font-cocogoose-light font-bold text-[16px]`}>Back</p>
    </div>
  );
};

export default BackButton;
