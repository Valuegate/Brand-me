"use client";
import React from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Link from "next/link";
import { TbMessage } from "react-icons/tb";
import { GiPadlock } from "react-icons/gi";
import InputComponent from "../resuable/InputComponent";

const SignUp = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="px-32 flex flex-col items-center">
        <div className="mt-16 w-[900px] bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
          <div className="px-10 py-[2rem]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-brand text-[30px] leading-[21.8px] font-cocogoose">
                Sign Up
              </h2>
              <Link
                className="text-brand text-[20px] underline leading-[15px] font-cocogoose"
                href={"/login"}
              >
                Log In
              </Link>
            </div>
            <div className="flex items-center gap-8 mt-10">
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

            <div className="flex items-center gap-8 mt-4">
              <div className="mt-8">
                <GiPadlock className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="First Name"
                placeholder="Enter First Name"
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
                label="Last Name"
                placeholder="Enter First Name"
                value=""
                width="w-full"
                onChange={(e) => {
                    
                }}
              />
            </div>

            <div className="flex items-center justify-center mt-8">
              <button className="text-white bg-brand px-8 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
