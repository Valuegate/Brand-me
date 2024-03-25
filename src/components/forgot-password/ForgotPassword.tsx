import Link from "next/link";
import React from "react";
import { GiPadlock } from "react-icons/gi";
import { TbMessage } from "react-icons/tb";
import Footer from "../resuable/Footer/Footer";
import InputComponent from "../resuable/InputComponent";
import NavBar from "../resuable/NavBar/NavBar";

const ForgotPassword = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="px-32 flex flex-col items-center">
        <div className="mt-16 w-[900px] bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
          <div className="px-10 py-[2rem]">
            <h2 className="text-brand text-[30px] leading-[21.8px] font-cocogoose mb-4">
              Forgot Password
            </h2>
            <div className="flex items-center gap-8 mt-10 ">
              <div className="mt-8">
                <TbMessage className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="Email"
                placeholder="example@mail.com"
                value=""
                width="w-full"
                onChange={(e) => {
                    
                }}
              />
            </div>

            <div className="flex items-center justify-center mt-8">
              <button className="text-white bg-brand px-8 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
