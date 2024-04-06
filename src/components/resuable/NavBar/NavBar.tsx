"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";


import { useGlobalStore } from "@/stores/globalStore";
import { useUserStore } from "@/stores/userStore";

import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

import { FaBarsStaggered } from "react-icons/fa6";

import Notifications from "./Notifications";

import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MobileDrawer from "./MobileDrawer";

import { iNavItem } from "./types";

export type NavProp = {
  index: number;
};

function setNotifications() {
  useGlobalStore.setState({
    notifications: Array(10).fill({
      image: "",
      title: "Adedimeji Ajayi (admin) new post",
      content: "Crossfit challenge in our community.",
      date: new Date(),
      read: true,
    }),
  });
}

const NavBar: FC<NavProp> = ({ index }) => {
  const [navs, setNavs] = useState<iNavItem[]>([]);
  const [isNotificationClicked, setNotificationClicked] =
    useState<boolean>(false);
  const loggedIn = useGlobalStore((state) => state.loggedIn);
  const username = useUserStore((state) => state.firstName);
  const notifications = useGlobalStore((state) => state.notifications);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [openedDrawer, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setNotificationClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (notifications.length === 0) {
      setNotifications();
    }

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
    <>
      <div className="w-full bg-brand flex items-center justify-between justify-items-center px-12 md:px-5 border-none rounded-b-[40px] md:rounded-b-[25px] md:h-16">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-12 md:hidden">
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
              <Link
                href={"/login"}
                className="text-white bg-light-blue-30 px-5 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose"
              >
                Login
              </Link>

              <Link
                href={"/signup"}
                className="text-brand bg-light-blue px-5 py-2 rounded-lg text-[20px] leading-[21.8px] font-cocogoose"
              >
                Sign Up
              </Link>
            </div>
          )}
          {loggedIn && (
            <div className="flex gap-4 items-center">
              <div className="bg-light-blue-30 rounded-lg p-1">
                <AiFillMessage
                  size={"24px"}
                  className="text-light-blue cursor-pointer"
                />
              </div>
              <div
                ref={dropdownRef}
                className="bg-light-blue-30 rounded-lg p-1 relative  "
              >
                <IoMdNotifications
                  size={"24px"}
                  className="text-light-blue cursor-pointer"
                  onClick={() => {
                    setNotificationClicked(true);
                    setIsOpen(!isOpen);
                  }}
                />
                {isOpen && isNotificationClicked && <Notifications />}
              </div>
              <div className="h-10 bg-light-blue w-[1px]" />
              <div
                ref={dropdownRef}
                onClick={() => {
                  setNotificationClicked(false);
                  setIsOpen(!isOpen);
                }}
                className="cursor-pointer text-brand bg-light-blue flex items-center justify-start w-[110px] py-[2px] pl-[2px] gap-2 rounded-full relative"
              >
                <div className="w-[32px] h-[32px] rounded-full bg-brand" />
                <p className="line-clamp-1">{username}</p>
                {isOpen && !isNotificationClicked && (
                  <div className="absolute -right-5 mt-[24vh] text-[20px] flex flex-col bg-brand font-cocogoose rounded shadow-lg p-[5px]">
                    <Link
                      href="/profile"
                      className="px-4 py-2 hover:underline hover:text-white text-[#FFFFFF80]"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="px-4 py-2 hover:underline hover:text-white text-[#FFFFFF80]"
                    >
                      Settings
                    </Link>
                  </div>
                )}
              </div>
              <div className="bg-light-blue-30 rounded-lg p-1">
                <IoLogOut
                  onClick={() => {
                    useGlobalStore.getState().logOut();
                    window.location.assign("/");
                  }}
                  size={"24px"}
                  className="text-light-blue cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
        <FaBarsStaggered
          onClick={openDrawer}
          size={"22px"}
          className="text-light-blue cursor-pointer hidden md:block"
        />
      </div>
      <MobileDrawer
        openedDrawer={openedDrawer}
        closeDrawer={closeDrawer}
        navs={navs}
        index={index}
      />
    </>
  );
};

export default NavBar;
