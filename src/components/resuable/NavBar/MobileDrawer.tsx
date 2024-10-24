import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Drawer } from "@mantine/core";
import { IoMdClose } from "react-icons/io";
import Logo from "../Logo/Logo";
import { iMobileDrawerProp } from "./types";
import { globalKey } from "@/stores/globalStore";
import { useTranslation } from "react-i18next";

const MobileDrawer: FC<iMobileDrawerProp> = ({
  openedDrawer,
  closeDrawer,
  navs,
  index,
  loggedIn,
  logout,
}) => {
  const [username, setUsername] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    let localData: string | null = window.localStorage.getItem(globalKey);
    if (localData !== null) {
      let data = JSON.parse(localData);
      setUsername(data.full_name);
    }
  }, []);

  return (
    <Drawer.Root
      opened={openedDrawer}
      onClose={closeDrawer}
      position="right"
      padding={"0px"}
      top={"0px"}
      className="hidden md:block"
    >
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Body>
          <div className="flex flex-col w-full h-[100vh]">
            <div className="flex justify-between items-center w-full px-5 py-5">
              <Logo />
              <div onClick={closeDrawer}>
                <IoMdClose size={"24px"} className="text-black" />
              </div>
            </div>
            {loggedIn && (
              <h2 className="my-5 text-xl font-cocogoose text-brand pl-5">
                {t('welcome')} {username}
              </h2>
            )}
            <div className="mt-10 flex flex-col gap-5 px-5">
              {loggedIn && (
                <Link
                  href={"/profile"}
                  className={`${"font-cocogoose-light font-bold"} text-brand text-[16px]`}
                >
                  {t('profile')}
                </Link>
              )}
              <Link
                href={"/"}
                className={`${"font-cocogoose-light font-bold"} text-brand text-[16px]`}
              >
                {t('home')}
              </Link>
              {navs.map((navItem, i) => {
                return (
                  <Link
                    key={i}
                    href={navItem.link}
                    className={`${
                      i === index
                        ? "font-cocogoose"
                        : "font-cocogoose-light font-bold"
                    } text-brand text-[16px]`}
                  >
                    {navItem.name}
                  </Link>
                );
              })}
              {loggedIn && (
                <Link
                  href={"/notifications"}
                  className={`${"font-cocogoose-light font-bold"} text-brand text-[16px]`}
                >
                  {t('notification')}
                </Link>
              )}
            </div>
            {!loggedIn && (
              <div className="flex flex-col items-center gap-4 mt-16 px-5">
                <Link
                  href={"/login"}
                  className={`${"font-cocogoose"} text-brand text-[18px] underline`}
                >
                  {t('signIn')}
                </Link>
              </div>
            )}
            {loggedIn && (
              <div className="px-5 mt-16">
                <h2
                  className="text-[#FF0000] font-cocogoose-light font-bold"
                  onClick={logout}
                >
                  {t('logout')}
                </h2>
              </div>
            )}
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default MobileDrawer;
