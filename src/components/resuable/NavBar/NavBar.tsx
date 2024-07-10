"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { useGlobalStore, globalKey } from "@/stores/globalStore";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Notifications from "./Notifications";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MobileDrawer from "./MobileDrawer";
import { iNavItem } from "./types";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [navs, setNavs] = useState<iNavItem[]>([]);
  const [isNotificationClicked, setNotificationClicked] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [isAdmin, setAdmin] = useState<boolean>(false);
  const notifications = useGlobalStore((state) => state.notifications);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [openedDrawer, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    let localConfig: string | null = window.localStorage.getItem(globalKey);
    setLoggedIn(localConfig !== null);

    if (localConfig !== null) {
      let data = JSON.parse(localConfig);
      setUsername(data.full_name.split(" ")[1]);
      setAdmin(data.is_staff);
    }
  }, []);

  useEffect(() => {
    if (notifications.length === 0) {
      setNotifications();
    }

    if (loggedIn) {
      if (isAdmin) {
        setNavs([
          {
            name: t("Platform Tracking"),
            link: "/platform-tracking",
          },
          {
            name: t("User Tracking"),
            link: "/user-tracking",
          },
          {
            name: t("Creation"),
            link: "/creation",
          },
        ]);
      } else {
        setNavs([
          {
            name: t("Platform"),
            link: "/platform",
          },
          {
            name: t("Results"),
            link: "/results",
          },
          {
            name: t("Contact"),
            link: "/contact",
          },
          {
            name: t("How To Use"),
            link: "/how-to-use",
          },
        ]);
      }
    } else {
      setNavs([
        {
          name: t("About"),
          link: "/about",
        },
        {
          name: t("Partners"),
          link: "/partners",
        },
        {
          name: t("Results"),
          link: "/results",
        },
        {
          name: t("Online Course"),
          link: "/online-course",
        },
        {
          name: t("Contact"),
          link: "/contact",
        },
      ]);
    }
  }, [loggedIn, t]);

  const logout = () => {
    window.localStorage.removeItem(globalKey);
    window.location.assign("/");
  };

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
                  } text-white text-[15px]`}
                >
                  {navItem.name}
                </Link>
              );
            })}
            <div>
              <LanguageSwitcher />
            </div>
          </div>
          {!loggedIn && (
            <div className="flex gap-4">
              <Link
                href={"/login"}
                className="text-white bg-light-blue-30 px-5 py-2 rounded-lg text-[16px] leading-[19px] font-cocogoose"
              >
                {t("Login")}
              </Link>
              <Link
                href={"/sign-up"}
                className="text-brand bg-light-blue px-5 py-2 rounded-lg text-[16px] leading-[19px] font-cocogoose"
              >
                {t("Sign Up")}
              </Link>
            </div>
          )}
          {loggedIn && (
            <div className="flex gap-4 items-center">
              {isAdmin && (
                <Link href={"/messages"} className="bg-light-blue-30 rounded-lg p-1">
                  <AiFillMessage
                    size={"24px"}
                    className="text-light-blue cursor-pointer"
                  />
                </Link>
              )}
              {!isAdmin && (
                <>
                  <div
                    ref={dropdownRef}
                    className="bg-light-blue-30 rounded-lg p-1 relative"
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
                      <div className="absolute -right-5 mt-[24vh] text-[16px] flex flex-col bg-brand font-cocogoose rounded shadow-lg p-[5px]">
                        <Link
                          href="/profile"
                          className="px-4 py-2 hover:underline hover:text-white text-[#FFFFFF80]"
                        >
                          {t("Profile")}
                        </Link>
                        <Link
                          href="/settings"
                          className="px-4 py-2 hover:underline hover:text-white text-[#FFFFFF80]"
                        >
                          {t("Settings")}
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
              <div className="bg-light-blue-30 rounded-lg p-1">
                <IoLogOut
                  onClick={logout}
                  size={"18px"}
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
        loggedIn={loggedIn}
        logout={logout}
      />
    </>
  );
};

export default NavBar;
