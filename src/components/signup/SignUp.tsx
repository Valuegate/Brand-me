"use client";
import React, {useState} from "react";
import NavBar from "../resuable/NavBar/NavBar";
import Footer from "../resuable/Footer/Footer";
import Link from "next/link";
import { TbMessage } from "react-icons/tb";
import { GiPadlock } from "react-icons/gi";
import InputComponent from "../resuable/InputComponent";

import { useGlobalStore } from "@/stores/globalStore";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <NavBar index={-1} />
      </div>
      <div className="h-32" />
      <div className="px-32 md:px-[5%] flex flex-col items-center">
        <div className="mt-6 w-[900px] md:w-full bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
          <div className="px-10 md:px-5 py-[2rem] md:py-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-brand text-[30px] md:text-[24px] leading-[21.8px] font-cocogoose">
                Sign Up
              </h2>
              <Link
                className="text-brand text-[20px] md:text-[16px] underline leading-[15px] font-cocogoose"
                href={"/login"}
              >
                Log In
              </Link>
            </div>
            <div className="flex items-center gap-8 mt-10">
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
              />
            </div>

            <div className="flex items-center gap-8 mt-4">
              <div className="mt-8 md:hidden">
                <GiPadlock className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="Password"
                placeholder="********"
                value={password}
                width="w-full"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="flex items-center gap-8 mt-4">
              <div className="mt-8 md:hidden">
                <GiPadlock className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="First Name"
                placeholder="Enter First Name"
                value={firstName}
                width="w-full"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>

            <div className="flex items-center gap-8 mt-4">
              <div className="mt-8 md:hidden">
                <GiPadlock className="w-[50px] h-[50px]" />
              </div>
              <InputComponent
                label="Last Name"
                placeholder="Enter Last Name"
                value={lastName}
                width="w-full"
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <div className="flex items-center justify-center mt-8">
              <button
                onClick={() => {
                  useGlobalStore.setState({ loggedIn: true });
                  window.location.assign("/profile");
                }}
                className="text-white bg-brand px-8 md:w-full py-2 md:py-3 rounded-lg text-[20px] leading-[21.8px] font-cocogoose"
              >
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
