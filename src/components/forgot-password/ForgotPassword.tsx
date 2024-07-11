"use client";

import Link from "next/link";
import React, {useState} from "react";
import { GiPadlock } from "react-icons/gi";
import { TbMessage } from "react-icons/tb";
import Footer from "../resuable/Footer/Footer";
import InputComponent from "../resuable/InputComponent";
import NavBar from "../resuable/NavBar/NavBar";

const ForgotPassword = () => {

  const [email, setEmail] = useState<string>("");


  return (
    <div className="bg-white">
      <div className="fixed z-10 top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%] flex flex-col items-center">
        <div className="mt-6 w-[900px] md:w-full bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
          <div className="px-10 md:px-5 py-[2rem] md:py-10">
            <h2 className="text-brand text-[30px] md:text-[24px] leading-[21.8px] font-cocogoose mb-4">
              Forgot Password
            </h2>
            <div className="flex items-center gap-8 mt-10 ">
              <div className="mt-8 md:hidden">
                <TbMessage className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="Email"
                placeholder="example@mail.com"
                value={email}
                width="w-full"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type={"text"}
              />
            </div>

            <div className="flex items-center justify-center mt-8">
              <button className="text-white bg-brand px-8 md:w-full py-2 md:py-3 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
