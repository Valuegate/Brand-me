import React, { FC } from "react";

import { Drawer } from "@mantine/core";
import { IoMdClose } from "react-icons/io";
import Logo from "../Logo/Logo";

import { iMobileDrawerProp } from "./types";

const MobileDrawer: FC<iMobileDrawerProp> = ({
  openedDrawer,
  closeDrawer,
  navs,
}) => {
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
          <div className="flex flex-col w-full bg-brand-30 h-[100vh]">
            <div className="flex justify-between items-center w-full px-5 py-5">
              <Logo />
              <div onClick={closeDrawer}>
                <IoMdClose size={"24px"} className="text-black" />
              </div>
            </div>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default MobileDrawer;
