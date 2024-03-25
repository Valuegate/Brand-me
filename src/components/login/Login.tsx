"use client";
import React from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Link from "next/link";

import { TbMessage } from "react-icons/tb";
import { GiPadlock } from "react-icons/gi";
import InputComponent from "../resuable/InputComponent";

const LoginPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="px-32 flex flex-col items-center">
        <div className="flex justify-center items-center flex-col gap-5">
          <Link href={""}>
            <button className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose">
              Log In With Linkedin
            </button>
          </Link>
          <Link href={""}>
            <button className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose">
              Log In With Google
            </button>
          </Link>
          <Link href={""}>
            <button className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose">
              Log In With Facebook
            </button>
          </Link>
        </div>

        <div className="mt-16 w-[900px] bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
          <div className="px-10 py-[2rem]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-brand text-[30px] leading-[21.8px] font-cocogoose">
                Log In
              </h2>
              <Link
                className="text-brand text-[20px] underline leading-[15px] font-cocogoose"
                href={"/sign-up"}
              >
                Sign Up
              </Link>
            </div>
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

            <div className="flex items-center gap-8 mt-4">
              <div className="mt-8">
                <GiPadlock className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="Password"
                placeholder="********"
                value=""
                width="w-full"
                onChange={(e) => {
                    
                }}
              />
            </div>
            <Link href={"/forgot-password"}>
              <p className="text-brand text-[15px] underline leading-[15px] font-cocogoose pl-[5rem] mt-4">
                Forgot password
              </p>
            </Link>
            <div className="flex items-center justify-center mt-8">
              <button className="text-white bg-brand px-8 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
