"use client";

import React, { FC, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";

import { MdArrowDropDown } from "react-icons/md";

import { useGlobalStore } from "@/stores/globalStore";
import { useUserStore } from "@/stores/userStore";

import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

interface iNavItem {
  name: string;
  link: string;
}

export type NavProp = {
  index: number;
};

const NavBar: FC<NavProp> = ({ index }) => {
  const [navs, setNavs] = useState<iNavItem[]>([]);
  const loggedIn = useGlobalStore((state) => state.loggedIn);
  const username = useUserStore((state) => state.firstName);

  useEffect(() => {
    if (loggedIn) {
      setNavs([
        {
          name: "Platform",
          link: "/platform",
        },
        {
          name: "Results",
          link: "/results",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "How To Use",
          link: "/how-to-use",
        },
      ]);
    } else {
      setNavs([
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Partners",
          link: "/partners",
        },
        {
          name: "Results",
          link: "/results",
        },
        {
          name: "Online Course",
          link: "/course",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "How To Use",
          link: "/how-to-use",
        },
      ]);
    }
  }, []);

  return (
    <div className="w-full  bg-brand flex items-center justify-between justify-items-center px-12 border-none rounded-b-[40px]">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-10">
          {navs.map((navItem, i) => {
            return (
              <Link
                key={i}
                href={navItem.link}
                className={`${
                  i === index
                    ? "font-cocogoose"
                    : "font-cocogoose-light font-bold"
                } text-white text-[16px]`}
              >
                {navItem.name}
              </Link>
            );
          })}
        </div>
        {!loggedIn && (
          <div className="flex gap-4">
            <button className="text-white flex bg-brand-30 px-5 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
              Login
              <MdArrowDropDown />
            </button>

            <button className="text-brand bg-light-blue px-5 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose">
              Sign Up
            </button>
          </div>
        )}
        {loggedIn && (
          <div className="flex gap-4 items-center">
            <div className="bg-brand-30 rounded-lg p-1">
              <AiFillMessage
                size={"24px"}
                className="text-light-blue cursor-pointer"
              />
            </div>
            <div className="bg-brand-30 rounded-lg p-1">
              <IoMdNotifications
                size={"24px"}
                className="text-light-blue cursor-pointer"
              />
            </div>
            <div className="h-10 bg-light-blue w-[1px]" />
            <div
              onClick={() => {
                window.location.assign("/profile");
              }}
              className="cursor-pointer text-brand bg-light-blue flex items-center justify-start w-[110px] py-[2px] pl-[2px] gap-2 rounded-full"
            >
              <div className="w-[32px] h-[32px] rounded-full bg-brand" />
              <p className="line-clamp-1">{username}</p>
            </div>
            <div className="bg-brand-30 rounded-lg p-1">
              <IoLogOut
                size={"24px"}
                className="text-light-blue cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
